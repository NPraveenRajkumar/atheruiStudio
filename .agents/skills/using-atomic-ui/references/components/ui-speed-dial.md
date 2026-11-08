# ui-speed-dial

Speed Dial — Utilities & Actions, Stable.

Floating action button

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| action-library (`actionLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'default'` | Default library for actions |
| `actions` | `SpeedDialAction[] \| string` | `[]` | Speed dial actions |
| close-on-scroll (`closeOnScroll`) | `boolean` | `false` | Close dial when window scrolls |
| `color` | `"danger" \| "info" \| "primary" \| "secondary" \| "success" \| "warning"` | `'primary'` | Color scheme |
| `direction` | `"auto" \| "bottom" \| "left" \| "right" \| "top"` | `'auto'` | Direction of dial opening |
| `glassy` | `boolean` | `false` | Use glassmorphism effect |
| `icon` | `string` | `'plus'` | Icon for the main button |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'se'` | Library for the main button icon |
| is-draggable (`isDraggable`) | `boolean` | `false` | Allow dragging the speed dial to reposition it |
| label-hide (`labelHide`) | `boolean` | `false` | Hide the label text but keep it for screen readers |
| label-position (`labelPosition`) | `"auto" \| "bottom" \| "left" \| "right" \| "top"` | `'auto'` | Position of the label/tooltip |
| `layout` | `"arc" \| "linear" \| "radial"` | `'linear'` | Opening layout style: 'linear', 'radial', or 'arc' |
| `magnetic` | `boolean` | `false` | Use magnetic pull effect |
| magnetic-radius (`magneticRadius`) | `number` | `150` | Radius of magnetic pull in pixels |
| magnetic-strength (`magneticStrength`) | `number` | `0.3` | Strength of magnetic pull (0 to 1) |
| persistence-id (`persistenceId`) | `string` | — | Unique ID to persist the draggable position in localStorage |
| `position` | `"bottom" \| "bottom-center" \| "bottom-left" \| "bottom-right" \| "center" \| "center-left" \| "center-right" \| "left" ` | `'bottom-right'` | Position of the speed dial button |
| `shape` | `"circle" \| "default" \| "pill" \| "rounded" \| "square"` | `'rounded'` | Button shape |
| show-tooltips (`showTooltips`) | `boolean` | `true` | Show tooltips/labels |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small"` | `'md'` | Size of the button |
| `strategy` | `"absolute" \| "fixed"` | `'fixed'` | Positioning strategy: 'fixed' (screen) or 'absolute' (container) |
| toggle-icon (`toggleIcon`) | `string` | — | Icon to show when open (e.g., 'close' or 'x') |
| tooltip-position (`tooltipPosition`) | `"auto" \| "bottom" \| "left" \| "right" \| "top"` | `'auto'` | Tooltip position |
| `trigger` | `"click" \| "hover"` | `'click'` | Trigger mode: 'click' (default) or 'hover' |
| `variant` | `"bordered" \| "borderless" \| "color" \| "danger" \| "dark" \| "default" \| "dots-only" \| "elevated" \| "error" \| "fil` | `'solid'` | Button variant |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `actionClick` | `string` | Emitted when an action is clicked |
| `speedDialToggle` | `boolean` | Emitted when speed dial opens/closes |
