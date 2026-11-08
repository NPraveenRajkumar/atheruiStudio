# ui-otp-input

OTP Input — Forms & Input, Stable.

One-time password input

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| auto-focus (`autoFocus`) | `boolean` | `true` |  |
| auto-submit (`autoSubmit`) | `boolean` | `false` |  |
| `color` | `"danger" \| "info" \| "primary" \| "secondary" \| "success" \| "warning"` | `'primary'` |  |
| `disabled` | `boolean` | `false` |  |
| error-text (`errorText`) | `string` | `''` |  |
| group-size (`groupSize`) | `number` | `0` |  |
| helper-text (`helperText`) | `string` | `''` |  |
| `invalid` | `boolean` | `false` |  |
| `label` | `string` | `''` |  |
| `length` | `number` | `6` |  |
| `placeholder` | `string` | `''` |  |
| `readonly` | `boolean` | `false` |  |
| `required` | `boolean` | `false` |  |
| resend-interval (`resendInterval`) | `number` | `60` | Resend interval in seconds |
| resend-label (`resendLabel`) | `string` | `'Resend Code'` | Custom label for resend button |
| `rtl` | `boolean` | `false` | RTL support |
| `secure` | `boolean` | `false` |  |
| `size` | `"lg" \| "md" \| "sm"` | `'md'` |  |
| `skeleton` | `boolean` | `false` |  |
| `type` | `"alphanumeric" \| "number" \| "numeric" \| "password" \| "text"` | `'number'` |  |
| `value` | `string` | `''` |  |
| `variant` | `"default" \| "flushed" \| "separated" \| "underlined"` | `'default'` |  |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `otpChange` | `{ value: string; complete: boolean; }` |  |
| `otpComplete` | `{ value: string; }` |  |
| `otpSubmit` | `{ value: string; }` |  |
| `resendClick` | `void` |  |
