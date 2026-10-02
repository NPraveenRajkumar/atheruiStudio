# ui-splitter

Splitter — Utilities & Actions, Stable.

Resizable splitter

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `animated` | `boolean` | `true` |  |
| `direction` | `"horizontal" \| "vertical"` | `'horizontal'` |  |
| double-click-collapse (`doubleClickCollapse`) | `boolean` | `true` |  |
| `elevated` | `boolean` | `false` |  |
| gutter-color (`gutterColor`) | `string` | `'var(--border-default, #e5e7eb)'` |  |
| gutter-hover-color (`gutterHoverColor`) | `string` | `'#0de44dff'` |  |
| gutter-size (`gutterSize`) | `number` | `8` |  |
| keyboard-navigation (`keyboardNavigation`) | `boolean` | `true` |  |
| `panels` | `SplitterPanel[]` | `[]` |  |
| persist-state (`persistState`) | `boolean` | `false` |  |
| `rounded` | `boolean` | `false` |  |
| `rtl` | `boolean` | `false` |  |
| show-gutter-icon (`showGutterIcon`) | `boolean` | `true` |  |
| `sizes` | `number[]` | `[]` |  |
| snap-threshold (`snapThreshold`) | `number` | `20` |  |
| storage-key (`storageKey`) | `string` | `'splitter-state'` |  |
| `theme` | `"auto" \| "dark" \| "default" \| "green" \| "light"` | `'auto'` |  |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `panelCollapse` | `{ index: number; collapsed: boolean; }` |  |
| `sizeChange` | `{ sizes: number[]; index: number; }` |  |
| `splitterDragEnd` | `{ index: number; sizes: number[]; }` |  |
| `splitterDragStart` | `{ index: number; }` |  |
