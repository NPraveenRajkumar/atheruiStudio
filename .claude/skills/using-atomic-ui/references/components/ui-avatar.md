# ui-avatar

Avatar — Data Display, Stable.

User avatar

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| accept-types (`acceptTypes`) | `string` | `'image/*'` | Accept file types for upload |
| active-speaker (`activeSpeaker`) | `boolean` | `false` | Active speaker visualizer |
| `alt` | `string` | `''` | Alternative text for the image |
| `animated` | `boolean` | `true` | Enable animated shifting transitions on hover |
| `animation` | `"bounce" \| "expand" \| "fade" \| "fade-down" \| "fade-in" \| "fade-in-out" \| "fade-left" \| "fade-out" \| "fade-right"` | `'none'` | Animation type |
| auto-color (`autoColor`) | `boolean` | `false` | Auto-generate color from text |
| `avatars` | `AvatarProps[]` | `[]` | Array of avatar props for dynamic generation (if group is true) |
| `badge` | `number \| string` | `''` | Badge count/text overlay |
| badge-color (`badgeColor`) | `string` | `'#ff4d4f'` | Badge color |
| badge-position (`badgePosition`) | `"bottom-left" \| "bottom-right" \| "top-left" \| "top-right"` | `'top-right'` | Badge position |
| bg-color (`bgColor`) | `string` | `'#52c41a'` | Background color for text/icon avatar |
| `border` | `string` | `''` | Border for avatar |
| `clickable` | `boolean` | `false` | Enable click handler |
| `color` | `string` | `'#ffffff'` | Text color for text/icon avatar |
| `content` | `string` | — | Content to display (letter or text) |
| cross-origin (`crossOrigin`) | `"" \| "anonymous" \| "use-credentials"` | `''` | CORS settings attributes |
| `editable` | `boolean` | `false` | Enable edit/upload functionality |
| enable-popover (`enablePopover`) | `boolean` | `true` | Enable popover to show all avatars when hovering over excess count |
| fallback-icon (`fallbackIcon`) | `string` | `'fas fa-user'` | Fallback icon when no image |
| `fit` | `"contain" \| "cover" \| "fill" \| "scale-down"` | `'cover'` | Image fit mode |
| `gap` | `number` | `4` | Letter type unit distance between left and right sides |
| `glass` | `boolean` | `false` | Enable glassmorphism effect |
| `gradient` | `boolean` | `false` | Use gradient background |
| gradient-colors (`gradientColors`) | `string` | `''` | Gradient colors (array of 2 colors or comma-separated string) |
| `group` | `boolean` | `false` | Whether this avatar acts as a group container |
| group-border-color (`groupBorderColor`) | `string` | `'white'` | Border color for avatars in the group |
| group-border-width (`groupBorderWidth`) | `number` | `2` | Border width for avatars in the group |
| `href` | `string` | `''` | Optional URL to link the avatar to |
| `icon` | `string` | `''` | Custom icon for an icon avatar |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'default'` | Library for the icon (e.g., 'se', 'fontawesome', etc.) |
| img-draggable (`imgDraggable`) | `boolean` | `true` | Whether the picture is allowed to be dragged |
| indicator-size (`indicatorSize`) | `number \| string` | — | Size of the status indicator dot. Accepts a number (px) or any CSS size value. |
| `layout` | `"default" \| "grid" \| "list" \| "stack"` | `'stack'` | Layout mode for groups: 'stack' or 'grid' |
| `lazy` | `boolean` | `false` | Enable lazy loading for images |
| `loading` | `boolean` | `false` | Loading state |
| `max` | `number \| { count?: number; style?: any; popover?: any; }` | `undefined as any` | Maximum config: number or object { count, style, popover } (if group is true) |
| max-initials (`maxInitials`) | `number` | `2` | Maximum number of characters to show for initials |
| max-visible (`maxVisible`) | `number` | `5` | Maximum number of avatars to display before grouping (if group is true) |
| `name` | `string` | — | Optional name to auto-calculate initials from |
| `overlap` | `number` | `undefined as any` | Overlapping amount (negative value for overlap) |
| `reflection` | `boolean` | `false` | Show premium reflection overlay |
| `responsiveSize` | `{ xs?: number; sm?: number; md?: number; lg?: number; xl?: number; }` | `undefined as any` | Responsive size based on screen width |
| ring-color (`ringColor`) | `string` | `'#3bf673'` | Ring color for animations |
| `segments` | `number` | `0` | Number of segments for the story ring |
| `shape` | `"circle" \| "default" \| "pill" \| "rounded" \| "square"` | `'circle'` | The shape of avatar: 'circle', 'square', 'hexagon', 'squircle' |
| show-status (`showStatus`) | `boolean` | `false` | Show status indicator |
| `size` | `number \| string` | `'m'` | The size of the avatar |
| `skeleton` | `boolean` | `false` | Show skeleton loading shimmer |
| `spacing` | `number` | `4` | Spacing between avatars (in pixels) for grid mode |
| `src` | `string` | `''` | The address of the image for an image avatar |
| src-set (`srcSet`) | `string` | `''` | A list of sources to use for different screen resolutions |
| `status` | `"" \| "away" \| "busy" \| "dnd" \| "offline" \| "online"` | `''` | User status indicator (online, offline, away, busy, dnd) |
| status-position (`statusPosition`) | `"bottom-left" \| "bottom-right" \| "top-left" \| "top-right"` | `'bottom-right'` | Position of the status indicator |
| status-pulse (`statusPulse`) | `boolean` | `false` | Animate status indicator |
| `story` | `boolean` | `false` | Show story ring (Instagram style) |
| story-seen (`storySeen`) | `boolean` | `false` | Mark story as seen |
| three-d (`threeD`) | `boolean` | `false` | Enable 3D hover effect |
| tooltip-text (`tooltipText`) | `string` | `''` | Tooltip text to display on hover |
| `variant` | `"bordered" \| "borderless" \| "color" \| "danger" \| "dark" \| "default" \| "dots-only" \| "elevated" \| "error" \| "fil` | `'default'` | Style variant of the avatar |
| `verified` | `boolean` | `false` | Show verified badge |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `avatarClick` | `MouseEvent` | Handler when avatar is clicked |
| `avatarError` | `Event` | Handler when img load error |
| `avatarLoad` | `Event` | Handler when image loads successfully |
| `avatarMouseEnter` | `MouseEvent` | Handler when mouse enters |
| `avatarMouseLeave` | `MouseEvent` | Handler when mouse leaves |
| `avatarUpload` | `{ file: File; dataUrl: string; }` | Handler when file is uploaded |
