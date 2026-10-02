# ui-tooltip

Shadow DOM: no

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| allow-nested (`allowNested`) | `boolean` | `false` | Allow nested tooltips |
| `animation` | `"bounce" \| "expand" \| "fade" \| "fade-down" \| "fade-in" \| "fade-in-out" \| "fade-left" \| "fade-out" \| "fade-right"` | `'fade-in'` | Animation type |
| `arrow` | `boolean` | `true` | Show arrow pointer |
| arrow-size (`arrowSize`) | `number` | `8` | Arrow size in pixels |
| auto-flip (`autoFlip`) | `boolean` | `true` | Auto-flip when out of viewport |
| auto-shift (`autoShift`) | `boolean` | `true` | Auto-shift tooltip to stay in viewport |
| `boundary` | `string` | `''` | Boundary element selector to constrain tooltip |
| `closable` | `boolean` | `false` | Show close button |
| close-on-click-outside (`closeOnClickOutside`) | `boolean` | `true` | Close on click outside |
| `content` | `string` | `''` | Tooltip content text |
| custom-class (`customClass`) | `string` | `''` | Custom CSS class |
| custom-color (`customColor`) | `string` | `''` | Custom background color (overrides variant) |
| `disabled` | `boolean` | `false` | Disable the tooltip |
| `elevation` | `number` | `0` | Elevation level (0-5) |
| follow-cursor (`followCursor`) | `boolean` | `false` | Follow mouse cursor (only works with hover trigger) |
| group-id (`groupId`) | `string` | `''` | Group ID for shared tooltips |
| hide-delay (`hideDelay`) | `number` | `0` | Delay before hiding (ms) |
| `html` | `boolean` | `false` | Enable HTML content |
| `interactive` | `boolean` | `false` | Allow tooltip to be interactive (hoverable) |
| `keyboard` | `boolean` | `true` | Enable keyboard shortcuts (ESC to close, Tab navigation) |
| `loading` | `boolean` | `false` | Loading state |
| long-press-duration (`longPressDuration`) | `number` | `500` | Long press duration for touch devices (ms) |
| max-width (`maxWidth`) | `number` | `300` | Maximum width in pixels |
| `offset` | `number` | `8` | Offset from target (px) |
| open-at-mouse-position (`openAtMousePosition`) | `boolean` | `false` | Open tooltip at mouse click position (click trigger only) |
| `portal` | `boolean` | `true` | Render tooltip in portal (document.body) |
| `position` | `"auto" \| "bottom" \| "bottom-left" \| "bottom-right" \| "left" \| "right" \| "top" \| "top-left" \| "top-right"` | `'top'` | Tooltip position relative to target |
| `shape` | `"pill" \| "rounded" \| "square"` | `'rounded'` | Tooltip shape |
| show-delay (`showDelay`) | `number` | `0` | Delay before showing (ms) |
| show-footer (`showFooter`) | `boolean` | `false` | Show footer slot |
| show-glow (`showGlow`) | `boolean` | `false` | Show premium glow effect |
| show-header (`showHeader`) | `boolean` | `false` | Show header slot |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small"` | `'md'` | Size variant |
| `sticky` | `boolean` | `false` | Sticky tooltip (requires manual close) |
| text-color (`textColor`) | `string` | `''` | Custom text color |
| track-interval (`trackInterval`) | `number` | `16` | Mouse tracking update interval in ms (for performance) |
| track-mouse (`trackMouse`) | `boolean` | `false` | Track mouse movement and update tooltip position |
| transition-duration (`transitionDuration`) | `number` | `200` | Transition duration in milliseconds |
| transition-timing (`transitionTiming`) | `string` | `'ease'` | Transition timing function |
| `trigger` | `"click" \| "focus" \| "hover" \| "manual"` | `'hover'` | Trigger type for showing tooltip |
| `variant` | `"black" \| "borderless" \| "danger" \| "dark" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "` | `'dark'` | Visual variant/theme |
| `visible` | `boolean` | `false` | Show tooltip immediately on load |
| z-index (`zIndex`) | `number` | `9999` | z-index value |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `tooltipClick` | `MouseEvent` |  |
| `tooltipClose` | `void` |  |
| `tooltipHide` | `void` |  |
| `tooltipKeydown` | `KeyboardEvent` |  |
| `tooltipMouseEnter` | `MouseEvent` |  |
| `tooltipMouseLeave` | `MouseEvent` |  |
| `tooltipMouseMove` | `{ x: number; y: number; }` |  |
| `tooltipShow` | `{ position: string; }` |  |
| `tooltipTouchEnd` | `TouchEvent` |  |
| `tooltipTouchStart` | `TouchEvent` |  |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `forceHide` | `forceHide() => Promise<void>` |  |
| `hide` | `hide() => Promise<void>` |  |
| `show` | `show() => Promise<void>` |  |
| `toggle` | `toggle() => Promise<void>` |  |
