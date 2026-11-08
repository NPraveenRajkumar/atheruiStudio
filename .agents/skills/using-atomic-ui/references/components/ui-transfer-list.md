# ui-transfer-list

Transfer List — Forms & Input, Stable.

Transfer between lists

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| allow-reorder (`allowReorder`) | `boolean` | `false` | Enable reordering in target list |
| `columns` | `{ title: string; dataIndex: string; }[]` | `[]` | Columns for table mode |
| `disabled` | `boolean` | `false` | Disabled state |
| enable-drag (`enableDrag`) | `boolean` | `false` | Enable drag and drop |
| `filterOption` | `(inputValue: string, item: TransferItem) => boolean` | `null` | Custom filter option function |
| group-by (`groupBy`) | `string` | `''` | Property to group items by (e.g., 'category') |
| `height` | `string` | `'300px'` | Height of each list |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'default'` | Default library for icons |
| `itemRenderer` | `(item: TransferItem) => string \| HTMLElement` | `null` | Custom item renderer function |
| `layout` | `"horizontal" \| "vertical"` | `'horizontal'` | Layout orientation |
| `loading` | `boolean` | `false` | Loading state |
| `locale` | `{ itemUnit?: string; itemsUnit?: string; notFoundContent?: string; searchPlaceholder?: string; titles?: string[]; }` | `{       itemUnit: 'item',       itemsUnit: 'items',       notFoundContent: 'No items',       searchPlaceholder: 'Search items...',       titles: ['Available', 'Selected']     }` | Locale object for internationalization |
| `max` | `number` | `Infinity` | Maximum number of items allowed in target list |
| `mode` | `"list" \| "table" \| "tree"` | `'list'` | Mode of the transfer list |
| one-way (`oneWay`) | `boolean` | `false` | Enable one-way mode (copy instead of move) |
| page-size (`pageSize`) | `number` | `10` |  |
| `pagination` | `boolean` | `false` | Pagination support |
| `resizable` | `boolean` | `false` | Enable panel resizing (only for horizontal layout) |
| search-placeholder (`searchPlaceholder`) | `string` | `'Search items...'` | Placeholder for search input |
| `searchable` | `boolean` | `true` | Enable search functionality |
| show-select-all (`showSelectAll`) | `boolean` | `true` | Show select all checkbox |
| `sortable` | `boolean` | `false` | Enable sorting functionality |
| source-items (`sourceItems`) | `TransferItem[] \| string` | `[]` | Source items (left list) |
| target-items (`targetItems`) | `TransferItem[] \| string` | `[]` | Target items (right list) |
| `titles` | `string \| string[]` | `['Available', 'Selected']` | Titles for source and target lists |
| `variant` | `"default" \| "glass"` | `'default'` | Enable glassmorphism variant |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `selectionChanged` | `{ sourceSelected: (string \| number)[]; targetSelected: (string \| number)[]; }` |  |
| `transferChange` | `{ source: TransferItem[]; target: TransferItem[]; }` | Events |
