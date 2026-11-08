# ui-callout-banner

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| accent-bar (`accentBar`) | `boolean` | `false` | Add a coloured left-border accent bar (VS Code–style) |
| aria-role (`ariaRole`) | `string` | — | Custom ARIA role override (default: alert/status) |
| auto-close (`autoClose`) | `number` | `0` | Auto-dismiss after this many milliseconds (0 = disabled) |
| `banner` | `boolean` | `false` | Full-width top-of-page banner mode (removes border-radius, adds bottom border) |
| `closable` | `boolean` | `true` | Show the close button and allow dismissal |
| closable-after (`closableAfter`) | `number` | `0` | Delay before close button appears (ms) |
| `compact` | `boolean` | `false` | Compact single-line layout |
| dismiss-label (`dismissLabel`) | `string` | `'Dismiss'` | Accessible label for the dismiss action |
| enter-from (`enterFrom`) | `"bottom" \| "fade" \| "left" \| "right" \| "top"` | `'top'` | Slide/fade-in direction for entrance animation |
| focus-on-show (`focusOnShow`) | `boolean` | `false` | Auto-focus the close button or banner when shown |
| `heading` | `string` | — | Optional heading text when no `slot="title"` is provided |
| `href` | `string` | — | Make the callout clickable as a link |
| `i18n` | `{ [key: string]: string; dismissLabel?: string; showMoreLabel?: string; showLessLabel?: string; loadingLabel?: string; }` | — | i18n/localization: override all labels/messages |
| `icon` | `string` | — | Optional icon glyph name; falls back to slot content if provided |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'lucide'` | Icon library used when the `icon` prop is set |
| `loading` | `boolean` | `false` | Show a loading spinner in place of the icon and set aria-busy on the host |
| `marquee` | `boolean` | `false` | Scroll the message in an infinite marquee/ticker loop |
| marquee-speed (`marqueeSpeed`) | `number` | `18` | Duration (seconds) for one full marquee loop. Lower = faster. Default 18. |
| `message` | `string` | — | Optional message text when default slot is empty |
| no-icon (`noIcon`) | `boolean` | `false` | Hide the icon column entirely |
| `outlined` | `boolean` | `false` | Outline style instead of full background |
| pause-on-hover (`pauseOnHover`) | `boolean` | `false` | Pause the auto-close timer while the user hovers over the banner |
| persist-key (`persistKey`) | `string` | — | Persistence key to remember dismissal via localStorage |
| `progress` | `number` | — | Progress value (0-100) for banners that show progress |
| `pulse` | `boolean` | `false` | Animate the callout with a pulsing ring to draw attention |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small"` | `'md'` | Size scale: sm, md, lg |
| `solid` | `boolean` | `false` | Bold, fully-saturated background for high-emphasis notices |
| `sticky` | `boolean` | `false` | Stick the banner to the top of its scroll container |
| `target` | `string` | — | Target for the link (if href is set) |
| test-id (`testId`) | `string` | — | Test ID for automated testing selectors |
| `truncate` | `number` | `0` | Clamp the message to N lines with a Show more/less toggle (0 = off) |
| `variant` | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'info'` | Visual variant that drives accent colors and icon |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `calloutAction` | `void` | Fired when an action in the slot is clicked |
| `calloutDismiss` | `void` | Fired when the banner is dismissed |
| `calloutShow` | `void` | Fired when the banner is shown via the show() method |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `hide` | `hide() => Promise<void>` | Programmatically dismiss the banner |
| `show` | `show() => Promise<void>` |  |
| `update` | `update(props: Partial<UiCalloutBanner>) => Promise<void>` | Programmatically update props at runtime |

## CSS parts

`actions`, `callout`, `content`, `icon`, `message`, `progress`, `title`
