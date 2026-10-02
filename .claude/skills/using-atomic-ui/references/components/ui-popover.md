# ui-popover

Popover — Feedback & Overlay, Stable.

Popover tooltip

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `animation` | `"fade" \| "none" \| "scale" \| "slide"` | `'scale'` | Animation type |
| arrow-size (`arrowSize`) | `number` | `10` | Size of the arrow in pixels |
| auto-placement (`autoPlacement`) | `boolean` | `false` | Automatically choose the best placement based on available space |
| `backdrop` | `boolean` | `false` | Show backdrop |
| `boundary` | `"scrollParent" \| "viewport" \| HTMLElement` | `'viewport'` | Boundary element for collision detection |
| close-on-blur (`closeOnBlur`) | `boolean` | `true` | Close popover when focus leaves it |
| close-on-esc (`closeOnEsc`) | `boolean` | `true` | Allow Escape key to close the popover (default: true) |
| close-on-outside-click (`closeOnOutsideClick`) | `boolean` | `true` | Close popover when clicking outside |
| close-on-scroll (`closeOnScroll`) | `boolean` | `false` | Close popover when window is scrolled |
| `content` | `string` | `''` | Popover content (HTML string). Use this for simple text or if you can't use the 'content' slot. |
| `disabled` | `boolean` | `false` | Disabled state. If true, popover will not show. |
| fallback-placements (`fallbackPlacements`) | `any` | — | Fallback placements for flipping (e.g. "top, bottom") |
| `flip` | `boolean` | `true` | Enable auto-flipping when hitting screen boundaries |
| `heading` | `string` | `''` | Popover heading text |
| hide-delay (`hideDelay`) | `number` | `200` | Delay in ms before hiding on hover |
| `interactive` | `boolean` | `true` | When hover trigger is used, allow cursor to move into the popover without closing it. Set to false for pure tooltip behaviour. |
| `loading` | `boolean` | `false` | Loading state |
| match-trigger-width (`matchTriggerWidth`) | `boolean` | `false` | Match the width of the trigger element |
| max-height (`maxHeight`) | `string` | `'none'` | Maximum height of the popover body. If content exceeds this, it scrolls. |
| `offset` | `number` | `12` | Distance between popover and trigger (in pixels) |
| `open` | `boolean` | `false` | Controlled open state. |
| `padding` | `number` | `24` | Padding from boundary edges |
| `placement` | `"bottom" \| "bottom-left" \| "bottom-right" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-` | `'top'` | Placement of popover |
| popover-role (`popoverRole`) | `"dialog" \| "listbox" \| "menu" \| "tooltip"` | `'dialog'` | ARIA role for the popover panel. Use 'tooltip' for non-interactive hover hints, 'menu' for menus, 'dialog' for rich content. |
| `shift` | `boolean` | `true` | Enable auto-shifting (clamping) to stay inside viewport |
| show-arrow (`showArrow`) | `boolean` | `true` | Show arrow |
| show-close-button (`showCloseButton`) | `boolean` | `false` | Show close button |
| show-delay (`showDelay`) | `number` | `0` | Delay in ms before showing on hover (0 = immediate) |
| `skeleton` | `boolean` | `false` | Skeleton state |
| `strategy` | `"absolute" \| "fixed"` | `'fixed'` | Positioning strategy |
| `target` | `HTMLElement \| string` | — | The target element to anchor the popover to.  Can be a CSS selector (string) or a direct HTMLElement reference. If not provided, it will use the element in the 'trigger' slot or its first child. |
| `trigger` | `"click" \| "focus" \| "hover" \| "manual"` | `'click'` | Trigger type: 'click' \| 'hover' \| 'focus' \| 'manual' 'manual' = only show/hide via method calls |
| `variant` | `"black" \| "borderless" \| "danger" \| "dark" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "` | `'light'` | Visual variant. 'light' \| 'dark' \| 'success' \| 'warning' \| 'error' \| 'info' |
| `width` | `string` | `'280px'` | Popover width |
| z-index (`zIndex`) | `number` | `21000` | Optional z-index for the popover panel |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `uiBeforeClose` | `void` | Emitted before popover hides. Call event.preventDefault() to cancel. |
| `uiBeforeOpen` | `void` | Emitted before popover shows. Call event.preventDefault() to cancel. |
| `uiClose` | `void` | Emitted when popover hides |
| `uiOpen` | `void` | Emitted when popover shows |
| `uiToggle` | `{ open: boolean; }` | Emitted when toggled |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `computePlacement` | `computePlacement() => Promise<string>` |  |
| `hide` | `hide() => Promise<void>` |  |
| `reposition` | `reposition() => Promise<void>` |  |
| `show` | `show() => Promise<void>` |  |
| `toggle` | `toggle() => Promise<void>` |  |
| `updatePosition` | `updatePosition() => Promise<void>` |  |
