# ui-smart-stepper

Smart Stepper — Navigation & Steps, Stable.

Advanced stepper

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| active-step (`activeStep`) | `number` | `0` | Current active step index (0-based) |
| `orientation` | `"horizontal" \| "vertical"` | `'horizontal'` | Orientation of the stepper (horizontal or vertical) |
| `size` | `"lg" \| "md" \| "sm"` | `'md'` | Size of the stepper |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `stepperChange` | `{ index: number; step: HTMLElement; }` | Event emitted when active step changes |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `getCurrentStep` | `getCurrentStep() => Promise<HTMLElement \| null>` | Get current step element |
| `getSteps` | `getSteps() => Promise<HTMLElement[]>` | Get all step elements |
| `goTo` | `goTo(stepIndex: number) => Promise<boolean>` | Programmatic API: Go to specific step |
| `next` | `next() => Promise<boolean>` | Programmatic API: Go to next step |
| `prev` | `prev() => Promise<boolean>` | Programmatic API: Go to previous step |
