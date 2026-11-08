# ui-accordion

Accordion — Data Display, Stable.

Collapsible panels

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| animation-duration (`animationDuration`) | `number` | `300` | Animation duration in milliseconds |
| animation-timing (`animationTiming`) | `"ease" \| "ease-in" \| "ease-in-out" \| "ease-out" \| "linear" \| "none"` | `'ease'` | Animation timing function |
| arrow-icon-collapsed (`arrowIconCollapsed`) | `string` | `'chevron-right'` | Custom arrow icon for collapsed state |
| arrow-icon-expanded (`arrowIconExpanded`) | `string` | `'chevron-down'` | Custom arrow icon for expanded state |
| auto-scroll (`autoScroll`) | `boolean` | `false` | Automatically scroll the item into view when it is opened if it's partially off-screen |
| background-color (`backgroundColor`) | `string` | `''` | Background color of the accordion |
| `columns` | `number` | `1` | Grid columns count for accordion items (Large screens only) |
| `defaultOpen` | `string[]` | `[]` | IDs of items that should be open by default |
| `dense` | `boolean` | `false` | Compact/dense mode |
| `disabled` | `boolean` | `false` | Disable the entire accordion |
| enable-a-i-summaries (`enableAISummaries`) | `boolean` | `false` | Enable AI-generated content briefing tooltips on hover |
| enable-animation (`enableAnimation`) | `boolean` | `true` | Enable global animations |
| enable-collaborators (`enableCollaborators`) | `boolean` | `false` | Enable real-time collaborator presence indicators in headers |
| enable-drag-drop (`enableDragDrop`) | `boolean` | `false` | Enable drag & drop reordering |
| enable-expand-collapse-all (`enableExpandCollapseAll`) | `boolean` | `false` | Show expand/collapse all buttons |
| enable-gestures (`enableGestures`) | `boolean` | `false` | Enable tactile swipe gestures for item actions (Mobile Context) |
| enable-haptics (`enableHaptics`) | `boolean` | `false` | Enable auditory haptics (premium click/collapse sounds) |
| enable-holographic (`enableHolographic`) | `boolean` | `false` | Enable Advanced 3D 'Holographic' depth stacking on expansion |
| enable-locking (`enableLocking`) | `boolean` | `false` | Enable Pattern-Lock security for sensitive items |
| enable-nested (`enableNested`) | `boolean` | `false` | Enable nested accordion support |
| enable-parallax (`enableParallax`) | `boolean` | `false` | Enable 3D Parallax depth effect on hover (Premium themes only) |
| enable-persistence (`enablePersistence`) | `boolean` | `false` | Save state to localStorage |
| enable-portal-reader (`enablePortalReader`) | `boolean` | `false` | Enable full-screen 'Reading Portal' mode for deep-focus content analysis |
| enable-quick-actions (`enableQuickActions`) | `boolean` | `false` | Enable floating Quick Actions toolbar on hover |
| enable-ranking (`enableRanking`) | `boolean` | `false` | Automatically rank items based on their usage heat (requires persistState) |
| enable-search (`enableSearch`) | `boolean` | `false` | Enable search/filter functionality |
| enable-search-heatmap (`enableSearchHeatmap`) | `boolean` | `false` | Enable a visual search "Mini-map" (Heatmap) on the right side |
| enable-snapshots (`enableSnapshots`) | `boolean` | `false` | Enable Workflow 'Snapshots' (save/load open states) |
| enable-sparklines (`enableSparklines`) | `boolean` | `false` | Enable high-precision header sparklines for analytical data |
| enable-streaming (`enableStreaming`) | `boolean` | `false` | Enable real-time, auto-scrolling telemetry terminals inside items |
| enable-teleportation (`enableTeleportation`) | `boolean` | `false` | Enable Smart-Link 'Teleportation' between accordion sections |
| enable-voice-control (`enableVoiceControl`) | `boolean` | `false` | Enable Voice-Activated industrial navigation (Hands-Free) |
| `expandedItems` | `string[]` | `null` | Controlled open items (overrides internal state if provided) |
| focus-timeout (`focusTimeout`) | `number` | `0` | Automatically collapse sections after X milliseconds of inactivity (0 to disable) |
| `haptic` | `boolean` | `true` | Enable haptic feedback on interaction |
| header-level (`headerLevel`) | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `3` | Header heading level (1-6) for accessibility |
| hide-arrow (`hideArrow`) | `boolean` | `false` | Hide arrow icon completely |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'lucide'` | Default library to use for icons (e.g., 'se', 'fontawesome', 'lucide', 'emoji', etc.) |
| icon-position (`iconPosition`) | `"end" \| "start"` | `'end'` | Position of the expand icon: 'start' \| 'end' |
| `items` | `AccordionItem[]` | `[]` | Array of accordion items |
| lazy-render (`lazyRender`) | `boolean` | `false` | Only render accordion content when it is first opened (Performance) |
| `loading` | `boolean` | `false` | Show global skeleton loading state |
| `multiple` | `boolean` | `false` | Allow multiple items to be open at once |
| persist-state (`persistState`) | `string` | `''` | Enable state persistence - if provided, the string will be used as a localStorage key |
| persistence-key (`persistenceKey`) | `string` | `'ui-accordion-state'` | localStorage key for persistence |
| `physics` | `"bouncy" \| "liquid" \| "standard"` | `'standard'` | Creative/Motion Variants |
| print-expand-all (`printExpandAll`) | `boolean` | `false` | Automatically expand all items and hide interactive controls when printing |
| `rtl` | `boolean` | `false` | Right-to-left mode |
| scroll-behavior (`scrollBehavior`) | `"auto" \| "smooth"` | `'smooth'` | Scrolling behavior when autoScroll is enabled |
| search-placeholder (`searchPlaceholder`) | `string` | `'Search...'` | Search input placeholder |
| selected-header-color (`selectedHeaderColor`) | `string` | `'var(--color-success, #10b981)'` | Custom color for selected header (default: var(--color-success, #10b981)) |
| selection-position (`selectionPosition`) | `"left" \| "none" \| "top"` | `'left'` | Position of the selection indicator: 'left' \| 'top' \| 'none' |
| show-breadcrumbs (`showBreadcrumbs`) | `boolean` | `false` | Show a navigation trail (breadcrumbs) for nested items in their headers |
| show-numbers (`showNumbers`) | `boolean` | `false` | Show numbered indicators above the accordion |
| `size` | `"default" \| "large" \| "lg" \| "main" \| "md" \| "medium" \| "popover" \| "section" \| "sm" \| "small" \| "subsection" ` | `'md'` | Size of the accordion: 'sm' \| 'md' \| 'lg' |
| sticky-headers (`stickyHeaders`) | `boolean` | `false` | Pin headers to the top during long content scrolls |
| sync-group (`syncGroup`) | `string` | `''` | Optional name for a synchronization group. All accordions with the same group  name will synchronize their toggle states globally. |
| `theme` | `"default" \| "glass" \| "radiant"` | `'default'` | Visual theme: 'default' \| 'glass' \| 'radiant' |
| toggle-style (`toggleStyle`) | `"chevron" \| "plus-minus"` | `'chevron'` | Toggle icon style: 'chevron' \| 'plus-minus' |
| `variant` | `"bordered" \| "boxed" \| "card" \| "card-list" \| "default" \| "headline" \| "iconic" \| "left-toggle" \| "light" \| "mi` | `'default'` | Accordion variant: 'default' \| 'bordered' \| 'splitted' \| 'light' \| 'shadow' \| 'card' \| 'card-list' \| 'headline' \| 'boxed' \| 'minimal' \| 'left-toggle' \| 'iconic' Use 'card' or 'card-list' for a separated card layout with icon pills and a right-chevron. Use 'headline' for a minimalist, high-impact typography-first layout. Use 'boxed' for dark individual cards with glowing yellow action badges. Use 'minimal' for border-bottom separators and clean typography. Use 'left-toggle' for a left plus-minus toggle structure. Use 'iconic' for custom left status/brand icons with micro plus-minus toggles. |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `accordionAction` | `AccordionActionEvent` |  |
| `accordionChange` | `AccordionChangeEvent` |  |
| `accordionReorder` | `AccordionReorderEvent` |  |
| `accordionSearch` | `AccordionSearchEvent` |  |
| `afterClose` | `AccordionAnimationEvent` |  |
| `afterOpen` | `AccordionAnimationEvent` |  |
| `beforeClose` | `AccordionAnimationEvent` |  |
| `beforeOpen` | `AccordionAnimationEvent` |  |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `clearSearch` | `clearSearch() => Promise<void>` |  |
| `closeAll` | `closeAll() => Promise<void>` |  |
| `closeItem` | `closeItem(itemId: string) => Promise<void>` |  |
| `getOpenItems` | `getOpenItems() => Promise<string[]>` |  |
| `initVoice` | `initVoice() => Promise<void>` |  |
| `openAll` | `openAll() => Promise<void>` |  |
| `openItem` | `openItem(itemId: string) => Promise<void>` |  |
| `saveSnapshot` | `saveSnapshot(name: string) => Promise<void>` |  |
| `scrollToItem` | `scrollToItem(itemId: string, behavior?: ScrollBehaviorType) => Promise<void>` |  |
| `searchItems` | `searchItems(query: string) => Promise<void>` |  |
| `setOpenItems` | `setOpenItems(itemIds: string[]) => Promise<void>` |  |
| `shake` | `shake(itemId: string) => Promise<void>` | Triggers a kinetic shake animation on a specific item (Veto feedback) |
| `success` | `success(itemId: string) => Promise<void>` | Triggers a success radiant pulse on a specific item |
| `teleportTo` | `teleportTo(itemId: string) => Promise<void>` |  |
| `toggleItemById` | `toggleItemById(itemId: string) => Promise<void>` |  |
