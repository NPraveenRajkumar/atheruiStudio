# UI need to component

Pick the library component first; fall back to HTML only when nothing here (or in `using-atomic-ui/references/components.md`) fits. Props listed are the ones that usually matter; open `using-atomic-ui/references/components/<tag>.md` for the rest, including the exact shape of `items`, `columns` and `actions`.

## Shell and navigation

| Need | Component | Notes |
|---|---|---|
| App header with logo, actions, user menu | `ui-top-bar` | `companyName`, `companyLogo`, `actions`, `userName`, `userMenuItems` |
| Left or top app navigation | `ui-navigation-bar` | `items`, `activeId`, `collapsible`, `position`, `orientation`; call `setActive(id)` to sync with the router |
| Simple horizontal nav | `ui-horizontal-nav` | |
| Slide-in side panel, drawer, filters panel | `ui-aside-panel` | `open`, `direction`, `resizable`; events `asideOpened`, `asideClosed` |
| Breadcrumb trail | `ui-breadcrumb` + `ui-breadcrumb-item` | |
| Tabbed sections | `ui-tabs` | `items`, `defaultActive`, `variant`; event `tabChange` |
| Resizable split layout | `ui-splitter` | |
| Page numbers | `ui-pagination` | `currentPage`, `itemsPerPage` |
| Scroll back to top | `ui-scroll-top` | |
| Wizard / multi-step flow | `ui-stepper` + `ui-step` (or `ui-smart-stepper`) | `activeStep` |
| Command search (Ctrl+K) | `ui-command-palette` | |

## Forms and input

| Need | Component | Notes |
|---|---|---|
| Text, email, password, search, textarea | `ui-input` | `label`, `placeholder`, `value`, `multiline` |
| Number with steppers | `ui-number-input` | |
| One-time code | `ui-otp-input` | |
| Masked/formatted text (phone, card) | `ui-pattern-input` | |
| Single select | `ui-dropdown` | |
| Dependent selects | `ui-multi-cascading-dropdown` | |
| On/off setting | `ui-switch` | `checked` |
| Checkbox / radio | `ui-checkbox`, `ui-radio` | |
| Segmented choice | `ui-button-toggle-group` + `ui-button-toggle` | `value` on the group |
| Slider, range, dial | `ui-range-slider`, `ui-knob` | |
| Rating | `ui-rating` | |
| Colour | `ui-color-picker` | |
| File upload | `ui-file-upload` | `accept`, `multiple`, `maxSize`, `maxFiles` |
| Move items between two lists | `ui-transfer-list` | |
| Label + helper + error text around a control | `ui-form-control`, `ui-label` | `helperText`, `errorText`, `required` |

## Actions

| Need | Component | Notes |
|---|---|---|
| Button | `ui-button` | `label`, `variant`, `color`, `size`, `loading`, `disabled`; event `buttonClick` |
| Button with menu | `ui-split-button` | |
| Floating action | `ui-fab` + `ui-fab-item`, or `ui-speed-dial` | |
| Toolbar of tools | `ui-toolbar` | |
| Right-click menu | `ui-context-menu` | |
| Link | `ui-anchor` | |

## Data display

| Need | Component | Notes |
|---|---|---|
| Table / data grid with sort, filter, export, editing | `ui-advanced-data-table` | `columns`, `data`, `filterable`, `exportable`, `editable`, `loading`, `emptyMessage` |
| Card | `ui-card` | `cardTitle`, `description`, `cover`, `actions`, `menuItems`, `hoverable`, `clickable` |
| Simple list | `ui-list` + `ui-list-item` (`ui-list-group`) | |
| Tree | `ui-tree` | |
| Timeline / activity feed | `ui-timeline` | |
| Collapsible sections, FAQ | `ui-accordion` | `items` |
| Tag or status chip | `ui-tag`, `ui-pill`, `ui-tag-group` | |
| Count badge | `ui-badge` | set `value` or it renders empty |
| User avatar(s) | `ui-avatar`, `ui-avatar-group` | `src`, `size` |
| KPI / usage meters | `ui-meter-group`, `ui-speedometer` | |
| Progress | `ui-progress` | `percent`, `indeterminate` |
| Grid of mixed-height tiles | `ui-masonry` | |
| Carousel | `ui-carousel` | |
| Code / snippet | `ui-code-editor`, `ui-code-preview` | |
| Icon | `ui-icon` | `icon`, `iconLibrary` (lucide by default) |
| Divider | `ui-divider` | |
| Row/column with spacing | `ui-stack` | `direction`, `spacing`, `align`, `justify`, `wrap` |

There is no chart component. If a screen needs charts, say so and use the project's existing chart library inside a `ui-card`.

## Feedback and states

| Need | Component | Notes |
|---|---|---|
| Modal, drawer, confirm, alert | `ui-dialog-box` | `open`, `dialogTitle`; slots `body`, `footer`, `actions`; events `afterOpen`, `afterClose` |
| Toast | `ui-snackbar` | call `.show(...)` |
| Inline page banner | `ui-callout-banner` | `heading`, `message`, `closable` |
| Tooltip / popover | `ui-tooltip`, `ui-popover` | |
| Loading placeholder | `ui-skeleton` | `rows`, `shape`, `animated` |
| Spinner | `ui-loader` | |
| No data / error / first-run | `ui-empty-state` | `heading`, `message`, `primaryAction` |
| Countdown | `ui-timer` | |
| Reveal on scroll | `ui-animate-on-scroll` | |

## Workspace-style layouts

`ui-workspace-manager`, `layout-manager` (`lm-*`), `ui-dock` / `ui-dock-host` and `ui-resizable-panel` cover IDE-style docking and draggable windows. Reach for them only when the user wants that kind of arrangeable workspace.
