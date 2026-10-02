# ui-multi-cascading-dropdown

Shadow DOM: no

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| case-sensitive (`caseSensitive`) | `boolean` | `false` | If true, search filtering is case-sensitive |
| chip-view (`chipView`) | `boolean` | `false` | Use chips for multi-select display |
| `clearable` | `boolean` | — | Show clear (✕) button when a value is selected |
| `disabled` | `boolean` | `false` | Disabled state |
| error-message (`errorMessage`) | `string` | — | Error message to show when invalid |
| fit-content (`fitContent`) | `boolean` | `false` | If true, the dropdown width fits its content |
| full-width (`fullWidth`) | `boolean` | `false` | If true, the dropdown will take up the full width of its container |
| helper-text (`helperText`) | `string` | — | Helper text / validation message |
| icon-library (`iconLibrary`) | `string` | `'lucide'` | Icon library to use for icons |
| `invalid` | `boolean` | `false` | Validation state |
| `label` | `string` | `''` | Label text shown above the dropdown |
| `loading` | `boolean` | `false` | Loading state |
| max-height (`maxHeight`) | `number` | `320` | Maximum height of dropdown menu panels (in pixels) |
| menu-width (`menuWidth`) | `number \| string` | — | Optional width for each dropdown options panel |
| multi-select (`multiSelect`) | `boolean` | `true` | Whether multiple items can be selected |
| `options` | `DropdownItem[] \| string` | `[]` | The data structure for the dropdown |
| `placeholder` | `string` | `'Select options'` | Placeholder text for the trigger |
| search-placeholder (`searchPlaceholder`) | `string` | `'Search...'` | Placeholder for the search input |
| `searchable` | `boolean` | `false` | Show search/filter input |
| selected-marker-icon (`selectedMarkerIcon`) | `string` | `'check'` | Custom icon for the selection marker |
| selected-marker-library (`selectedMarkerLibrary`) | `string` | `'lucide'` | Icon library for the selection marker icon |
| `shape` | `"default" \| "pill" \| "rounded" \| "square"` | `'default'` | Shape variant |
| show-path (`showPath`) | `boolean` | `false` | If true, show the full hierarchy path in selected value |
| show-selected-marker (`showSelectedMarker`) | `boolean` | `true` | If true, shows a checkmark next to the selected item in single-select mode |
| `size` | `"default" \| "lg" \| "md" \| "sm" \| "xl" \| "xs" \| "xxl" \| "xxs" \| "xxxl" \| "xxxs"` | `'md'` | Size variant |
| `skeleton` | `boolean` | `false` | If true, shows a skeleton loading state for the trigger |
| text-color (`textColor`) | `string` | `''` | Custom text color for trigger display |
| `value` | `string \| string[]` | `[]` | Array of selected values |
| `variant` | `"default" \| "detailed" \| "glass" \| "toggle"` | `'default'` | Aesthetic variant |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `valueChange` | `MultiCascadingDropdownChangeEvent` | Emits when selection changes |
