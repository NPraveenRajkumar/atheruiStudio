# ui-aside-panel

Aside Panel — Navigation & Layout, Stable.

Side panel component

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| action-items (`actionItems`) | `ContextMenuItem[] \| string` | `[]` | Array of items for the action menu (3-dot) |
| animation-type (`animationType`) | `"bounce" \| "expand" \| "fade" \| "fade-down" \| "fade-in" \| "fade-in-out" \| "fade-left" \| "fade-out" \| "fade-right"` | `'slide-in-out'` | Animation style for opening and closing |
| auto-mini (`autoMini`) | `boolean` | `true` | Whether the panel should automatically enter 'Mini' mode on sm screens |
| backdrop-blur (`backdropBlur`) | `string` | `'0'` | Backdrop blur amount (e.g., '8px') |
| background-color (`backgroundColor`) | `string` | `''` |  |
| `badge` | `string` | `""` | Status badge label for the header |
| close-on-escape (`closeOnEscape`) | `boolean` | `true` | Whether the panel can be closed by pressing Escape key |
| close-on-overlay-click (`closeOnOverlayClick`) | `boolean` | `true` | Whether clicking the overlay closes the panel |
| `closeable` | `boolean` | `true` | Whether to show the close button |
| `direction` | `"bottom" \| "left" \| "right" \| "top"` | `'right'` | Direction from which the panel slides in: 'left', 'right', 'top', 'bottom' |
| enable-parallax (`enableParallax`) | `boolean` | `false` | Enable 3D Parallax tilt effect on content |
| enable-voice-control (`enableVoiceControl`) | `boolean` | `false` | Voice-Activated navigation (Hands-Free) |
| floating-align (`floatingAlign`) | `"center" \| "end" \| "justify" \| "start" \| "stretch"` | `'stretch'` | Alignment along the secondary axis for 'floating' variant |
| floating-offset (`floatingOffset`) | `string` | `'20px'` | Offset from the screen edge for 'floating' variant (e.g., '20px') |
| `haptic` | `boolean` | `false` | Enable auditory haptics (Industrial click sounds) |
| `loading` | `boolean` | `false` | Whether the panel is in a loading state |
| max-size (`maxSize`) | `number` | `1200` | Maximum size (width or height) in pixels |
| `maximized` | `boolean` | `false` | Whether the panel is in 'Maximized' (Full Screen) mode |
| min-size (`minSize`) | `number` | `200` | Minimum size (width or height) in pixels |
| `mini` | `boolean` | `false` | Enable 'Mini' mode (collapsed into a thin icon-bar) |
| mini-size (`miniSize`) | `string` | `'64px'` | Width/Height of the panel in its 'Mini' state |
| `open` | `boolean` | `false` | Whether the aside panel is open |
| persist-key (`persistKey`) | `string` | — | Key to persist the panel's open state and size in localStorage |
| `pinned` | `boolean` | `false` | Prevent closing via overlay or escape (Locked state) |
| `progress` | `number` | `-1` | Diagnostic progress bar percentage (0-100, -1 to hide) |
| `resizable` | `boolean` | `false` | Whether the panel is resizable |
| resize-handle-color (`resizeHandleColor`) | `string` | `''` | Color of the resize handle (e.g. '#3bf673') |
| `rtl` | `boolean` | `false` | Whether to enable Right-to-Left (RTL) mode |
| `scope` | `string` | `'body'` |  |
| secondary-size (`secondarySize`) | `string` | `'auto'` | Secondary dimension size for 'floating' variant (height if left/right, width if top/bottom) If 'auto', it stretches to the full viewport minus offsets. |
| show-actions (`showActions`) | `boolean` | `false` | Whether to show the 3-dot action menu button in the toolbar |
| show-overlay (`showOverlay`) | `boolean` | `false` | Whether to show the background overlay |
| show-resize-indicator (`showResizeIndicator`) | `boolean` | `true` | Whether to show a visual indicator on the resize handle |
| `size` | `string` | `'320px'` | Width of the panel (for left/right) or height (for top/bottom) |
| stack-offset (`stackOffset`) | `number` | `0` | Stagger offset for multi-instance layouts (pixels) |
| sync-group (`syncGroup`) | `string` | `''` | Sync group ID for broadcasting state across instances |
| `theme` | `"default" \| "glass" \| "none" \| "radiant" \| "zenith"` | `'default'` | Visual theme: 'default' \| 'glass' \| 'radiant' \| 'zenith' |
| toggle-shortcut (`toggleShortcut`) | `string` | `''` | Global shortcut key to toggle the panel (requires Ctrl key, e.g. 'B') |
| transition-duration (`transitionDuration`) | `string` | `'0.3s'` | Animation transition duration (e.g. '0.3s' or '500ms') |
| `variant` | `"default" \| "floating" \| "glass" \| "none"` | `'default'` | Legacy variant support (maps to theme if set) |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `asideActionClick` | `void` | Event emitted when the 3-dot action menu is clicked |
| `asideClosed` | `void` | Event emitted when the panel is closed |
| `asideOpened` | `void` | Event emitted when the panel is opened |
| `asideResized` | `{ size: number; }` | Event emitted when the panel is resized |
| `asideStateChange` | `{ open: boolean; mini: boolean; }` | Event emitted when the state (open/mini) changes |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `hide` | `hide() => Promise<void>` | Close the panel |
| `initVoice` | `initVoice() => Promise<void>` |  |
| `show` | `show() => Promise<void>` | Open the panel |
| `toggle` | `toggle() => Promise<void>` | Toggle the panel open/closed |
| `toggleMaximize` | `toggleMaximize() => Promise<void>` | Toggle Maximized state |
| `toggleMini` | `toggleMini() => Promise<void>` | Toggle Mini state |
