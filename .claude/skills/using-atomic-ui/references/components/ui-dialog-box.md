# ui-dialog-box

Dialog Box — Feedback & Overlay, Stable.

Enterprise-grade Dialog (Modal) component built for scalability and accessibility. Supports multiple types (Modal, Drawer, Fullscreen, Alert, Confirm) and framework-agnostic usage.

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| allow-pop-out (`allowPopOut`) | `boolean` | `false` | Show a "pop-out" button to open content in a separate browser window. |
| `animation` | `"fade" \| "flip" \| "scale" \| "slide-down" \| "slide-left" \| "slide-right" \| "slide-up"` | `'scale'` | Custom animation name. |
| animation-duration (`animationDuration`) | `number` | `250` | Animation duration in ms. |
| auto-close (`autoClose`) | `number` | `0` | Auto-close timeout in milliseconds. |
| auto-submit-on-timeout (`autoSubmitOnTimeout`) | `boolean` | `false` | Whether to automatically submit 'session' dialog on timeout. If false, it will just close (cancel). |
| `avatar` | `string` | `''` | User avatar URL to show in the header |
| `backdrop` | `"default" \| "none" \| "static"` | `'default'` | Backdrop Behavior. 'default' (closes on click), 'static' (no close), 'none' (no backdrop). |
| background-color (`backgroundColor`) | `string` | `''` | Background color of the dialog panel |
| `beforeClose` | `() => boolean \| Promise<boolean>` | — | Optional callback function to execute before closing. Return false or a Promise resolving to false to prevent closing. |
| `bordered` | `boolean` | `false` | Whether the dialog should have a more pronounced border. |
| button-set (`buttonSet`) | `"custom" \| "ok-cancel" \| "retry-cancel" \| "save-discard" \| "yes-no" \| "yes-no-cancel"` | `'custom'` | Preset button set for confirmation dialogs. - `'ok-cancel'`      → OK / Cancel - `'yes-no'`         → Yes / No - `'yes-no-cancel'`  → Yes / No / Cancel  (No maps to resetText slot, left-aligned) - `'save-discard'`   → Save / Discard - `'retry-cancel'`   → Retry / Cancel Explicit `okText` / `cancelText` / `resetText` props always override the preset labels. |
| cancel-disabled (`cancelDisabled`) | `boolean` | `false` | Disable the Cancel button. |
| cancel-text (`cancelText`) | `string` | — | Text for the Cancel button. |
| close-on-backdrop (`closeOnBackdrop`) | `boolean` | `true` | Whether clicking the backdrop closes the dialog. |
| close-on-esc (`closeOnEsc`) | `boolean` | `true` | Whether the ESC key closes the dialog. |
| `confetti` | `boolean` | `false` | Fire confetti when the dialog opens. |
| confirmation-text (`confirmationText`) | `string` | `''` | Confirmation text for checkbox (e.g. "I accept the Terms & Conditions"). If provided, the OK button will be disabled until checked. |
| current-step (`currentStep`) | `number` | `1` | Current step in Wizard mode (1-indexed). |
| `debug` | `boolean` | `false` | Enable debug mode (shows layout boundaries and metadata). |
| `density` | `"comfortable" \| "compact" \| "cozy" \| "normal"` | `'cozy'` | Visual density mode. |
| dialog-title (`dialogTitle`) | `string` | `''` | Dialog title |
| `dirty` | `boolean` | `false` | Whether the dialog contents are "dirty" (unsaved changes).  Triggers the confirmation prompt on close. |
| dock-label (`dockLabel`) | `string` | `''` | Label for the dock when minimized. |
| fullscreen-on-mobile (`fullscreenOnMobile`) | `boolean` | `true` | Fullscreen on mobile devices automatically. |
| `glass` | `boolean` | `false` | Enable glassmorphism effect (blur) on backdrop. |
| global-blur (`globalBlur`) | `boolean` | `false` | Whether to blur the entire webpage behind this dialog. |
| `haptics` | `boolean` | `false` | Enable haptic feedback for mobile devices. |
| header-color (`headerColor`) | `string` | — | Header background color override. |
| header-image (`headerImage`) | `string` | — | Path to header image |
| header-size (`headerSize`) | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small"` | `'md'` | Header size. |
| `height` | `string` | `'auto'` | Dialog height |
| `icon` | `string` | `''` | Icon name to show in the header |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'default'` | Library to use for icons |
| icon-position (`iconPosition`) | `"bottom" \| "left" \| "right" \| "top"` | `'left'` | Position of the icon/avatar relative to the title |
| initial-focus (`initialFocus`) | `string` | — | CSS selector for the element to focus initially when opened. |
| is-draggable (`isDraggable`) | `boolean` | `false` | Draggable dialog (only for 'modal' type). |
| is-nested (`isNested`) | `boolean` | `false` | Whether the dialog is nested (inside another dialog).  Triggers visual differentiation (smer size, deeper shadow). |
| keep-mounted (`keepMounted`) | `boolean` | `false` | Keep content mounted when closed. |
| `layout` | `"default" \| "side-nav"` | `'default'` | Dialog layout mode. 'default': Standard dialog 'side-nav': Includes a sidebar for master/detail views |
| `loading` | `boolean` | `false` | Skeleton loading state. Transforms the dialog UI into placeholders. |
| max-height (`maxHeight`) | `string` | — | Maximum Height |
| max-width (`maxWidth`) | `string` | — | Maximum Width |
| `maximized` | `boolean` | `false` | Whether the dialog is maximized |
| menu-icon (`menuIcon`) | `string` | `'more-horizontal'` | Icon for the menu trigger button in the header. Defaults to 'more-horizontal' (⋯). Use 'settings' for a gear, 'sliders-horizontal' for filters, etc. |
| menu-items (`menuItems`) | `any[] \| string` | `[]` | Menu items for the built-in context menu.  Can be a JSON string or an array of objects. If provided, clicking the menu button automatically opens a context menu. |
| menu-title (`menuTitle`) | `string` | `'Menu'` | Tooltip text for the menu trigger button. |
| min-height (`minHeight`) | `string` | — | Minimum Height |
| min-width (`minWidth`) | `string` | — | Minimum Width |
| `minimized` | `boolean` | `false` | Whether the dialog is minimized |
| ok-disabled (`okDisabled`) | `boolean` | `false` | Disable the OK button. |
| ok-loading (`okLoading`) | `boolean` | `false` | Loading state for the OK button. |
| ok-text (`okText`) | `string` | — | Text for the OK button. If provided, renders an OK button in the footer. |
| `open` | `boolean` | `false` | Whether the dialog is open |
| `permissions` | `string[]` | `[]` | Required permissions to view this dialog. |
| `portal` | `boolean` | `false` | Whether to portal the dialog to body |
| `position` | `"bottom" \| "bottom-left" \| "bottom-right" \| "center" \| "left" \| "right" \| "top" \| "top-left" \| "top-right"` | `'center'` | Position of the dialog.  For 'drawer' type, these determine the slide direction. |
| `progress` | `number` | `-1` | Visual progress bar percentage (0-100). |
| prompt-initial-value (`promptInitialValue`) | `string` | `''` | Initial value for the prompt input. |
| prompt-label (`promptLabel`) | `string` | `''` | Label for the input field (only for 'prompt' type). |
| prompt-placeholder (`promptPlaceholder`) | `string` | `''` | Placeholder text for the prompt input. |
| prompt-type (`promptType`) | `"email" \| "number" \| "password" \| "tel" \| "text"` | `'text'` | Input type for the prompt (text, password, etc.). |
| `remember` | `boolean` | `false` | Remember dialog position and size between sessions (requires id). |
| reset-text (`resetText`) | `string` | — | Text for the Reset button (left-aligned). |
| `resizable` | `boolean` | `false` | Resizable dialog. |
| return-focus (`returnFocus`) | `boolean` | `true` | Return focus to trigger element on close. |
| scroll-area (`scrollArea`) | `"body" \| "paper"` | `'paper'` | Scroll behavior. 'paper' (scroll inside content), 'body' (scroll whole dialog). |
| `sensitive` | `boolean` | `false` | Whether the primary action is sensitive (requires double-confirmation). |
| session-timeout (`sessionTimeout`) | `number` | `60` | Session timeout duration in seconds (only for 'session' type). |
| `shortcuts` | `boolean` | `true` | Enable OS-level shortcuts (Ctrl+Enter to OK, Esc to Close). |
| show-close (`showClose`) | `boolean` | `true` | Whether to show close button |
| show-footer (`showFooter`) | `boolean` | `true` | Whether to show the footer |
| show-header (`showHeader`) | `boolean` | `true` | Whether to show the header |
| show-maximize (`showMaximize`) | `boolean` | `false` | Whether to show maximize button |
| show-menu (`showMenu`) | `boolean` | `false` | Whether to show menu button (Action Menu) |
| show-minimize (`showMinimize`) | `boolean` | `false` | Whether to show minimize button |
| show-status-bar (`showStatusBar`) | `boolean` | `false` | Whether to show a status bar above the footer |
| show-toolbar (`showToolbar`) | `boolean` | `false` | Whether to show a toolbar below the header |
| `size` | `"custom" \| "default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small" \| "xl" \| "xs" \| "xxl" \| "xxs" \| "xx` | `'md'` | Predefined horizontal sizing. |
| snap-to-edges (`snapToEdges`) | `boolean` | `true` | Snap to screen edges when dragging |
| `sound` | `boolean` | `false` | Enable subtle sound feedback for interactions. |
| `starred` | `boolean` | `false` | Whether the dialog is starred/favorited |
| `status` | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'default'` | Dialog status/type |
| `steps` | `number \| string[]` | `0` | Stepper steps for Wizard mode. Either an array of strings or a number. |
| `subtitle` | `string` | `''` | Dialog subtitle |
| swipe-to-close (`swipeToClose`) | `boolean` | `false` | Allow swipe-to-close gesture on mobile devices. |
| `timeout` | `number` | `0` | Alias for autoClose. |
| title-tag (`titleTag`) | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6"` | `'h3'` | Semantic tag for the title (h1-h6) |
| `type` | `"alert" \| "confirm" \| "default" \| "delete" \| "drawer" \| "fullscreen" \| "messagebox" \| "modal" \| "pre-session" \|` | `'modal'` | Dialog functional type. - 'modal': Standard centered modal. - 'drawer': Slides from an edge (determined by position). - 'fullscreen': Occupies entire screen. - 'alert': Emphasis on the message, simple actions. - 'confirm': Standard confirmation with OK/Cancel flow. - 'prompt': Modal with an input field for user entry. - 'messagebox': Simplified modal for informational messages. - (Legacy): 'default' \| 'delete' \| 'upload' \| 'session' \| 'terms' |
| `variant` | `"bordered" \| "borderless" \| "color" \| "danger" \| "dark" \| "default" \| "dots-only" \| "elevated" \| "error" \| "fil` | `'outlined'` | Dialog variant style |
| `width` | `string` | `'500px'` | Dialog width. Explicit width takes precedence over size if size is 'custom'. |
| z-index (`zIndex`) | `number` | `10000` | Z-Index for the dialog. Useful for nested dialogs. |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `afterClose` | `void` | Emitted when closing animation finishes. |
| `afterOpen` | `void` | Emitted when opening animation finishes. |
| `auditLog` | `{ action: string; timestamp: number; metadata?: any; }` | Event emitted for security audit logging. |
| `beforeCloseEvent` | `{ source: "backdrop" \| "esc" \| "close-btn" \| "programmatic"; }` | Emitted before the dialog closes. Can be cancelled by event.preventDefault(). |
| `beforeOpen` | `void` | Emitted before the dialog opens. Can be cancelled via event.preventDefault(). |
| `cancel` | `any` | Event emitted when Cancel button is clicked |
| `closeStarted` | `void` | Emitted when closing animation starts. |
| `dialogClosed` | `any` | Event emitted when dialog is closed |
| `dialogMaximized` | `{ maximized: boolean; }` | Event emitted when dialog is maximized |
| `dialogMinimized` | `{ minimized: boolean; }` | Event emitted when dialog is minimized |
| `dialogOpened` | `any` | Event emitted when the dialog is opened. |
| `dialogReset` | `any` | Event emitted when Reset button is clicked |
| `menu` | `any` | Event emitted when menu button is clicked |
| `menuAction` | `any` | Event emitted when a menu item is clicked (if using built-in menuItems) |
| `ok` | `any` | Event emitted when OK button is clicked |
| `openStarted` | `void` | Emitted when opening animation starts. |
| `redo` | `any` | Event emitted for redo action |
| `toastRequest` | `{ message: string; type: "info" \| "error" \| "success"; }` | Event emitted to request a toast notification. |
| `undo` | `any` | Event emitted for undo action |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `cancelDialog` | `cancelDialog() => Promise<void>` | Programmatically cancel the dialog (rejects the promise). |
| `cascade` | `cascade() => Promise<void>` | Cascade all open dialogs |
| `hide` | `hide(source?: "esc" \| "backdrop" \| "close-btn" \| "programmatic") => Promise<void>` | Close the dialog |
| `maximize` | `maximize() => Promise<void>` | Maximize the dialog |
| `minimize` | `minimize() => Promise<void>` | Minimize the dialog |
| `openDialog` | `openDialog() => Promise<boolean>` |  |
| `popOut` | `popOut() => Promise<void>` | Detach the dialog content to a separate browser window |
| `restore` | `restore() => Promise<void>` | Restore the dialog from minimized or maximized state |
| `setOkDisabled` | `setOkDisabled(disabled: boolean) => Promise<void>` | Set the disabled state of the OK button |
| `setReturnValue` | `setReturnValue(value: any) => Promise<void>` | Set the value to be returned when showWithResult resolves. |
| `show` | `show() => Promise<void>` |  |
| `showConfirmation` | `showConfirmation(title: string, message: string, onConfirm: () => void) => Promise<void>` | Show an internal sub-overlay prompt (e.g., for diskard changes). |
| `showWithResult` | `showWithResult() => Promise<{ data: any; canceled: boolean; }>` | Show dialog and return a promise that resolves with data when closed via OK. Standardizes the return value as { data: any, canceled: boolean }. |
| `submit` | `submit(value?: any) => Promise<void>` | Programmatically submit the dialog (resolves the promise). Optional value overrides auto-collection. |
| `tile` | `tile() => Promise<void>` | Tile all open dialogs |

## Slots

| Slot | Description |
|---|---|
| `actions` | Custom actions in the bottom-right of the footer |
| `body` | Main content of the dialog |
| `footer` | Replaces the default footer content |
| `header` | Replaces the default header content |
| `subtitle` | Replaces the subtitle in the header |
| `title` | Replaces the title in the header |

## CSS parts

`backdrop`, `body`, `close-btn`, `footer`, `footer-actions`, `header`, `panel`, `popout-btn`
