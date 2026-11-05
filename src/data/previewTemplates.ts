/**
 * Preview templates for components that render nothing useful on their own:
 *  - child-only components that must sit inside a parent (`parent`)
 *  - containers that need children (`children`)
 *  - overlays that need to be opened (`props`) or need a trigger element (`children`)
 * Keyed by tag name.
 */
export interface PreviewSpec {
  /** Properties applied to the component, overriding prop defaults (e.g. `{ open: true }`). */
  props?: Record<string, unknown>;
  /** innerHTML placed inside the component (slotted trigger, child elements). */
  children?: string;
  /** Render the component inside this parent, repeated `count` times. The controlled element is the child. */
  parent?: {
    tag: string;
    props?: Record<string, unknown>;
    count?: number;
    style?: string;
    /** Index of the one child that receives the card's props; the others stay neutral siblings. Default: all of them. */
    controlled?: number;
    /** Props for the neutral siblings (for example distinct values, so a group does not treat them as one option). */
    siblings?: (index: number) => Record<string, unknown>;
    /** Text placed inside each repeated child, for components whose visible text is slotted content. */
    text?: (index: number) => string;
  };
  /** The component draws its `label` as slotted text (the prop itself only sets aria-label), so keep the text in step with it. */
  textFromLabel?: boolean;
  /** Adds an "Open" button to the stage that sets this boolean prop on the component (for overlays). */
  opener?: { prop: string; label: string };
  /** HTML rendered next to the component (e.g. a right-click target). */
  beside?: string;
  /** Short usage hint shown under the canvas. */
  hint?: string;
  /** Props that are never applied in previews (they would grab focus or block the rest of the page). */
  ignore?: string[];
}

const box = (n: number) =>
  Array.from({ length: n }, (_, i) => `<div style="padding:10px 16px;border:1px solid #334155;border-radius:8px;color:#e2e8f0">Item ${i + 1}</div>`).join('');

export const PREVIEW: Record<string, PreviewSpec> = {
  // Child-only components (shown inside their natural parent)
  'ui-list-item': { parent: { tag: 'ui-list', count: 3, style: 'width:320px' }, props: { label: 'List item' } },
  'ui-list-group': { children: '<ui-list-item label="First"></ui-list-item><ui-list-item label="Second"></ui-list-item><ui-list-item label="Third"></ui-list-item>' },
  'ui-step': { parent: { tag: 'ui-stepper', count: 3, style: 'width:520px' }, props: { stepTitle: 'Step' } },
  'ui-smart-stepper': {
    children:
      '<smart-step label="Account" description="Login details"><p>Account step</p></smart-step><smart-step label="Profile" description="About you"><p>Profile step</p></smart-step><smart-step label="Done" description="Finish"><p>Done</p></smart-step>',
  },
  'smart-step': { parent: { tag: 'ui-smart-stepper', count: 3, style: 'width:520px' }, props: { label: 'Step', description: 'Description' } },
  'ui-breadcrumb-item': { parent: { tag: 'ui-breadcrumb', count: 3 }, props: { label: 'Crumb' } },
  'ui-fab-item': { parent: { tag: 'ui-fab', count: 3 }, props: { label: 'Action', icon: 'plus' } },
  'ui-timeline-item': { parent: { tag: 'ui-timeline', count: 3, style: 'width:420px' }, props: { itemTitle: 'Event', itemDescription: 'Details' } },
  'timeline-item': { parent: { tag: 'ui-timeline', count: 3, style: 'width:420px' }, props: { itemTitle: 'Event', itemDescription: 'Details' } },
  'ui-button-toggle': {
    parent: {
      tag: 'ui-button-toggle-group',
      count: 3,
      controlled: 1,
      siblings: (i) => ({ label: i === 0 ? 'Previous' : 'Next', value: `sibling-${i}` }),
      text: (i) => (i === 0 ? 'Previous' : i === 1 ? 'Option' : 'Next'),
    },
    props: { label: 'Option', value: 'option' },
    textFromLabel: true,
  },
  'ui-avatar-group': {
    children: '<ui-avatar name="Ada Lovelace"></ui-avatar><ui-avatar name="Alan Turing"></ui-avatar><ui-avatar name="Grace Hopper"></ui-avatar>',
  },
  'ui-button-toggle-group': {
    children: '<ui-button-toggle label="One" value="1"></ui-button-toggle><ui-button-toggle label="Two" value="2"></ui-button-toggle><ui-button-toggle label="Three" value="3"></ui-button-toggle>',
  },
  'ui-tag-group': { children: '<ui-tag label="Design"></ui-tag><ui-tag label="Code"></ui-tag><ui-tag label="Ship"></ui-tag>' },
  'ui-stack': { children: box(3) },
  'ui-carousel': {
    children: ['#0ea5e9', '#a855f7', '#22c55e']
      .map((c, i) => `<div style="height:100%;min-height:200px;display:flex;align-items:center;justify-content:center;background:${c};color:#fff;font-size:24px">Slide ${i + 1}</div>`)
      .join(''),
  },

  // A loader must never trap focus; its fullscreen/overlay modes are contained by the preview card
  'ui-loader': { ignore: ['trapFocus'] },

  // Components that need a value to show anything
  'ui-dropdown': { props: { showArrow: true } },
  'ui-badge': { props: { value: 5, inline: true } },
  'ui-pagination': { props: { totalItems: 100, itemsPerPage: 10, currentPage: 1 } },

  // Overlays: open on load and/or provide a trigger
  'ui-dialog-box': {
    props: { dialogTitle: 'Dialog title' },
    opener: { prop: 'open', label: 'Open dialog' },
    hint: 'Press the button to open the dialog; Esc or the backdrop closes it.',
  },
  'ui-aside-panel': { opener: { prop: 'open', label: 'Open panel' }, hint: 'Press the button to open the panel from the page edge.' },
  'ui-command-palette': { opener: { prop: 'open', label: 'Open command palette' }, hint: 'Press the button to open the palette; Esc closes it.' },
  'ui-popover': {
    props: { heading: 'Popover', content: '<p>Popover content</p>', trigger: 'click' },
    children: '<ui-button label="Click me"></ui-button>',
    hint: 'Click the button to open the popover.',
  },
  'ui-tooltip': {
    props: { content: 'Tooltip text' },
    children: '<ui-button label="Hover me"></ui-button>',
    hint: 'Hover the button to show the tooltip.',
  },
  'ui-context-menu': {
    props: { target: '#ctx-target' },
    beside: '<div id="ctx-target" style="margin-left:24px;padding:28px 36px;border:1px dashed #64748b;border-radius:10px;color:#94a3b8">Right-click here</div>',
    hint: 'Right-click the dashed area to open the menu.',
  },
  'ui-smart-context-menu': { hint: 'Right-click inside the target element to open the menu.' },
  'ui-scroll-top': { hint: 'Appears after you scroll the page down.' },
};
