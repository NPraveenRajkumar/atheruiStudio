/**
 * Component-specific knowledge for the generated variant cards: which values to show for a prop, which props
 * make no visible difference (so no card), and the companion props that put the component into the state the
 * value is about (a password needs a masked value, a validation state needs a message, ...).
 */
/** A hand-written card for values that are not enumerated props (sizes, colours, spin...). */
export interface ExtraCard {
  key: string;
  title: string;
  description: string;
  items: { label: string; props: Record<string, unknown> }[];
}

export interface VariantRules {
  /** Extra curated cards listed after the generated ones. */
  extras?: ExtraCard[];
  /** Props with no visible effect on their own; no card is generated. */
  skip?: string[];
  /** Replace a prop's option list (drops values that are not real values of that prop). */
  options?: Record<string, string[]>;
  /** Companion props for a prop value. Return undefined to fall back to the generic rules. */
  context?: (prop: string, value: unknown) => Record<string, unknown> | undefined;
  /** Props set on every card of the component. */
  base?: Record<string, unknown>;
}

const TYPE_SAMPLES: Record<string, Record<string, unknown>> = {
  text: { value: 'Alex Johnson', placeholder: 'Your name' },
  password: { value: 'secret123', showPasswordToggle: true },
  email: { value: 'alex@example.com', showTypeIcon: true },
  number: { value: 42, showSteppers: true },
  tel: { value: '+1 555 010 1234', showTypeIcon: true },
  search: { value: 'design systems', showClear: true },
  date: { value: '2026-01-15' },
  'datetime-local': { value: '2026-01-15T14:30' },
  month: { value: '2026-01' },
  color: { value: '#38bdf8' },
  range: { value: 50 },
  currency: { value: 1250, currency: 'USD' },
  otp: { otpLength: 6, value: '123456' },
  pin: { otpLength: 4, value: '1234' },
  file: { helperText: 'Choose a file', placeholder: 'No file selected' },
};

const MASK_SAMPLES: Record<string, string> = {
  // Masks format while typing, so the cards show the formatted result a user would see
  'credit-card': '4242 4242 4242 4242',
  currency: '$125,000.00',
  date: '01/15/2026',
  phone: '(555) 123-4567',
  ssn: '123-45-6789',
  zip: '94105',
};

const FLAG_CONTEXT: Record<string, Record<string, unknown>> = {
  alphaOnly: { value: 'Alex', helperText: 'Letters only' },
  numericOnly: { value: '12345', helperText: 'Digits only' },
  noSpaces: { value: 'nospaces', helperText: 'Spaces are removed' },
  autoTrim: { value: '  padded text  ', helperText: 'Trims on blur' },
  blockInvalidPaste: { helperText: 'Paste is validated', allowedChars: 'abc' },
  clearOnEscape: { value: 'Press Esc', helperText: 'Esc clears the field' },
  showClear: { value: 'Clear me' },
  showCopy: { value: 'Copy me' },
  showCounter: { value: 'Hello', maxLength: 40 },
  showProgressCircle: { value: 'Hello', maxLength: 20 },
  showPasswordToggle: { type: 'password', value: 'secret123' },
  showPasswordStrength: { type: 'password', value: 'Str0ng!Pass' },
  showSteppers: { type: 'number', value: 5 },
  showTypeIcon: { type: 'email', value: 'alex@example.com' },
  multiline: { value: 'Line one\nLine two', rows: 3 },
  autoResize: { multiline: true, value: 'Grows with its content…' },
  disabled: { value: 'Disabled' },
  readonly: { value: 'Read only' },
  required: { helperText: 'Required field' },
  loading: { value: 'Saving…' },
  linearLoading: { loading: true, value: 'Saving…' },
  skeleton: {},
  shake: { validationState: 'error', errorText: 'Something is wrong' },
  shakeOnError: { validationState: 'error', errorText: 'Something is wrong' },
  successPulse: { validationState: 'success', successText: 'Saved' },
  dirtyTracking: { value: 'Edited value' },
  rtl: { value: 'مرحبا بالعالم' },
  dropZone: { type: 'file', helperText: 'Drop files here' },
  multiple: { type: 'file', helperText: 'Select several files' },
  prefixClickable: { prefixText: '@', value: 'alex' },
  suffixClickable: { suffixText: '.com', value: 'example' },
  highlightMatches: { value: 'Alex', helperText: 'Matches are highlighted' },
  floatingLabel: { value: 'Alex Johnson' },
  alwaysFloated: { value: '' },
};

