# ui-horizontal-nav

Horizontal Nav — Navigation & Layout, Stable.

Horizontal navigation

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| active-id (`activeId`) | `string` | — | Active item ID |
| `align` | `"center" \| "end" \| "space-between" \| "start"` | `'start'` | Alignment of items |
| display-as (`displayAs`) | `"buttons" \| "list"` | `'buttons'` | Display format: 'buttons' (default) or 'list' |
| full-width (`fullWidth`) | `boolean` | `false` | Full width items |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "fontawesome" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "se"` | `'default'` | Default library for icons |
| `items` | `HorizontalNavItem[] \| string` | `[]` | Navigation items |
| `scrollable` | `boolean` | `false` | Enable scrolling for overflow items |
| show-divider (`showDivider`) | `boolean` | `false` | Show divider between items |
| `size` | `"lg" \| "md" \| "sm"` | `'md'` | Size of navigation items |
| `variant` | `"default" \| "pills" \| "segmented" \| "underline"` | `'default'` | Variant style |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `navItemClick` | `HorizontalNavItem` | Event emitted when a nav item is clicked |
