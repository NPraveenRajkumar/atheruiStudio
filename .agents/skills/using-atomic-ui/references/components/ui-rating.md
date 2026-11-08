# ui-rating

Rating — Data Display, Stable.

Star rating

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| active-color (`activeColor`) | `string` | — | Custom active color (hex/css color) |
| active-fill-color (`activeFillColor`) | `string` | — | Custom active fill color (hex/css color) |
| allow-half (`allowHalf`) | `boolean` | `false` | Allow half ratings (only for star type) |
| `clearable` | `boolean` | `false` | High-Fidelity: Allow clearing the rating by clicking the same value |
| `color` | `"danger" \| "primary" \| "success" \| "warning"` | `'warning'` | Color of active rating |
| color-map (`colorMap`) | `string` | — | High-Fidelity: Dynamic color mapping for individual items (JSON array) |
| `description` | `string` | — | /** High-Fidelity: Tactical side/bottom description |
| description-position (`descriptionPosition`) | `"bottom" \| "side"` | `'bottom'` |  |
| `disabled` | `boolean` | `false` | Disabled state |
| error-message (`errorMessage`) | `string` | — | Validation: Error message |
| `glow` | `boolean` | `false` | High-Fidelity: Atmospheric glow on active items |
| `haptic` | `boolean` | `false` | High-Fidelity: Sensory vibration feedback |
| helper-text (`helperText`) | `string` | — | Validation: Helper text |
| icon-library (`iconLibrary`) | `string` | `'lucide'` | Icon Library |
| icon-name (`iconName`) | `string` | `'star'` | Custom Icon Name (Lucide) |
| `image` | `string` | — | High-Fidelity: Image URL for the rating marker |
| `invalid` | `boolean` | `false` | Validation: Error state |
| `labels` | `string` | — | Custom labels for ratings |
| `max` | `number` | `5` | Maximum rating value (for star and smiley types) |
| `readonly` | `boolean` | `false` | Read-only mode |
| `rtl` | `boolean` | `false` | RTL support |
| show-histogram (`showHistogram`) | `boolean` | `false` | Show a distribution histogram of total reviews |
| show-reviews (`showReviews`) | `boolean` | `false` | Show total review count |
| show-summary (`showSummary`) | `boolean` | `false` | Show a visual summary of the current rating (label and value) |
| show-value (`showValue`) | `boolean` | `false` | Show rating value text |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small" \| "xl" \| "xs" \| "xxl" \| "xxs" \| "xxxl" \| "xxxs` | `'md'` | Size of the rating icons |
| summary-data (`summaryData`) | `string` | — | Data for the rating summary histogram (JSON array of counts from 5 to 1 stars) |
| summary-position (`summaryPosition`) | `"bottom" \| "side"` | `'side'` | Position of the summary |
| total-reviews (`totalReviews`) | `number` | `0` | Total review count value |
| `type` | `"smiley" \| "star" \| "thumb"` | `'star'` | Type of rating |
| use-emoji (`useEmoji`) | `boolean` | `false` | Use native emojis instead of icons for smiley rating |
| `value` | `number` | `0` | Current rating value |
| `variant` | `"default" \| "glass" \| "raised"` | `'default'` | High-Fidelity: Visual variant |
| victory-glow (`victoryGlow`) | `boolean` | `false` | High-Fidelity: Victory pulse on max rating |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `ratingChange` | `number` | Emitted when rating changes |
