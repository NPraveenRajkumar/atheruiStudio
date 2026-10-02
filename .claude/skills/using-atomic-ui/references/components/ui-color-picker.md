# ui-color-picker

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `compact` | `boolean` | `false` | Compact trigger — shows only the color swatch, no hex label or arrow |
| `disabled` | `boolean` | `false` | Disabled |
| `format` | `"hex" \| "hsl" \| "hsla" \| "rgb" \| "rgba"` | `'hex'` | Format: 'hex' \| 'rgb' \| 'rgba' \| 'hsl' \| 'hsla' |
| `formats` | `string \| string[]` | `''` |  |
| `inline` | `boolean` | `false` | Show as inline (no trigger button) |
| `label` | `string` | `''` | Label |
| `name` | `string` | `''` | Form internal name |
| `required` | `boolean` | `false` | Required |
| show-alpha (`showAlpha`) | `boolean` | `false` |  |
| show-color-name (`showColorName`) | `boolean` | `true` | Show color name display |
| show-eye-dropper (`showEyeDropper`) | `boolean` | `true` | Show eye dropper button (modern browsers only) |
| show-gradient (`showGradient`) | `boolean` | `false` | Enable gradient mode |
| show-hex (`showHex`) | `boolean` | `true` | Show hex input field |
| show-hsl (`showHsl`) | `boolean` | `false` | Show HSL input field |
| show-hsla (`showHsla`) | `boolean` | `false` | Show HSLA input field |
| show-recent (`showRecent`) | `boolean` | `true` | Show recently picked colors history |
| show-rgb (`showRgb`) | `boolean` | `false` | Show RGB input field |
| show-rgba (`showRgba`) | `boolean` | `false` | Show RGBA input field |
| show-swatches (`showSwatches`) | `boolean` | `true` | Show preset swatches |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small"` | `'md'` | Size |
| `swatches` | `string \| string[]` | `[]` | Custom swatches (hex strings) |
| `value` | `string` | `'#3bf673'` | Current hex color value |
| `variant` | `"default" \| "hue" \| "input"` | `'default'` | Display variant: full picker, hue slider only, or direct inputs |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `colorChange` | `string` |  |
