# ui-speedometer

Speedometer — Utilities & Actions, Stable.

Gauge display

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| animation-duration (`animationDuration`) | `number` | `1000` | Animation duration in milliseconds |
| custom-labels (`customLabels`) | `string` | `''` | Custom text labels mapping (value -> label). JSON string. Example: "{0: 'Low', 50: 'Med', 100: 'High'}" |
| end-angle (`endAngle`) | `number` | `135` | End angle in degrees (default 135 for 270° arc) |
| gradient-colors (`gradientColors`) | `string` | `''` | Gradient colors for the arc |
| `interactive` | `boolean` | `false` | Enable interactive mode (drag needle to set value) |
| `label` | `string` | `''` | Label text displayed below the value |
| max-value (`maxValue`) | `number` | `100` | Maximum value |
| min-value (`minValue`) | `number` | `0` | Minimum value |
| needle-color (`needleColor`) | `string` | `'#1f2937'` | Needle color |
| needle-shape (`needleShape`) | `"arrow" \| "line" \| "triangle"` | `'triangle'` | Needle shape: 'triangle', 'arrow', 'line' |
| `ranges` | `string` | `'[]'` | Color ranges as JSON string: [{ min, max, color }] |
| secondary-value (`secondaryValue`) | `number` | — | Secondary value (optional) for comparison, displays as a ghost needle |
| show-percentage (`showPercentage`) | `boolean` | `false` | Show percentage instead of actual value |
| show-ticks (`showTicks`) | `boolean` | `true` | Show tick marks |
| `size` | `number` | `200` | Size of the speedometer in pixels |
| start-angle (`startAngle`) | `number` | `-135` | Start angle in degrees (default -135 for 270° arc) |
| tick-count (`tickCount`) | `number` | `10` | Number of major ticks |
| `unit` | `string` | `''` | Unit text (e.g., 'km/h', 'mph', '%') |
| `value` | `number` | `0` | Current value to display |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `valueChange` | `number` | Emitted when the value changes in interactive mode |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `exportImage` | `exportImage(filename?: string, format?: "png" \| "svg") => Promise<void>` |  |
