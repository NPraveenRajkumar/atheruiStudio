# ui-breadcrumb

Breadcrumb — Navigation & Layout, Stable.

Breadcrumb navigation

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| base-url (`baseUrl`) | `string` | `''` | Optional base URL for structured data URLs (if relative) |
| home-icon (`homeIcon`) | `string` | `'🏠'` | Home icon |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'default'` | Default Library for icons |
| `items` | `BreadcrumbItem[] \| string` | `[]` | Array of breadcrumb items |
| max-items (`maxItems`) | `number` | `0` | Maximum number of items to display before collapsing |
| `separator` | `string` | `'/'` | Separator between breadcrumb items |
| separator-icon (`separatorIcon`) | `string` | — | Custom separator icon (overrides separator text) |
| separator-icon-library (`separatorIconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'default'` | Library for separator icon |
| show-home (`showHome`) | `boolean` | `false` | Show home icon as first item |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small"` | `'md'` | Size of breadcrumb items |
| structured-data (`structuredData`) | `boolean` | `false` | Enable JSON-LD Structured Data for SEO |
| `variant` | `"bordered" \| "borderless" \| "color" \| "danger" \| "dark" \| "default" \| "dots-only" \| "elevated" \| "error" \| "fil` | `'default'` | Visual variant of the breadcrumb |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `breadcrumbClick` | `BreadcrumbItem` | Event emitted when a breadcrumb item is clicked |
