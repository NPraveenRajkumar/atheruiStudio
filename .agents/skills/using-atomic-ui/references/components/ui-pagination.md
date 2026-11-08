# ui-pagination

Pagination — Navigation & Steps, Stable.

Page navigation

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| arrows-joined (`arrowsJoined`) | `boolean` | `false` | Only join navigation arrows (prev/next) together |
| auto-hide (`autoHide`) | `boolean` | `true` |  |
| `circle` | `boolean` | `false` | Circle-shaped buttons (shorthand for shape="circle") |
| `compact` | `boolean` | `false` | Whether to use compact mode (for dropdown and input types) |
| current-page (`currentPage`) | `number` | `1` | Current active page (1-based) |
| `disabled` | `boolean` | `false` | Whether pagination is disabled |
| ellipsis-tooltip (`ellipsisTooltip`) | `boolean` | `true` | Show tooltip on ellipsis hover with hidden page numbers |
| first-icon (`firstIcon`) | `string` | `''` | Custom first icon (emoji or SVG string) |
| first-text (`firstText`) | `string` | `'First'` | Custom text for first button |
| hide-nav-buttons (`hideNavButtons`) | `boolean` | `false` | Hide navigation buttons (next, previous, first, last) in dropdown/input modes |
| hide-numbers (`hideNumbers`) | `boolean` | `false` | Hide page number buttons completely |
| icon-only (`iconOnly`) | `boolean` | `false` | Whether to show only icons (no text labels) |
| `infinite` | `boolean` | `false` | Whether to use infinite scroll style (shows loading state) |
| items-per-page (`itemsPerPage`) | `number` | `10` | Number of items per page |
| keyboard-nav (`keyboardNav`) | `boolean` | `true` | Enable keyboard navigation |
| label-template (`labelTemplate`) | `string` | `'{current} OF {total}'` | Template for the label when showLabel is true. Uses {current} and {total} placeholders. |
| last-icon (`lastIcon`) | `string` | `''` | Custom last icon (emoji or SVG string) |
| last-text (`lastText`) | `string` | `'Last'` | Custom text for last button |
| `loading` | `boolean` | `false` | Loading state for infinite scroll |
| max-visible-pages (`maxVisiblePages`) | `number` | `5` | Maximum number of page buttons to show |
| mobile-breakpoint (`mobileBreakpoint`) | `number` | `768` | Mobile breakpoint (px) |
| next-icon (`nextIcon`) | `string` | `''` | Custom next icon (emoji or SVG string) |
| next-text (`nextText`) | `string` | `'Next'` | Custom text for next button |
| `pageSizes` | `number[]` | `[10, 25, 50, 100]` | Available page sizes for selector |
| page-transition (`pageTransition`) | `boolean` | `true` | Enable page transition animations |
| persist-page (`persistPage`) | `boolean` | `false` | Persist page to localStorage |
| `pill` | `boolean` | `false` | Pill-shaped buttons (shorthand for shape="pill") |
| prev-icon (`prevIcon`) | `string` | `''` | Custom prev icon (emoji or SVG string) |
| prev-text (`prevText`) | `string` | `'Previous'` | Custom text for previous button |
| quick-jump (`quickJump`) | `boolean` | `false` | Enable quick jump buttons (+5, -5) |
| quick-jump-step (`quickJumpStep`) | `number` | `5` | Quick jump step size |
| responsive-mode (`responsiveMode`) | `boolean` | `true` | Auto-switch to compact mode on mobile |
| `rtl` | `boolean` | `false` | RTL support |
| `segmented` | `boolean` | `false` | Layout buttons without gaps, inside a single border-radius container |
| `shape` | `"circle" \| "default" \| "pill" \| "rounded" \| "square"` | `'default'` |  |
| show-first-last (`showFirstLast`) | `boolean` | `true` | Whether to show first/last buttons |
| show-jump-to (`showJumpTo`) | `boolean` | `false` | Whether to show jump to page input |
| show-label (`showLabel`) | `boolean` | `false` | Show custom label (e.g. "3 OF 10") instead of or alongside numbers |
| show-page-size (`showPageSize`) | `boolean` | `false` | Whether to show page size selector |
| show-prev-next (`showPrevNext`) | `boolean` | `true` | Whether to show previous/next buttons |
| show-progress (`showProgress`) | `boolean` | `false` | Show progress indicator |
| show-selected-marker (`showSelectedMarker`) | `boolean` | `true` | If true, shows a checkmark (tick) next to selected items in internal dropdowns. |
| show-total (`showTotal`) | `boolean` | `false` | Whether to show total count |
| `size` | `"lg" \| "md" \| "sm"` | `'md'` | Size of the pagination component |
| smart-compact (`smartCompact`) | `boolean` | `false` | Auto-switch to compact when pages exceed threshold |
| smart-compact-threshold (`smartCompactThreshold`) | `number` | `20` | Page count threshold for smart compact mode |
| `sticky` | `boolean` | `false` | Make pagination sticky |
| sticky-position (`stickyPosition`) | `"bottom" \| "top"` | `'bottom'` | Sticky position (top or bottom) |
| storage-key (`storageKey`) | `string` | `'pagination-page'` | LocalStorage key for persistence |
| swipe-gestures (`swipeGestures`) | `boolean` | `true` | Enable swipe gestures on mobile |
| `theme` | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'primary'` | Color theme |
| total-items (`totalItems`) | `number` | `0` | Total number of items |
| `type` | `"advanced" \| "basic" \| "compact" \| "detailed" \| "dropdown" \| "indicator" \| "input" \| "minimal"` | `'basic'` | Type of pagination to display |
| url-param (`urlParam`) | `string` | `'page'` | URL parameter name for page number |
| url-sync (`urlSync`) | `boolean` | `false` | Sync current page with URL query parameter |
| `variant` | `"default" \| "filled" \| "floating" \| "glass" \| "minimalist" \| "modern" \| "outlined" \| "premium" \| "soft" \| "unde` | `'default'` | Visual variant of the pagination |
| `vertical` | `boolean` | `false` | Layout the pagination vertically |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `itemsPerPageChange` | `number` | Emitted when items per page changes |
| `pageChange` | `{ page: number; itemsPerPage: number; }` | Emitted when page changes |
| `validationError` | `string` | Emitted when validation error occurs |
