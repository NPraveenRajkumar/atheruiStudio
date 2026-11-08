# ui-list

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| alt-mode (`altMode`) | `boolean` | `true` |  |
| aria-label (`ariaLabel`) | `string` | `'System Cluster List'` |  |
| `bulkActions` | `any[]` | `[]` |  |
| checkbox-selection (`checkboxSelection`) | `boolean` | `false` |  |
| `color` | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'default'` |  |
| `columns` | `any[]` | `[]` |  |
| command-k (`commandK`) | `boolean` | `true` |  |
| current-page (`currentPage`) | `number` | `1` |  |
| `dense` | `boolean` | `false` |  |
| `density` | `"comfortable" \| "compact" \| "cozy"` | `'comfortable'` |  |
| `dividers` | `boolean` | `false` |  |
| drag-group (`dragGroup`) | `string` | `''` |  |
| `elevated` | `boolean` | `false` |  |
| empty-state-action-label (`emptyStateActionLabel`) | `string` | `''` |  |
| empty-state-title (`emptyStateTitle`) | `string` | `'No results found'` |  |
| empty-text (`emptyText`) | `string` | `'No items found'` |  |
| `filterChips` | `any[]` | `[]` |  |
| floating-f-a-b (`floatingFAB`) | `boolean` | `false` |  |
| `flush` | `boolean` | `false` |  |
| full-width (`fullWidth`) | `boolean` | `false` |  |
| `grid` | `boolean` | `false` |  |
| grid-cols (`gridCols`) | `number` | `3` |  |
| group-by (`groupBy`) | `string` | `''` |  |
| group-footer-label (`groupFooterLabel`) | `string` | `''` |  |
| `grouped` | `boolean` | `false` |  |
| `horizontal` | `boolean` | `false` |  |
| `infinite` | `boolean` | `false` |  |
| is-draggable (`isDraggable`) | `boolean` | `false` |  |
| item-height (`itemHeight`) | `number` | `48` |  |
| `items` | `any[]` | `[]` |  |
| items-per-page (`itemsPerPage`) | `number` | `10` |  |
| keyboard-navigation (`keyboardNavigation`) | `boolean` | `true` |  |
| `label` | `string` | `''` |  |
| load-more-threshold (`loadMoreThreshold`) | `number` | `50` |  |
| `loading` | `boolean` | `false` |  |
| loading-text (`loadingText`) | `string` | `'Loading...'` |  |
| max-height (`maxHeight`) | `string` | `''` |  |
| multi-select (`multiSelect`) | `boolean` | `false` |  |
| `numbered` | `boolean` | `false` |  |
| `padding` | `boolean` | `true` |  |
| `paginated` | `boolean` | `false` |  |
| `rounded` | `boolean` | `false` |  |
| search-placeholder (`searchPlaceholder`) | `string` | `'Search...'` |  |
| search-query (`searchQuery`) | `string` | `''` |  |
| `searchable` | `boolean` | `false` |  |
| `selectable` | `boolean` | `true` |  |
| `selectedValues` | `string[]` | `[]` |  |
| selection-header-color (`selectionHeaderColor`) | `string` | `'primary'` |  |
| show-bulk-header (`showBulkHeader`) | `boolean` | `false` |  |
| show-empty (`showEmpty`) | `boolean` | `true` |  |
| show-group-footer (`showGroupFooter`) | `boolean` | `false` |  |
| show-minimap (`showMinimap`) | `boolean` | `true` |  |
| show-sorting-headers (`showSortingHeaders`) | `boolean` | `false` |  |
| `size` | `"lg" \| "md" \| "sm"` | `'md'` |  |
| `skeleton` | `boolean` | `false` |  |
| sticky-headers (`stickyHeaders`) | `boolean` | `false` |  |
| `subheader` | `string` | `''` |  |
| `syncing` | `boolean` | `false` |  |
| `variant` | `"filled" \| "outlined" \| "soft" \| "text"` | `'text'` |  |
| `viewTabs` | `any[]` | `[]` |  |
| `virtual` | `boolean` | `false` |  |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `bulkAction` | `{ action: string; values: string[]; }` |  |
| `columnSort` | `{ key: string; direction: "desc" \| "asc"; }` |  |
| `itemsReorder` | `{ items: any[]; }` |  |
| `listChange` | `{ values: string[]; }` |  |
| `listItemSelect` | `{ value: string; values: string[]; shiftKey?: boolean; ctrlKey?: boolean; metaKey?: boolean; altKey?` |  |
| `listStarToggle` | `{ value: string; starred: boolean; }` |  |
| `loadMore` | `void` |  |
| `longPress` | `{ value: string; }` |  |
| `pageChange` | `{ page: number; }` |  |
| `searchChange` | `{ query: string; }` |  |
| `swipeAction` | `{ value: string; side: LeftRight; action?: string; }` |  |

## CSS parts

`list`
