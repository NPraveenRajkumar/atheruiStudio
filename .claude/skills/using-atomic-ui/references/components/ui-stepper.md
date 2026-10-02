# ui-stepper

Stepper — Navigation & Steps, Stable.

Step indicator

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| active-step (`activeStep`) | `number` | `0` | Current active step index (0-based) |
| allow-step-click (`allowStepClick`) | `boolean` | `true` |  |
| `animated` | `boolean` | `true` |  |
| `clickable` | `boolean` | `false` |  |
| color-scheme (`colorScheme`) | `"black" \| "borderless" \| "danger" \| "default" \| "elevated" \| "error" \| "flat" \| "ghost" \| "glass" \| "info" \| "` | `'primary'` |  |
| `compact` | `boolean` | `false` |  |
| `customIcons` | `{ disabled?: string; info?: string; error?: string; success?: string; pending?: string; warning?: string; active?: strin` | — | Custom icon for each status (optional) |
| `flow` | `"linear" \| "non-linear"` | `'linear'` | Flow type: linear or non-linear |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "emoji" \| "fontawesome" \| "google" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "` | `'default'` | Default library for icons |
| icon-line-flex (`iconLineFlex`) | `number` | — |  |
| icon-line-height (`iconLineHeight`) | `string` | — |  |
| icon-line-width (`iconLineWidth`) | `string` | — |  |
| keyboard-navigation (`keyboardNavigation`) | `boolean` | `true` | Enable keyboard navigation |
| label-fail (`labelFail`) | `string` | `'Mark Failed'` |  |
| label-finish (`labelFinish`) | `string` | `'Finish'` |  |
| label-next (`labelNext`) | `string` | `'Next'` |  |
| label-placement (`labelPlacement`) | `"horizontal" \| "vertical"` | `'horizontal'` | Label placement (horizontal or vertical) - DEPRECATED: use labelPosition instead |
| label-position (`labelPosition`) | `"bottom" \| "left" \| "right" \| "top"` | `'right'` | Label position relative to step indicator |
| label-prev (`labelPrev`) | `string` | `'Previous'` | Customize control button labels |
| max-visible-steps (`maxVisibleSteps`) | `number` | `5` | Maximum number of steps to show before collapsing |
| mobile-breakpoint (`mobileBreakpoint`) | `number` | `768` |  |
| `orientation` | `"horizontal" \| "vertical"` | `'horizontal'` | Orientation of the stepper (horizontal or vertical) |
| progress-dot (`progressDot`) | `boolean` | `false` |  |
| `responsive` | `boolean` | `true` | Enable responsive collapse/overflow |
| `scrollable` | `boolean` | `true` |  |
| `shadow` | `boolean` | `true` | Whether to use Shadow DOM |
| show-controls (`showControls`) | `boolean` | `false` | Show optional control buttons (Next/Previous/Finish/Failed) |
| show-descriptions (`showDescriptions`) | `boolean` | `false` | Whether to show step descriptions |
| show-numbers (`showNumbers`) | `boolean` | `true` | Whether to show step numbers |
| show-progress (`showProgress`) | `boolean` | `false` |  |
| show-tooltips (`showTooltips`) | `boolean` | `true` |  |
| `size` | `"default" \| "large" \| "lg" \| "md" \| "medium" \| "sm" \| "small"` | `'md'` | Size of the stepper |
| step-shape (`stepShape`) | `"circle" \| "square" \| "square-active"` | `'circle'` | Shape of the step indicator (circle, square, or square-active) |
| `steps` | `StepperStep[] \| string` | `[]` | Steps can be provided as an array or a JSON string in the attribute |
| steps-per-page (`stepsPerPage`) | `number` | `0` |  |
| `theme` | `StepperTheme` | — | Theme configuration with CSS variables |
| `validateBeforeNext` | `(stepIndex: number) => boolean \| Promise<boolean>` | — |  |
| `variant` | `"default" \| "filled" \| "inline" \| "minimal" \| "navigation" \| "outlined" \| "panel" \| "snack"` | `'default'` | Stepper variant style |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `progressUpdate` | `number` |  |
| `stepLoading` | `boolean` |  |
| `stepperChange` | `{ index: number; step: StepperStep; previousIndex: number; }` | Event emitted when active step changes |
| `stepperFail` | `{ index: number; step: StepperStep; }` |  |
| `stepperFinish` | `{ index: number; step: StepperStep; }` |  |
| `stepperNext` | `{ index: number; step: StepperStep; }` |  |
| `stepperPrevious` | `{ index: number; step: StepperStep; }` | Events emitted when control buttons are clicked |
| `stepperValidationError` | `{ index: number; step: StepperStep; error: string; }` | Event emitted when validation fails |
| `stepValidation` | `{ step: number; valid: boolean; }` |  |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `complete` | `complete(stepIndex?: number) => Promise<void>` | Programmatic API: Mark step as completed |
| `fail` | `fail(stepIndex?: number, errorMessage?: string) => Promise<void>` | Programmatic API: Mark step as failed |
| `getCurrentStep` | `getCurrentStep() => Promise<StepperStep \| null>` | Get current step |
| `getSteps` | `getSteps() => Promise<StepperStep[]>` | Get all steps |
| `goTo` | `goTo(stepIndex: number, options?: StepperNavigationOptions) => Promise<boolean>` | Programmatic API: Go to specific step |
| `next` | `next(options?: StepperNavigationOptions) => Promise<boolean>` | Programmatic API: Go to next step |
| `prev` | `prev(options?: StepperNavigationOptions) => Promise<boolean>` | Programmatic API: Go to previous step |
| `validateCurrentStep` | `validateCurrentStep() => Promise<boolean>` | Validate current step |
