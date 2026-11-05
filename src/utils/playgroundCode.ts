import type { ComponentProp, Framework } from '../types';

export type PropValue = string | number | boolean;

export interface CodeProp {
  prop: ComponentProp;
  value: PropValue;
}

export interface CodeInput {
  tag: string;
  framework: Framework;
  /** Only the props that differ from the component's defaults. */
  props: CodeProp[];
  /** Text for the default slot; leave undefined when the component has none. */
  slotText?: string;
  /** Structured inputs (items, columns...) and their current values. */
  dataProps: ComponentProp[];
  data: Record<string, unknown>;
}

export type Control =
  | { kind: 'boolean' }
  | { kind: 'number' }
  | { kind: 'select'; options: string[] }
  | { kind: 'text' };

const unquote = (s: string) => s.replace(/^['"]|['"]$/g, '');

/** Decide which control (if any) edits a prop, based on its real type. Complex types return null. */
export function controlFor(p: ComponentProp): Control | null {
  if (p.readonly) return null;
  if (p.options?.length) return { kind: 'select', options: p.options };
  const t = p.type.trim();
  if (t === 'boolean') return { kind: 'boolean' };
  if (t === 'number') return { kind: 'number' };
  if (t === 'string' || /^(number \| string|string \| number)$/.test(t)) return { kind: 'text' };
  return null;
}

export function defaultValue(p: ComponentProp, c: Control): string | number | boolean | undefined {
  const d = p.default.trim();
  if (c.kind === 'boolean') return d === 'true';
  if (c.kind === 'number') return d === '' || isNaN(Number(d)) ? undefined : Number(d);
  if (c.kind === 'select') return d ? unquote(d) : undefined;
  return d ? unquote(d) : '';
}

export const kebab = (s: string) => s.replace(/([A-Z])/g, '-$1').toLowerCase();
export const pascal = (t: string) => t.split('-').map((s) => s[0].toUpperCase() + s.slice(1)).join('');

/** The attribute a prop is read from; props without one can only be set as a property. */
export const attrOf = (p: ComponentProp): string | undefined => p.attr || undefined;

export const escapeAttr = (v: string) => v.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
export const escapeText = (v: string) => v.replace(/&/g, '&amp;').replace(/</g, '&lt;');

/** A JS string/number/boolean literal with single quotes, safe inside a double-quoted attribute. */
const jsLiteral = (v: PropValue) => (typeof v === 'string' ? `'${v.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'` : String(v));

export function buildCode({ tag, framework, props, slotText, dataProps, data }: CodeInput): string {
  const inner = slotText === undefined ? '' : `\n  ${escapeText(slotText)}\n`;
  const wrap = (open: string, name: string) => `<${open}>${inner}</${name}>`;
  const join = (parts: (string | null)[]) => {
    const kept = parts.filter(Boolean) as string[];
    return kept.length ? ' ' + kept.join(' ') : '';
  };
  const dataSet = dataProps.filter((p) => data[p.name] !== undefined);
  const json = (p: ComponentProp, indent = '', forScript = false) => {
    // A string prop that carries JSON is written as a string literal of that JSON, which is what the element parses
    const raw = data[p.name];
    const text =
      p.type.trim() === 'string' && typeof raw !== 'string'
        ? JSON.stringify(JSON.stringify(raw))
        : JSON.stringify(raw, null, 2)
            .split('\n')
            .map((l, i) => (i === 0 ? l : indent + l))
            .join('\n');
    // "</script>" inside a string would end the script block early
    return forScript ? text.replace(/</g, '\\u003c') : text;
  };
  const bind = (fmt: (n: string) => string) => (dataSet.length ? ' ' + dataSet.map((p) => fmt(p.name)).join(' ') : '');

  switch (framework) {
    case 'HTML': {
      // true is a bare attribute; false must be explicit, or the element falls back to a default of true
      const attrs = join(
        props.map(({ prop, value }) => {
          const a = attrOf(prop);
          if (!a) return null;
          return typeof value === 'boolean' ? (value ? a : `${a}="false"`) : `${a}="${escapeAttr(String(value))}"`;
        })
      );
      const lines = [
        ...props.filter(({ prop }) => !attrOf(prop)).map(({ prop, value }) => `  el.${prop.name} = ${JSON.stringify(value)};`),
        ...dataSet.map((p) => `  el.${p.name} = ${json(p, '  ', true)};`),
      ];
      const script = lines.length ? `\n\n<script>\n  const el = document.querySelector('${tag}');\n${lines.join('\n')}\n</script>` : '';
      return wrap(tag + attrs, tag) + script;
    }
    case 'Stencil': {
      const s =
        join(props.map(({ prop, value }) => (typeof value === 'string' ? `${prop.name}="${escapeAttr(value)}"` : `${prop.name}={${value}}`))) +
        bind((n) => `${n}={this.${n}}`);
      const fields = dataSet.map((p) => `  ${p.name} = ${json(p, '  ')};`).join('\n\n');
      return (fields ? `// in your component class\n${fields}\n\n` : '') + wrap(tag + s, tag);
    }
    case 'React': {
      const s =
        join(
          props.map(({ prop, value }) =>
            typeof value === 'string' ? `${prop.name}="${escapeAttr(value)}"` : typeof value === 'boolean' && value ? prop.name : `${prop.name}={${value}}`
          )
        ) + bind((n) => `${n}={${n}}`);
      const consts = dataSet.map((p) => `const ${p.name} = ${json(p)};`).join('\n\n');
      return `${consts ? consts + '\n\n' : ''}export default function Example() {\n  return ${wrap(tag + s, tag)};\n}`;
    }
    case 'Angular': {
      const s =
        join(
          props.map(({ prop, value }) => {
            const a = attrOf(prop);
            if (typeof value === 'string') return a ? `${a}="${escapeAttr(value)}"` : `[${prop.name}]="${escapeAttr(jsLiteral(value))}"`;
            return `[${prop.name}]="${value}"`;
          })
        ) + bind((n) => `[${n}]="${n}"`);
      const fields = dataSet.map((p) => `  ${p.name} = ${json(p, '  ')};`).join('\n\n');
      return (fields ? `// component.ts\n${fields}\n\n// component.html\n` : '') + wrap(tag + s, tag);
    }
    default: {
      const s =
        join(
          props.map(({ prop, value }) => {
            const a = attrOf(prop) ?? kebab(prop.name);
            return typeof value === 'string' ? `${a}="${escapeAttr(value)}"` : `:${a}="${value}"`;
          })
        ) + bind((n) => `:${n}="${n}"`);
      const consts = dataSet.map((p) => `const ${p.name} = ${json(p)};`).join('\n\n');
      return `${consts ? `<script setup>\n${consts}\n</script>\n\n` : ''}<template>\n  ${wrap(pascal(tag) + s, pascal(tag))}\n</template>`;
    }
  }
}
