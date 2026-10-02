# ui-workspace-manager

Shadow DOM: no

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `direction` | `"horizontal" \| "vertical"` | `'horizontal'` | Horizontal or vertical split for top-level regions |
| `regions` | `LayoutRegionConfig[] \| string` | `[]` | Initial regions configuration |
| save-state (`saveState`) | `boolean` | `true` | Persist sizes between reloads |
| state-key (`stateKey`) | `string` | `'layout-manager-state'` | LocalStorage key when saveState=true |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `layoutChange` | `{ regions: RegionState[]; }` |  |
| `panelAdded` | `PanelState` |  |
| `panelDocked` | `{ panelId: string; regionId: string; }` |  |
| `panelMaximized` | `{ panelId: string; }` |  |
| `panelMoved` | `{ panelId: string; from: string; to: string; }` |  |
| `panelPoppedOut` | `{ panelId: string; }` |  |
| `panelRemoved` | `{ panelId: string; regionId: string; }` |  |
| `panelRestored` | `{ panelId: string; }` |  |
| `regionAdded` | `{ regionId: string; title: string; }` |  |
| `regionRemoved` | `{ regionId: string; }` |  |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `addPanel` | `addPanel(opts: PanelOptions) => Promise<string>` | Add a panel into a region. If element is provided, it will be moved into the panel content. |
| `addRegion` | `addRegion(opts: { id?: string; title?: string; size?: number; position?: "start" \| "end"; type?: RegionType; skipNormalization?: boolean; }` | Add a new region to the root layout |
| `clearAllRegions` | `clearAllRegions() => Promise<void>` | Clear all regions (reset to empty layout) |
| `closeAllPanels` | `closeAllPanels(regionId?: string) => Promise<void>` | Close all panels in a specific region |
| `createRegion` | `createRegion(config: LayoutRegionConfig) => Promise<void>` | Create a new region |
| `dockPanel` | `dockPanel(panelId: string, regionId: string, index?: number) => Promise<void>` | Dock a popped-out panel back into a region |
| `getLayoutState` | `getLayoutState() => Promise<{ root: RegionState; panels: { [id: string]: PanelState; }; }>` | Get the current layout state |
| `loadLayout` | `loadLayout(config: { direction?: Direction; clearStorage?: boolean; stateKey?: string; regions: Array<{ id: string; title?: string; size?: n` | Atomically load a complete layout: regions + panels in one shot. Preferred over setting the `regions` prop + calling addPanel separately. |
| `maximizePanel` | `maximizePanel(panelId: string) => Promise<void>` | Maximize a panel to fill the entire layout |
| `mergeRegion` | `mergeRegion(regionId: string) => Promise<void>` | Merge a split region back to a single leaf (left child remains) |
| `movePanel` | `movePanel(panelId: string, targetRegionId: string, index?: number) => Promise<void>` | Move a panel to another region |
| `normalizeRegionSizes` | `normalizeRegionSizes() => Promise<void>` | Normalize region sizes to sum to 100% |
| `popoutPanel` | `popoutPanel(panelId: string, position?: { x: number; y: number; width?: number; height?: number; }) => Promise<void>` | Popout a panel (make floating). Removes from region but keeps alive in overlay |
| `removePanel` | `removePanel(panelId: string) => Promise<void>` | Remove a panel by id |
| `removeRegion` | `removeRegion(regionId: string) => Promise<void>` | Remove a region (panels will be moved to the nearest region) |
| `restorePanel` | `restorePanel() => Promise<void>` | Restore a maximized panel to normal layout |
| `splitRegion` | `splitRegion(regionId: string, direction?: Direction) => Promise<void>` | Split a leaf region into two child regions |
