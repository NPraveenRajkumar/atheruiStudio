# ui-animate-on-scroll

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `anchor` | `string` | `''` | CSS class or ID of the element to use as the scroll anchor |
| animation-timer (`animationTimer`) | `any` | — |  |
| blur-amount (`blurAmount`) | `string` | `''` | Blur amount for starting state (e.g. '5px') Renamed from 'blur' to avoid conflict with HTMLElement.blur() |
| `delay` | `number` | `0` | Animation delay in milliseconds |
| `distance` | `string` | `'50px'` | Distance for slide animations (e.g. '100px') |
| `duration` | `number` | `1000` | Animation duration in milliseconds |
| `easing` | `string` | `'ease'` | Animation easing function |
| enter-class (`enterClass`) | `"bounce" \| "expand" \| "fade" \| "fade-down" \| "fade-in" \| "fade-in-out" \| "fade-left" \| "fade-out" \| "fade-right"` | `'fade-in'` | CSS classes to apply when element enters viewport |
| leave-class (`leaveClass`) | `string` | `''` | CSS classes to apply when element leaves viewport |
| `mirror` | `boolean` | `false` | Whether to reset the animation when the element leaves the viewport in reverse (scrolling up) |
| `once` | `boolean` | `false` | Whether to animate only once or every time element enters viewport |
| `perspective` | `string` | `''` | 3D Perspective value (e.g. '1000px') |
| respect-reduced-motion (`respectReducedMotion`) | `boolean` | `true` | Whether to disable animations for users who prefer reduced motion |
| `root` | `string` | `''` | Selector for the root element (scroll container) |
| root-margin (`rootMargin`) | `string` | `'0px'` | Root margin for intersection observer |
| run-on-reduced-motion (`runOnReducedMotion`) | `boolean` | `false` | Whether to run animations on reduced motion |
| `scrub` | `boolean` | `false` | Whether to scrub the animation based on scroll position (parallax effect) |
| `stagger` | `number` | `0` | Stagger delay per child in ms (if children exist) |
| `target` | `string` | — | Target element for animation |
| `threshold` | `number` | `0.5` | Threshold for intersection observer (0-1) |
| transform-origin (`transformOrigin`) | `string` | `'center'` | The transform origin for rotation/flip animations (e.g. 'top' or 'center') |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `uiAnimationEnd` | `{ target: HTMLElement; }` | Emitted when the animation ends |
| `uiAnimationStart` | `{ target: HTMLElement; }` | Emitted when the animation starts (element enters/interacts) |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `reset` | `reset() => Promise<void>` |  |
