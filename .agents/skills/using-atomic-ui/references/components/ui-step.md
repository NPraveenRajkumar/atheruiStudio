# ui-step

Step — Navigation & Steps, Stable.

Individual step

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `badge` | `string` | `null` |  |
| `disabled` | `boolean` | `false` |  |
| `icon` | `string` | `null` |  |
| `renderContent` | `() => any` | — | optional custom renderer - parent will call if present |
| `status` | `"active" \| "complete" \| "custom" \| "disabled" \| "error" \| "upcoming"` | `'upcoming'` |  |
| step-title (`stepTitle`) | `string` | `''` |  |
| `subtitle` | `string` | `null` |  |
| `tooltip` | `string` | `null` |  |
| `validate` | `() => boolean \| Promise<boolean>` | — | A developer can provide a validation function on the DOM element before proceeding |
