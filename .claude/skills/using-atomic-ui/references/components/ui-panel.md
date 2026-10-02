# ui-panel

Panel — Data Display, Stable.

Panel component

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| animation-duration (`animationDuration`) | `string` | `'300ms'` | Animation duration for collapse/expand |
| animation-type (`animationType`) | `"fade" \| "none" \| "slide"` | `'slide'` | Animation type for collapse/expand |
| `aura` | `boolean` | `false` | Dynamic flowing glow effect (Aura) |
| background-color (`backgroundColor`) | `string` | `'white'` | Background color of the panel |
| `badge` | `number \| string` | `''` | Badge content (number or text) |
| badge-variant (`badgeVariant`) | `"count" \| "dot" \| "text"` | `'count'` | Badge variant style |
| `bounds` | `"none" \| "viewport"` | `'none'` | Limit dragging within the viewport |
| `collapsed` | `boolean` | `false` | Whether the panel is currently collapsed |
| `dismissible` | `boolean` | `false` | Close panel when clicking on backdrop |
| drag-physics (`dragPhysics`) | `boolean` | `false` | Apply 3D tilt physics during drag |
| edge-snapping (`edgeSnapping`) | `boolean` | `false` | Snap to window edges when dragging close to them |
| `elevation` | `number` | `2` | Elevation level (0-5) for shadow depth |
| enable-search (`enableSearch`) | `boolean` | `false` | Integrated search bar in header |
| `glass` | `boolean` | `false` | Glassmorphism effect |
| grid-size (`gridSize`) | `number` | `20` | Size of the grid for snapping |
| `height` | `string` | `'auto'` | Panel height |
| `icon` | `string` | `''` | Panel icon to show in header |
| is-draggable (`isDraggable`) | `boolean` | `false` | Draggable panel |
| keyboard-nav (`keyboardNav`) | `boolean` | `true` | Enable keyboard navigation |
| `loading` | `boolean` | `false` | Whether the panel is in loading state |
| max-height (`maxHeight`) | `string` | `'none'` | Maximum height of the panel |
| max-width (`maxWidth`) | `string` | `'none'` | Maximum width of the panel |
| `maximizable` | `boolean` | `false` | Maximizable panel |
| `maximized` | `boolean` | `false` | Maximized state |
| min-height (`minHeight`) | `string` | `'100px'` | Minimum height when resizing |
| min-width (`minWidth`) | `string` | `'200px'` | Minimum width when resizing |
| `minimizable` | `boolean` | `false` | Minimizable panel |
| `minimized` | `boolean` | `false` | Minimized state |
| `modal` | `boolean` | `false` | Show backdrop behind the panel (modal mode) |
| no-padding (`noPadding`) | `boolean` | `false` | Remove processing on content padding |
| `overflow` | `"auto" \| "hidden" \| "scroll" \| "visible"` | `'auto'` | Overflow behavior |
| panel-id (`panelId`) | `string` | `''` | Unique identifier for the panel |
| panel-subtitle (`panelSubtitle`) | `string` | `''` | Panel subtitle text |
| panel-title (`panelTitle`) | `string` | `''` | Panel title text |
| persistence-id (`persistenceId`) | `string` | — | Key to persist the panel's open state and size in localStorage |
| `pinned` | `boolean` | `false` | Pinned panel (stays on top) |
| `position` | `"bottom" \| "bottom-left" \| "bottom-right" \| "center" \| "left" \| "right" \| "top" \| "top-left" \| "top-right"` | — | Position of the panel (docking) |
| `resizable` | `boolean` | `false` | Resizable panel |
| search-placeholder (`searchPlaceholder`) | `string` | `'Search content...'` | Search placeholder text |
| show-close (`showClose`) | `boolean` | `true` | Show close button |
| show-settings (`showSettings`) | `boolean` | `true` | Show settings button |
| snap-threshold (`snapThreshold`) | `number` | `20` | Snap distance in pixels |
| snap-to-grid (`snapToGrid`) | `boolean` | `false` | Snap to a grid while dragging |
| `theme` | `"danger" \| "default" \| "info" \| "primary" \| "secondary" \| "success" \| "warning"` | `'default'` | Color theme for the panel |
| `toggleable` | `boolean` | `false` | Whether the panel is toggleable (collapsible) |
| `variant` | `"default" \| "elevated" \| "filled" \| "flat" \| "ghost" \| "glass" \| "outlined"` | `'elevated'` | Visual variant |
| `width` | `string` | `'100%'` | Panel width |
| `x` | `string` | — | Horizontal position (e.g., '100px', '20%'). Used if position is not set. |
| `y` | `string` | — | Vertical position (e.g., '100px', '20%'). Used if position is not set. |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `panelClose` | `PanelCloseEvent` |  |
| `panelDrag` | `{ panelId: string; x: number; y: number; }` |  |
| `panelDragEnd` | `{ panelId: string; x: number; y: number; }` |  |
| `panelDragStart` | `{ panelId: string; x: number; y: number; }` |  |
| `panelMaximize` | `{ panelId: string; }` |  |
| `panelMinimize` | `{ panelId: string; }` |  |
| `panelResize` | `{ panelId: string; width: number; height: number; }` |  |
| `panelResizeEnd` | `{ panelId: string; width: number; height: number; }` |  |
| `panelResizeStart` | `{ panelId: string; width: number; height: number; }` |  |
| `panelRestore` | `{ panelId: string; }` |  |
| `panelSearch` | `{ query: string; }` |  |
| `panelSettings` | `PanelSettingsEvent` |  |
| `toggle` | `{ collapsed: boolean; }` |  |
