# ui-skeleton

Skeleton — Data Display, Stable.

Loading skeleton

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `animated` | `boolean` | `true` | Whether to show animation |
| animation-type (`animationType`) | `"aurora" \| "flicker" \| "glow" \| "liquify" \| "neon-sweep" \| "pulse" \| "sheen" \| "shimmer" \| "wave"` | `'neon-sweep'` | Animation type: 'pulse' or 'wave' |
| aria-label (`ariaLabel`) | `string` | — | ARIA label for accessibility |
| aria-live (`ariaLive`) | `"assertive" \| "off" \| "polite"` | `'off'` | ARIA live region (off, polite, assertive) |
| aria-role (`ariaRole`) | `string` | — | ARIA role override (status, progressbar, etc.) |
| border-radius (`borderRadius`) | `string` | `'4px'` | Border radius for rounded shapes |
| `color` | `string` | `'neutral'` | Color variant or custom color (hex/rgba) |
| `count` | `number` | `1` | Number of items to replicate (useful for lists, cards, etc.) Default: 1 |
| custom-class (`customClass`) | `string` | `''` | Custom class for additional styling |
| `dark` | `"auto" \| "dark" \| "light"` | `'auto'` | Show in dark mode (auto, light, dark) |
| `delay` | `number` | `0` | Delay in milliseconds before showing the skeleton. Prevents "flicker" for high-speed connections. |
| `direction` | `"column" \| "row"` | `'column'` | Layout direction for replicated items ('row' or 'column') |
| `elevation` | `number` | `0` | Elevation / shadow intensity (0-4) to match the UI component it mimics |
| `gap` | `string` | `'16px'` | Layout gap between replicated items (e.g. '12px', '1rem') |
| `ghost` | `boolean` | `false` | If true, keeps the children visible at low opacity and blurred behind the skeleton. Only works when `mask` is true. |
| `height` | `string` | `'20px'` | Height of the skeleton |
| highlight-color (`highlightColor`) | `string` | — | Optional explicit highlight/shimmer color for the wave animation. If not provided, it is auto-derived from `color` by lightening it. |
| last-row-width (`lastRowWidth`) | `string` | `'80%'` | Width of the last row when multi-line text is used (e.g. '60%') |
| lazy-animation (`lazyAnimation`) | `boolean` | `true` | If true, animations will automatically pause when the component is not in the viewport. Dramatically improves performance and battery life for long lists. |
| `mask` | `boolean` | `false` | If true, the skeleton acts as a mask over its children. Useful for wrapping text or components to skeletonize them seamlessly. |
| `progress` | `number` | — | Progress value (0-100) for determinate skeletons |
| `radius` | `string` | — |  |
| `rows` | `number` | `1` | Number of rows (lines) to render when shape is 'text' |
| `rtl` | `boolean` | `false` | RTL shimmer direction |
| `shape` | `"avatar" \| "button" \| "card" \| "circle" \| "image" \| "list-item" \| "none" \| "oval" \| "pill" \| "rectangle" \| "ro` | `'rectangle'` | Shape of the skeleton |
| `size` | `"2xl" \| "2xs" \| "3xl" \| "3xs" \| "4xl" \| "lg" \| "md" \| "sm" \| "xl" \| "xs"` | `'md'` | Predefined size of the skeleton (xs, sm, md, lg, xl, 2xl) |
| `speed` | `"fast" \| "normal" \| "slow"` | `'normal'` | Animation speed |
| `stagger` | `number` | `0` | Stagger delay in ms between replicated items Makes the animation feel more organic as it flows down the page. |
| `template` | `"card" \| "feed-item" \| "list-item" \| "media-object" \| "none" \| "profile" \| "table-row"` | `'none'` | Layout template to use for automatic skeleton generation. If set to something other than 'none', the `shape` prop is overridden for the template layout. |
| wave-angle (`waveAngle`) | `string` | `'90deg'` | Angle of the wave animation (e.g. '45deg', '90deg'). Default: '90deg' (horizontal) |
| wave-speed (`waveSpeed`) | `string` | `'1.5s'` | Duration of the wave animation cycle (e.g. '1.5s', '3s'). Default: '1.5s' |
| `width` | `string` | `'100%'` | Width of the skeleton |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `skeletonHide` | `void` | Fires when skeleton is hidden |
| `skeletonShow` | `void` | Fires when skeleton is shown |
