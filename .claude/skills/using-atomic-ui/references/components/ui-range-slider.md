# ui-range-slider

Range Slider — Forms & Input, Stable.

Range slider control

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `circle` | `boolean` | `false` | Circle variant (aesthetic) |
| `color` | `string \| { from: string; to: string; } \| { min: number; max: number; color: string; }[]` | `'#3bf673'` | Color of the slider (string, {from: string, to: string}, or array of ranges [{min: number, max: number, color:string}]) |
| custom-steps (`customSteps`) | `number[] \| string` | `[]` | Custom step marks (non-linear scaling) |
| `disabled` | `boolean` | `false` | Disabled state |
| display-format (`displayFormat`) | `string` | `''` | Display format function or string |
| end-icon (`endIcon`) | `string` | `''` | End icon/text |
| end-value (`endValue`) | `number` | `75` | Range mode - end value |
| gradient-track (`gradientTrack`) | `boolean` | `false` | Use a gradient fill for the range track |
| hide-range (`hideRange`) | `boolean` | `false` | Hide the colored range track portion |
| input-sync (`inputSync`) | `boolean` | `false` | Show an editable number input synced to the slider value |
| `label` | `string` | `''` | Label displayed above the slider |
| `marks` | `SliderMark[] \| string` | `[]` | Custom marks |
| `max` | `number` | `100` | Maximum value |
| `min` | `number` | `0` | Minimum value |
| min-range (`minRange`) | `number` | `0` | Minimum distance between thumbs in range mode |
| prefix-text (`prefixText`) | `string` | `''` | Prefix string displayed before the value (e.g. '$') |
| `range` | `boolean` | `false` | Enable range mode (two thumbs) |
| restricted-values (`restrictedValues`) | `number[] \| string` | `[]` | Restricted values (only allow specific values) |
| `rtl` | `boolean` | `false` | RTL support |
| show-marks (`showMarks`) | `boolean` | `false` | Show marks |
| show-min-max (`showMinMax`) | `boolean` | `false` | Show min and max labels at the ends of the track |
| show-tooltip (`showTooltip`) | `boolean` | `true` | Show value tooltip |
| show-value (`showValue`) | `boolean` | `true` | Show current value label |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small" \| "xl" \| "xs" \| "xxl" \| "xxs" \| "xxxl" \| "xxxs` | `'md'` | Size variant |
| start-icon (`startIcon`) | `string` | `''` | Start icon/text |
| start-value (`startValue`) | `number` | `25` | Range mode - start value |
| `step` | `number` | `1` | Step increment |
| suffix-text (`suffixText`) | `string` | `''` | Suffix string displayed after the value (e.g. '%', 'px') |
| tooltip-always-visible (`tooltipAlwaysVisible`) | `boolean` | `false` | Tooltip always visible |
| track-color (`trackColor`) | `string` | `'var(--border-default, #e5e7eb)'` | Track color |
| `value` | `number` | `50` | Current value (single slider) |
| `variant` | `"" \| "danger" \| "detailed" \| "glass" \| "info" \| "primary" \| "purple" \| "success" \| "warning"` | `''` | Semantic color variant or aesthetic variant |
| `vertical` | `boolean` | `false` | Vertical orientation |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `sliderChange` | `number \| { start: number; end: number; }` | Emitted when value changes |
| `sliderDragEnd` | `void` | Emitted on drag end |
| `sliderDragStart` | `void` | Emitted on drag start |
