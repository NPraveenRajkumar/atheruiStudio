# ui-switch

Switch — Forms & Input, Stable.

Toggle switch

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| aria-label (`ariaLabel`) | `string` | `''` | Aria label override |
| `async` | `boolean` | `false` | Enable async toggle mode (waits for external confirmation) |
| auto-submit (`autoSubmit`) | `boolean` | `false` | Auto-submit nearest form on change |
| `checked` | `boolean` | `false` | Checked state |
| checked-image (`checkedImage`) | `string` | — | High-Fidelity: Image URL for checked state |
| checked-text (`checkedText`) | `string` | `''` | Custom text on track when checked |
| `color` | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'primary'` | Semantic color variant |
| confirmation-message (`confirmationMessage`) | `string` | `'Are you sure you want to change this?'` | Confirmation message |
| `description` | `string` | — | Tactical side/bottom description |
| description-position (`descriptionPosition`) | `"bottom" \| "side"` | `'bottom'` |  |
| `disabled` | `boolean` | `false` | Disabled state |
| `elevation` | `number` | `0` | Elevation level (0-5) |
| enable-animation (`enableAnimation`) | `boolean` | `true` | Performance/Animation toggle |
| error-message (`errorMessage`) | `string` | `''` | Error message when invalid |
| form-id (`formId`) | `string` | `''` | Associated form ID |
| `glow` | `boolean` | `false` | Glow effect when active |
| `gradient` | `boolean` | `false` | Use gradient colors |
| gradient-colors (`gradientColors`) | `string` | `''` | Gradient colors (JSON array of strings) |
| `haptic` | `boolean` | `false` | Sensory vibration feedback |
| helper-text (`helperText`) | `string` | `''` | Helper text below switch |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'ionicons'` | Icon library to use |
| icon-off (`iconOff`) | `string` | — | Icon when unchecked |
| icon-on (`iconOn`) | `string` | — | Icon when checked |
| `indeterminate` | `boolean` | `false` | Indeterminate state |
| `invalid` | `boolean` | `false` | Invalid state |
| `label` | `string` | `''` | Label for the switch |
| label-position (`labelPosition`) | `"left" \| "right"` | `'right'` | Label position |
| `loading` | `boolean` | `false` | Loading state (shows spinner) |
| `name` | `string` | `''` | Form field name |
| `orientation` | `"horizontal" \| "vertical"` | `'horizontal'` | Orientation |
| `physics` | `"bouncy" \| "linear" \| "liquid" \| "stiff"` | `'liquid'` | Animation physics preset |
| `readonly` | `boolean` | `false` | Readonly state |
| require-confirmation (`requireConfirmation`) | `boolean` | `false` | Require confirmation before toggle |
| `required` | `boolean` | `false` | Required field indicator |
| `rtl` | `boolean` | `false` | RTL support |
| `shape` | `"circle" \| "default" \| "pill" \| "rounded" \| "square"` | `'default'` | Shape style |
| show-default-icons (`showDefaultIcons`) | `boolean` | `false` | Show check/cross icons by default |
| show-icons (`showIcons`) | `boolean` | `false` | Show icons |
| show-success-feedback (`showSuccessFeedback`) | `boolean` | `false` | Show success feedback after change |
| show-tooltip (`showTooltip`) | `boolean` | `false` | Show tooltip on hover |
| show-track-text (`showTrackText`) | `boolean` | `false` | Show text symbols on track |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small" \| "xl" \| "xs" \| "xxl" \| "xxs" \| "xxxl" \| "xxxs` | `'md'` | Size variant |
| switch-tab-index (`switchTabIndex`) | `number` | `0` | Tab index |
| thumb-shape (`thumbShape`) | `"circle" \| "square"` | `'circle'` | Shape of the thumb |
| tooltip-text (`tooltipText`) | `string` | `''` | Tooltip text |
| unchecked-image (`uncheckedImage`) | `string` | — | High-Fidelity: Image URL for unchecked state |
| unchecked-text (`uncheckedText`) | `string` | `''` | Custom text on track when unchecked |
| `value` | `string` | `'on'` | Form field value |
| `variant` | `"bordered" \| "borderless" \| "color" \| "danger" \| "dark" \| "default" \| "dots-only" \| "elevated" \| "error" \| "fil` | `'solid'` | Material archetype variant |
| `width` | `string` | — | Custom width for the switch track (e.g., '100px', 'auto') |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `switchBlur` | `void` | Blur event |
| `switchChange` | `{ checked: boolean; value?: string; }` | Change event |
| `switchConfirm` | `{ confirmed: boolean; value: boolean; }` | Confirmation event |
| `switchFocus` | `void` | Focus event |
| `switchSuccess` | `void` | Success feedback event |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `shake` | `shake() => Promise<void>` | Triggers a visual 'Shake' effect and haptic vibration pattern to indicate a rejected action or validation failure. |
| `stopAsyncLoading` | `stopAsyncLoading() => Promise<void>` | Public method to clear the internal loading state (Used after an async operation completes) |

## CSS parts

`container`, `label`, `thumb`, `track`, `wrapper`
