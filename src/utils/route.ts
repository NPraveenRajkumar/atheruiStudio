/**
 * Hash routes: `#view` or `#view/id`, for example `#docs/tooltip`, `#examples/card`, `#playground/button`.
 * (Real path URLs would need server rewrites on static hosting, so the hash keeps links shareable everywhere.)
 */
export const VIEWS = ['home', 'catalog', 'playground', 'examples', 'docs', 'themes', 'pricing', 'install', 'design-system'] as const;
export type ViewId = (typeof VIEWS)[number];

/** Names used in page titles. */
export const VIEW_TITLES: Record<ViewId, string> = {
  home: 'Overview',
  catalog: 'Component Catalog',
  playground: 'Design Studio',
  examples: 'Variant Examples',
  docs: 'Documentation',
  themes: 'Theme Studio',
  pricing: 'Plans',
  install: 'Installation',
  'design-system': 'Design Tokens',
};

export const DEFAULT_TITLE = 'AtherUI — Enterprise StencilJS Component System';

export interface Route {
  view: ViewId | null;
  id?: string;
}

export function parseHash(hash: string = window.location.hash): Route {
  const [view, ...rest] = hash.replace(/^#\/?/, '').split('/');
  const known = (VIEWS as readonly string[]).includes(view) ? (view as ViewId) : null;
  const raw = rest.join('/');
  let id: string | undefined;
  try {
    id = raw ? decodeURIComponent(raw) : undefined;
  } catch {
    id = undefined;
  }
  return { view: known, id };
}

export const hashFor = (view: string, id?: string) => (id ? `#${view}/${encodeURIComponent(id)}` : `#${view}`);

/** Updates the address bar without adding a history entry and without firing hashchange. */
export function replaceHash(view: string, id?: string) {
  window.history.replaceState(null, '', hashFor(view, id));
}
