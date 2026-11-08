# ui-avatar-group

Avatar Group — Data Display, Stable.

Multiple avatars

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `animated` | `boolean` | `true` | Enable animated shifting transitions on hover |
| `avatars` | `AvatarProps[]` | `[]` | Array of avatar props for dynamic generation |
| border-color (`borderColor`) | `string` | `'white'` | Border color for avatars in the group |
| border-width (`borderWidth`) | `number` | `2` | Border width for avatars in the group |
| enable-popover (`enablePopover`) | `boolean` | `true` | Enable popover to show all avatars when hovering over excess count |
| `layout` | `"grid" \| "stack"` | `'stack'` | Layout mode: 'stack' or 'grid' |
| `max` | `number \| { count?: number; style?: any; popover?: any; }` | `null` | Maximum config: number or object { count, style, popover } |
| max-visible (`maxVisible`) | `number` | `5` | Maximum number of avatars to display before grouping |
| `overlap` | `number` | `null` | Overlapping amount (negative value for overlap) |
| `shape` | `"circle" \| "hexagon" \| "square" \| "squircle"` | `'circle'` | Shape to apply to all avatars in the group |
| `size` | `number \| string` | `'m'` | Size of avatars in the group |
| `spacing` | `number` | `4` | Spacing between avatars (in pixels) for grid mode |
