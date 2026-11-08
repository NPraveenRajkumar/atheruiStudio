# ui-number-input

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Disabled state |
| error-text (`errorText`) | `string` | `''` | Error text — also sets error state |
| full-width (`fullWidth`) | `boolean` | `false` | Full width |
| helper-text (`helperText`) | `string` | `''` | Helper text below input |
| `label` | `string` | `''` | Label text |
| `max` | `number` | `Infinity` | Maximum value |
| `min` | `number` | `-Infinity` | Minimum value |
| `name` | `string` | — | Name of the input |
| `placeholder` | `string` | `'0'` | Placeholder |
| `precision` | `number` | `-1` | Number of decimal places (-1 = no rounding) |
| prefix-icon (`prefixIcon`) | `string` | `''` | Prefix icon to display |
| prefix-text (`prefixText`) | `string` | `''` | Prefix text/symbol (e.g. '$') |
| `readonly` | `boolean` | `false` | Readonly state |
| `rtl` | `boolean` | `false` | RTL support |
| scroll-wheel (`scrollWheel`) | `boolean` | `true` | Keyboard shortcut: scroll wheel to change value |
| show-stepper (`showStepper`) | `boolean` | `false` | Show stepper buttons |
| show-type-icon (`showTypeIcon`) | `boolean` | `false` | Whether to show the type-based prefix icon (e.g. hash for numbers) |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small" \| "xl" \| "xs" \| "xxl" \| "xxs" \| "xxxl" \| "xxxs` | `'md'` | Size variant |
| `step` | `number` | `1` | Step amount |
| stepper-layout (`stepperLayout`) | `"none" \| "right" \| "sides"` | `'sides'` | Controls layout of stepper: 'sides' \| 'right' \| 'none' |
| suffix-text (`suffixText`) | `string` | `''` | Suffix text/symbol (e.g. 'kg') |
| `value` | `number` | `0` | Current value |
| `variant` | `"default" \| "plain"` | `'default'` | Style variant |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `numberChange` | `number` |  |
| `numberInput` | `number` |  |