const VALIDATION_MESSAGES: Record<string, Record<string, unknown>> = {
  none: { value: 'alex@example.com' },
  error: { value: 'not-an-email', errorText: 'Enter a valid email address' },
  warning: { value: 'alex@example', warningText: 'Looks incomplete' },
  success: { value: 'alex@example.com', successText: 'Email verified' },
  info: { value: 'alex@example.com', infoText: 'We never share your email' },
  dirty: { value: 'edited@example.com', dirtyTracking: true },
  loading: { value: 'alex@example.com', loading: true },
};

const COVER_IMAGE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#38bdf8"/><stop offset="1" stop-color="#8b5cf6"/></linearGradient></defs><rect width="640" height="360" fill="url(#g)"/></svg>'
  );

/** A card with no content shows only a title, so every card gets text; a few props also need extra content to be visible. */
const CARD_CONTEXT: Record<string, Record<string, unknown>> = {
  pattern: { tag: 'New', buttonText: 'View', cover: COVER_IMAGE },
  layout: { cover: COVER_IMAGE, width: '380px' },
  aspectRatio: { cover: COVER_IMAGE },
  ribbonPosition: { ribbon: 'New' },
  ribbonColor: { ribbon: 'New' },
  flipTrigger: { flippable: true, description: 'Click or hover the card to flip it' },
  shape: { width: '200px', height: '200px' },
  displayMode: { cover: COVER_IMAGE, collapsible: true },
  importance: { buttonText: 'Action' },
  type: { buttonText: 'Action' },
};

const CARD_FLAG_CONTEXT: Record<string, Record<string, unknown>> = {
  collapsible: { collapsible: true },
  collapsed: { collapsible: true },
  closable: { closable: true },
  flippable: { flippable: true, description: 'Click the card to flip it' },
  flipped: { flippable: true },
  selectable: { selectable: true },
  selected: { selectable: true },
  showMenu: { menuActions: 'Edit,Share,Delete' },
  clickable: { description: 'The whole card is clickable' },
  hoverable: { description: 'Hover to lift the card' },
  tilt: { description: 'Move the pointer over the card' },
  magnetic: { description: 'Move the pointer near the card' },
  glass: { cover: COVER_IMAGE },
  loading: {},
  bordered: {},
};

const STAR_IMAGE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#f59e0b" d="M12 2l3 7 7 .6-5.3 4.7 1.7 7.2L12 17.8 5.6 21.5l1.7-7.2L2 9.6 9 9z"/></svg>');

/** A name that exists in each icon library. */
const ICON_NAMES: Record<string, string> = {
  lucide: 'star',
  fontawesome: 'fa-solid fa-star',
  ionicons: 'star-outline',
  bootstrap: 'star',
  remixicon: 'star-line',
  google: 'star',
  icons8: 'star',
  iconoir: 'star',
  emoji: '⭐',
};

