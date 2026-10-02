# ui-dialog-header

Dialog Header — Feedback & Overlay, Stable.

Dialog header

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `avatar` | `string` | `''` | User avatar URL to show before the title |
| dialog-title (`dialogTitle`) | `string` | `''` | Dialog title |
| `icon` | `string` | `''` | Icon name to show before the title |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'default'` | Library to use for icons |
| icon-position (`iconPosition`) | `"left" \| "right"` | `'left'` | Position of the icon/avatar relative to the title |
| menu-icon (`menuIcon`) | `string` | `'more-horizontal'` | Icon name for the menu trigger button. Defaults to 'more-horizontal' (⋯). |
| menu-items (`menuItems`) | `any[] \| string` | `[]` | Menu items for the built-in context menu. |
| menu-title (`menuTitle`) | `string` | `'Menu'` | Tooltip/title for the menu trigger button. |
| show-back (`showBack`) | `boolean` | `false` | Whether to show back button |
| show-close (`showClose`) | `boolean` | `true` | Whether to show close button |
| show-maximize (`showMaximize`) | `boolean` | `true` | Whether to show maximize button |
| show-menu (`showMenu`) | `boolean` | `false` | Whether to show menu button |
| show-minimize (`showMinimize`) | `boolean` | `true` | Whether to show minimize button |
| `status` | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'default'` | Dialog status/type |
| `subtitle` | `string` | `''` | Subtitle text |
| title-tag (`titleTag`) | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6"` | `'h3'` | Semantic tag for the title (h1-h6) |
| `type` | `"alert" \| "confirm" \| "default" \| "delete" \| "drawer" \| "fullscreen" \| "messagebox" \| "modal" \| "pre-session" \|` | `'modal'` | Dialog type (messagebox etc) |
| `variant` | `"bordered" \| "borderless" \| "color" \| "danger" \| "dark" \| "default" \| "dots-only" \| "elevated" \| "error" \| "fil` | `'outlined'` | Dialog variant style |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `back` | `any` | Event emitted when back button is clicked |
| `close` | `any` | Event emitted when close button is clicked |
| `maximize` | `any` | Event emitted when maximize button is clicked |
| `menu` | `any` | Event emitted when menu button is clicked |
| `minimize` | `any` | Event emitted when minimize button is clicked |

## CSS parts

`close-btn`
