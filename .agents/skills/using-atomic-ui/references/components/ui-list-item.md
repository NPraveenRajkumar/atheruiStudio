# ui-list-item

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| a-1-1y-label (`a11yLabel`) | `string` | `''` | Interactive accessibility label |
| action-icon (`actionIcon`) | `string` | `''` |  |
| aura-mode (`auraMode`) | `boolean` | `false` | Whether to show a background heatmap glow matching the status |
| avatar-group (`avatarGroup`) | `any[] \| string` | `''` | Multiple collaborators to show as an avatar group |
| avatar-group-position (`avatarGroupPosition`) | `"content" \| "media" \| "right"` | `'content'` | Position of the avatar group: 'media' (leading), 'content' (below label), 'right' (after content) |
| avatar-position (`avatarPosition`) | `"left" \| "right"` | `'left'` | Position of the avatar/image (left or right) |
| `badge` | `string` | `''` |  |
| badge-color (`badgeColor`) | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'default'` |  |
| `checked` | `boolean` | `false` |  |
| `collapsible` | `boolean` | `false` |  |
| `color` | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'default'` |  |
| context-menu (`contextMenu`) | `boolean` | `false` |  |
| context-menu-position (`contextMenuPosition`) | `"auto" \| "bottom" \| "left" \| "right" \| "top"` | `'auto'` |  |
| context-menu-trigger (`contextMenuTrigger`) | `"click" \| "hover" \| "rightClick"` | `'rightClick'` |  |
| `counter` | `number \| string` | `''` |  |
| counter-color (`counterColor`) | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'success'` |  |
| `dense` | `boolean` | `false` |  |
| `density` | `"comfortable" \| "compact" \| "cozy"` | `'comfortable'` | Layout density mode |
| `disabled` | `boolean` | `false` |  |
| `divider` | `boolean` | `false` |  |
| `expandable` | `boolean` | `false` | Whether the item can be expanded to show more details |
| `expanded` | `boolean` | `false` |  |
| expanded-detail (`expandedDetail`) | `boolean` | `false` | Whether the expansion detail is shown |
| full-swipe-threshold (`fullSwipeThreshold`) | `number` | `0.75` | Threshold for full-swipe trigger (% of width) |
| grid-mode (`gridMode`) | `boolean` | `false` | Whether the parent is in grid mode |
| `highlight` | `string` | `''` | Text to highlight (for search results) |
| hover-color (`hoverColor`) | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'default'` | Custom hover color (primary, success, etc.) |
| `href` | `string` | `''` |  |
| `icon` | `string` | `''` |  |
| `image` | `string` | `''` | Image URL for a square/landscape thumbnail |
| `interactive` | `boolean` | `true` |  |
| `label` | `string` | `''` |  |
| left-action-color (`leftActionColor`) | `string` | `'success'` |  |
| left-action-icon (`leftActionIcon`) | `string` | `''` |  |
| `leftActions` | `any[]` | `[]` | Multiple actions for left swipe reveal [{icon, color, action}] |
| `level` | `number` | `0` |  |
| `locked` | `boolean` | `false` | Whether the item is locked |
| long-press-delay (`longPressDelay`) | `number` | `600` | Delay for long press event (ms) |
| `metadata` | `any` | `{}` | Custom metadata for Ghost Layer {ip, id, etc.} |
| `multiline` | `boolean` | `false` |  |
| `nested` | `boolean` | `false` |  |
| `presence` | `any[]` | `[]` | Collaborative presence data [{id, color}] |
| `presenceCursors` | `any[]` | `[]` | Professional presence cursors [{name, color, x, y}] |
| priority-pulse (`priorityPulse`) | `boolean` | `false` | Whether to show a pulsating ambient glow for high priority |
| `progress` | `number` | `-1` | Progress percentage (0-100), -1 to disable |
| `readonly` | `boolean` | `false` |  |
| right-action-color (`rightActionColor`) | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'danger'` |  |
| right-action-icon (`rightActionIcon`) | `string` | `''` |  |
| `rightActions` | `any[]` | `[]` | Multiple actions for right swipe reveal [{icon, color, action}] |
| `selected` | `boolean` | `false` |  |
| selection-color (`selectionColor`) | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'default'` | Custom selection color (primary, success, etc.) |
| show-checkbox (`showCheckbox`) | `boolean` | `false` |  |
| show-ghost-layer (`showGhostLayer`) | `boolean` | `false` | Whether to show the Ghost Layer (Alt mode) |
| show-menu (`showMenu`) | `boolean` | `false` | Whether to show a 3-dot action menu icon |
| show-star (`showStar`) | `boolean` | `false` | Whether to show the star icon |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small"` | `'md'` |  |
| `skeleton` | `boolean` | `false` | Whether to show as a loading skeleton |
| `sparkline` | `number[]` | `[]` | Mini sparkline data [10, 50, 20...] |
| `starred` | `boolean` | `false` | Whether the item is starred/favorited |
| `status` | `"" \| "away" \| "busy" \| "offline" \| "online"` | `''` | Presence status: 'online', 'offline', 'busy', 'away' |
| status-position (`statusPosition`) | `"bottom-right" \| "top-right"` | `'bottom-right'` | Position of the status dot |
| `sublabel` | `string` | `''` |  |
| swipe-actions (`swipeActions`) | `boolean` | `false` | Enable swipe actions (mobile) |
| swipe-behavior (`swipeBehavior`) | `"dismiss" \| "reveal"` | `'reveal'` | Swipe behavior: 'reveal' or 'dismiss' |
| `tags` | `any[] \| string` | `''` | JSON string or array of tag objects |
| `target` | `"_blank" \| "_parent" \| "_self" \| "_top"` | `'_self'` |  |
| tree-lines (`treeLines`) | `boolean` | `false` | Whether to show hierarchical connection lines (tree view) |
| user-avatar (`userAvatar`) | `string` | `''` | User avatar URL |
| `value` | `string` | `''` |  |
| `variant` | `"filled" \| "outlined" \| "soft" \| "text"` | `'text'` |  |
| `wobble` | `boolean` | `false` | Whether the item is currently shaking/wobbling (visual haptic) |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `checkboxChange` | `{ value: string; checked: boolean; }` |  |
| `contextMenuCloseEvent` | `{ value: string; }` |  |
| `contextMenuOpenEvent` | `{ value: string; }` |  |
| `detailToggle` | `{ value: string; expanded: boolean; }` |  |
| `listItemActionClick` | `{ value: string; }` |  |
| `listItemClick` | `{ value: string; selected: boolean; shiftKey?: boolean; ctrlKey?: boolean; metaKey?: boolean; altKey` |  |
| `listItemToggle` | `{ value: string; expanded: boolean; }` |  |
| `longPress` | `{ value: string; }` |  |
| `pillClick` | `{ value: string; label: string; index: number; pill: any; }` |  |
| `starToggle` | `{ value: string; starred: boolean; }` |  |
| `swipeAction` | `{ value: string; side: LeftRight; action?: string; }` |  |
| `tagClick` | `{ value: string; label: string; index: number; }` |  |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `focusItem` | `focusItem() => Promise<void>` |  |

## CSS parts

`counter`, `list-item`
