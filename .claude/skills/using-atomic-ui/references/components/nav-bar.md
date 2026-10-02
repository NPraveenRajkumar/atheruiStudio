# nav-bar

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| app-title (`appTitle`) | `string` | — | Application title |
| `bottomItems` | `NavItem[]` | `[]` | Navigation items for the bottom section |
| `bottomItemsSecondary` | `NavItem[]` | `[]` | Secondary navigation items for the bottom section |
| `collapsed` | `boolean` | `true` | Whether the navigation is collapsed (mobile/hamburger mode) |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "fontawesome" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "se"` | `'default'` | Default library for icons |
| logo-alt (`logoAlt`) | `string` | `'Logo'` | Logo alt text |
| logo-url (`logoUrl`) | `string` | — | Logo URL |
| max-visible-items (`maxVisibleItems`) | `number` | `0` | Maximum number of visible items before showing overflow menu (0 = show all) |
| search-placeholder (`searchPlaceholder`) | `string` | `'Search...'` | Search placeholder text |
| show-hamburger (`showHamburger`) | `boolean` | `true` | Whether to show the hamburger menu icon |
| show-search (`showSearch`) | `boolean` | `false` | Whether to show search input for filtering items |
| `topItems` | `NavItem[]` | `[]` | Navigation items for the top section |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `navItemClicked` | `{ item: NavItem; isChild: boolean; }` | Event emitted when a nav item is clicked |
| `navToggled` | `{ collapsed: boolean; }` | Event emitted when navigation is toggled |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `collapse` | `collapse() => Promise<void>` | Collapse the navigation |
| `expand` | `expand() => Promise<void>` | Expand the navigation |
| `toggle` | `toggle() => Promise<void>` | Toggle the navigation collapsed state |
