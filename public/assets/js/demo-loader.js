// Demo Loader - Dynamically loads component demos
const demoModules = {
  'accordion': () => import('/app-ui/assets/js/demos/accordion-demo.js'),
  'nav-bar': () => import('/app-ui/assets/js/demos/nav-bar-demo.js'),
  'aside-panel': () => import('/app-ui/assets/js/demos/aside-panel-demo.js'),
  'tabs': () => import('/app-ui/assets/js/demos/tabs-demo.js'),
  'dialog': () => import('/app-ui/assets/js/demos/dialog-demo.js?v=20'),
  'drag-drop': () => import('/app-ui/assets/js/demos/drag-drop-demo.js'),
  'fab': () => import('/app-ui/assets/js/demos/fab-demo.js'),
  'snackbar': () => import('/app-ui/assets/js/demos/snackbar-demo.js'),
  'divider': () => import('/app-ui/assets/js/demos/divider-demo.js'),
  'Divider': () => import('/app-ui/assets/js/demos/divider-demo.js'),
  'stepper': () => import('/app-ui/assets/js/demos/stepper-demo.js'),
  'dock-host': () => import('/app-ui/assets/js/demos/dock-host-init.js'),

  'card': () => import('/app-ui/assets/js/demos/card-demo.js'),
  'carousel': () => import('/app-ui/assets/js/demos/carousel-demo.js'),
  'callout-banner': () => import('/app-ui/assets/js/demos/callout-banner-demo.js'),

  'panel': () => import('/app-ui/assets/js/demos/panel-demo.js'),
  'avatar': () => import('/app-ui/assets/js/demos/avatar-demo.js'),
  'avatar-group': () => import('/app-ui/assets/js/demos/avatar-demo.js'),
  'chip': () => import('/app-ui/assets/js/demos/chip-demo.js'),
  'badge': () => import('/app-ui/assets/js/demos/badge-demo.js'),
  'tag': () => import('/app-ui/assets/js/demos/tag-demo.js'),
  'pill': () => import('/app-ui/assets/js/demos/pill-demo.js'),
  'meter-group': () => import('/app-ui/assets/js/demos/meter-group-demo.js'),
  'scroll-top': () => import('/app-ui/assets/js/demos/scroll-top-demo.js'),
  'rating': () => import('/app-ui/assets/js/demos/rating-demo.js'),
  'speed-dial': () => import('/app-ui/assets/js/demos/speed-dial-demo.js'),
  'context-menu': () => import('/app-ui/assets/js/demos/context-menu-demo.js'),
  'smart-menu': () => import('/app-ui/assets/js/demos/smart-menu-demo.js'),
  'smart-stepper': () => import('/app-ui/assets/js/demos/smart-stepper-demo.js'),
  'advanced-data-table': () => import('/app-ui/assets/js/demos/advanced-data-table-demo.js'),
  'cascade-select': () => import('/app-ui/assets/js/demos/cascade-select-demo.js'),
  'range-slider': () => import('/app-ui/assets/js/demos/range-slider-demo.js'),
  'transfer-list': () => import('/app-ui/assets/js/demos/transfer-list-demo.js?v=2'),
  'tree': () => import('/app-ui/assets/js/demos/tree-demo.js'),
  'tree-list': () => import('/app-ui/assets/js/demos/tree-demo.js'),
  'pagination': () => import('/app-ui/assets/js/demos/pagination-demo.js'),
  'skeleton': () => import('/app-ui/assets/js/demos/skeleton-demo.js'),
  'timeline': () => import('/app-ui/assets/js/demos/timeline-demo.js'),
  'top-bar': () => import('/app-ui/assets/js/demos/top-bar-demo.js'),
  'progress': () => import('/app-ui/assets/js/demos/progress-demo.js'),
  'dock': () => import('/app-ui/assets/js/demos/dock-demo.js'),
  'dropdown': () => import('/app-ui/assets/js/demos/dropdown-demo.js'),
  'smart-location-dropdown': () => import('/app-ui/assets/js/demos/smart-location-dropdown-demo.js'),
  'popover': () => import('/app-ui/assets/js/demos/popover-demo.js'),
  'speedometer': () => import('/app-ui/assets/js/demos/speedometer-demo.js'),
  'anchor': () => import('/app-ui/assets/js/demos/anchor-demo.js'),
  'theme-selector': () => import('/app-ui/assets/js/demos/theme-selector-demo.js'),
  'breadcrumb': () => import('/app-ui/assets/js/demos/breadcrumb-demo.js'),
  'horizontal-nav': () => import('/app-ui/assets/js/demos/horizontal-nav-demo.js'),
  'knob': () => import('/app-ui/assets/js/demos/knob-demo.js'),
  'chart': () => import('/app-ui/assets/js/demos/chart-demo.js'),
  'layout-manager': () => import('/app-ui/assets/js/demos/layout-manager-demo.js'),
  'workspace-manager': () => import('/app-ui/assets/js/demos/workspace-manager-demo.js'),
  'button': () => import('/app-ui/assets/js/demos/button-demo.js'),
  'switch': () => import('/app-ui/assets/js/demos/switch-demo.js?v=30'),
  'bar-chart': () => import('/app-ui/assets/js/demos/bar-chart-demo.js'),
  'pattern-input': () => import('/app-ui/assets/js/demos/pattern-input-demo.js'),
  'number-input': () => import('/app-ui/assets/js/demos/number-input-demo.js'),
  'color-picker': () => import('/app-ui/assets/js/demos/color-picker-demo.js'),
  'file-upload': () => import('/app-ui/assets/js/demos/file-upload-demo.js'),
  'command-palette': () => import('/app-ui/assets/js/demos/command-palette-demo.js'),
  'timer': () => import('/app-ui/assets/js/demos/timer-demo.js'),
  'stack': () => import('/app-ui/assets/js/demos/stack-demo.js'),
  'about': () => import('/app-ui/assets/js/demos/about-demo.js'),
  'empty-state': () => import('/app-ui/assets/js/demos/empty-state-demo.js?v=3'),
  'loader': () => import('/app-ui/assets/js/demos/loader-demo.js'),
  'my-profile': () => import('/app-ui/assets/js/demos/my-profile-demo.js'),
  'icon': () => import('/app-ui/assets/js/demos/icon-demo.js'),
  'code-preview': () => import('/app-ui/assets/js/demos/code-preview-demo.js'),
  'input': () => import('/app-ui/assets/js/demos/input-demo.js'),
  'checkbox': () => import('/app-ui/assets/js/demos/checkbox-demo.js'),
  'radio': () => import('/app-ui/assets/js/demos/radio-demo.js'),
  'animate-on-scroll': () => import('/app-ui/assets/js/demos/animate-on-scroll-demo.js'),
  'list': () => import('/app-ui/assets/js/demos/list-demo.js'),
  'button-toggle': () => import('/app-ui/assets/js/demos/button-toggle-demo.js?v=1'),
  'tooltip': () => import('/app-ui/assets/js/demos/tooltip-demo.js'),
  'toggle-group': () => import('/app-ui/assets/js/demos/switch-demo.js?v=30'),
  'button-group': () => import('/app-ui/assets/js/demos/button-demo.js'),
  'home': () => import('/app-ui/assets/js/demos/home-demo.js'),
  'toolbar': () => import('/app-ui/assets/js/demos/toolbar-demo.js'),
  'dashboard': () => import('/app-ui/assets/js/demos/dashboard-demo.js'),
  'documentation': () => import('/app-ui/assets/js/demos/documentation-demo.js'),
  'overview': () => import('/app-ui/assets/js/demos/overview-demo.js'),
  'complex-form': () => import('/app-ui/assets/js/demos/complex-form-demo.js'),
  'dropdown-subtitle': () => import('/app-ui/assets/js/demos/dropdown-subtitle-demo.js'),
  'masonry': () => import('/app-ui/assets/js/demos/masonry-demo.js'),
  'label': () => import('/app-ui/assets/js/demos/label-demo.js'),
};

