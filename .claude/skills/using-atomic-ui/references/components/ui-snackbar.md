# ui-snackbar

Snackbar — Feedback & Overlay, Stable.

Toast notification

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| card-stack (`cardStack`) | `boolean` | `false` | Enable card stacking mode - notifications stack like cards and expand on hover |
| `coalesce` | `boolean` | `false` | Enable smart grouping (coalescing) of identical messages |
| `duration` | `number` | `5000` | Global default duration (ms) for notifications. 0 is infinite. |
| enable-slots (`enableSlots`) | `boolean` | `false` | Enable slot support for custom notification layouts |
| group-threshold (`groupThreshold`) | `number` | `3000` | Default group threshold (ms) - identical messages within this window are coalesced |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'lucide'` | Default library for icons |
| max-duration (`maxDuration`) | `number` | `0` | Maximum duration cap (ms). Any item duration above this value is clamped. 0 = no cap. |
| max-visible (`maxVisible`) | `number` | `5` | Maximum number of visible snackbars |
| open-mode (`openMode`) | `"bounce" \| "fade" \| "scale" \| "slide-down" \| "slide-left" \| "slide-right" \| "slide-up" \| "spring"` | `'slide-down'` | Open animation mode for snackbars |
| `particles` | `boolean` | `true` | Enable CSS particle burst on 'sovereign' type notifications. Set to false to disable all particle effects. |
| pause-on-focus-loss (`pauseOnFocusLoss`) | `boolean` | `true` | Pause timers when the window loses focus (e.g. tab switch) |
| pause-on-hover (`pauseOnHover`) | `boolean` | `true` | Pause timers when the cursor hovers over the snackbar |
| `portal` | `boolean` | `true` | Move snackbar to the bottom of the body automatically on load |
| `position` | `"bottom-center" \| "bottom-left" \| "bottom-right" \| "top-center" \| "top-left" \| "top-right"` | `'top-right'` | Position of the snackbar container |
| show-countdown (`showCountdown`) | `boolean` | `false` | Show a live countdown chip (e.g. "3s") inside the notification before it closes. Only visible when duration > 0 and progress is set to 'bar' or 'ring'. |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small"` | `'md'` | Default size for snackbars |
| sound-mode (`soundMode`) | `"custom" \| "none" \| "synth"` | `'synth'` | Sound mode: 'none' \| 'synth' \| 'custom' |
| stack-mode (`stackMode`) | `"lifo" \| "queue" \| "stack"` | `'stack'` | Stack mode for snackbars (only applies when maxVisible > 1) |
| text-direction (`textDirection`) | `"auto" \| "ltr" \| "rtl"` | `'auto'` | Explicit text direction for this notification instance only. 'auto' reads the CSS computed direction of the element. 'rtl' / 'ltr' override immediately without touching the page layout. |
| `theme` | `"auto" \| "dark" \| "default" \| "green" \| "light"` | `'auto'` | Default theme for notifications |
| `variant` | `"bordered" \| "borderless" \| "color" \| "danger" \| "dark" \| "default" \| "dots-only" \| "elevated" \| "error" \| "fil` | `'filled'` | Default variant for snackbars |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `snackbarActionClicked` | `{ id: string; item: SnackbarItem; }` | Event emitted when a snackbar action button is clicked |
| `snackbarAdded` | `{ id: string; item: SnackbarItem; }` | Event emitted when a snackbar is added |
| `snackbarClosed` | `{ id: string; item: SnackbarItem; }` | Event emitted when a snackbar is closed |
| `snackbarLinkClicked` | `{ id: string; item: SnackbarItem; link: { text: string; url: string; }; }` | Event emitted when a snackbar link is clicked |
| `snackbarUpdated` | `{ id: string; item: SnackbarItem; }` | Event emitted when a snackbar is updated |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `add` | `add(item: Omit<SnackbarItem, "id">) => Promise<string>` |  |
| `close` | `close(id: string) => Promise<void>` |  |
| `closeAll` | `closeAll() => Promise<void>` |  |
| `closeNext` | `closeNext() => Promise<void>` |  |
| `getAll` | `getAll() => Promise<SnackbarItem[]>` | Returns all current notifications |
| `pause` | `pause(id: string) => Promise<void>` | Pause timer for a specific notification |
| `promise` | `promise<T>(promise: Promise<T> \| (() => Promise<T>), data: { loading: string; success: string \| ((res: T) => string); error: string \| ((e` |  |
| `replace` | `replace(id: string, newItem: Omit<SnackbarItem, "id">) => Promise<void>` | Replace an existing notification completely |
| `resume` | `resume(id: string) => Promise<void>` | Resume timer for a specific notification |
| `undoable` | `undoable(data: { message: string; title?: string; type?: SnackbarType; onUndo: () => void; onDismiss?: () => void; duration?: number; action` |  |
| `update` | `update(id: string, updates: Partial<SnackbarItem>) => Promise<void>` |  |
