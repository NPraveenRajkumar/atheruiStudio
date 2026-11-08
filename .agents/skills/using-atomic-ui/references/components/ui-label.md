# ui-label

`ui-label` — Enterprise-grade, fully accessible form label component.

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `align` | `"between" \| "center" \| "end" \| "start"` | `'start'` | Horizontal alignment of label content. |
| aria-describedby (`ariaDescribedby`) | `string` | `''` | IDs of elements that describe this label (space-separated). |
| aria-label (`ariaLabel`) | `string` | `''` | Sets `aria-label` on the root element. |
| aria-live (`ariaLive`) | `"assertive" \| "off" \| "polite"` | `'off'` | Live-region politeness for dynamic content announcements. |
| automation-id (`automationId`) | `string` | `''` | `data-automation-id` attribute for RPA / automation tooling. |
| `block` | `boolean` | `false` | Forces 100 % width block layout (useful inside flex/grid parents). |
| `clickable` | `boolean` | `false` | Makes the label itself clickable (fires `labelClick`). |
| control-id (`controlId`) | `string` | `''` | Alias for `htmlFor`.  `controlId` takes precedence if both are supplied. |
| `copyable` | `boolean` | `false` | Shows a copy-to-clipboard button on hover and fires `labelCopy`. |
| `disabled` | `boolean` | `false` | Applies disabled styling and prevents interaction. |
| end-icon (`endIcon`) | `string` | `''` | Icon name rendered after the label text. |
| error-icon (`errorIcon`) | `string` | `'circle-alert'` | Icon name used for the error-state icon. |
| error-text (`errorText`) | `string` | `''` | Error message shown below the label when `invalid` is true. |
| `focused` | `boolean` | `false` | Mirrors the focused state of the associated control so the label can react visually. |
| `gap` | `string` | `''` | Gap between the label row and the hint / error message. Accepts any valid CSS length (e.g. `'4px'`, `'0.5rem'`). Maps to `--ui-label-gap`. |
| helper-text (`helperText`) | `string` | `''` | Helper / hint text shown below the label. |
| html-for (`htmlFor`) | `string` | `''` | ID of the form control this label is associated with. Renders as a native `for` attribute on the underlying `<label>` element. Supports all standard form controls as well as custom web components. |
| icon-only (`iconOnly`) | `boolean` | `false` | When true, only icons are shown — label text is visually hidden. |
| info-icon (`infoIcon`) | `string` | `'info'` | Icon name used for the info-state icon. |
| `inline` | `boolean` | `false` | Renders as an inline-level element. |
| `invalid` | `boolean` | `false` | Applies invalid / error styling to the label. |
| `label` | `string` | `''` | Plain-text label.  Use the default slot for rich/HTML content instead. |
| dir (`labelDir`) | `"auto" \| "ltr" \| "rtl"` | `'ltr'` | Text direction. |
| label-id (`labelId`) | `string` | `''` | DOM `id` for the root element.  Auto-generated if not provided. |
| lang (`labelLang`) | `string` | `''` | BCP-47 language tag (e.g. `'en'`, `'ar'`, `'fr'`). |
| line-clamp (`lineClamp`) | `number` | `0` | Clamp to N visible lines (CSS `line-clamp`).  Requires `multiline` to be true. |
| `loading` | `boolean` | `false` | Shows a loading skeleton overlaid on the label text. |
| `margin` | `string` | `''` | External margin override (CSS shorthand string). |
| mobile-stack (`mobileStack`) | `boolean` | `false` | On narrow viewports, switches from `horizontal` to `vertical` orientation. |
| `multiline` | `boolean` | `false` | Allow text to wrap across multiple lines (disables truncation). |
| `name` | `string` | `''` | Logical name (maps to `name` attribute on the inner label). |
| `optional` | `boolean` | `false` | Shows "(optional)" hint text next to the label. Mutually exclusive with `required` — `required` wins if both are set. |
| `orientation` | `"horizontal" \| "vertical"` | `'vertical'` | Stack direction when used alongside a form control. |
| `padding` | `string` | `''` | External padding override (CSS shorthand string). |
| prefix-icon (`prefixIcon`) | `string` | `''` | Preferred prefix icon rendered before the label text using `ui-icon`. |
| prefix-icon-label (`prefixIconLabel`) | `string` | `''` | Accessible label for the prefix icon when it conveys meaning. |
| prefix-icon-library (`prefixIconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'lucide'` | Icon library used for `prefixIcon`. |
| `readonly` | `boolean` | `false` | Applies read-only styling (dimmed, no pointer events). |
| `required` | `boolean` | `false` | Marks the associated field as required. Shows a required indicator (asterisk by default) and sets `aria-required` on the linked control if possible. |
| required-icon (`requiredIcon`) | `string` | `'asterisk'` | Icon name used for the required-state icon. |
| `responsive` | `boolean` | `false` | Enable responsive font-size scaling via fluid typography. |
| `selectable` | `boolean` | `false` | Enables text-selection on the label (disabled by default for form labels). |
| show-error-icon (`showErrorIcon`) | `boolean` | `false` | Shows an error icon at the end of the label when `invalid` is true. |
| show-info-icon (`showInfoIcon`) | `boolean` | `false` | Shows an info icon at the end of the label using `tooltip` content. |
| show-required-icon (`showRequiredIcon`) | `boolean` | `false` | Shows a required-state icon at the end of the label. |
| `size` | `"jumbo" \| "lg" \| "md" \| "sm" \| "xl" \| "xs" \| "xxl" \| "xxs" \| "xxxl"` | `'md'` | Semantic size token. |
| start-icon (`startIcon`) | `string` | `''` | Icon name rendered before the label text. Uses the same icon library as the rest of the design system. |
| status-icon-library (`statusIconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'lucide'` | Icon library used for end status icons. |
| success-text (`successText`) | `string` | `''` | Success message shown below the label when the field is valid and this text is set. |
| `target` | `string` | `''` | Deprecated alias kept for back-compat.  Prefer `htmlFor`. |
| test-id (`testId`) | `string` | `''` | `data-testid` attribute for automated testing. |
| `tooltip` | `string` | `''` | Plain-text tooltip content.  Use the `tooltip` slot for rich markup. |
| tooltip-icon (`tooltipIcon`) | `string` | `'info'` | Icon name for the tooltip trigger button (rendered via ui-icon). |
| tooltip-icon-library (`tooltipIconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'lucide'` | Icon library used for the tooltip trigger icon. |
| tooltip-position (`tooltipPosition`) | `"bottom" \| "left" \| "right" \| "top"` | `'top'` | Preferred position for the tooltip callout. |
| `transform` | `"capitalize" \| "lowercase" \| "none" \| "uppercase"` | `'none'` | CSS text-transform value. |
| `truncate` | `boolean` | `false` | Single-line truncation with ellipsis. |
| `variant` | `"danger" \| "default" \| "info" \| "muted" \| "primary" \| "secondary" \| "success" \| "warning"` | `'default'` | Colour variant. |
| `weight` | `"bold" \| "light" \| "medium" \| "normal" \| "semibold"` | `'medium'` | Font-weight scale. |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `labelBlur` | `void` | Fired when the label loses focus. |
| `labelClick` | `LabelClickEvent` | Fired when the label element is clicked (requires `clickable` or naturally via `for`). |
| `labelCopy` | `LabelCopyEvent` | Fired after text is successfully copied to the clipboard (`copyable` must be true). |
| `labelFocus` | `void` | Fired when the label receives focus (passes through from the native label). |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `copyText` | `copyText() => Promise<void>` | Programmatically trigger the copy-to-clipboard action. |
| `setFocus` | `setFocus() => Promise<void>` | Programmatically focus the label element. Useful when the owning form-field component proxies focus behaviour. |

## Slots

| Slot | Description |
|---|---|
| `(default)` | Primary label text / rich content. |
| `end` | Content placed after the label text (e.g. trailing icon or action). |
| `hint` | Helper / hint text below the label. |
| `required-indicator` | Custom required-indicator markup (overrides built-in asterisk). |
| `start` | Content placed before the label text (e.g. leading icon). |
| `tooltip` | Rich tooltip content triggered by the info icon. |
