# layout-manager

Shadow DOM: no

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| initial-layout (`initialLayout`) | `string` | — |  |
| `theme` | `string` | — |  |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `addPanel` | `addPanel(cfg: PanelConfig) => Promise<string>` |  |
| `loadLayout` | `loadLayout(json: string) => Promise<boolean>` |  |
| `removePanel` | `removePanel(id: string) => Promise<boolean>` |  |
| `saveLayout` | `saveLayout() => Promise<string>` |  |
| `splitPanel` | `splitPanel(targetPanelId: string, direction: Orientation, newPanel: PanelConfig) => Promise<string>` |  |
