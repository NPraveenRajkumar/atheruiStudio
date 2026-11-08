# ui-empty-state

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `actions` | `EmptyStateAction[] \| string` | `'[]'` |  |
| `align` | `"center" \| "left" \| "right"` | `'center'` |  |
| `animated` | `boolean` | `true` |  |
| back-button-label (`backButtonLabel`) | `string` | `'Go Back'` |  |
| `compact` | `boolean` | `false` |  |
| `confetti` | `boolean` | `false` |  |
| custom-class (`customClass`) | `string` | — |  |
| `description` | `string` | — | Primary description / Troubleshooting tip |
| `elevated` | `boolean` | `false` |  |
| full-height (`fullHeight`) | `boolean` | `false` |  |
| `heading` | `string` | — |  |
| `icon` | `string` | — |  |
| icon-color (`iconColor`) | `string` | — |  |
| icon-size (`iconSize`) | `string` | `'64px'` |  |
| `illustration` | `string` | — |  |
| `image` | `string` | — |  |
| image-alt (`imageAlt`) | `string` | `'Empty state'` |  |
| `items` | `EmptyStateItem[] \| string` | `'[]'` |  |
| items-title (`itemsTitle`) | `string` | — |  |
| loading-action (`loadingAction`) | `string` | — |  |
| max-width (`maxWidth`) | `string` | `'500px'` |  |
| `message` | `string` | — |  |
| `padding` | `string` | — |  |
| primary-action (`primaryAction`) | `string` | — |  |
| primary-action-icon (`primaryActionIcon`) | `string` | — |  |
| retry-delay (`retryDelay`) | `number` | `0` | Auto-retry delay in seconds for error/offline states |
| retry-label (`retryLabel`) | `string` | `'Retrying in {n}s...'` |  |
| `rounded` | `boolean` | `false` |  |
| search-placeholder (`searchPlaceholder`) | `string` | `'Try another search...'` |  |
| search-value (`searchValue`) | `string` | `''` |  |
| secondary-action (`secondaryAction`) | `string` | — |  |
| secondary-action-icon (`secondaryActionIcon`) | `string` | — |  |
| show-back-button (`showBackButton`) | `boolean` | `false` |  |
| show-search (`showSearch`) | `boolean` | `false` | Show a search box within the empty state (useful for no-results) |
| `size` | `"large" \| "md" \| "small"` | `'md'` |  |
| `type` | `"401" \| "403" \| "404" \| "405" \| "410" \| "418" \| "429" \| "500" \| "503" \| "accomplishment" \| "coming-soon" \| "c` | `'no-data'` |  |
| `variant` | `"default" \| "filled" \| "minimal" \| "outlined"` | `'default'` |  |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `actionClick` | `{ action: string; value?: string; }` |  |
| `backClick` | `void` |  |
| `itemClick` | `{ item: EmptyStateItem; }` |  |
| `retry` | `void` |  |
| `searchChange` | `string` |  |
