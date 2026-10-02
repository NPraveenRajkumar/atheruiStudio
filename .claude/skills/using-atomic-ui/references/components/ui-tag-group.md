# ui-tag-group

Tag Group — Advanced Components, Stable.

Grouped tags

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `animation` | `"fade" \| "none" \| "rotate" \| "scale" \| "slide"` | — | Bulk animation for all tags in group |
| case-sensitive (`caseSensitive`) | `boolean` | `false` | Case sensitivity for search and duplicates |
| `collapsible` | `boolean` | `false` | Whether overflow tags can be toggled to show (Premium) |
| `color` | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | — | Bulk color for all tags in group |
| `creatable` | `boolean` | `false` | Whether users can add new tags (Premium) |
| `delimiters` | `string[]` | `[',', ' ']` | Delimiters to trigger tag creation |
| `max` | `number` | `0` | Maximum number of tags to display before hiding and showing (+N) |
| `overlap` | `boolean` | `false` | Whether to overlap tags (avatar style) |
| `placeholder` | `string` | `'Add tag...'` | Placeholder text when group is empty (creatable mode) |
| read-only (`readOnly`) | `boolean` | `false` | Whether the entire group is read-only (disables all selection/removal) |
| `removable` | `boolean` | `false` | Whether all tags in group should be removable |
| `rounded` | `boolean` | `false` | Whether all tags in group should be rounded |
| `searchable` | `boolean` | `false` | Whether tags are filterable via search (Premium) |
| selection-mode (`selectionMode`) | `"multiple" \| "none" \| "single"` | `'none'` | Selection mode: 'none', 'single', or 'multiple' |
| `shape` | `"circle" \| "coupon" \| "default" \| "pill" \| "ribbon" \| "rounded" \| "square" \| "ticket"` | — | Bulk shape for all tags in group |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small"` | — | Bulk size for all tags in group |
| `skeleton` | `boolean` | `false` | Whether all tags in group should show as skeletons |
| `spacing` | `string` | `'8px'` | Spacing between tags |
| `value` | `string \| string[]` | `[]` | Selected values (for checkable tags) |
| `variant` | `"dot" \| "filled" \| "light" \| "outlined"` | — | Bulk variant for all tags in group |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `tagAdd` | `string` | Event emitted when a new tag is added |
| `tagGroupChange` | `string \| string[]` |  |
