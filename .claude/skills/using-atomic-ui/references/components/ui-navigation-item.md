# ui-navigation-item

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `active` | `boolean` | `false` |  |
| active-id (`activeId`) | `string` | `''` |  |
| animation-duration (`animationDuration`) | `number` | `350` |  |
| `collapsed` | `boolean` | `false` |  |
| force-popover (`forcePopover`) | `boolean` | `false` |  |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'default'` |  |
| `indentation` | `number` | `0` |  |
| `item` | `NavigationItem` | — |  |
| `open` | `boolean` | `false` |  |
| `orientation` | `"horizontal" \| "vertical"` | `'vertical'` |  |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `navItemClick` | `NavigationItem` |  |
| `popoverStateChange` | `boolean` |  |
| `submenuToggle` | `string` |  |
