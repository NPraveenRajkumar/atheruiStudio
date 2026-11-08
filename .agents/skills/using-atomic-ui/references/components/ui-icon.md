# ui-icon

Flexible, theme-aware icon component with support for multiple icon libraries, emoji/text fallbacks, and accessibility-first semantics.  ---

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `color` | `string` | — | The color of the icon |
| `fill` | `string` | — | Optional fill color for the icon (works with 'lucide' and 'google') |
| `label` | `string` | — | Accessible label for the icon. If provided, the icon will have role="img" and an aria-label. If not provided, the icon is considered decorative (aria-hidden="true"). |
| `library` | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'default'` | The library to use for the icon. Options: 'se' (Schneider Electric), 'fontawesome', 'icons8', 'iconoir', 'ionicons', 'lucide', 'bootstrap', 'google' (Material Symbols), 'remixicon', 'emoji' (renders the name as a native emoji), or 'default' (URL/SVG/Text) |
| `loading` | `boolean` | `false` | Whether the icon is in a loading state. Shows a small loader. |
| `name` | `string` | — | The name of the icon |
| `size` | `number \| string` | — | The size of the icon (e.g., '16px', '2rem', or a number) For 'se', 'ionicons', and 'lucide', this maps to specific library behavior. |
| `spin` | `boolean` | `false` | Whether the icon should spin |
| `src` | `string` | — | Optional source URL for an image icon |
