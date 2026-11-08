# ui-button-toggle

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| avatar-alt (`avatarAlt`) | `string` | — | Avatar alt text |
| avatar-src (`avatarSrc`) | `string` | — | Avatar source |
| `color` | `string \| { from?: string; to?: string; }` | `'primary'` | Color |
| `description` | `string` | — | Description text |
| description-position (`descriptionPosition`) | `"below" \| "right"` | `'below'` | Description position |
| `disabled` | `boolean` | `false` | Disabled state |
| full-width (`fullWidth`) | `boolean` | `false` | Full width |
| `icon` | `string` | — | Icon name |
| icon-left (`iconLeft`) | `string` | — | Icon on the left side (overrides icon when display-mode is both-sides) |
| icon-only (`iconOnly`) | `boolean` | `false` | Show icon only (hide label) |
| icon-position (`iconPosition`) | `"bottom" \| "left" \| "right" \| "top"` | `'left'` | Icon position relative to label |
| icon-right (`iconRight`) | `string` | — | Icon on the right side |
| `label` | `string` | — | Display label |
| `library` | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'lucide'` | Icon library |
| `loading` | `boolean` | `false` | Loading state |
| `name` | `string` | `''` | Form field name |
| `readonly` | `boolean` | `false` | Read-only state |
| `reveal` | `"fade-in" \| "none" \| "slide-up" \| "zoom"` | `'none'` | Reveal animation |
| reveal-delay (`revealDelay`) | `number` | `0` | Reveal delay in ms |
| `selected` | `boolean` | `false` | Whether this toggle is selected |
| `shape` | `string` | `'rounded'` | Shape |
| `size` | `string` | `'md'` | Size |
| `status` | `string` | — | Status indicator |
| `value` | `string` | `''` | The value associated with this toggle |
| `variant` | `string` | `'soft'` | Visual variant |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `buttonToggleChange` | `{ value: string; }` | Emitted when toggle is clicked |

## CSS parts

`button`
