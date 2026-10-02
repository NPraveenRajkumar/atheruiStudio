# ui-button

Button — Forms & Input, Stable.

A comprehensive, feature-rich button component with multiple variants, sizes, states, and customization options.

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `align` | `"center" \| "end" \| "start"` | `'center'` | Content alignment within button: 'start' \| 'center' \| 'end' |
| aria-label (`ariaLabel`) | `string` | — | Accessible label override (especially useful for icon-only buttons) |
| avatar-alt (`avatarAlt`) | `string` | — | Alt text for avatar-btn |
| avatar-src (`avatarSrc`) | `string` | — | Avatar source for avatar button |
| avatar-status (`avatarStatus`) | `"" \| "away" \| "busy" \| "dnd" \| "offline" \| "online"` | `''` | Status dot for avatar: 'online', 'offline', 'busy', 'away' |
| `badge` | `number \| string` | — | Badge content |
| badge-color (`badgeColor`) | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'danger'` | Badge color variant (primary, success, danger, etc.) |
| badge-custom-color (`badgeCustomColor`) | `string` | — | Custom background color for the badge |
| badge-custom-text-color (`badgeCustomTextColor`) | `string` | — | Custom text color for the badge |
| badge-position (`badgePosition`) | `"bottom-left" \| "bottom-right" \| "inline-left" \| "inline-right" \| "top-left" \| "top-right"` | `'top-right'` | Badge position |
| `circle` | `boolean` | `false` | Circle-shaped (shorthand for shape="circle") |
| `color` | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'none'` | Button color |
| copy-value (`copyValue`) | `string` | — | Text to copy to clipboard when clicked. Shows feedback icon. |
| `counter` | `number \| string` | — | Counter badge content (inline right side of text) |
| counter-color (`counterColor`) | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | — | Counter badge color variant (primary, success, danger, etc.) |
| counter-custom-color (`counterCustomColor`) | `string` | — | Custom background color for the counter badge |
| counter-custom-text-color (`counterCustomTextColor`) | `string` | — | Custom text color for the counter badge |
| `description` | `string` | — | Description text (alias for subtitle, common in toggle contexts) |
| description-position (`descriptionPosition`) | `"above" \| "below" \| "left" \| "right"` | `'below'` | Position of the description/subtitle: 'above' \| 'below' \| 'left' \| 'right' |
| `disabled` | `boolean` | `false` | Disabled state |
| `elevation` | `number` | — | Elevation level (0-5) |
| full-width (`fullWidth`) | `boolean` | `false` | Full width button (shorthand for width="100%") |
| `grow` | `boolean` | `false` | If true, the button will grow to fill available space in a flex container |
| `href` | `string` | — | Link URL. If set, renders as an anchor tag. |
| `icon` | `string` | — | Optional icon content (can be name, SVG path, URL, or emoji) |
| icon-color (`iconColor`) | `string` | `'currentColor'` | Optional override for icon color |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'lucide'` | Library for the icon (e.g., 'se', 'fontawesome', 'lucide', etc.) |
| icon-only (`iconOnly`) | `boolean` | `false` | Render icon only (no label) |
| icon-position (`iconPosition`) | `"bottom" \| "left" \| "none" \| "right" \| "top"` | `'left'` | Icon position relative to label |
| icon-size (`iconSize`) | `number \| string` | — | Optional override for icon size |
| img-alt (`imgAlt`) | `string` | — | Alt text for image button |
| img-src (`imgSrc`) | `string` | — | Image source for image button |
| `justify` | `"around" \| "between" \| "center" \| "end" \| "start"` | `'center'` | Content justification: 'start' \| 'center' \| 'end' \| 'between' \| 'around' |
| `label` | `string` | — | Button label text |
| `loading` | `boolean` | `false` | Loading state (shows spinner) |
| loading-position (`loadingPosition`) | `"bottom" \| "center" \| "icon" \| "left" \| "none" \| "right" \| "top"` | `'left'` | Loading spinner position |
| min-width (`minWidth`) | `string` | — | Custom min-width |
| no-ripple (`noRipple`) | `boolean` | `false` | Disable ripple effect |
| `pill` | `boolean` | `false` | Pill-shaped (legacy override) |
| `progress` | `number` | — | Progress fill (0–100). Shows a background fill bar. |
| `rel` | `string` | — | Link relationships |
| `reveal` | `"fade-in" \| "none" \| "slide-up" \| "zoom"` | `'none'` | Reveal animation type |
| reveal-delay (`revealDelay`) | `number` | `0` | Reveal delay in ms |
| `rounded` | `boolean` | `true` | Rounded corner style (legacy override) |
| `rtl` | `boolean` | `false` | RTL support |
| `selected` | `boolean` | `false` | Selected state (for toggle groups) |
| `shape` | `"circle" \| "default" \| "pill" \| "rounded" \| "square"` | `'rounded'` | Button shape |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small" \| "xl" \| "xs" \| "xxl" \| "xxs" \| "xxxl" \| "xxxs` | `'md'` | Size |
| `subtitle` | `string` | — | Optional subtitle text (shown above/below main label) |
| `target` | `string` | — | Link target |
| `type` | `"button" \| "image" \| "reset" \| "submit"` | `'button'` | Button type: 'button', 'submit', 'reset', 'image' |
| `value` | `string` | — | Values associated with the button (for use in groups) |
| `variant` | `"accordion" \| "ghost" \| "glass" \| "link" \| "none" \| "outline" \| "primary" \| "secondary" \| "soft"` | `'outline'` | Visual variant |
| `width` | `string` | — | Custom width (e.g., '100%', '200px', 'auto') |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `buttonClick` | `MouseEvent` | Click event |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `setFocus` | `setFocus() => Promise<void>` |  |

## CSS parts

`button`, `counter`, `icon`, `icon-block`, `label-block`, `subtitle`, `title`
