# ui-radio

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| aria-described-by (`ariaDescribedBy`) | `string` | `''` |  |
| aria-label (`ariaLabel`) | `string` | `''` |  |
| `badge` | `string` | — |  |
| `checked` | `boolean` | `false` |  |
| `color` | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'primary'` |  |
| custom-class (`customClass`) | `string` | — |  |
| custom-icon (`customIcon`) | `string` | `''` |  |
| custom-icon-library (`customIconLibrary`) | `string` | `'lucide'` | High-Fidelity: Library for custom icons |
| custom-image (`customImage`) | `string` | `''` | High-Fidelity: Custom image for dot |
| `description` | `string` | `''` |  |
| description-position (`descriptionPosition`) | `"bottom" \| "side"` | `'bottom'` | Position of the descriptive text relative to the label |
| `disabled` | `boolean` | `false` |  |
| enable-animation (`enableAnimation`) | `boolean` | `true` |  |
| `glow` | `boolean` | `false` | High-Fidelity: Glow effect when checked |
| `haptic` | `boolean` | `false` | High-Fidelity: Enable haptic feedback |
| haptic-intensity (`hapticIntensity`) | `"heavy" \| "light" \| "md"` | `'light'` | High-Fidelity: Haptic intensity |
| `invalid` | `boolean` | `false` |  |
| is-button (`isButton`) | `boolean` | `false` |  |
| `label` | `string` | `''` |  |
| label-position (`labelPosition`) | `"bottom" \| "left" \| "right" \| "top"` | `'right'` |  |
| `name` | `string` | `''` |  |
| radio-tab-index (`radioTabIndex`) | `number` | `0` |  |
| `readonly` | `boolean` | `false` |  |
| `required` | `boolean` | `false` |  |
| `reveal` | `"fade-in" \| "none" \| "slide-up" \| "zoom"` | `'none'` | Entry animation when mounting |
| reveal-delay (`revealDelay`) | `number` | `0` | Delay for entry animation (ms) |
| ripple-effect (`rippleEffect`) | `boolean` | `true` |  |
| `rtl` | `boolean` | `false` |  |
| show-dot (`showDot`) | `boolean` | `true` |  |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small" \| "xl" \| "xs" \| "xxl" \| "xxs" \| "xxxl" \| "xxxs` | `'md'` |  |
| `skeleton` | `boolean` | `false` |  |
| `tooltip` | `string` | — |  |
| tooltip-position (`tooltipPosition`) | `"bottom" \| "left" \| "right" \| "top"` | `'top'` |  |
| `value` | `string` | `''` |  |
| `variant` | `"bordered" \| "card" \| "default" \| "glass" \| "raised" \| "underlined"` | `'default'` |  |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `analyticsEvent` | `{ checked: boolean; value: string; }` |  |
| `radioBlur` | `void` |  |
| `radioChange` | `{ checked: boolean; value: string; }` |  |
| `radioFocus` | `void` |  |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `checkValidity` | `checkValidity() => Promise<boolean>` | Checks the component's validity. |
| `reportValidity` | `reportValidity() => Promise<boolean>` | Reports the component's validity. |
| `setFocus` | `setFocus() => Promise<void>` |  |
