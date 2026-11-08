# ui-checkbox

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| aria-described-by (`ariaDescribedBy`) | `string` | `''` |  |
| aria-label (`ariaLabel`) | `string` | `''` |  |
| `badge` | `string` | — |  |
| checkbox-tab-index (`checkboxTabIndex`) | `number` | `0` |  |
| `checked` | `boolean` | `false` |  |
| `color` | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'primary'` |  |
| `confetti` | `boolean` | `false` | High-Fidelity: Trigger confetti burst on check |
| custom-check-icon (`customCheckIcon`) | `string` | `''` |  |
| custom-class (`customClass`) | `string` | — |  |
| custom-icon-library (`customIconLibrary`) | `string` | `'lucide'` | High-Fidelity: Library for custom icons |
| custom-image (`customImage`) | `string` | `''` | High-Fidelity: Custom Image instead of check |
| custom-indeterminate-icon (`customIndeterminateIcon`) | `string` | `''` |  |
| `description` | `string` | `''` | High-Fidelity: Secondary description text |
| description-position (`descriptionPosition`) | `"below" \| "right"` | `'below'` | Position of the descriptive text relative to the label |
| `disabled` | `boolean` | `false` |  |
| enable-animation (`enableAnimation`) | `boolean` | `true` |  |
| error-message (`errorMessage`) | `string` | `''` |  |
| `glow` | `boolean` | `false` | High-Fidelity: Glow effect when checked |
| `haptic` | `boolean` | `false` | High-Fidelity: Enable haptic feedback |
| haptic-intensity (`hapticIntensity`) | `"heavy" \| "light" \| "md"` | `'light'` | High-Fidelity: Haptic intensity |
| helper-text (`helperText`) | `string` | `''` |  |
| `indeterminate` | `boolean` | `false` |  |
| `invalid` | `boolean` | `false` |  |
| is-button (`isButton`) | `boolean` | `false` |  |
| `label` | `string` | `''` |  |
| label-clickable (`labelClickable`) | `boolean` | `true` |  |
| label-position (`labelPosition`) | `"bottom" \| "left" \| "right" \| "top"` | `'right'` |  |
| `name` | `string` | `''` |  |
| `readonly` | `boolean` | `false` |  |
| `required` | `boolean` | `false` |  |
| `reveal` | `"fade-in" \| "none" \| "slide-up" \| "zoom"` | `'none'` | Entry animation when mounting |
| reveal-delay (`revealDelay`) | `number` | `0` | Delay for entry animation (ms) |
| ripple-effect (`rippleEffect`) | `boolean` | `true` |  |
| `rtl` | `boolean` | `false` |  |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small" \| "xl" \| "xs" \| "xxl" \| "xxs" \| "xxxl" \| "xxxs` | `'md'` |  |
| `skeleton` | `boolean` | `false` |  |
| `tooltip` | `string` | — |  |
| tooltip-position (`tooltipPosition`) | `"bottom" \| "left" \| "right" \| "top"` | `'top'` |  |
| `value` | `string` | `''` |  |
| `variant` | `"button" \| "chip" \| "default" \| "filled" \| "round-color" \| "rounded" \| "square" \| "tick"` | `'default'` |  |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `analyticsEvent` | `{ checked: boolean; value: string; indeterminate: boolean; }` |  |
| `checkboxBlur` | `void` |  |
| `checkboxChange` | `{ checked: boolean; value: string; indeterminate: boolean; }` |  |
| `checkboxFocus` | `void` |  |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `setFocus` | `setFocus() => Promise<void>` |  |
