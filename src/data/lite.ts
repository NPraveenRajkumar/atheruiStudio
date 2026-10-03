import lite from './componentsLite.json';
import type { ComponentItem, ComponentCategory } from '../types';

/**
 * The part of a component record that the pages loaded up front need (home, sidebar, search): names, categories and
 * counts. The full records, with every prop, event and example, live in ./components and load with the pages that show
 * them. Regenerate this summary with `npm run data` after the catalog changes.
 */
export type ComponentLite = Pick<
  ComponentItem,
  'id' | 'name' | 'tag' | 'category' | 'description' | 'totalProps' | 'totalEvents' | 'variantsCount' | 'status' | 'color'
>;

export const COMPONENTS_LITE = lite.components as ComponentLite[];
export const CATEGORIES_LITE = lite.categories as ComponentCategory[];
export const TOTALS = lite.totals;
export const ICON_LIBRARIES = lite.iconLibraries as string[];

export const findLite = (id?: string) => (id ? COMPONENTS_LITE.find((c) => c.id === id) : undefined);

export interface SearchIndex {
  /** [name, attribute or '', component id] */
  props: [string, string, string][];
  /** [event name, component id] */
  events: [string, string][];
}
/** Every prop and event name, fetched the first time search is used. */
export const loadSearchIndex = () => import('./searchIndex.json').then((m) => (m.default ?? m) as unknown as SearchIndex);
