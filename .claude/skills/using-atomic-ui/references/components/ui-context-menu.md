# ui-context-menu

Context Menu — Feedback & Overlay, Stable.

Right-click menu

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `beforeClose` | `() => boolean \| Promise<boolean>` | — | Hook invoked before menu closes; return false or rejected Promise to cancel |
| `beforeOpen` | `() => boolean \| Promise<boolean>` | — | Hook invoked before menu opens; return false or rejected Promise to cancel |
| close-on-select (`closeOnSelect`) | `boolean` | `true` | Close menu when selecting an item |
| hover-close-delay (`hoverCloseDelay`) | `number` | `50` | Delay for closing menu on mouse leave (ms) |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'default'` | Default library for icons |
| item-height (`itemHeight`) | `number` | `48` | Fixed per-item height (px) used when virtualization is active so offsets can be calculated. |
| `items` | `ContextMenuItem[] \| string` | `[]` | Menu items, can be JSON string or array |
| `loadItems` | `(offset: number, limit: number) => Promise<ContextMenuItem[]>` | — | Optional async loader for paginated/virtualized root items (return `[]` when no further data is available). |
| long-press-duration (`longPressDuration`) | `number` | `500` | Duration needed for a touch to be treated as a long press (ms) |
| open-on (`openOn`) | `"click" \| "contextmenu" \| "hover"` | `'contextmenu'` | Listen trigger on: contextmenu, click, hover |
| persist-state (`persistState`) | `boolean` | `false` | Keep checkbox/radio state even if the menu re-opens |
| `placement` | `"bottom" \| "left" \| "right" \| "top"` | `'bottom'` | Placement of the menu relative to target: 'bottom' (default), 'top', 'right', 'left' |
| reserve-icon-space (`reserveIconSpace`) | `boolean` | `true` |  |
| selected-id (`selectedId`) | `string` | — | ID of the currently selected item (for persistent highlighting) |
| submenu-open-delay (`submenuOpenDelay`) | `number` | `120` | Delay for submenu opening on hover (ms) |
| `target` | `string` | — | Optional CSS selector for a target element to attach the context menu |
| target-only (`targetOnly`) | `boolean` | `false` | Attach to slotted target only; otherwise listen at document |
| `theme` | `"dark" \| "green" \| "light"` | `'light'` | Reserve space for icons area even if item has no icon |
| viewport-padding (`viewportPadding`) | `number` | `16` | Pixel padding from viewport edges |
| visible-count (`visibleCount`) | `number` | `0` | Set to a positive value (with `itemHeight`) to enable virtualized rendering of the root list. |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `itemSelect` | `{ item: ContextMenuItem; path: number[]; }` | Emits when an item is selected |
| `longPress` | `Point` | Emits when the menu opens via a long press |
| `menuItemClick` | `{ item: ContextMenuItem; path: number[]; }` | Alias event used by existing demos |
| `menuToggle` | `boolean` | Emits when menu toggles |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `close` | `close() => Promise<void>` |  |
| `openAt` | `openAt(point: Point) => Promise<void>` |  |