const loadedDemos = new Set();

export async function loadDemo(sectionId) {
  // Ensure sectionId is a string and handle potential Symbol issues
  let safeSectionId;
  try {
    safeSectionId = String(sectionId);
  } catch (e) {
    console.error('loadDemo: Critical error converting sectionId to string', e);
    return false;
  }

  // Skip if already loaded
  if (loadedDemos.has(safeSectionId)) {
    return true;
  }

  const loader = demoModules[safeSectionId];
  if (!loader) {
    console.warn('No demo loader found for category/id:', safeSectionId);
    return false;
  }

  try {
    const module = await loader();
    const funcName = `init${kebabToPascal(safeSectionId)}Demo`;
    const initFunction = module[funcName];

    if (initFunction) {
      initFunction();
      loadedDemos.add(safeSectionId);
      return true;
    } else {
      console.error('Init function', funcName, 'not found in the loaded module for:', safeSectionId);
      return false;
    }
  } catch (error) {
    console.error('Failed to load demo section:', safeSectionId, error);
    return false;
  }
}

// Helper to convert kebab-case to PascalCase
function kebabToPascal(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Preload critical demos
export async function preloadCriticalDemos() {
  const critical = ['accordion', 'nav-bar', 'dialog'];
  await Promise.all(critical.map(id => loadDemo(id)));
}
