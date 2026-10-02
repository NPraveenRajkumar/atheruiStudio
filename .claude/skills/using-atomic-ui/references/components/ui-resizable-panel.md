# ui-resizable-panel

Shadow DOM: no

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `animated` | `boolean` | `false` |  |
| `direction` | `"horizontal" \| "vertical"` | `'horizontal'` |  |
| handle-color (`handleColor`) | `string` | `'#d1d5db'` |  |
| handle-hover-color (`handleHoverColor`) | `string` | `'#3DCD58'` |  |
| handle-size (`handleSize`) | `number` | `8` |  |
| max-panel-size (`maxPanelSize`) | `number` | `-1` |  |
| min-panel-size (`minPanelSize`) | `number` | `10` |  |
| `panels` | `PanelConfig[] \| string` | `[]` |  |
| save-state (`saveState`) | `boolean` | `false` |  |
| show-handle-icon (`showHandleIcon`) | `boolean` | `true` |  |
| snap-threshold (`snapThreshold`) | `number` | `30` |  |
| snap-to-edge (`snapToEdge`) | `boolean` | `false` |  |
| state-key (`stateKey`) | `string` | `'resizable-panel-state'` |  |
| `theme` | `"auto" \| "dark" \| "default" \| "green" \| "light"` | `'light'` |  |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `panelCollapse` | `{ panel: PanelConfig; collapsed: boolean; }` |  |
| `panelResize` | `{ panels: PanelConfig[]; index: number; }` |  |
| `resizeEnd` | `{ index: number; sizes: number[]; }` |  |
| `resizeStart` | `{ index: number; }` |  |
