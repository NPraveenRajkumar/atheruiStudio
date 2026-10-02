# ui-progress

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `buffer` | `number` | `0` | Buffer percentage for loading states |
| data-labels (`dataLabels`) | `string` | `''` | Raw metric labels (e.g. '5.2 GB / 10 GB') |
| decimal-precision (`decimalPrecision`) | `number` | `0` | Decimal precision for percentage display |
| estimated-time (`estimatedTime`) | `number` | `0` | Estimated time remaining in seconds |
| `format` | `(percent: number) => string` | `(percent: number) => '${percent}%'` | Custom format function for progress text |
| gap-degree (`gapDegree`) | `number` | `0` | Gap degree (for circle/dashboard type) |
| gap-position (`gapPosition`) | `"bottom" \| "left" \| "right" \| "top"` | `'top'` | Gap position (for circle/dashboard type) |
| `glass` | `boolean` | `false` | Enable glassmorphism effect for the trail |
| `glow` | `boolean` | `false` | Enable dynamic glow effect based on status |
| `gradient` | `boolean` | `false` | Enable automatic gradient based on status or strokeColor |
| `height` | `number \| string` | `'100%'` | Height/Length of progress bar (for type='line' and orientation='vertical') |
| `icon` | `string` | `''` | Icon name to display alongside status |
| icon-library (`iconLibrary`) | `string` | `'lucide'` | Icon library (lucide, fontawesome, se, core) |
| `indeterminate` | `boolean` | `false` | Indeterminate state (infinite animation) |
| `interactive` | `boolean` | `false` | Allow manual interaction (slider mode) |
| label-position (`labelPosition`) | `"bottom" \| "inside" \| "left" \| "outside" \| "right" \| "top"` | `'outside'` | Label position |
| `liquid` | `boolean` | `false` | Enable premium wave/liquid animation |
| `milestones` | `{ percent: number; label?: string; icon?: string; }[]` | `[]` | Milestone markers |
| `multiProgress` | `{ percent: number; color?: string; label?: string; }[]` | `[]` | Multiple progress bars for stacked display |
| `orientation` | `"horizontal" \| "vertical"` | `'horizontal'` | Orientation of the progress bar |
| `paused` | `boolean` | `false` | Paused state |
| peak-marker (`peakMarker`) | `number` | `0` | Tracks the maximum percent reached (Ghost Marker) |
| `percent` | `number` | `0` | Current progress percentage (0-100) |
| percentage-color (`percentageColor`) | `string` | `''` | Independent color for the percentage text |
| show-buffer (`showBuffer`) | `boolean` | `false` | Show buffer indicator |
| show-info (`showInfo`) | `boolean` | `true` | Whether to display progress value and status icon |
| show-pause-button (`showPauseButton`) | `boolean` | `false` | Show pause/resume button |
| show-time-estimate (`showTimeEstimate`) | `boolean` | `false` | Show time estimation |
| `size` | `"default" \| "sm"` | `'default'` | Size of progress (only for type='circle' or 'dashboard') |
| `skeleton` | `boolean` | `false` | Whether to display in skeleton/loading mode |
| `status` | `"active" \| "completed" \| "danger" \| "empty" \| "exception" \| "interrupted" \| "normal" \| "running" \| "success" \| ` | `'normal'` | Status of progress |
| status-bar (`statusBar`) | `boolean` | `false` | Status-bar variant: shows a lifecycle label (Not Started / Running / Interrupted / Completed) above the progress bar derived automatically from percent + status. |
| status-bar-align (`statusBarAlign`) | `"center" \| "left" \| "right"` | `'left'` | Alignment of the status badge inside the status bar header. 'left' (default) — badge left, percent right. 'center' — badge and percent centered together. 'right' — badge right, percent left. |
| status-bar-position (`statusBarPosition`) | `"inside" \| "top"` | `'inside'` | Position of the status chip/badge in status-bar mode. 'inside' (default) — inside the progress bar trail (requires minimum height of 32px). 'top' — above the progress bar (allows smaller progress bar heights). |
| `statusLabels` | `{ notStarted?: string; running?: string; interrupted?: string; completed?: string; }` | `{}` | Custom text labels for each status-bar state. Pass any subset to override — unset keys keep their defaults. e.g. { notStarted: 'Pending', running: 'In Progress', interrupted: 'Paused', completed: 'Done' } |
| `steps` | `number` | `0` | Total step count (for steps progress) |
| stroke-color (`strokeColor`) | `string \| { from?: string; to?: string; direction?: string; }` | `'#1890ff'` | Color of progress bar (string or gradient object) |
| stroke-linecap (`strokeLinecap`) | `"round" \| "square"` | `'round'` | Shape of progress linecap |
| stroke-width (`strokeWidth`) | `number` | `10` | Width of progress bar stroke |
| `success` | `{ percent?: number; strokeColor?: string; }` | `null` | Segmented success percent |
| `thresholds` | `{ percent: number; color?: string; status?: string; glow?: boolean; vibrate?: boolean; }[]` | `[]` | Dynamic threshold mapping [{percent: 80, color: 'red', status: 'danger'}] |
| `ticks` | `number` | `0` | Show scale ticks at specific intervals (e.g. 10) |
| trail-color (`trailColor`) | `string` | `''` | Color of unfilled part |
| `type` | `"circle" \| "dashboard" \| "industrial" \| "line" \| "segmented"` | `'line'` | Type of progress |
| `vitality` | `boolean` | `false` | Show a background 'vitality' pulse synchronized with system health |
| `width` | `number \| string` | `'100%'` | Width/Length of progress bar (for type='line' and orientation='horizontal') |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `progressChange` | `{ value: number; }` | Emitted when user interacts/scrubs |
