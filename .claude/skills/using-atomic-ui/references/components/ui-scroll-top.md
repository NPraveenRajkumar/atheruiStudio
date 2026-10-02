# ui-scroll-top

Scroll Top — Utilities & Actions, Stable.

Scroll to top button

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `animation` | `"fade" \| "scale" \| "slide"` | `'scale'` | Entrance animation |
| auto-hide (`autoHide`) | `boolean` | `false` | Auto-hide after inactivity |
| auto-hide-hold-time (`autoHideHoldTime`) | `number` | `3000` | Auto-hide delay in ms |
| `behavior` | `"auto" \| "smooth"` | `'smooth'` | Scroll behavior |
| `color` | `"danger" \| "dark" \| "info" \| "primary" \| "secondary" \| "success" \| "warning"` | `'primary'` | Color scheme |
| `glassy` | `boolean` | `false` | Use glassmorphism effect (backdrop-filter) |
| `haptic` | `boolean` | `false` | Enable haptic feedback |
| `icon` | `string` | `'arrow-up'` | Icon to display (can be emoji, text, or HTML) |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'default'` | Library to use for icons |
| is-draggable (`isDraggable`) | `boolean` | `false` | Allow dragging the scroll-top to reposition it |
| `label` | `string` | — | Optional text label |
| `loading` | `boolean` | `false` | Show loading state |
| `magnetic` | `boolean` | `false` | Use magnetic pull effect |
| magnetic-radius (`magneticRadius`) | `number` | `150` | Radius of magnetic pull in pixels |
| magnetic-strength (`magneticStrength`) | `number` | `0.3` | Strength of magnetic pull (0 to 1) |
| `mode` | `"both" \| "bottom" \| "top"` | `'top'` | Scroll mode: 'top', 'bottom', or 'both' |
| persistence-id (`persistenceId`) | `string` | — | Unique ID to persist the draggable position in localStorage |
| `portal` | `boolean` | `false` | Portal to body to avoid stacking context issues |
| `position` | `"bottom-center" \| "bottom-left" \| "bottom-right" \| "center" \| "center-left" \| "center-right" \| "top-center" \| "to` | `'bottom-right'` | Position of the button |
| progress-color (`progressColor`) | `string` | — | Progress ring color |
| quick-jump (`quickJump`) | `boolean` | `false` | Enable quick-jump menu to headings |
| `shape` | `"chip" \| "circle" \| "oval" \| "rounded" \| "sharp" \| "square"` | `'rounded'` | Button shape |
| show-progress (`showProgress`) | `boolean` | `false` | Show SVG progress ring |
| show-progress-value (`showProgressValue`) | `boolean` | `false` | Show percentage text inside progress ring |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small"` | `'md'` | Button size |
| `skeleton` | `boolean` | `false` | Show skeleton placeholder |
| `strategy` | `"absolute" \| "fixed"` | `'fixed'` | Positioning strategy: 'fixed' (screen) or 'absolute' (container) |
| `target` | `string` | — | Target element selector to scroll (default is window) |
| text-direction (`textDirection`) | `"auto" \| "ltr" \| "rtl"` | `'auto'` | Explicit text direction |
| `threshold` | `number` | `300` | Threshold (in pixels) before button appears |
| `tooltip` | `string` | — | Tooltip text |
| `variant` | `"ghost" \| "outline" \| "solid"` | `'solid'` | Button variant |
| z-index (`zIndex`) | `number` | `1000` | Z-index level |
