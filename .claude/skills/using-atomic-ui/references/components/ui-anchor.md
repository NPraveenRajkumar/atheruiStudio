# ui-anchor

Anchor — Utilities & Actions, Stable.

Anchor link

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| active-color (`activeColor`) | `string` | `'#18ff3e'` | Color of the active indicator |
| active-item (`activeItem`) | `string` | `''` | Currently active item id |
| active-link (`activeLink`) | `string` | `''` | Alias for activeItem (backward-compat) |
| `affix` | `boolean` | `false` | Enable affix/sticky behavior on scroll |
| affix-offset (`affixOffset`) | `number` | `20` | Scroll threshold (px) before affix kicks in |
| `alignment` | `"center" \| "left" \| "right"` | `'left'` | Text alignment inside items |
| arrow-navigation (`arrowNavigation`) | `boolean` | `true` | Enable keyboard arrow navigation between items |
| auto-gen-container (`autoGenContainer`) | `string` | `''` | CSS selector of container to auto-generate links from h1-h4 |
| `collapsible` | `boolean` | `false` | Allow items with children to be collapsed |
| default-expanded (`defaultExpanded`) | `boolean` | `true` | Expand all collapsible items by default |
| `header` | `string` | — | Optional header title for the anchor block (e.g., "On this page") |
| `indicator` | `"default" \| "dot" \| "icon" \| "line"` | `'line'` | Indicator type: 'line' or 'dot' |
| `items` | `AnchorItem[] \| string` | `[]` | Array of anchor items or JSON string. Replaces old `links` prop. |
| `links` | `string` | `''` | Backward-compatible JSON string prop (same as items) |
| load-icons (`loadIcons`) | `boolean` | `true` | Auto-load FontAwesome icons |
| `mode` | `"horizontal" \| "vertical"` | `'vertical'` | Orientation / mode: Orientation |
| number-style (`numberStyle`) | `"alpha" \| "decimal" \| "numeric" \| "roman"` | `'numeric'` | Style of numbers shown |
| observer-root-margin (`observerRootMargin`) | `string` | `''` | Custom IntersectionObserver rootMargin |
| `orientation` | `"horizontal" \| "vertical"` | `'vertical'` | Alias for mode |
| `position` | `"bottom" \| "left" \| "right" \| "top"` | `'left'` | Position when sticky |
| router-navigate (`routerNavigate`) | `boolean` | `false` | Emit navigate event instead of browser navigation |
| scroll-container (`scrollContainer`) | `string` | `''` | CSS selector of scrollable container. Defaults to window. |
| scroll-offset (`scrollOffset`) | `number` | `80` | Offset from top when scrolling to section |
| show-indicator (`showIndicator`) | `boolean` | `true` | Show active indicator line/dot |
| show-numbers (`showNumbers`) | `boolean` | `false` | Show numeric/alpha/roman numbering |
| show-progress (`showProgress`) | `boolean` | `false` | Show scroll progress bar |
| show-tooltip (`showTooltip`) | `boolean` | `false` | Show tooltip on hover |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small"` | `'md'` | Size variant |
| smooth-scroll (`smoothScroll`) | `boolean` | `true` | Enable smooth scrolling behavior |
| `sticky` | `boolean` | `true` | Stick the component using CSS position:sticky |
| `theme` | `"auto" \| "dark" \| "default" \| "green" \| "light"` | `'light'` | Theme variant |
| update-hash (`updateHash`) | `boolean` | `false` | Update URL hash on navigation |
| use-slot (`useSlot`) | `boolean` | `false` | Use named slot per item instead of inline rendering |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `activeItemChange` | `{ id: string; label: string; }` |  |
| `affixChange` | `boolean` |  |
| `itemClick` | `AnchorItem` |  |
| `progressChange` | `number` |  |
