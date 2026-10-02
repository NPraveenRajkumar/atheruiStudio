# ui-smart-context-menu

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "fontawesome" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "se"` | `'default'` |  |
| `items` | `MenuItem[] \| string` | `[]` | Menu items, can be JSON string or array of MenuItem |
| `target` | `string` | — |  |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `menuItemClick` | `{ label: string; item: MenuItem; }` | Event emitted when a menu item is clicked |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `hide` | `hide() => Promise<void>` |  |
| `show` | `show(x: number, y: number) => Promise<void>` |  |
