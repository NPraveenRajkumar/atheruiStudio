# ui-timeline

Timeline — Advanced Components, Stable.

Timeline view

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `align` | `"alternate" \| "bottom" \| "center" \| "left" \| "right" \| "top"` | `'left'` | Alignment/Positioning |
| animate-on-scroll (`animateOnScroll`) | `boolean` | `false` |  |
| `clickable` | `boolean` | `false` | Whether items are interactive/clickable (Premium) |
| `columns` | `number` | `4` |  |
| `compact` | `boolean` | `false` |  |
| date-format (`dateFormat`) | `string` | `'short'` |  |
| dot-color (`dotColor`) | `string` | `'#3bf673'` |  |
| dot-size (`dotSize`) | `number` | `12` |  |
| `events` | `TimelineEvent[] \| string` | `[]` | Events definition |
| `flow` | `"linear" \| "non-linear"` | `'linear'` | Flow type |
| icon-position (`iconPosition`) | `"bottom" \| "center" \| "top"` | `'center'` |  |
| line-color (`lineColor`) | `string` | `'#3bf673'` |  |
| line-width (`lineWidth`) | `number` | `2` |  |
| `marker` | `"dot" \| "icon" \| "number"` | `'dot'` | Marker Type |
| `mode` | `"horizontal" \| "vertical"` | `'vertical'` | Layout mode |
| `multiline` | `boolean` | `false` | Multi-line wrapping |
| `pending` | `boolean` | `false` | Display a pending state at the end (dashed line) |
| `reverse` | `boolean` | `false` | Reverse the order of events |
| `searchable` | `boolean` | `false` | Enable integrated search filtering (Premium) |
| show-dates (`showDates`) | `boolean` | `true` |  |
| show-dots (`showDots`) | `boolean` | `true` |  |
| show-line (`showLine`) | `boolean` | `true` |  |
| `theme` | `TimelineTheme` | — | Theme variables |
| `variant` | `"default" \| "dots-only" \| "filled" \| "minimal" \| "outlined" \| "panel"` | `'default'` | Visual Variant |
| `wrap` | `boolean` | `false` |  |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `itemClick` | `TimelineEvent` | Emitted when an item is clicked |
| `itemVisible` | `{ item: TimelineEvent; index: number; }` | Emitted when a timeline item becomes visible (for animation) |
