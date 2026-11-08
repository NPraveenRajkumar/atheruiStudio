# ui-pattern-input

Pattern Input — Forms & Input, Stable.

Formatted input

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| allowed-chars (`allowedChars`) | `string` | — | Allowed characters regex (default: all) |
| auto-format (`autoFormat`) | `boolean` | `true` | Auto-format as user types |
| `clearable` | `boolean` | `false` | Whether the input is clearable |
| `disabled` | `boolean` | `false` | Disabled state |
| error-message (`errorMessage`) | `string` | — | Error message |
| helper-text (`helperText`) | `string` | — | Helper text |
| input-type (`inputType`) | `"alpha" \| "alphanumeric" \| "custom" \| "numeric" \| "text"` | `'text'` | Input type restriction |
| `label` | `string` | — | Label text |
| mask-char (`maskChar`) | `string` | `'#'` | Mask character for pattern (default: #) |
| max-length (`maxLength`) | `number` | — | Max length |
| `name` | `string` | — | Input name for forms |
| `pattern` | `string` | — | Input pattern for display (e.g., "(###) ###-####" for phone) |
| `placeholder` | `string` | — | Placeholder text |
| `required` | `boolean` | `false` | Required field |
| `rtl` | `boolean` | `false` | RTL support |
| show-counter (`showCounter`) | `boolean` | `false` | Show character counter |
| show-validation (`showValidation`) | `boolean` | `true` | Show validation status |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small"` | `'md'` | Size variant |
| success-message (`successMessage`) | `string` | — | Success message |
| validation-regex (`validationRegex`) | `string` | — | Validation regex pattern |
| `value` | `string` | `''` | Current input value |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `patternInput` | `{ value: string; formatted: string; }` | Input event |
| `patternInputBlur` | `void` | Blur event |
| `patternInputChange` | `{ value: string; formatted: string; isValid: boolean; }` | Value change event |
| `patternInputFocus` | `void` | Focus event |
| `patternInputValidate` | `{ isValid: boolean; value: string; }` | Validation event |