export const VARIANT_RULES: Record<string, VariantRules> = {
  // The filter / column panels are fixed overlays: a "true" variant would sit open over the whole page on load
  'advanced-data-table': {
    skip: ['showFilterPanel', 'showColumnPanel'],
  },
  icon: {
    base: { name: 'star', library: 'lucide', size: 32 },
    skip: ['label'],
    options: { library: Object.keys(ICON_NAMES) },
    context: (prop, value) => (prop === 'library' ? { name: ICON_NAMES[String(value)] ?? 'star' } : undefined),
    extras: [
      {
        key: 'extra-size',
        title: 'Sizes',
        description: 'The size prop takes a number (pixels) or any CSS length.',
        items: [12, 16, 24, 32, 48, 64].map((n) => ({ label: `size="${n}"`, props: { size: n } })),
      },
      {
        key: 'extra-color',
        title: 'Colors',
        description: 'The color prop accepts any CSS color; without it the icon inherits the text color.',
        items: ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#0ea5e9'].map((c) => ({ label: c, props: { color: c } })),
      },
      {
        key: 'extra-fill',
        title: 'Outline and filled',
        description: 'fill paints the inside of the shape (lucide and google).',
        items: [
          { label: 'no fill', props: { name: 'heart', color: '#ef4444' } },
          { label: 'fill="#ef4444"', props: { name: 'heart', color: '#ef4444', fill: '#ef4444' } },
          { label: 'fill="#fde68a"', props: { name: 'star', color: '#f59e0b', fill: '#fde68a' } },
        ],
      },
      {
        key: 'extra-motion',
        title: 'Spin and loading',
        description: 'spin rotates any icon; loading shows the small built-in loader instead.',
        items: [
          { label: 'static', props: { name: 'refresh-cw' } },
          { label: 'spin', props: { name: 'refresh-cw', spin: true } },
          { label: 'loading', props: { name: 'refresh-cw', loading: true } },
        ],
      },
      {
        key: 'extra-emoji',
        title: 'Emoji',
        description: 'library="emoji" renders the name as an emoji.',
        items: ['🚀', '🎉', '❤️', '🔥'].map((e) => ({ label: e, props: { library: 'emoji', name: e } })),
      },
      {
        key: 'extra-image',
        title: 'Image source',
        description: 'src renders an image instead of a named icon.',
        items: [{ label: 'src="…"', props: { src: STAR_IMAGE, name: undefined } }],
      },
    ],
  },
  card: {
    base: { cardTitle: 'Card title', description: 'A short supporting description for this card.', width: '260px' },
    skip: ['iconLibrary', 'scrollBehavior', 'target', 'coverAlt'],
    context: (prop) => CARD_CONTEXT[prop],
  },
  input: {
    base: { label: 'Email', placeholder: 'name@example.com' },
    skip: ['enterkeyhint', 'inputmode', 'autoCapitalize', 'validationTrigger', 'resize'],
    options: {
      type: ['text', 'password', 'email', 'number', 'tel', 'search', 'date', 'datetime-local', 'month', 'color', 'range', 'currency', 'otp', 'pin', 'file'],
      size: ['xs', 'sm', 'md', 'lg', 'xl'],
      variant: ['outlined', 'filled', 'underlined', 'borderless', 'soft', 'glass', 'gradient', 'flat', 'elevated'],
      validationState: ['none', 'error', 'warning', 'success', 'info', 'dirty', 'loading'],
      statusIndicator: ['online', 'away', 'offline', 'typing', 'listening'],
      textTransform: ['none', 'uppercase', 'lowercase', 'capitalize', 'words', 'sentences'],
      prefixColor: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
      suffixColor: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
    },
    context: (prop, value) => {
      const v = String(value);
      switch (prop) {
        case 'type':
          return { label: v, ...(TYPE_SAMPLES[v] ?? {}) };
        case 'mask':
          return { label: v === 'none' ? 'No mask' : v, value: MASK_SAMPLES[v] ?? 'Alex Johnson' };
        case 'validationState':
          return { label: 'Email', ...(VALIDATION_MESSAGES[v] ?? {}) };
        case 'statusIndicator':
          return { label: 'Teammate', value: 'Alex Johnson' };
        case 'textTransform':
          return { label: 'Title', value: 'hello design world' };
        case 'prefixColor':
          return { label: 'Amount', prefixText: '$', value: '120' };
        case 'suffixColor':
          return { label: 'Website', suffixText: '.com', value: 'example' };
        case 'color':
        case 'variant':
        case 'size':
        case 'density':
          return { label: 'Name', value: 'Alex Johnson', helperText: 'Helper text' };
        default:
          return undefined;
      }
    },
  },
};

const TREE_OPTIONS = [
  {
    value: 'root',
    label: 'Root',
    children: [
      { value: 'documents', label: 'Documents', children: [{ value: 'doc1', label: 'Report.pdf' }, { value: 'doc2', label: 'Slides.pptx' }] },
      { value: 'images', label: 'Images', children: [{ value: 'img1', label: 'Photo1.jpg' }] },
    ],
  },
];

/** Dropdown flags need a selection (or a tree) before they change anything visible. */
const DROPDOWN_FLAG_CONTEXT: Record<string, Record<string, unknown>> = {
  cascading: { options: TREE_OPTIONS, value: 'doc1', placeholder: 'Browse files' },
  expandAll: { options: TREE_OPTIONS, cascading: true, multiSelect: true, value: 'doc1,img1' },
  showPath: { options: TREE_OPTIONS, cascading: true, value: 'doc1' },
  chipView: { multiSelect: true, value: 'us,uk,ca' },
  multiSelect: { value: 'us,uk' },
  showSelectAll: { multiSelect: true, value: 'us' },
  clearable: { value: 'us' },
  invalid: { value: '', errorMessage: 'Please choose a country' },
  loading: { value: '' },
  skeleton: { value: '' },
  caseSensitive: { searchable: true, helperText: 'Open the menu and type to search' },
  searchable: { helperText: 'Open the menu and type to search' },
  disabled: { value: 'us' },
  rtl: { value: 'us' },
};

/** Companion props for a boolean flag card. */
export const flagContext = (compId: string, flag: string): Record<string, unknown> | undefined => {
  if (compId === 'input') return { label: 'Name', value: 'Alex Johnson', ...(FLAG_CONTEXT[flag] ?? {}) };
  if (compId === 'card') return CARD_FLAG_CONTEXT[flag];
  if (compId === 'dropdown') return { fullWidth: true, value: 'us', ...(DROPDOWN_FLAG_CONTEXT[flag] ?? {}) };
  return undefined;
};
