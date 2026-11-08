# ui-fab-item

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` |  |
| `icon` | `string` | — |  |
| `label` | `string` | — |  |
| `loading` | `boolean` | `false` |  |
| `tooltip` | `string` | — |  |
| `value` | `any` | — |  |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `uiFabActionClick` | `{ value: any; }` |  |
