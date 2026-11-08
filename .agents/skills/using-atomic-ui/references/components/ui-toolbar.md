# ui-toolbar

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `alignment` | `"center" \| "end" \| "space-around" \| "space-between" \| "space-evenly" \| "start"` | `'start'` | Alignment of items along the main axis. |
| `bordered` | `boolean` | `false` | Show a border around the toolbar. |
| `disabled` | `boolean` | `false` | Whether the toolbar is in a disabled state. |
| `elevation` | `0 \| 1 \| 2 \| 3 \| 4` | `1` | Elevation shadow level (0–4). |
| `gap` | `string` | `'4px'` | Gap between items (CSS value). |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'lucide'` | Default icon library for items that don't specify one. |
| icon-only (`iconOnly`) | `boolean` | `false` | Make label hidden (icon-only) for button items by default. |
| input-debounce (`inputDebounce`) | `number` | `300` | Debounce time in ms for input/search items. |
| `items` | `ToolbarItem[] \| string` | `[]` | Flat list of items (all rendered in the main content zone). |
| keyboard-nav (`keyboardNav`) | `boolean` | `true` | Enable keyboard navigation across items. |
| `loading` | `boolean` | `false` | Whether the toolbar is in a loading state. |
| max-size (`maxSize`) | `string` | — | Maximum height (horizontal) or width (vertical) (CSS value). |
| `orientation` | `"horizontal" \| "vertical"` | `'horizontal'` | Orientation: horizontal or vertical. |
| overflow-icon (`overflowIcon`) | `string` | `'more-horizontal'` | Icon for the overflow more button. |
| overflow-label (`overflowLabel`) | `string` | `'More'` | Label for the overflow "More" button. |
| overflow-strategy (`overflowStrategy`) | `"dropdown" \| "hidden" \| "scroll" \| "wrap"` | `'dropdown'` | Overflow handling strategy. |
| `padding` | `string` | `'8px 12px'` | Padding inside the toolbar (CSS value). |
| `position` | `"absolute" \| "fixed" \| "static" \| "sticky"` | `'static'` | Positioning strategy. |
| `reorderable` | `boolean` | `false` | Enable drag-and-drop reordering of toolbar items. |
| `rounded` | `boolean` | `false` | Rounded corners for the whole bar. |
| `schema` | `ToolbarSchema \| string` | `null` | JSON string or object describing the full toolbar layout. Schema: { left?: ToolbarItem[], center?: ToolbarItem[], right?: ToolbarItem[] } |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small" \| "xl"` | `'md'` | Size of toolbar items. |
| sticky-edge (`stickyEdge`) | `"bottom" \| "left" \| "right" \| "top"` | `'top'` | Which edge to stick to when position is sticky or fixed. |
| toolbar-aria-label (`toolbarAriaLabel`) | `string` | `'Toolbar'` | Accessible label for the toolbar element. |
| `variant` | `"dark" \| "default" \| "elevated" \| "glass" \| "inline" \| "minimal" \| "outlined" \| "primary" \| "secondary"` | `'default'` | Visual variant of the toolbar. |
| zone-dividers (`zoneDividers`) | `boolean` | `false` | Show dividers between zones (left/center/right). |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `toolbarItemChange` | `ToolbarItemChangeEvent` | Fired when an input, dropdown, toggle, or switch value changes. |
| `toolbarItemClick` | `ToolbarItemClickEvent` | Fired when a button or clickable item is activated. |
| `toolbarOverflowChange` | `ToolbarOverflowChangeEvent` | Fired when the visible/overflowed item set changes. |
| `toolbarReorder` | `ToolbarItem[]` | Fired after a drag-and-drop reorder. |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `focusItem` | `focusItem(id: string) => Promise<void>` | Focus a specific toolbar item by id. |
| `getItemValue` | `getItemValue(id: string) => Promise<unknown>` | Get the current value of an item by id. |
| `getStateSnapshot` | `getStateSnapshot() => Promise<ToolbarStateSnapshot>` | Get a snapshot of current toolbar state. |
| `redo` | `redo() => Promise<void>` | Redo last undone change. |
| `restoreStateSnapshot` | `restoreStateSnapshot(snapshot: ToolbarStateSnapshot) => Promise<void>` |  |
| `setCollapsed` | `setCollapsed(collapsed: boolean) => Promise<void>` | Collapse / expand the toolbar (mobile). |
| `setItemDisabled` | `setItemDisabled(id: string, disabled: boolean) => Promise<void>` | Disable or enable an item by id. |
| `setItemHidden` | `setItemHidden(id: string, hidden: boolean) => Promise<void>` | Toggle visibility of an item. |
| `setItemLoading` | `setItemLoading(id: string, loading: boolean) => Promise<void>` | Set loading state on a specific button item. |
| `setItemValue` | `setItemValue(id: string, value: unknown) => Promise<void>` | Programmatically set the value of any item by id. |
| `setOverflowOpen` | `setOverflowOpen(open: boolean) => Promise<void>` | Open or close the overflow menu. |
| `toggleItem` | `toggleItem(id: string) => Promise<void>` | Toggle active state of a toggleable button. |
| `undo` | `undo() => Promise<void>` | Undo last value change. |
