# ui-advanced-data-table

Advanced Data Table — Data Display, Stable.

Feature-rich table

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| advanced-cell-editors (`advancedCellEditors`) | `boolean` | `true` | Enable advanced cell editors (date picker, dropdown, etc.) |
| advanced-filters (`advancedFilters`) | `boolean` | `false` | Enable advanced filter operators |
| advanced-validation (`advancedValidation`) | `boolean` | `false` | Enable advanced validation (ranges, lists) |
| aggregation-functions (`aggregationFunctions`) | `string \| string[]` | `['sum', 'avg', 'min', 'max', 'count']` | Aggregation functions to show |
| auto-size-columns (`autoSizeColumns`) | `boolean` | `false` | Enable column auto-sizing |
| `bordered` | `boolean` | `true` | Enable borders |
| cell-borders (`cellBorders`) | `boolean` | `false` | Enable cell borders (vertical grid lines) |
| `color` | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'primary'` | High-Fidelity: Primary color theme |
| column-aggregation (`columnAggregation`) | `boolean` | `false` | Enable column aggregation (sum, avg, min, max) |
| column-formatting (`columnFormatting`) | `boolean` | `true` | Enable column formatting (currency, date, percentage) |
| column-grouping (`columnGrouping`) | `boolean` | `false` | Enable column grouping (multi-level headers) |
| column-pinning (`columnPinning`) | `boolean` | `true` | Enable column pinning |
| column-reorder (`columnReorder`) | `boolean` | `true` | Enable column reordering |
| column-visibility (`columnVisibility`) | `boolean` | `true` | Enable column visibility toggle |
| `columns` | `TableColumn[] \| string` | `[]` | Columns definition |
| conditional-formatting (`conditionalFormatting`) | `boolean` | `false` | Enable conditional formatting (color scales, data bars) |
| `config` | `TableConfig \| string` | `{     columns: [],     data: [],     selectable: false,     pagination: true,     pageSize: 10,   }` | Table configuration |
| context-menu (`contextMenu`) | `boolean` | `false` | Enable context menus on right click |
| copy-paste (`copyPaste`) | `boolean` | `false` | Enable copy/paste functionality |
| `customActions` | `{ label: string; value: string; icon?: string; iconLibrary?: string; }[]` | — | Custom actions to show in the row actions menu |
| `data` | `TableRow[] \| string` | `[]` | Table data |
| `editable` | `boolean` | `false` | Enable inline editing |
| empty-message (`emptyMessage`) | `string` | `'No data available'` | Empty message |
| enable-sparklines (`enableSparklines`) | `boolean` | `false` | Enable sparklines in cells |
| enhanced-accessibility (`enhancedAccessibility`) | `boolean` | `true` | Enable enhanced accessibility features |
| excel-export (`excelExport`) | `boolean` | `false` | Enable Excel export (.xlsx) |
| expand-groups-by-default (`expandGroupsByDefault`) | `boolean` | `true` | Expand groups by default |
| `exportable` | `boolean` | `true` | Enable export |
| `filterable` | `boolean` | `true` | Enable filtering |
| formatting-rules (`formattingRules`) | `any` | `{}` | Conditional formatting rules |
| group-by (`groupBy`) | `string` | `''` | Field to group by (for row grouping) |
| `grouping` | `boolean` | `false` | Enable data grouping |
| header-background (`headerBackground`) | `string` | — | Custom header background (solid color or gradient) |
| `hoverable` | `boolean` | `true` | Enable hover effect |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'default'` | Default library for icons |
| inline-validation (`inlineValidation`) | `boolean` | `false` | Enable inline validation |
| keyboard-shortcuts (`keyboardShortcuts`) | `boolean` | `true` | Enable keyboard shortcuts |
| lazy-load (`lazyLoad`) | `boolean` | `false` | Enable lazy loading of data |
| `loading` | `boolean` | `false` | Loading state |
| max-sort-columns (`maxSortColumns`) | `number` | `3` | Maximum number of sort columns |
| mobile-card-view (`mobileCardView`) | `boolean` | `true` | Enable mobile card view for sm screens |
| multi-filter (`multiFilter`) | `boolean` | `true` | Enable multi-column filtering |
| multi-select (`multiSelect`) | `boolean` | `true` | Enable multiple row selection |
| multi-sort (`multiSort`) | `boolean` | `false` | Enable multi-column sorting |
| page-size (`pageSize`) | `number` | `10` | Page size |
| page-size-options (`pageSizeOptions`) | `number[] \| string` | `[5, 10, 25, 50, 100]` | Page size options |
| `pagination` | `boolean` | `true` | Enable pagination |
| pagination-auto-hide (`paginationAutoHide`) | `boolean` | `true` | Auto-hide pagination on single page |
| pagination-keyboard-nav (`paginationKeyboardNav`) | `boolean` | `true` | Enable keyboard navigation for pagination |
| pagination-mobile-breakpoint (`paginationMobileBreakpoint`) | `number` | `768` | Mobile breakpoint for pagination |
| pagination-persist-page (`paginationPersistPage`) | `boolean` | `false` | Persist page to localStorage |
| pagination-quick-jump (`paginationQuickJump`) | `boolean` | `false` | Enable quick jump buttons |
| pagination-quick-jump-step (`paginationQuickJumpStep`) | `number` | `5` | Quick jump step size |
| pagination-responsive (`paginationResponsive`) | `boolean` | `true` | Responsive pagination mode |
| pagination-shape (`paginationShape`) | `"circle" \| "default" \| "pill" \| "rounded" \| "square"` | `'default'` | Pagination shape |
| pagination-show-progress (`paginationShowProgress`) | `boolean` | `false` | Show progress indicator |
| pagination-smart-compact (`paginationSmartCompact`) | `boolean` | `false` | Smart compact mode |
| pagination-smart-compact-threshold (`paginationSmartCompactThreshold`) | `number` | `20` | Smart compact threshold |
| pagination-sticky (`paginationSticky`) | `boolean` | `false` | Sticky pagination |
| pagination-sticky-position (`paginationStickyPosition`) | `"bottom" \| "top"` | `'bottom'` | Sticky position |
| pagination-storage-key (`paginationStorageKey`) | `string` | `'table-page'` | LocalStorage key |
| pagination-swipe-gestures (`paginationSwipeGestures`) | `boolean` | `true` | Enable swipe gestures |
| pagination-theme (`paginationTheme`) | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'primary'` | Pagination theme |
| pagination-transitions (`paginationTransitions`) | `boolean` | `true` | Enable page transitions |
| pagination-url-param (`paginationUrlParam`) | `string` | `'page'` | URL parameter name |
| pagination-url-sync (`paginationUrlSync`) | `boolean` | `false` | Sync pagination with URL |
| pdf-export (`pdfExport`) | `boolean` | `false` | Enable PDF export |
| persist-state (`persistState`) | `boolean` | `false` | Persist table state to localStorage |
| print-optimized (`printOptimized`) | `boolean` | `false` | Enable print optimization |
| range-selection (`rangeSelection`) | `boolean` | `false` | Enable range selection (Shift+Click) |
| row-details (`rowDetails`) | `boolean` | `false` | Enable row details panel |
| row-height (`rowHeight`) | `"comfortable" \| "compact" \| "extra-large" \| "large" \| "lg" \| "md" \| "medium" \| "normal" \| "sm" \| "small" \| "xl` | `'normal'` | Row height variant |
| row-pinning (`rowPinning`) | `boolean` | `true` | Enable row pinning |
| row-reorder (`rowReorder`) | `boolean` | `false` | Enable row reordering via drag and drop |
| row-spanning (`rowSpanning`) | `boolean` | `false` | Enable row spanning |
| `searchable` | `boolean` | `true` | Enable global search |
| `selectable` | `boolean` | `false` | Enable row selection |
| server-side (`serverSide`) | `boolean` | `false` | Server-side mode |
| show-actions (`showActions`) | `boolean` | `false` | Show actions menu (3-dot menu) for each row |
| show-column-panel (`showColumnPanel`) | `boolean` | `false` | Show column panel |
| show-filter-panel (`showFilterPanel`) | `boolean` | `false` | Show filter panel |
| show-group-count (`showGroupCount`) | `boolean` | `true` | Show group count |
| show-grouping-controls (`showGroupingControls`) | `boolean` | `true` | Enable row grouping controls in toolbar |
| show-skeleton (`showSkeleton`) | `boolean` | `true` | Show skeleton while loading |
| skeleton-rows (`skeletonRows`) | `number` | `5` | Number of skeleton rows to show |
| `sortable` | `boolean` | `true` | Enable sorting |
| state-storage-key (`stateStorageKey`) | `string` | `'table-state'` | LocalStorage key for state persistence |
| sticky-header (`stickyHeader`) | `boolean` | `true` | Enable sticky header |
| `striped` | `boolean` | `true` | Enable striped rows |
| striped-color (`stripedColor`) | `string` | — | Custom striped row color for light mode |
| striped-color-dark (`stripedColorDark`) | `string` | — | Custom striped row color for dark mode |
| `theme` | `"auto" \| "dark" \| "default" \| "green" \| "light"` | `'auto'` | Theme mode |
| total-rows (`totalRows`) | `number` | `0` | Total rows (for server-side pagination) |
| tree-data (`treeData`) | `boolean` | `false` | Enable Tree Data mode (hierarchical) |
| undo-redo (`undoRedo`) | `boolean` | `false` | Enable undo/redo functionality |
| validation-rules (`validationRules`) | `any` | `{}` | Validation rules for columns |
| `variant` | `"borderless" \| "default" \| "glass" \| "raised"` | `'default'` | High-Fidelity: Table variant |
| virtual-row-height (`virtualRowHeight`) | `number` | `48` | Row height for virtual scrolling (px) |
| virtual-scroll (`virtualScroll`) | `boolean` | `false` | Enable virtual scrolling for performance with lg datasets |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `cellEdit` | `{ rowId: string \| number; field: string; value: any; }` |  |
| `cellEditStart` | `{ rowId: string \| number; field: string; value: any; }` |  |
| `cellEditStop` | `{ rowId: string \| number; field: string; value: any; }` |  |
| `columnOrderChange` | `{ order: string[]; }` |  |
| `columnPin` | `{ columnId: string; position: "none" \| LeftRight; }` |  |
| `columnVisibilityChange` | `{ visible: string[]; }` |  |
| `dataExport` | `{ data: any[]; format: string; }` |  |
| `filterChange` | `FilterConfig` |  |
| `groupByChange` | `{ field: string; }` |  |
| `groupToggle` | `{ groupKey: string; expanded: boolean; }` |  |
| `lazyLoadMore` | `{ currentCount: number; }` |  |
| `pageChange` | `{ page: number; pageSize: number; }` |  |
| `rowAction` | `{ row: any; action: string; }` |  |
| `rowDelete` | `{ row: any; }` |  |
| `rowDeselect` | `{ selectedRows: (string \| number)[]; }` |  |
| `rowEdit` | `{ row: any; }` |  |
| `rowEditStart` | `{ row: any; }` |  |
| `rowEditStop` | `{ row: any; }` |  |
| `rowPin` | `{ rowId: number; position: "none" \| TopBottom; }` |  |
| `rowReorderEvent` | `{ fromIndex: number; toIndex: number; }` |  |
| `rowSelect` | `{ selectedRows: (string \| number)[]; }` | Events |
| `searchChange` | `{ query: string; }` |  |
| `sortChange` | `SortConfig` |  |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `deselectAllRows` | `deselectAllRows() => Promise<void>` |  |
| `deselectRow` | `deselectRow(rowId: string \| number) => Promise<void>` |  |
| `exportData` | `exportData(options?: ExportOptions) => Promise<void>` |  |
| `getSelectedRows` | `getSelectedRows() => Promise<(string \| number)[]>` |  |
| `goToPage` | `goToPage(page: number) => Promise<void>` |  |
| `handleColumnPin` | `handleColumnPin(columnId: string, position: LeftRight \| "none") => Promise<void>` | Pin/Unpin column |
| `handleRowPin` | `handleRowPin(rowId: number, position: TopBottom \| "none") => Promise<void>` | Pin/Unpin row |
| `print` | `print() => Promise<void>` |  |
| `refresh` | `refresh() => Promise<void>` |  |
| `resetFilters` | `resetFilters() => Promise<void>` |  |
| `resetSort` | `resetSort() => Promise<void>` |  |
| `selectAllRows` | `selectAllRows() => Promise<void>` |  |
| `selectRow` | `selectRow(rowId: string \| number) => Promise<void>` | Public methods |
