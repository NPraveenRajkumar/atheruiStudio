# ui-meter-group

Meter Group — Data Display, Stable.

Progress meters

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `animated` | `boolean` | `true` | Enable animations for value changes |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'default'` | Default library for icons |
| `interactive` | `boolean` | `false` | Interactive mode (clickable segments/legend) |
| `max` | `number` | `100` | Maximum value |
| `min` | `number` | `0` | Minimum value |
| `orientation` | `"horizontal" \| "vertical"` | `'horizontal'` | Orientation of the meter |
| `shape` | `"circle" \| "line"` | `'line'` | Shape of the meter |
| show-labels (`showLabels`) | `boolean` | `true` | Show labels |
| show-legend (`showLegend`) | `boolean` | `false` | Show legend |
| show-values (`showValues`) | `boolean` | `true` | Show values |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small"` | `'md'` | Height/thickness of the meter |
| `values` | `MeterValue[] \| string` | `[]` | Array of meter values |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `meterClick` | `MeterValue` | Emitted when a meter segment or legend item is clicked |
