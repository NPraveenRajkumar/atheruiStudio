# ui-input

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `accept` | `string` | — |  |
| allowed-chars (`allowedChars`) | `string` | `''` |  |
| alpha-only (`alphaOnly`) | `boolean` | `false` |  |
| always-floated (`alwaysFloated`) | `boolean` | `false` |  |
| auto-capitalize (`autoCapitalize`) | `"characters" \| "none" \| "sentences" \| "words"` | `'none'` |  |
| auto-resize (`autoResize`) | `boolean` | `false` |  |
| auto-select (`autoSelect`) | `boolean` | `false` |  |
| auto-trim (`autoTrim`) | `boolean` | `false` |  |
| `autocomplete` | `string` | `'off'` |  |
| `autocompleteSuggestions` | `{ text: string; subtitle?: string; icon?: string; value?: any; }[]` | `[]` |  |
| `autofocus` | `boolean` | `false` |  |
| backdrop-sheen (`backdropSheen`) | `boolean` | `false` |  |
| `badge` | `string` | — |  |
| block-invalid-paste (`blockInvalidPaste`) | `boolean` | `false` |  |
| clear-icon (`clearIcon`) | `string` | `'x-circle'` |  |
| clear-on-escape (`clearOnEscape`) | `boolean` | `true` |  |
| `color` | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'primary'` |  |
| `cols` | `number` | — |  |
| `currency` | `string` | `'USD'` |  |
| custom-class (`customClass`) | `string` | — |  |
| custom-mask (`customMask`) | `string` | `''` |  |
| custom-tab-index (`customTabIndex`) | `number` | — |  |
| `debounce` | `number` | `0` |  |
| default-value (`defaultValue`) | `string` | `''` |  |
| `density` | `"compact" \| "cozy" \| "standard"` | `'standard'` |  |
| dirty-tracking (`dirtyTracking`) | `boolean` | `false` |  |
| `disabled` | `boolean` | `false` |  |
| drop-zone (`dropZone`) | `boolean` | `false` |  |
| `enterkeyhint` | `"done" \| "enter" \| "go" \| "next" \| "previous" \| "search" \| "send"` | — |  |
| error-text (`errorText`) | `string` | `''` |  |
| floating-label (`floatingLabel`) | `boolean` | `false` |  |
| `formatter` | `(value: string) => string` | — |  |
| full-width (`fullWidth`) | `boolean` | `false` |  |
| ghost-text (`ghostText`) | `string` | `''` |  |
| gradient-border (`gradientBorder`) | `boolean` | `false` |  |
| gradient-decorators (`gradientDecorators`) | `boolean` | `false` |  |
| helper-text (`helperText`) | `string` | `''` |  |
| highlight-matches (`highlightMatches`) | `boolean` | `true` |  |
| hint-tooltip (`hintTooltip`) | `string` | `''` |  |
| info-text (`infoText`) | `string` | `''` |  |
| input-id (`inputId`) | `string` | — |  |
| `inputmode` | `"decimal" \| "email" \| "none" \| "numeric" \| "search" \| "tel" \| "text" \| "url"` | — |  |
| `label` | `string` | `''` |  |
| linear-loading (`linearLoading`) | `boolean` | `false` |  |
| `loading` | `boolean` | `false` |  |
| `mask` | `"credit-card" \| "currency" \| "date" \| "none" \| "phone" \| "ssn" \| "zip"` | `'none'` |  |
| `max` | `number \| string` | — |  |
| max-length (`maxLength`) | `number` | — |  |
| max-length-indicator (`maxLengthIndicator`) | `number` | — |  |
| max-rows (`maxRows`) | `number` | `5` |  |
| `min` | `number \| string` | — |  |
| min-length (`minLength`) | `number` | — |  |
| min-length-indicator (`minLengthIndicator`) | `number` | — |  |
| min-rows (`minRows`) | `number` | — |  |
| `multiline` | `boolean` | `false` |  |
| `multiple` | `boolean` | `false` |  |
| `name` | `string` | — |  |
| no-spaces (`noSpaces`) | `boolean` | `false` |  |
| numeric-only (`numericOnly`) | `boolean` | `false` |  |
| otp-length (`otpLength`) | `number` | `6` |  |
| `parser` | `(value: string) => string` | — |  |
| password-icon (`passwordIcon`) | `string` | `'eye'` |  |
| `passwordStrengthCalculator` | `(password: string) => number` | — |  |
| password-visible-icon (`passwordVisibleIcon`) | `string` | `'eye-off'` |  |
| `pattern` | `string` | — |  |
| `placeholder` | `string` | `''` |  |
| prefix-clickable (`prefixClickable`) | `boolean` | `false` |  |
| prefix-color (`prefixColor`) | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | — |  |
| prefix-icon (`prefixIcon`) | `string` | `''` |  |
| prefix-text (`prefixText`) | `string` | `''` |  |
| `readonly` | `boolean` | `false` |  |
| relative-time (`relativeTime`) | `boolean` | `false` |  |
| `required` | `boolean` | `false` |  |
| `resize` | `"both" \| "horizontal" \| "none" \| "vertical"` | `'vertical'` |  |
| reveal-on-hold (`revealOnHold`) | `boolean` | `false` |  |
| ripple-effect (`rippleEffect`) | `boolean` | `true` |  |
| `rows` | `number` | `3` |  |
| `rtl` | `boolean` | `false` |  |
| select-on-click (`selectOnClick`) | `boolean` | `false` |  |
| `shake` | `boolean` | `false` |  |
| shake-on-error (`shakeOnError`) | `boolean` | `false` |  |
| shortcut-hint (`shortcutHint`) | `string` | `''` |  |
| show-clear (`showClear`) | `boolean` | `false` |  |
| show-copy (`showCopy`) | `boolean` | `false` |  |
| show-counter (`showCounter`) | `boolean` | `false` |  |
| show-dividers (`showDividers`) | `boolean` | `false` |  |
| show-password-strength (`showPasswordStrength`) | `boolean` | `false` |  |
| show-password-toggle (`showPasswordToggle`) | `boolean` | `true` |  |
| show-progress-circle (`showProgressCircle`) | `boolean` | `false` |  |
| show-steppers (`showSteppers`) | `boolean` | `false` |  |
| show-type-icon (`showTypeIcon`) | `boolean` | `true` |  |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small" \| "xl" \| "xs" \| "xxl" \| "xxs" \| "xxxl" \| "xxxs` | `'md'` |  |
| `skeleton` | `boolean` | `false` |  |
| status-indicator (`statusIndicator`) | `"away" \| "listening" \| "none" \| "offline" \| "online" \| "typing"` | `'none'` |  |
| `step` | `number \| string` | — |  |
| success-pulse (`successPulse`) | `boolean` | `false` |  |
| success-text (`successText`) | `string` | `''` |  |
| suffix-clickable (`suffixClickable`) | `boolean` | `false` |  |
| suffix-color (`suffixColor`) | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | — |  |
| suffix-icon (`suffixIcon`) | `string` | `''` |  |
| suffix-text (`suffixText`) | `string` | `''` |  |
| `suggestions` | `string[]` | `[]` |  |
| text-transform (`textTransform`) | `"capitalize" \| "lowercase" \| "none" \| "pascal" \| "sentences" \| "uppercase" \| "words"` | `'none'` |  |
| `tooltip` | `string` | — |  |
| `type` | `"color" \| "currency" \| "date" \| "datetime-local" \| "email" \| "file" \| "month" \| "number" \| "otp" \| "password" \` | `'text'` |  |
| validation-state (`validationState`) | `"black" \| "borderless" \| "danger" \| "default" \| "dirty" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| ` | `'none'` |  |
| validation-trigger (`validationTrigger`) | `"manual" \| "onBlur" \| "onInput"` | `'onInput'` |  |
| `value` | `string` | `''` |  |
| `variant` | `"bordered" \| "borderless" \| "color" \| "danger" \| "dark" \| "default" \| "dots-only" \| "elevated" \| "error" \| "fil` | `'outlined'` |  |
| voice-enabled (`voiceEnabled`) | `boolean` | `false` |  |
| voice-input (`voiceInput`) | `boolean` | `false` |  |
| warning-text (`warningText`) | `string` | `''` |  |
| `width` | `string` | — |  |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `analyticsEvent` | `{ value: string; }` |  |
| `fileSelected` | `FileList` |  |
| `focusInternal` | `FocusEvent` |  |
| `inputBlur` | `FocusEvent` |  |
| `inputChange` | `string` |  |
| `inputClear` | `void` |  |
| `inputCopy` | `string` |  |
| `inputFocus` | `FocusEvent` |  |
| `inputInput` | `string` |  |
| `inputKeydown` | `KeyboardEvent` |  |
| `inputKeyup` | `KeyboardEvent` |  |
| `pasteInternal` | `ClipboardEvent` |  |
| `prefixClick` | `void` |  |
| `search` | `string` |  |
| `suffixClick` | `void` |  |
| `suggestionSelected` | `string` |  |
| `wheelInternal` | `WheelEvent` |  |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `openColorPicker` | `openColorPicker() => Promise<void>` |  |
| `openFilePicker` | `openFilePicker() => Promise<void>` |  |
| `setFocus` | `setFocus() => Promise<void>` |  |
