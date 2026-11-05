import { PREVIEW, PreviewSpec } from '../data/previewTemplates';

export interface Mounted {
  /** Elements that should receive the component's props (the component, or its repeated children). */
  targets: HTMLElement[];
  spec: PreviewSpec;
  cleanup: () => void;
}

const defined = (tag: string) =>
  Promise.race([customElements.whenDefined(tag), new Promise<void>((r) => setTimeout(r, 2000))]).then(() => !!customElements.get(tag));

/** Waits for the library, then renders the component (inside its parent / with its children when a template exists). */
export async function mountPreview(tag: string, stage: HTMLElement): Promise<Mounted | { missing: true }> {
  const spec = PREVIEW[tag] ?? {};
  const ok = await defined(tag);
  if (!ok) return { missing: true };
  if (spec.parent) await defined(spec.parent.tag);

  const nodes: HTMLElement[] = [];
  const targets: HTMLElement[] = [];

  if (spec.parent) {
    const parent = document.createElement(spec.parent.tag) as HTMLElement & Record<string, unknown>;
    if (spec.parent.style) parent.setAttribute('style', spec.parent.style);
    Object.entries(spec.parent.props ?? {}).forEach(([k, v]) => (parent[k] = v));
    for (let i = 0; i < (spec.parent.count ?? 1); i++) {
      const child = document.createElement(tag);
      const text = spec.parent.text?.(i);
      if (text !== undefined) child.textContent = text;
      parent.appendChild(child);
      targets.push(child);
    }
    stage.appendChild(parent);
    nodes.push(parent);
  } else {
    const el = document.createElement(tag);
    if (spec.children) el.innerHTML = spec.children;
    stage.appendChild(el);
    nodes.push(el);
    targets.push(el);
    if (spec.opener) {
      const { prop, label } = spec.opener;
      const btn = document.createElement('button');
      btn.textContent = label;
      btn.setAttribute(
        'style',
        'margin-left:16px;padding:8px 14px;border-radius:8px;border:1px solid #38bdf8;background:rgba(56,189,248,.12);color:#7dd3fc;font-size:12px;cursor:pointer'
      );
      btn.onclick = () => ((el as any)[prop] = true);
      stage.appendChild(btn);
      nodes.push(btn);
    }
    if (spec.beside) {
      const wrap = document.createElement('div');
      wrap.innerHTML = spec.beside;
      const extra = wrap.firstElementChild as HTMLElement | null;
      if (extra) {
        stage.appendChild(extra);
        nodes.push(extra);
      }
    }
  }

  return { targets, spec, cleanup: () => nodes.forEach((n) => n.remove()) };
}
