# ui-dropdown

Dropdown — Forms & Input, Stable.

Dropdown menu

Shadow DOM: no

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `appearance` | `"button" \| "dropdown"` | `'dropdown'` | Appearance: default dropdown or button-like (no arrow) |
| `cascading` | `boolean` | `false` | Enable cascading/hierarchical selection |
| case-sensitive (`caseSensitive`) | `boolean` | `false` | If true, search filtering is case-sensitive |
| chip-view (`chipView`) | `boolean` | `false` | Use chips for multi-select display |
| `clearable` | `boolean` | — | Show clear (✕) button when a value is selected. - When not set (default): automatically shown for multi-select, hidden for single-select. - Set to `true`  : always show the clear button (both single & multi). - Set to `false` : always hide the clear button (both single & multi). |
| `disabled` | `boolean` | `false` | Disabled state |
| error-message (`errorMessage`) | `string` | — | Error message to show when invalid |
| expand-all (`expandAll`) | `boolean` | `false` | If true, all nodes in a cascading dropdown will be expanded by default. |
| fit-content (`fitContent`) | `boolean` | `false` | If true, the dropdown width fits its longest option (max-content). |
| full-width (`fullWidth`) | `boolean` | `false` | If true, the dropdown will take up the full width of its container. |
| helper-text (`helperText`) | `string` | — | Helper text / validation message |
| high-fidelity (`highFidelity`) | `boolean` | `true` | Use high-fidelity animation (Framer-like physics) |
| icon-library (`iconLibrary`) | `string` | `'ionicons'` | Default icon library for option icons (e.g. 'lucide', 'ionicons') |
| ignore-parent-position (`ignoreParentPosition`) | `boolean` | `true` | If true, dropdown positioning ignores transformed/positioned parent offsets. Use this when the menu is portaled and should stay anchored to viewport coordinates. |
| `invalid` | `boolean` | `false` | Validation state |
| `label` | `string` | `''` | Label text shown above the dropdown |
| `loading` | `boolean` | `false` | Loading state |
| max-height (`maxHeight`) | `number` | `300` | Maximum height of dropdown (in pixels) |
| menu-width (`menuWidth`) | `number \| string` | — | Optional width for the dropdown options panel. Accepts a number (pixels) or any valid CSS width value such as `320px`, `24rem`, or `min(28rem, 90vw)`. By default, the menu matches the trigger width. |
| multi-select (`multiSelect`) | `boolean` | `false` | Enable multi-select mode |
| `options` | `DropdownOption[] \| string` | `[]` | Options as JSON string or DropdownOption array |
| `placeholder` | `string` | `'Select an option'` | Placeholder text |
| `rtl` | `boolean` | `false` | RTL support |
| search-placeholder (`searchPlaceholder`) | `string` | `'Search...'` | Placeholder for the search input |
| `searchable` | `boolean` | `false` | Show search/filter input |
| select-all-label (`selectAllLabel`) | `string` | `'Select All'` | Label for the Select All option |
| selected-marker-color (`selectedMarkerColor`) | `string` | `''` | Color for the selection marker icon. Defaults to the selected state color token. |
| selected-marker-icon (`selectedMarkerIcon`) | `string` | `'check'` | Custom icon for the selection marker |
| selected-marker-label (`selectedMarkerLabel`) | `string` | `''` | Optional label text shown after the checkmark on the selected item. |
| selected-marker-library (`selectedMarkerLibrary`) | `string` | `'lucide'` | Icon library for the selection marker icon |
| `shape` | `"default" \| "pill" \| "rounded" \| "square"` | `'default'` | Shape variant (inherits from design system or parent) |
| show-arrow (`showArrow`) | `boolean` | — | Controls visibility of the arrow icon. If false, no arrow is shown. Defaults to true for dropdown appearance; false when appearance is 'button'. |
| show-path (`showPath`) | `boolean` | `false` | If true, show the full hierarchy path in selected value (for cascading) |
| show-select-all (`showSelectAll`) | `boolean` | `false` | If true, shows a "Select All" option in multi-select mode |
| show-selected-marker (`showSelectedMarker`) | `boolean` | `true` | If true, shows a checkmark (tick) next to the selected item in single-select mode. |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small"` | `'md'` | Size variant |
| `skeleton` | `boolean` | `false` | If true, shows a skeleton loading state for the trigger |
| text-color (`textColor`) | `string` | `''` | Custom text color for the dropdown display |
| `value` | `string` | `''` | Selected value(s) - string for single, comma-separated for multi |
| `variant` | `"default" \| "detailed" \| "glass" \| "nested-menu" \| "toggle"` | `'default'` | Aesthetic variant |
| virtual-scroll (`virtualScroll`) | `boolean` | `false` | If true, enables virtual scrolling (renders only a subset of items for performance) |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `dropdownClose` | `void` | Emitted when dropdown closes |
| `dropdownOpen` | `void` | Emitted when dropdown opens |
| `valueChange` | `DropdownChangeEvent` | Emitted when value changes |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `open` | `open() => Promise<void>` | Programmatically open the dropdown menu |
