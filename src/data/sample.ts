import sampleData from './sampleData.json';
import { ComponentItem, ComponentProp } from '../types';

const PRIMITIVES = /^(string|number|boolean|null|undefined)( \| (string|number|boolean|null|undefined))*$/;

/** A prop that takes structured data (array / object) rather than a scalar or callback. */
export const isDataProp = (p: ComponentProp): boolean => {
  if (p.readonly || (p.options && p.options.length) || p.type.includes('=>')) return false;
  if (!PRIMITIVES.test(p.type.trim())) return true;
  // A plain `string` prop that carries JSON (for example `options` or `items`) is still a data input.
  return p.type.trim() === 'string' && /^(items|options|data|columns|nodes|events|actions|rows|panels)$/.test(p.name);
};

export const dataPropsOf = (c: ComponentItem): ComponentProp[] => c.props.filter(isDataProp);

/** Real example values (extracted from the recorded demos) keyed by prop name. */
export const sampleFor = (id: string): Record<string, unknown> =>
  (sampleData as Record<string, Record<string, unknown>>)[id] ?? {};
