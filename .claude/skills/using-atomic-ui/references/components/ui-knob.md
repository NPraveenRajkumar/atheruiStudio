# ui-knob

Knob — Forms & Input, Stable.

Knob control

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| allow-input (`allowInput`) | `boolean` | `false` | Allow double-click to edit value manually |
| `color` | `string \| { from?: string; to?: string; }` | `'#3bf673'` | Color of the active arc (string or {from: string, to: string}) |
| `disabled` | `boolean` | `false` | Disabled state |
| enable-wheel (`enableWheel`) | `boolean` | `true` | Enable mouse wheel rotation control |
| end-angle (`endAngle`) | `number` | `405` | End angle in degrees |
| `gradient` | `boolean` | `false` | Enable gradient for the active arc |
| `max` | `number` | `100` | Maximum value |
| `min` | `number` | `0` | Minimum value |
| `name` | `string` | — | Name of the form control |
| `readonly` | `boolean` | `false` | Read-only state |
| show-labels (`showLabels`) | `boolean` | `false` | Show numeric labels around the knob |
| show-min-max (`showMinMax`) | `boolean` | `false` | Show min/max labels |
| show-ticks (`showTicks`) | `boolean` | `false` | Show tick marks along the arc (useful for speedometer-like gauges) |
| show-value (`showValue`) | `boolean` | `true` | Show value label |
| `size` | `number` | `120` | Size of the knob |
| `snap` | `boolean` | `false` | Snap to step intervals |
| start-angle (`startAngle`) | `number` | `135` | Start angle in degrees (0 = top, 90 = right) |
| `step` | `number` | `1` | Step increment |
| stroke-width (`strokeWidth`) | `number` | `8` | Stroke width |
| tick-color (`tickColor`) | `string` | `'var(--text-muted, #94a3b8)'` | Tick color |
| tick-count (`tickCount`) | `number` | `10` | Number of tick marks to render along the arc |
| tick-length (`tickLength`) | `number` | `0.1` | Tick length factor relative to radius (0-1) |
| track-color (`trackColor`) | `string` | `'var(--border-default, #e2e8f0)'` | Color of the track |
| `value` | `number` | `0` | Current value |
| value-suffix (`valueSuffix`) | `string` | `''` | Custom value suffix (e.g., '%', '°', 'dB') |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `knobChange` | `number` | Event emitted when value changes |
| `knobInput` | `number` | Event emitted while dragging |
