# ui-loader

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| aria-label (`ariaLabel`) | `string` | `'Loading...'` | Accessibility ARIA label |
| aria-live (`ariaLive`) | `"assertive" \| "off" \| "polite"` | `'polite'` | ARIA live region mode |
| blur (`backdropBlur`) | `boolean` | `false` | Apply background blur (glassmorphic backdrop) |
| `color` | `string` | `'success'` | Semantic color variant ('primary', 'secondary', etc.) or custom hex/gradient string |
| completed-label (`completedLabel`) | `string` | `'Completed'` | Label used when status is completed. |
| `description` | `string` | — | Sub-label description text |
| enable-blur (`enableBlur`) | `boolean` | `false` | Alias for blur attribute used in demo configuration |
| error-label (`errorLabel`) | `string` | `'Error'` | Label used when status is error. |
| `fullscreen` | `boolean` | `false` | Displays the loader as a full viewport overlay |
| `image` | `string` | — | Image URL when using type="image" |
| interrupted-label (`interruptedLabel`) | `string` | `'Interrupted'` | Label used when status is interrupted. |
| `label` | `string` | — | Text label to display alongside the loader animation |
| label-position (`labelPosition`) | `"bottom" \| "left" \| "right" \| "top"` | `'bottom'` | Position of the label relative to the loading animation |
| loading-label (`loadingLabel`) | `string` | — | Label used while status is loading. Falls back to label/messages when not set. |
| message-interval (`messageInterval`) | `number` | `2500` | Rotation interval time in milliseconds |
| `messages` | `string \| string[]` | — | Array of status messages to rotate through automatically |
| `overlay` | `boolean` | `false` | Displays the loader as an absolute overlay over its relative parent container |
| overlay-background (`overlayBackground`) | `string` | — | Custom background color/gradient for overlay mode |
| overlay-opacity (`overlayOpacity`) | `number` | `0.5` | Opacity value of the overlay backdrop (0 to 1) |
| `predictive` | `boolean` | `false` | Enables simulated predictive non-linear crawling progress up to 95% |
| rain-columns (`rainColumns`) | `number` | `5` | Number of columns in Matrix digital rain |
| rain-text (`rainText`) | `string` | — | Letters pool for Matrix matrix-rain animation |
| `size` | `string` | `'md'` | Size of the loader preset ('3xs'...'jumbo') or custom CSS value ('120px', '4rem') |
| `speed` | `"fast" \| "normal" \| "slow"` | `'normal'` | Speed of animation cycle |
| `status` | `"completed" \| "error" \| "interrupted" \| "loading" \| "success"` | `'loading'` | Current loading status state |
| success-label (`successLabel`) | `string` | — | Alias label used when status is success. |
| `thickness` | `number` | `3` | Stroke width thickness for circular loaders (spinner, ring) |
| trap-focus (`trapFocus`) | `boolean` | `false` | Traps keyboard focus inside the loader overlay (useful for fullscreen modals) |
| `type` | `string` | `'spinner'` | The animation style variant type (34 total variants) |
| `value` | `number` | — | Determinate state progress value (0 to 100) |
| `variant` | `"glass" \| "linear-strip" \| "minimal" \| "neon" \| "standard"` | `'standard'` | Loader style theme variant |
| `visible` | `boolean` | `true` | Whether the loader is visible |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `uiHide` | `void` |  |
| `uiShow` | `void` |  |
