# ui-fab

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `animation` | `"fade" \| "rotate" \| "scale" \| "slide-down" \| "slide-left" \| "slide-right" \| "slide-up"` | `'scale'` |  |
| `backdrop` | `boolean` | `false` |  |
| backdrop-close (`backdropClose`) | `boolean` | `true` |  |
| close-on-action (`closeOnAction`) | `boolean` | `true` |  |
| default-open (`defaultOpen`) | `boolean` | `false` |  |
| `direction` | `"bottom" \| "left" \| "radial" \| "right" \| "top"` | `'top'` |  |
| `disabled` | `boolean` | `false` |  |
| expand-on-click (`expandOnClick`) | `boolean` | `true` |  |
| expand-on-hover (`expandOnHover`) | `boolean` | `false` |  |
| hide-on-scroll (`hideOnScroll`) | `boolean` | `false` |  |
| `icon` | `string` | — |  |
| is-draggable (`isDraggable`) | `boolean` | `false` |  |
| is-expanded (`isExpanded`) | `boolean` | `false` |  |
| `label` | `string` | — |  |
| `loading` | `boolean` | `false` |  |
| offset-x (`offsetX`) | `number` | `24` |  |
| offset-y (`offsetY`) | `number` | `24` |  |
| `panel` | `boolean` | `false` |  |
| panel-height (`panelHeight`) | `string` | — |  |
| panel-max-height (`panelMaxHeight`) | `string` | `'480px'` |  |
| panel-title (`panelTitle`) | `string` | — |  |
| panel-width (`panelWidth`) | `string` | `'320px'` |  |
| `persistent` | `boolean` | `false` |  |
| `position` | `"bottom-center" \| "bottom-left" \| "bottom-right" \| "center-left" \| "center-right" \| "top-center" \| "top-left" \| "` | `'bottom-right'` |  |
| show-on-scroll-up (`showOnScrollUp`) | `boolean` | `false` |  |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "mini" \| "sm" \| "small"` | `'md'` |  |
| `toggle` | `boolean` | `false` |  |
| `type` | `"extended" \| "speed-dial" \| "standard"` | `'standard'` |  |
| `variant` | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'primary'` |  |
| z-index (`zIndex`) | `number` | `1000` |  |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `uiFabActionClick` | `{ value: any; }` |  |
| `uiFabClick` | `MouseEvent` |  |
| `uiFabClose` | `void` |  |
| `uiFabOpen` | `void` |  |
| `uiFabToggle` | `{ isExpanded: boolean; }` |  |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `closeFab` | `closeFab() => Promise<void>` |  |
| `hide` | `hide() => Promise<void>` |  |
| `openFab` | `openFab() => Promise<void>` |  |
| `show` | `show() => Promise<void>` |  |
| `toggleFab` | `toggleFab() => Promise<void>` |  |
