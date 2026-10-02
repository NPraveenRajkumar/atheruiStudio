# ui-list-group

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `badge` | `string` | `''` |  |
| badge-color (`badgeColor`) | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'default'` |  |
| `collapsible` | `boolean` | `false` |  |
| `dense` | `boolean` | `false` |  |
| `divider` | `boolean` | `true` |  |
| `expanded` | `boolean` | `true` |  |
| `icon` | `string` | `''` |  |
| `label` | `string` | `''` |  |
| `level` | `number` | `0` |  |
| `selectable` | `boolean` | `false` |  |
| `selected` | `boolean` | `false` |  |
| `skeleton` | `boolean` | `false` |  |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `groupClick` | `{ selected: boolean; expanded: boolean; }` |  |
| `groupToggle` | `{ expanded: boolean; }` |  |
