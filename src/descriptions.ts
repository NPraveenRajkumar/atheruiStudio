export const componentDescriptions: Record<string, string> = {
  'ui-button': 'An interactive button component that can trigger an action or event.',
  'ui-input': 'A text input field for users to enter data.',
  'ui-card': 'A container for grouping related content and actions.',
  'ui-badge': 'A small status descriptor for UI elements.',
  'ui-tabs': 'A set of tabs to organize and navigate between different views.',
  'ui-dialog': 'A modal dialog for important prompts and user decisions.',
  'ui-dropdown': 'A toggleable menu that displays a list of choices.',
  'ui-list': 'A container for grouping list items.',
  'ui-list-item': 'An individual item within a list.',
  'ui-step': 'A single step in a step-by-step process.',
  'ui-dialog-header': 'The header section of a dialog.',
  'ui-dialog-content': 'The main content area of a dialog.',
  'ui-dialog-footer': 'The footer section of a dialog, typically containing action buttons.',
  'ui-fab-item': 'An item within a floating action button menu.',
  'ui-navigation-item': 'A link or button used for navigation.',
  'ui-breadcrumb-item': 'A segment within a breadcrumb trail.',
  // Add other components as needed
};

export const propDescriptions: Record<string, Record<string, string>> = {
  'ui-button': {
    'variant': 'The visual style variant of the button (e.g., primary, secondary).',
    'size': 'The size of the button (e.g., small, medium, large).',
    'disabled': 'Whether the button is disabled and cannot be interacted with.',
  },
  'ui-input': {
    'value': 'The current value of the input.',
    'placeholder': 'The placeholder text shown when the input is empty.',
    'disabled': 'Whether the input is disabled.',
  },
  'ui-card': {
    'elevation': 'The shadow depth of the card.',
  },
  'ui-badge': {
    'color': 'The background color of the badge.',
  },
  'ui-tabs': {
    'activeTab': 'The currently active tab index or ID.',
  },
  'ui-dialog': {
    'open': 'Whether the dialog is currently visible.',
  },
  'ui-dropdown': {
    'open': 'Whether the dropdown menu is currently visible.',
  }
};
