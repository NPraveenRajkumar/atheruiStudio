# ui-carousel

Carousel Component Features: responsive, auto/manual scroll, vertical/horizontal, infinite, touch, keyboard, indicators, arrows, slots

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| animate-content (`animateContent`) | `boolean` | `false` | Staggered animations for elements inside the active slide (e.g. titles, buttons) |
| animation-duration (`animationDuration`) | `number` | `500` | Animation duration (ms) |
| animation-easing (`animationEasing`) | `string` | `'cubic-bezier(0.4,0,0.2,1)'` | Animation easing function |
| `arrows` | `boolean` | `true` | Show navigation arrows |
| arrows-position (`arrowsPosition`) | `"sides" \| "top-right"` | `'sides'` | Position of navigation arrows |
| as-nav-for (`asNavFor`) | `string` | `''` | Selector of another carousel to sync with (e.g., '#thumbSlider') |
| auto-height (`autoHeight`) | `boolean` | `false` | Enable auto-height (adjusts to content) |
| `autoplay` | `boolean` | `false` | Enable autoplay |
| autoplay-interval (`autoplayInterval`) | `number` | `3000` | Autoplay interval (ms) |
| center-mode (`centerMode`) | `boolean` | `false` | Enable center mode |
| center-padding (`centerPadding`) | `string` | `'50px'` | Padding for center mode (e.g., '50px') |
| `effect` | `"coverflow" \| "cube" \| "depth" \| "fade" \| "flip" \| "ken-burns" \| "scale" \| "slide" \| "stack" \| "wheel"` | `'slide'` | Transition effect |
| enable-drag (`enableDrag`) | `boolean` | `true` | Enable mouse dragging |
| `height` | `string` | `'400px'` | Carousel height |
| `indicators` | `boolean` | `true` | Show indicators (dots) |
| indicators-type (`indicatorsType`) | `"default" \| "dots" \| "icon" \| "line" \| "pie" \| "segments"` | `'dots'` | Type of navigation indicators: 'dots', 'segments' (stories-style), or 'pie' (circular) |
| `infinite` | `boolean` | `true` | Enable infinite looping |
| `keyboard` | `boolean` | `true` | Enable keyboard navigation |
| lazy-load (`lazyLoad`) | `boolean` | `false` | Enable lazy loading of images inside slides |
| `loop` | `boolean` | `true` | Disable infinite looping |
| mouse-wheel (`mouseWheel`) | `boolean` | `false` | Enable mouse wheel navigation |
| next-arrow (`nextArrow`) | `string` | `'&gt;'` | Custom next arrow template |
| `parallax` | `boolean` | `false` | Enable parallax effect for slide content |
| pause-on-hover (`pauseOnHover`) | `boolean` | `true` | Pause autoplay on hover |
| pause-on-interact (`pauseOnInteract`) | `boolean` | `true` | Pause on interaction (clicks/drags) |
| prev-arrow (`prevArrow`) | `string` | `'&lt;'` | Custom previous arrow template |
| `responsive` | `string` | `''` | Responsive breakpoints |
| show-counter (`showCounter`) | `boolean` | `false` | Show slide counter (e.g. 1/10) |
| show-progress (`showProgress`) | `boolean` | `false` | Show autoplay progress bar |
| slides-to-scroll (`slidesToScroll`) | `number` | `1` | Slides to scroll per action |
| slides-to-show (`slidesToShow`) | `number` | `1` | Slides to show at once (responsive) |
| `swipe` | `boolean` | `true` | Enable swipe/touch |
| `ticker` | `boolean` | `false` | Enable continuous 'Ticker' mode (smooth scrolling without pauses) |
| ticker-speed (`tickerSpeed`) | `number` | `1` | Speed for ticker mode (pixels per frame, approx 1-3 for smooth motion) |
| use-progress-segments (`useProgressSegments`) | `boolean` | `false` | Use stories-style progress indicators (segments) - DEPRECATED: use indicatorsType='segments' instead |
| variable-width (`variableWidth`) | `boolean` | `false` | Enable variable width slides |
| `vertical` | `boolean` | `false` | Vertical mode |
| `width` | `string` | `'100%'` | Carousel width |
| zoom-active (`zoomActive`) | `boolean` | `false` | Zoom effect on the active slide (Center Mode recommended) |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `afterChange` | `{ current: number; }` |  |
| `beforeChange` | `{ from: number; to: number; }` |  |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `goTo` | `goTo(index: number) => Promise<void>` |  |
| `next` | `next() => Promise<void>` |  |
| `prev` | `prev() => Promise<void>` |  |
| `refresh` | `refresh() => Promise<void>` |  |
| `toggleFullscreen` | `toggleFullscreen() => Promise<void>` |  |
