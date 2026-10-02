# ui-tag

Tag — Data Display, Enhanced.

Tag element with gradients

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `animation` | `"fade" \| "none" \| "rotate" \| "scale" \| "slide"` | `'scale'` | Animation type for opening/closing |
| animation-duration (`animationDuration`) | `number` | `300` | Animation duration in milliseconds |
| auto-color (`autoColor`) | `boolean` | `false` | Whether to generate color automatically based on label hash |
| `badge` | `number \| string` | — | Badge content to display |
| badge-color (`badgeColor`) | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'default'` | Badge color variant |
| `checkable` | `boolean` | `false` | Whether the tag is checkable (selectable) |
| `checked` | `boolean` | `false` | Whether the tag is checked (for checkable tags) |
| `clickable` | `boolean` | `false` | Whether the tag is clickable (shows pointer and hover effect) |
| close-icon (`closeIcon`) | `string` | — | Custom close icon (replacing the default Ionicon 'close') |
| `color` | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'default'` | Color variant |
| `counter` | `number \| string` | — | Counter value to display at the end of the tag |
| custom-color (`customColor`) | `string` | — | Custom background color hex string |
| custom-text-color (`customTextColor`) | `string` | — | Custom text color hex string |
| `disabled` | `boolean` | `false` | Whether the tag is disabled |
| `elevation` | `0 \| 1 \| 2 \| 3` | `0` | Elevation level (0-3) |
| `gradient` | `string` | — | Gradient variant (e.g., 'blue-purple', 'green-teal') |
| `icon` | `string` | — | Icon to display |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'default'` | Icon library (unifying with other components) |
| icon-position (`iconPosition`) | `"left" \| "right"` | `'left'` | Explicit icon position (unifying names) |
| icon-size (`iconSize`) | `string` | `'1.14em'` | Size of the icon (e.g., '14px', '1em') |
| icon-spin (`iconSpin`) | `boolean` | `false` | Whether to make the icon spin (useful for loading/syncing) |
| `image` | `string` | — | Image source URL to display at the start |
| `label` | `string` | — | Tag label text |
| `loading` | `boolean` | `false` | Whether the tag is in a loading state |
| max-width (`maxWidth`) | `string` | — | Maximum width with text truncation |
| `orientation` | `"horizontal" \| "vertical" \| "vertical-rotated" \| "vertical-text"` | `'horizontal'` | Orientation of the tag: Orientation \| 'vertical-text' \| 'vertical-rotated' |
| `pulse` | `boolean` | `false` | Whether to show a pulse animation (for attention) |
| `removable` | `boolean` | `false` | Whether tag is removable |
| `rtl` | `boolean` | `false` | High-Fidelity: RTL support |
| `shape` | `"circle" \| "coupon" \| "default" \| "pill" \| "ribbon" \| "rounded" \| "square" \| "ticket"` | `'rounded'` | Shape of the tag: Shape \| 'ribbon' \| 'ticket' \| 'coupon' |
| show-tooltip (`showTooltip`) | `boolean` | `false` | Show tooltip on hover (useful with maxWidth) |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small" \| "xl" \| "xs" \| "xxl" \| "xxs" \| "xxxl" \| "xxxs` | `'md'` | Size of the tag |
| `skeleton` | `boolean` | `false` | Whether to show as a skeleton (placeholder) |
| `tooltip` | `string` | — | Tooltip text override for hover |
| user-avatar (`userAvatar`) | `string` | — | User avatar URL |
| `value` | `string` | — | Underlying value for the tag (useful for IDs) |
| `variant` | `"dot" \| "filled" \| "light" \| "outlined"` | `'filled'` | Tag variant |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `tagCheck` | `boolean` | Event emitted when checked state changes |
| `tagRemove` | `void` | Event emitted when tag is removed |
