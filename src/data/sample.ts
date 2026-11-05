import sampleData from './sampleData.json';
import { ComponentItem, ComponentProp } from '../types';

const PRIMITIVES = /^(string|number|boolean|null|undefined)( \| (string|number|boolean|null|undefined))*$/;

/** A prop that takes structured data (array / object) rather than a scalar or callback. */
export const isDataProp = (p: ComponentProp): boolean => {
  if (p.readonly || (p.options && p.options.length) || p.type.includes('=>')) return false;
  if (!PRIMITIVES.test(p.type.trim())) return true;
  // A plain `string` prop that carries JSON (for example `options`, `items` or `menuItems`) is still a data input.
  return p.type.trim() === 'string' && (/^(items|options|data|columns|nodes|events|actions|rows|panels)$/.test(p.name) || /\bJSON\b/i.test(p.description));
};

export const dataPropsOf = (c: ComponentItem): ComponentProp[] => c.props.filter(isDataProp);

/** Real example values (extracted from the recorded demos) keyed by prop name. */
export const sampleFor = (id: string): Record<string, unknown> =>
  (sampleData as Record<string, Record<string, unknown>>)[id] ?? {};

/** A string prop that carries JSON expects the text, so structured data is serialised before it is set on the element. */
export const forElement = (p: ComponentProp | undefined, v: unknown): unknown =>
  p && p.type.trim() === 'string' && v !== undefined && typeof v !== 'string' ? JSON.stringify(v) : v;
