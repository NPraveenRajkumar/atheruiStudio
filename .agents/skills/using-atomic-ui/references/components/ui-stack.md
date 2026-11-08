# ui-stack

Stack — Advanced Components, Stable.

Stack layout

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `align` | `"center" \| "end" \| "start" \| "stretch"` | `'center'` | Align items |
| `direction` | `"horizontal" \| "vertical"` | `'horizontal'` | Stacking direction |
| divider-type (`dividerType`) | `"dashed" \| "dotted" \| "none" \| "solid"` | `'solid'` | Type of divider to show |
| `justify` | `"center" \| "end" \| "space-between" \| "start"` | `'start'` | Justify content |
| `max` | `number` | `0` | Maximum items to show before '+N' |
| `overlap` | `boolean` | `false` | Whether to overlap items |
| show-dividers (`showDividers`) | `boolean` | `false` | Whether to show dividers between items |
| `spacing` | `string` | `'8px'` | Spacing between items (negative for overlap) |
| `wrap` | `"nowrap" \| "wrap" \| "wrap-reverse"` | `'nowrap'` | Flex wrap behavior |
