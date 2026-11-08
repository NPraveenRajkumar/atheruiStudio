# ui-toggle-group

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `collapsed` | `boolean` | `false` | Initially collapsed |
| `collapsible` | `boolean` | `false` | Enable expand/collapse |
| `color` | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'primary'` | Semantic color passed to children |
| `columns` | `number` | `3` | Grid columns count |
| `compact` | `boolean` | `false` | Compact mode for tighter spacing |
| `disabled` | `boolean` | `false` | Disabled state for the entire group |
| enable-animation (`enableAnimation`) | `boolean` | `true` | Enable animations |
| error-message (`errorMessage`) | `string` | `''` | Error message when invalid |
| helper-text (`helperText`) | `string` | `''` | Helper text below group |
| `invalid` | `boolean` | `false` | Invalid state |
| is-draggable (`isDraggable`) | `boolean` | `false` | Enable drag to reorder |
| keyboard-navigation (`keyboardNavigation`) | `boolean` | `true` | Enable keyboard navigation |
| `label` | `string` | `''` | Group label |
| label-position (`labelPosition`) | `"left" \| "right"` | `'right'` | Label position for children |
| `layout` | `"grid" \| "horizontal" \| "vertical"` | `'horizontal'` | Layout orientation |
| `loading` | `boolean` | `false` | Loading state |
| loading-text (`loadingText`) | `string` | `'Loading options...'` | Loading text |
| max-selections (`maxSelections`) | `number` | `0` | Maximum selections (multiple mode) |
| `name` | `string` | `''` | Group name for forms |
| `options` | `string \| { value: string; label: string; icon?: string; disabled?: boolean; }[]` | `[]` | Options array (label, value, icon, disabled) |
| `readonly` | `boolean` | `false` | Readonly state |
| `required` | `boolean` | `false` | Required field indicator |
| search-placeholder (`searchPlaceholder`) | `string` | `'Search toggles...'` | Search placeholder text |
| `searchable` | `boolean` | `false` | Enable search/filter |
| selection-mode (`selectionMode`) | `"multiple" \| "none" \| "single"` | `'single'` | Selection mode |
| `shape` | `"circle" \| "default" \| "pill" \| "rounded" \| "square"` | `'default'` | Shape passed to children |
| show-icons (`showIcons`) | `boolean` | `false` | Show icons in children |
| show-select-all (`showSelectAll`) | `boolean` | `false` | Show select all/none controls (multiple mode only) |
| show-skeleton (`showSkeleton`) | `boolean` | `false` | Show skeleton loading state |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small" \| "xl" \| "xs" \| "xxl" \| "xxs" \| "xxxl" \| "xxxs` | `'md'` | Size passed to children |
| skeleton-count (`skeletonCount`) | `number` | `3` | Number of skeletons to show |
| `value` | `string \| string[]` | `[]` | Current selected value or array of values |
| `variant` | `"glass" \| "outlined" \| "raised" \| "segmented" \| "solid"` | `'solid'` | Material archetype passed to children |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `toggleGroupChange` | `{ value: string \| string[]; }` |  |
| `toggleGroupCollapse` | `{ collapsed: boolean; }` |  |
| `toggleGroupReorder` | `{ oldIndex: number; newIndex: number; items: any[]; }` |  |
| `toggleGroupSearch` | `{ query: string; results: any[]; }` |  |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `updateIndicator` | `updateIndicator() => Promise<void>` | Recalculates the position of the sliding background indicator. Only active in 'segmented' variant for single-selection groups. |
