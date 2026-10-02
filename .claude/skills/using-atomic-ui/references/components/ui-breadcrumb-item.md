# ui-breadcrumb-item

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `active` | `boolean` | `false` | Whether the item is the currently active page |
| `badge` | `string` | — | Optional badge text to display next to the label |
| `disabled` | `boolean` | `false` | Whether the item is disabled |
| `href` | `string` | — | Optional link for the breadcrumb item |
| `icon` | `string` | — | Optional icon for the breadcrumb item |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'default'` | Icon library to use |
| `label` | `string` | — | Label for the breadcrumb item |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small"` | `'md'` | Size inherited from parent (set automatically) |
