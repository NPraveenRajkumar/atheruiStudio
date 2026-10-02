# ui-drag-drop

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| draggable-enabled (`draggableEnabled`) | `boolean` | `true` | When true each card is draggable; set to false to disable the behaviour. |
| `gap` | `string` | `'0.5rem'` | Space between cards (any CSS length). |
| `group` | `string` | `''` | Group name to allow dragging between different ui-drag-drop containers. |
| `items` | `DragDropItem[]` | `[]` |  |
| `orientation` | `"horizontal" \| "vertical"` | `'vertical'` | Layout direction of the stack. |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `uiDragDropChange` | `DragDropChangeDetail` |  |
| `uiDragEnd` | `{ item: DragDropItem; index: number; }` |  |
| `uiDragStart` | `{ item: DragDropItem; index: number; }` |  |
| `uiDrop` | `{ item: DragDropItem; sourceIndex: number; targetIndex: number; sourceGroup: string; }` |  |
