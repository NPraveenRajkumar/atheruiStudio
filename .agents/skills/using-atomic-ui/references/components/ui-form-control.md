# ui-form-control

Form Control — Forms & Input, New.

Unified wrapper for labels

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| aria-described-by (`ariaDescribedBy`) | `string` | `''` | Extra aria-describedby IDs to append. |
| aria-label (`ariaLabel`) | `string` | `''` | Optional aria-label for the native control. |
| `autocomplete` | `string` | `'off'` | Autocomplete setting for text-like controls. |
| `checked` | `boolean` | `false` | Checked state (checkbox/radio). |
| `control` | `"checkbox" \| "custom" \| "date" \| "datetime-local" \| "email" \| "month" \| "number" \| "password" \| "radio" \| "sear` | `'text'` | Native control kind rendered by this wrapper. |
| control-id (`controlId`) | `string` | `''` | ID for the underlying native input/select/textarea. |
| control-label (`controlLabel`) | `string` | `''` | Label shown next to checkbox/radio controls. |
| `disabled` | `boolean` | `false` | Disable interaction. |
| error-text (`errorText`) | `string` | `''` | Error text shown below the control and marked as invalid state. |
| full-width (`fullWidth`) | `boolean` | `true` | Full width wrapper. |
| grid-template-columns (`gridTemplateColumns`) | `string` | `'minmax(140px, 220px) 1fr'` | Grid template columns used when layout is grid. |
| helper-text (`helperText`) | `string` | `''` | Helper text shown below the control. |
| input-attributes (`inputAttributes`) | `boolean \| number \| string` | `'{}'` | Optional generic pass-through attributes via JSON string or object. |
| `invalid` | `boolean` | `false` | Force invalid state even without an explicit error message. |
| `label` | `string` | `''` | Field label shown above the control. |
| label-position (`labelPosition`) | `"floating" \| "left" \| "top"` | `'top'` | Label position around the control. |
| `layout` | `"grid" \| "horizontal" \| "vertical"` | `'vertical'` | Layout behavior for label/control alignment. |
| `max` | `number \| string` | — | Max value for number controls. |
| `min` | `number \| string` | — | Min value for number controls. |
| `name` | `string` | — | Form field name. |
| `options` | `FormControlOption[] \| string` | `[]` | Options used by select controls. Accepts JSON string or array. |
| `pattern` | `string` | — | Optional input pattern for text-like controls. |
| `placeholder` | `string` | `''` | Placeholder text for text-like controls. |
| `readonly` | `boolean` | `false` | Readonly state for text-like controls. |
| `required` | `boolean` | `false` | Mark as required. |
| `rows` | `number` | `4` | Rows for textarea. |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small"` | `'md'` | Size token. |
| `step` | `number \| string` | — | Step value for number controls. |
| success-text (`successText`) | `string` | `''` | Success text shown below the control when no error is present. |
| `theme` | `"auto" \| "dark" \| "light"` | `'auto'` | Theme hint for this control. |
| `value` | `string` | `''` | Current value. |
| `variant` | `"filled" \| "minimal" \| "outlined"` | `'outlined'` | Visual variant. |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `formControlChange` | `FormControlChangeDetail` |  |
| `formControlInput` | `FormControlChangeDetail` |  |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `setFocus` | `setFocus() => Promise<void>` |  |
