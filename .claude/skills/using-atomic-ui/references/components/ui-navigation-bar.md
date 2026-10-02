# ui-navigation-bar

UI Navigation — Navigation & Layout, Stable.

Advanced navigation with themes

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `accordion` | `boolean` | `false` | Accordion mode: one expanded at a time |
| active-id (`activeId`) | `string` | — | ID of the currently active item (route aware) |
| `bottomItems` | `NavigationItem[]` | `[]` | Bottom items data source |
| `bottomItemsSecondary` | `NavigationItem[]` | `[]` | Secondary bottom items data source |
| `categories` | `NavigationItem[]` | `[]` | Secondary data source: Categories to show at the top |
| collapsed-width (`collapsedWidth`) | `string` | `'64px'` | Width when collapsed (css unit) |
| `collapsible` | `boolean` | `true` | Whether the navigation is collapsible |
| company-logo (`companyLogo`) | `string` | — | Company Logo URL |
| company-name (`companyName`) | `string` | — | Company Name |
| `density` | `"comfortable" \| "compact"` | `'comfortable'` | Density of items |
| expanded-width (`expandedWidth`) | `string` | `'280px'` | Width when expanded (css unit) |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "fontawesome" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "se"` | `'default'` | Default library for icons |
| icon-only (`iconOnly`) | `boolean` | `true` | Show only icons in collapsed mode |
| indicator-position (`indicatorPosition`) | `"end" \| "start"` | `'start'` | Position of the active item indicator bar: 'start' (left) or 'end' (right) |
| `items` | `NavigationItem[]` | `[]` | Main data source: Array of navigation items |
| max-items (`maxItems`) | `number` | `100` | Maximum number of items to show before overflowing to "More" menu |
| `mode` | `"auto" \| "collapsed" \| "expanded"` | `'collapsed'` | Mode of the navigation |
| `orientation` | `"horizontal" \| "vertical"` | `'vertical'` | Layout orientation |
| `position` | `"left" \| "right"` | `'left'` | Positioning of the navigation |
| `secondaryItems` | `NavigationItem[]` | `[]` | Secondary items data source |
| show-search (`showSearch`) | `boolean` | `false` | Show search bar in expanded mode |
| `theme` | `"auto" \| "dark" \| "green" \| "light"` | `'auto'` | Theme preference (just sets a class or attribute) |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `itemCollapse` | `string` |  |
| `itemExpand` | `string` |  |
| `navClose` | `void` |  |
| `navItemClick` | `NavigationItem` |  |
| `navOpen` | `void` |  |
| `navToggle` | `{ expanded: boolean; }` |  |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `close` | `close() => Promise<void>` |  |
| `open` | `open() => Promise<void>` |  |
| `setActive` | `setActive(id: string) => Promise<void>` |  |
| `toggle` | `toggle() => Promise<void>` |  |
