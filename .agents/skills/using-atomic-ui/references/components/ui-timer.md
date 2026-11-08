# ui-timer

Timer — Utilities & Actions, Stable.

Timer component

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| active-step (`activeStep`) | `number` | `0` | Current active step index |
| alert-threshold (`alertThreshold`) | `number` | `10` | Percentage threshold for alert (countdown only) |
| auto-start (`autoStart`) | `boolean` | `false` | Whether to auto-start the timer |
| `collapse` | `boolean` | `false` | Automatically switch to the compact layout when the container becomes narrow |
| `duration` | `number` | `0` | Duration in seconds for simple countdown/stopwatch |
| enable-notifications (`enableNotifications`) | `boolean` | `false` | Whether to enable browser notifications |
| enable-sound (`enableSound`) | `boolean` | `false` | Whether to enable sound alerts |
| `flow` | `"linear" \| "non-linear"` | `'linear'` | Flow type |
| `format` | `"default" \| "human" \| "simple"` | `'default'` | Time formatting style |
| `loop` | `boolean` | `false` | Loop back to start on completion |
| `mode` | `"countdown" \| "stopwatch"` | `'countdown'` | Timer mode |
| notification-body (`notificationBody`) | `string` | `'{{label}} phase finished.'` | Template for notification body when a phase completes. Use {{label}} placeholder. |
| notification-title (`notificationTitle`) | `string` | `'Timer Complete'` | Template for notification title when a phase completes. Use {{label}} placeholder. |
| `persist` | `string` | — | Whether to persist the timer state in local storage |
| `precision` | `"milliseconds" \| "seconds"` | `'seconds'` | Precision mode |
| progress-type (`progressType`) | `"circular" \| "linear"` | `'circular'` | Progress visualization type |
| `steps` | `TimerStep[] \| string` | `[]` | Steps definition |
| target-date (`targetDate`) | `string` | — | Target date for countdown (ISO string or date string) |
| `theme` | `TimerTheme` | — | Theme variables |
| use-shadow (`useShadow`) | `boolean` | `true` | Toggle the outer drop-shadow effect (true by default) |
| `variant` | `"compact" \| "full"` | `'full'` | Display variant |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `timerAllComplete` | `void` |  |
| `timerComplete` | `{ stepIndex: number; }` |  |
| `timerGoTo` | `{ index: number; step: TimerStep; }` |  |
| `timerLap` | `{ time: number; lapIndex: number; }` |  |
| `timerNext` | `{ index: number; step: TimerStep; }` |  |
| `timerPause` | `{ stepIndex: number; }` |  |
| `timerPrev` | `{ index: number; step: TimerStep; }` |  |
| `timerStart` | `{ stepIndex: number; }` |  |
| `timerTick` | `{ remaining: number; stepIndex: number; mode: TimerMode; }` | Events |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `goTo` | `goTo(index: number) => Promise<void>` |  |
| `lap` | `lap() => Promise<void>` |  |
| `next` | `next() => Promise<void>` |  |
| `pause` | `pause() => Promise<void>` |  |
| `prev` | `prev() => Promise<void>` |  |
| `reset` | `reset() => Promise<void>` |  |
| `start` | `start() => Promise<void>` |  |
