# ui-tabs

Tabs — Data Display, Stable.

Tabbed interface

Shadow DOM: no

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| active-color (`activeColor`) | `string` | `''` | Custom active/indicator color (sets --tab-active-color). Accepts any CSS color value. |
| animation-duration (`animationDuration`) | `number` | `300` | Animation duration in milliseconds |
| default-active (`defaultActive`) | `string` | `''` | ID of the tab that should be active by default |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'default'` | Default library for icons |
| icon-only (`iconOnly`) | `boolean` | `false` | Show only icons (hide titles) |
| icon-position (`iconPosition`) | `"bottom" \| "left" \| "right" \| "top"` | `'left'` | Icon position: 'start', 'end', 'top', 'bottom' |
| indicator-gradient (`indicatorGradient`) | `string` | `''` | Optional gradient for the indicator bar. Accepts any CSS gradient string, e.g. "linear-gradient(90deg,#ec4899,#8b5cf6)". When set, overrides activeColor on the indicator (activeColor still affects text & active bg). Leave empty to use the solid activeColor. |
| indicator-position (`indicatorPosition`) | `"bottom" \| "top"` | `'bottom'` | Position of the indicator for line variant: TopBottom |
| indicator-style (`indicatorStyle`) | `"bold" \| "capsule" \| "dot" \| "glow" \| "line" \| "none"` | `'line'` | Selection indicator shape — applies to variants that use a sliding bar (line, minimal). - line    — default 4px bar - capsule — pill-rounded fat bar - dot     — centred dot - glow    — soft blur glow bar - bold    — extra-thick bar - none    — no indicator |
| is-draggable (`isDraggable`) | `boolean` | `false` | Enable drag-and-drop to reorder tabs |
| `items` | `TabItem[] \| string` | `[]` | Array of tab items |
| `lazy` | `boolean` | `false` | When true, non-active tab panels are not mounted until first activated (content-based tabs only) |
| max-tab-width (`maxTabWidth`) | `number` | `300` | Maximum width for tab titles (in pixels) |
| max-title-length (`maxTitleLength`) | `number` | `24` | Maximum visible length for tab titles (characters). If exceeded, title is ellipsized via CSS and full text is available in tooltip. |
| `orientation` | `"horizontal" \| "vertical"` | `'horizontal'` | Orientation of tabs: 'horizontal' or 'vertical' |
| `position` | `"center" \| "full-width" \| "left" \| "right"` | `'left'` | Position of tabs header: 'left', 'center', 'right', 'full-width' |
| scroll-button-placement (`scrollButtonPlacement`) | `"end" \| "split" \| "start"` | `'split'` | Scroll button placement: 'split' (ends), 'start' (both left/top), 'end' (both right/bottom) |
| scroll-mode (`scrollMode`) | `"auto" \| "manual" \| "none"` | `'manual'` | Scroll mode: 'auto' (auto-scroll to active), 'manual' (user controls), 'none' (no scroll) |
| selection-animation (`selectionAnimation`) | `"fade" \| "none" \| "scale" \| "slide"` | `'slide'` | Animation on tab selection |
| show-close-all (`showCloseAll`) | `boolean` | `false` | Show close all button |
| show-tab-list (`showTabList`) | `boolean` | `false` | Show tab list dropdown button |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small" \| "xl" \| "xs" \| "xxl" \| "xxs" \| "xxxl" \| "xxxs` | `'md'` | Tab size: xs \| sm \| md \| lg \| xl |
| `variant` | `"card" \| "elastic" \| "enclosed" \| "folder" \| "glass" \| "line" \| "minimal" \| "pill" \| "sidebar" \| "slanted" \| "` | `'line'` | Tab variant style |
| wrap-text (`wrapText`) | `boolean` | `false` | Enable text wrapping in tabs |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `closeAll` | `void` |  |
| `tabChange` | `TabChangeEvent` |  |
| `tabClose` | `string` |  |
| `tabDelete` | `string` |  |
| `tabEdit` | `string` |  |
| `tabOpenPanel` | `string` |  |
| `tabsReordered` | `TabItem[]` |  |
| `tabUpdate` | `{ id: string; title: string; }` |  |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `destroyComponent` | `destroyComponent() => Promise<void>` |  |
| `getActiveTab` | `getActiveTab() => Promise<string>` |  |
| `selectTabById` | `selectTabById(tabId: string) => Promise<void>` |  |

## CSS parts

`indicator`, `tabs-header`
