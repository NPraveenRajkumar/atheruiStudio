# my-step

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `badge` | `string` | `''` |  |
| `disabled` | `boolean` | `false` |  |
| `icon` | `string` | `''` |  |
| `index` | `number` | `0` |  |
| `status` | `string` | `''` |  |
| step-title (`stepTitle`) | `string` | `''` |  |
| `subtitle` | `string` | `''` |  |
| `tooltip` | `string` | `''` |  |
| `validate` | `() => boolean \| Promise<boolean>` | — |  |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `renderContent` | `renderContent() => Promise<any>` |  |
