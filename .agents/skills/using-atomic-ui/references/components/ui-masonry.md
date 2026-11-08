# ui-masonry

A flexible masonry/grid layout component with filtering, sorting, selection, lazy loading, and infinite scroll support.

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| animation-duration (`animationDuration`) | `number` | `300` |  |
| `breakpoints` | `string` | `'{"640":2,"768":3,"1024":4,"1280":5}'` |  |
| `columns` | `number` | `3` |  |
| empty-message (`emptyMessage`) | `string` | `'No items to display'` |  |
| enable-animation (`enableAnimation`) | `boolean` | `true` |  |
| filter-by (`filterBy`) | `string` | `''` |  |
| filter-options (`filterOptions`) | `string \| { key: string; label: string; }[]` | `[]` |  |
| `gap` | `number` | `16` |  |
| infinite-scroll (`infiniteScroll`) | `boolean` | `false` |  |
| infinite-scroll-distance (`infiniteScrollDistance`) | `number` | `200` |  |
| item-max-width (`itemMaxWidth`) | `number` | `400` |  |
| item-min-width (`itemMinWidth`) | `number` | `200` |  |
| `items` | `any[] \| string` | `[]` |  |
| layout-type (`layoutType`) | `"columns" \| "grid" \| "masonry"` | `'masonry'` |  |
| lazy-load (`lazyLoad`) | `boolean` | `false` |  |
| lazy-load-margin (`lazyLoadMargin`) | `string` | `'200px'` |  |
| `lightbox` | `boolean` | `false` |  |
| loading-state (`loadingState`) | `boolean` | `false` |  |
| multi-select (`multiSelect`) | `boolean` | `false` |  |
| `selectable` | `boolean` | `false` |  |
| show-batch-actions (`showBatchActions`) | `boolean` | `false` |  |
| show-filters (`showFilters`) | `boolean` | `false` |  |
| sort-by (`sortBy`) | `string` | `''` |  |
| sort-order (`sortOrder`) | `"asc" \| "desc"` | `'asc'` |  |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `batchDelete` | `{ items: any[]; indices: number[]; }` |  |
| `filterChange` | `{ filterBy: string; value: string; }` |  |
| `itemClick` | `any` |  |
| `itemSelectionChange` | `{ selectedItems: any[]; indices: number[]; }` |  |
| `itemsLoaded` | `{ count: number; total: number; }` |  |
| `layoutChange` | `{ layoutType: string; columns: number; }` |  |
| `sortChange` | `{ sortBy: string; order: string; }` |  |
