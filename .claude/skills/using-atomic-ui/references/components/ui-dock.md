# ui-dock

Dock — Navigation & Layout, Stable.

Docking system

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| blur-effect (`blurEffect`) | `boolean` | `true` |  |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'default'` | Default library for icons |
| `items` | `string` | `'[]'` |  |
| `magnify` | `boolean` | `true` |  |
| persist-key (`persistKey`) | `string` | `''` | localStorage key for persisting drag-reorder. Empty string disables persistence. |
| `position` | `"bottom" \| "left" \| "right" \| "top"` | `'bottom'` |  |
| show-labels (`showLabels`) | `boolean` | `true` |  |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small"` | `'md'` |  |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `dockItemClick` | `DockItemClickEvent` |  |
| `itemsOrderChange` | `DockItem[]` |  |
