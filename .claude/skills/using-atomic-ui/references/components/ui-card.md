# ui-card

Card — Data Display, Stable.

Card container

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `actions` | `string` | `''` | Quick actions (comma-separated list for bottom footer) |
| aspect-ratio (`aspectRatio`) | `string` | `'16/9'` | Aspect ratio for cover image container |
| auto-scroll (`autoScroll`) | `boolean` | `false` | Automatically scroll the card into view when it is expanded if it's partially off-screen |
| `avatar` | `string` | `''` | Avatar image URL |
| avatar-icon (`avatarIcon`) | `string` | `''` | Avatar icon class (e.g. 'fas fa-user') |
| `bodyStyle` | `{ [key: string]: string; }` | `{}` | Custom body section style |
| `border` | `string` | `''` | Custom border string (e.g., '2px solid red') |
| border-radius (`borderRadius`) | `string` | `'8px'` | Custom border radius |
| `bordered` | `boolean` | `true` | Whether to show standard border |
| button-text (`buttonText`) | `string` | `''` | Primary button text in footer |
| card-id (`cardId`) | `string` | `''` | Unique identifier for the card |
| card-title (`cardTitle`) | `string` | `''` | Card title string |
| `clickable` | `boolean` | `false` | Make entire card clickable (if flippable is false) |
| `closable` | `boolean` | `false` | Show close button in header |
| `closed` | `boolean` | `false` | Controlled closed/dismissed state of the card |
| `collapsed` | `boolean` | `false` | Initially collapsed or controlled collapsed state |
| `collapsible` | `boolean` | `false` | Enable card expansion/collapse |
| `color` | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'default'` | Card color theme |
| `cover` | `string` | `''` | Cover image URL |
| cover-alt (`coverAlt`) | `string` | `'Card cover'` | Alt text for cover image |
| `description` | `string` | `''` | Description text (pattern: shortcut) |
| display-mode (`displayMode`) | `"compact" \| "default" \| "expanded" \| "stack"` | `'default'` | Card display mode |
| `extra` | `string` | `''` | Content to show in the extra section of the header |
| flip-trigger (`flipTrigger`) | `"click" \| "hover"` | `'click'` | Flip trigger mechanism: 'click' \| 'hover' |
| `flippable` | `boolean` | `false` | Enable flip animation |
| `flipped` | `boolean` | `false` | Initially flipped or controlled flipped state |
| `glass` | `boolean` | `false` | Enable glassmorphism effect (premium visual) |
| `headStyle` | `{ [key: string]: string; }` | `{}` | Custom head section style |
| `height` | `string` | `'auto'` | Height of the card |
| `hoverable` | `boolean` | `false` | Enable hover elevation/shadow effect |
| `href` | `string` | `''` | URL to navigate to when clicked |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'default'` | Icon library for menu items |
| `importance` | `"emphasized" \| "standard"` | `'standard'` | Card importance level |
| `layout` | `"horizontal" \| "vertical"` | `'vertical'` | Card layout orientation |
| `loading` | `boolean` | `false` | Show loading skeleton |
| `magnetic` | `boolean` | `false` | Enable magnetic attraction effect |
| menu-actions (`menuActions`) | `string` | `''` | Menu actions (comma-separated list, alternative to menuItems) |
| menu-items (`menuItems`) | `string` | `'[]'` | Menu items (as JSON string array of CardMenuItem) |
| `pattern` | `"default" \| "product" \| "shortcut"` | `'default'` | Card pattern/style preset |
| `ribbon` | `string` | `''` | Ribbon text to display on a corner |
| ribbon-color (`ribbonColor`) | `string` | `''` | Ribbon custom color |
| ribbon-position (`ribbonPosition`) | `"bottom-left" \| "bottom-right" \| "top-left" \| "top-right"` | `'top-right'` | Ribbon position |
| scroll-behavior (`scrollBehavior`) | `"auto" \| "instant" \| "smooth"` | `'smooth'` | Scrolling behavior when autoScroll is enabled |
| `selectable` | `boolean` | `false` | Enable selection mode |
| `selected` | `boolean` | `false` | Selection state |
| `shape` | `"circle" \| "default" \| "pill" \| "rounded" \| "square"` | `'default'` | Card shape |
| show-menu (`showMenu`) | `boolean` | `false` | Show menu button (3 dots) |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small"` | `'default'` | Card size |
| `tag` | `string` | `''` | Tag text (pattern: product/shortcut) |
| `target` | `string` | `''` | Link target (e.g., '_blank') |
| `tilt` | `boolean` | `false` | Enable 3D tilt effect |
| `type` | `"default" \| "inner"` | `'default'` | Type variant: 'inner' \| 'default' |
| `variant` | `"bordered" \| "borderless" \| "color" \| "danger" \| "dark" \| "default" \| "dots-only" \| "elevated" \| "error" \| "fil` | `'default'` | Card variant |
| `width` | `string` | `'100%'` | Width of the card |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `cardClick` | `void` |  |
| `cardClose` | `void` |  |
| `cardFlip` | `boolean` |  |
| `cardSelect` | `boolean` |  |
| `cardToggle` | `boolean` |  |
| `expandToggle` | `{ expanded: boolean; }` |  |
| `menuActionClick` | `string` | Emitted when a menu action is clicked (alias for menuItemClick matching ui-card) |
| `menuItemClick` | `CardMenuEvent` |  |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `scrollToCard` | `scrollToCard() => Promise<void>` | Programmatically scroll this card into view |
