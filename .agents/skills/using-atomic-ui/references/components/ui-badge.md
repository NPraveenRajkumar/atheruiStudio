# ui-badge

Badge — Data Display, Enhanced.

Badge indicator with 12+ features

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `animation` | `"bounce" \| "expand" \| "fade" \| "fade-down" \| "fade-in" \| "fade-in-out" \| "fade-left" \| "fade-out" \| "fade-right"` | `'none'` | Animation type |
| `closeable` | `boolean` | `false` | Add close button |
| `color` | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'danger'` | Color variant |
| custom-color (`customColor`) | `string` | — | Custom background color |
| custom-text-color (`customTextColor`) | `string` | — | Custom text color |
| `dot` | `boolean` | `false` | Show as dot instead of number |
| `glow` | `boolean` | `false` | Add glow effect |
| `gradient` | `string` | — | Gradient variant (e.g., 'blue-purple', 'green-teal', 'orange-red') |
| `icon` | `string` | — | Icon to display |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'default'` | Library for the icon (e.g., 'se', 'fontawesome', 'lucide', etc.) |
| icon-position (`iconPosition`) | `"left" \| "right"` | `'left'` | Icon position |
| `inline` | `boolean` | `false` | Use inline positioning instead of absolute anchors |
| `interactive` | `boolean` | `false` | Make badge interactive/clickable |
| `max` | `number` | `99` | Maximum value to display before showing "+" |
| offset-x (`offsetX`) | `number` | `0` | Horizontal offset from position |
| offset-y (`offsetY`) | `number` | `0` | Vertical offset from position |
| `position` | `"bottom-left" \| "bottom-right" \| "top-left" \| "top-right"` | `'top-right'` | Position of the badge |
| `rtl` | `boolean` | `false` | High-Fidelity: RTL support |
| `shape` | `"circle" \| "default" \| "square"` | `'default'` | Badge shape |
| show-zero (`showZero`) | `boolean` | `false` | Whether to show badge if value is zero |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small" \| "xl" \| "xs" \| "xxl" \| "xxs" \| "xxxl" \| "xxxs` | `'md'` | Badge size |
| `value` | `number \| string` | — | Content/number to display in badge |
| `variant` | `"bordered" \| "borderless" \| "color" \| "danger" \| "dark" \| "default" \| "dots-only" \| "elevated" \| "error" \| "fil` | `'standard'` | Variant style |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `badgeClick` | `void` | Fired when badge is clicked (interactive mode) |
| `badgeClose` | `void` | Fired when badge is closed |
