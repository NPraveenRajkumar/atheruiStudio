# ui-button-toggle-group

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| advanced-theme (`advancedTheme`) | `string` | `''` |  |
| analytics-enabled (`analyticsEnabled`) | `boolean` | `false` |  |
| batch-actions (`batchActions`) | `boolean` | `false` |  |
| `buttonAction` | `() => void` | — |  |
| button-action-label (`buttonActionLabel`) | `string` | `'Action'` |  |
| `color` | `string \| { from?: string; to?: string; }` | `'primary'` | Visual color (string or {from: string, to: string}) |
| custom-content (`customContent`) | `boolean` | `false` |  |
| `disabled` | `boolean` | `false` |  |
| error-message (`errorMessage`) | `string` | `''` |  |
| export-enabled (`exportEnabled`) | `boolean` | `false` |  |
| full-width (`fullWidth`) | `boolean` | `false` |  |
| helper-text (`helperText`) | `string` | `''` |  |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'default'` |  |
| icon-only (`iconOnly`) | `boolean` | `false` |  |
| icon-position (`iconPosition`) | `"bottom" \| "left" \| "right" \| "top"` | `'left'` |  |
| import-enabled (`importEnabled`) | `boolean` | `false` |  |
| `invalid` | `boolean` | `false` |  |
| keep-button-label (`keepButtonLabel`) | `boolean` | `false` |  |
| `label` | `string` | `''` |  |
| `library` | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | — |  |
| `loading` | `boolean` | `false` |  |
| magnetic-indicator (`magneticIndicator`) | `boolean` | `false` | High-Fidelity: Indicator follows cursor slightly when near selection |
| `mode` | `"dropdown" \| "segmented"` | `'segmented'` |  |
| multi-select (`multiSelect`) | `boolean` | `false` |  |
| `name` | `string` | `''` |  |
| `options` | `string \| { value: string; label?: string; icon?: string; iconLeft?: string; iconRight?: string; disabled?: boolean; des` | `[]` |  |
| `orientation` | `"horizontal" \| "vertical"` | `'horizontal'` |  |
| persist-key (`persistKey`) | `string` | `''` | localStorage key for persisting selected value across reloads. Empty string disables persistence. |
| `readonly` | `boolean` | `false` |  |
| `required` | `boolean` | `false` |  |
| `reveal` | `"fade-in" \| "none" \| "slide-up" \| "zoom"` | `'none'` | Entrance animation |
| reveal-delay (`revealDelay`) | `number` | `0` | Base delay for group reveal |
| reveal-stagger (`revealStagger`) | `number` | `50` | Stagger delay between items |
| `rtl` | `boolean` | `false` | RTL support |
| search-enabled (`searchEnabled`) | `boolean` | `false` |  |
| `shape` | `any` | `'rounded'` | Button shape (rounded, pill, chip, etc) |
| `size` | `any` | `'md'` | Size category (xxxs to xxxl) |
| `value` | `string \| string[]` | `''` |  |
| `variant` | `any` | `'soft'` | Visual variant (glass, raised, etc) |
| `width` | `string` | `''` |  |
| `wrap` | `boolean` | `false` | Allow buttons to wrap to new lines |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `buttonToggleGroupAction` | `{ value: string \| string[]; }` |  |
| `buttonToggleGroupAnalytics` | `any` |  |
| `buttonToggleGroupBatch` | `{ values: string[]; }` |  |
| `buttonToggleGroupChange` | `{ value: string \| string[]; }` |  |
| `buttonToggleGroupExport` | `{ values: string[]; }` |  |
| `buttonToggleGroupImport` | `{ values: string[]; }` |  |
| `buttonToggleGroupSearch` | `{ query: string; }` |  |
