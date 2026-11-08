# smart-step

Shadow DOM: no

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `description` | `string` | — | Optional description/subtitle for the step |
| `disabled` | `boolean` | `false` | Whether this step is disabled (not clickable) |
| `icon` | `string` | — | Optional icon/number to display. If not provided, parent SmartStepper can provide an index. |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "fontawesome" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "se"` | `'default'` | Library for the icon (e.g., 'se', 'fontawesome', 'lucide', etc.) |
| `label` | `string` | — | The label to display for the step |
| `status` | `"default" \| "error" \| "success"` | `'default'` | Whether the step is valid/finished (optional status indicator) |
