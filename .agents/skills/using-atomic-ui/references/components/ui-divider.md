# ui-divider

Divider — Utilities & Actions, Enhanced.

A flexible divider component that can display text and supports various styles and orientations.

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `animation` | `"expand" \| "fade" \| "none" \| "slide"` | `'none'` | Animation type |
| `aura` | `boolean` | `false` | Dynamic flowing glow effect (Aura) |
| `badge` | `string` | `''` | Badge/counter text |
| border-radius (`borderRadius`) | `string` | `''` | Border radius for lines |
| `clickable` | `boolean` | `false` | Make divider clickable |
| `color` | `string` | `''` | Theme color or custom CSS color |
| current-step (`currentStep`) | `number` | `0` | Current active step in stepper mode (1-indexed) |
| drag-enabled (`dragEnabled`) | `boolean` | `false` | Turn the divider into a functional range slider/scrubber |
| enable-haptics (`enableHaptics`) | `boolean` | `false` | Emit haptic audio events on interaction |
| `gap` | `string` | `''` | Spacing around the divider (margin) |
| `glass` | `boolean` | `false` | Glassmorphism effect (backdrop-blur) |
| `glow` | `boolean` | `false` | Glow effect |
| `heatmap` | `boolean` | `false` | Heatmap status gradient based on percentage |
| `height` | `string` | `''` | Height of the divider |
| `holographic` | `boolean` | `false` | Chromatic aberration (glitch) effect on hover |
| `icon` | `string` | `''` | Icon to display on the divider (emoji or character) |
| icon-animation (`iconAnimation`) | `"flip" \| "none" \| "pulse" \| "spin"` | `'none'` | Animation style for the icon/icon area |
| `image` | `string` | `''` | Image URL to display as an avatar/icon |
| `inset` | `"both" \| "end" \| "none" \| "start"` | `'none'` | Inset style |
| `kinetic` | `boolean` | `false` | Kinetic animated gradient flow |
| `linecap` | `"butt" \| "round" \| "square"` | `'butt'` | Style of the line ends: 'butt', 'round', or 'square' |
| `lines` | `"all" \| "end" \| "none" \| "start"` | `'all'` | Control which lines are rendered: 'all', 'start', 'end', or 'none' |
| `loading` | `boolean` | `false` | Loading state (shows a shimmer effect) |
| max-width (`maxWidth`) | `string` | `''` | Max width for divider |
| `opacity` | `number` | `1` | Opacity (0-1) |
| `organic` | `boolean` | `false` | Organic wobbling SVG morph on hover |
| `orientation` | `"horizontal" \| "vertical"` | `'horizontal'` | Orientation of the divider: 'horizontal' or 'vertical' |
| `parallax` | `boolean` | `false` | Parallax shadow projection for depth |
| `pattern` | `"dots" \| "none" \| "stripes" \| "wavy" \| "zigzag"` | `'none'` | Pattern style |
| `percent` | `number` | `0` | Percentage for heatmap gradient (0-100) |
| `plain` | `boolean` | `false` | If true, renders without the separator lines |
| `responsive` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "none" \| "sm" \| "small"` | `'none'` | Automatic orientation switch based on screen width |
| `reveal` | `boolean` | `false` | Cinematic reveal animation on scroll into view |
| `ripple` | `boolean` | `false` | Tactile ripple effect on click |
| `shadow` | `boolean` | `false` | Shadow effect |
| `shape` | `"arrow" \| "curve" \| "none" \| "tilt" \| "triangle" \| "wave" \| "zigzag"` | `'none'` | Shape divider type |
| shape-color (`shapeColor`) | `string` | `''` | Color for the shape divider |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small"` | `'md'` | Size/thickness of the divider line |
| `spacing` | `"comfortable" \| "compact" \| "none" \| "spacious"` | `'none'` | Spacing preset |
| `steps` | `number` | `0` | Number of steps for timeline/stepper mode |
| `stream` | `boolean` | `false` | Real-time data streaming flicker on the line track |
| `subtitle` | `string` | `''` | Subtitle text to display below the main text |
| teleport-to (`teleportTo`) | `string` | `''` | Target element ID to scroll to when clicked |
| `text` | `string` | `''` | Text to display on the divider |
| text-align (`textAlign`) | `"center" \| "end" \| "left" \| "right" \| "start"` | `'center'` | Text alignment: 'start', 'center', or 'end' |
| text-color (`textColor`) | `string` | `''` | Custom color for the text (CSS color value) |
| text-transform (`textTransform`) | `"capitalize" \| "lowercase" \| "none" \| "uppercase"` | `'capitalize'` | Text transformation |
| `thickness` | `string` | `''` | Precise thickness (e.g., '1px', '4px') - overrides size if set |
| `upright` | `boolean` | `false` | Use upright characters in vertical orientation |
| `variant` | `"dashed" \| "dotted" \| "double-dashed" \| "double-dotted" \| "double-solid" \| "gradient" \| "solid"` | `'solid'` | Visual variant of the divider line |
| vertical-align (`verticalAlign`) | `"bottom" \| "center" \| "top"` | `'center'` | Vertical alignment: 'top', 'center', or 'bottom' (only for vertical orientation) |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `dividerChange` | `{ percent: number; step: number; }` | Fired when draggable divider changes |
| `dividerClick` | `MouseEvent` | Fired when divider is clicked |
| `dividerHaptic` | `{ type: "step" \| "click" \| "hover" \| "reveal"; }` | Fired for audio/haptic cues |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `triggerReveal` | `triggerReveal() => Promise<void>` |  |
