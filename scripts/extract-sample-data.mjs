// Builds src/data/sampleData.json: real example values for each component's complex props,
// taken from the recorded demos (`el.items = [...]` style assignments).
import fs from 'fs';
import vm from 'vm';

const demos = JSON.parse(fs.readFileSync('src/data/demos.json', 'utf8'));
const src = fs.readFileSync('src/data/components.ts', 'utf8');
const json = src.slice(src.indexOf('= [') + 2, src.indexOf('];\n\nexport const CATEGORIES') + 1);
const comps = JSON.parse(json.replace(/(\n\s*)([A-Za-z_]\w*):/g, '$1"$2":'));

const DEMO_KEYS = {
  button: ['button', 'split-button'],
  'dialog-box': ['dialog', 'smart-dialog'],
  'aside-panel': ['aside'],
  'smart-context-menu': ['multi-level-context-menu', 'smart-menu'],
  dropdown: ['dropdown', 'dropdown-subtitle'],
};

/** Returns the balanced [...] or {...} literal that starts at `start`. */
function literalAt(text, start) {
  const open = text[start];
  const close = open === '[' ? ']' : '}';
  let depth = 0;
  let str = null;
  for (let i = start; i < text.length; i++) {
    const c = text[i];
    if (str) {
      if (c === '\\') i++;
      else if (c === str) str = null;
    } else if (c === '"' || c === "'" || c === '`') str = c;
    else if (c === open) depth++;
    else if (c === close && --depth === 0) return text.slice(start, i + 1);
  }
  return null;
}

const isComplex = (p) =>
  !p.readonly && !/^(string|number|boolean)$/.test(p.type) && !(p.options && p.options.length) && !p.type.includes('=>');
const out = {};

/** Evaluates a JS literal in an empty sandbox; returns undefined when it is dynamic or empty. */
function evalLiteral(lit) {
  if (!lit || lit.length > 8000) return undefined;
  try {
    const v = vm.runInNewContext('(' + lit + ')', { Date, Math }, { timeout: 100 });
    const s = JSON.parse(JSON.stringify(v));
    return s && (Array.isArray(s) ? s.length : Object.keys(s).length) ? s : undefined;
  } catch {
    return undefined; /* dynamic data that cannot be evaluated standalone */
  }
}

/** Extracts every requested prop from ONE script, so related values (columns + data) stay consistent. */
function extractFromScript(code, propNames) {
  const found = {};
  for (const name of propNames) {
    const direct = new RegExp('\\.' + name + '\\s*=\\s*(?=[\\[{])', 'g');
    let m;
    while (found[name] === undefined && (m = direct.exec(code))) {
      found[name] = evalLiteral(literalAt(code, m.index + m[0].length));
    }
    if (found[name] !== undefined) continue;
    const ref = new RegExp('\\.' + name + '\\s*=\\s*([A-Za-z_$][\\w$]*)\\s*[;,\\n]', 'g');
    let r;
    while (found[name] === undefined && (r = ref.exec(code))) {
      const decl = new RegExp('(?:const|let|var)\\s+' + r[1] + '\\s*=\\s*(?=[\\[{])').exec(code);
      if (decl) found[name] = evalLiteral(literalAt(code, decl.index + decl[0].length));
    }
  }
  return Object.fromEntries(Object.entries(found).filter(([, v]) => v !== undefined));
}

for (const c of comps) {
  const complex = c.props.filter(isComplex);
  if (!complex.length) continue;
  const names = complex.map((p) => p.name);
  const keys = DEMO_KEYS[c.id] ?? [c.id];
  const demoList = keys.flatMap((k) => demos[k] ?? []);

  // Pick the demo script that supplies the most props (prefer ones that include the main data prop).
  let best = {};
  let bestScore = 0;
  for (const d of demoList) {
    for (const m of d.html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)) {
      const got = extractFromScript(m[1], names);
      const score = Object.keys(got).length * 10 + (got.data || got.items || got.nodes || got.options ? 5 : 0);
      if (score > bestScore) {
        best = got;
        bestScore = score;
      }
    }
  }

  // Attribute form (prop-name='[...]') when no script supplied anything.
  if (!Object.keys(best).length) {
    for (const p of complex) {
      const attr = p.attr || p.name.replace(/([A-Z])/g, '-$1').toLowerCase();
      const are = new RegExp('\\s' + attr + "=(?:'([^']*)'|\"([^\"]*)\")", 'g');
      for (const d of demoList) {
        let a;
        while (best[p.name] === undefined && (a = are.exec(d.html))) {
          const raw = (a[1] ?? a[2]).replace(/&quot;/g, '"').replace(/&#39;/g, "'").trim();
          if (/^[[{]/.test(raw)) best[p.name] = evalLiteral(raw);
        }
        if (best[p.name] !== undefined) break;
      }
    }
  }
  if (Object.keys(best).length) out[c.id] = best;
}

// Hand-written fallbacks (shapes follow the library's TypeScript interfaces) for data the demos load dynamically.
const MANUAL = {
  avatar: { avatars: [{ alt: 'Ada Lovelace', content: 'AL' }, { alt: 'Alan Turing', content: 'AT' }, { alt: 'Grace Hopper', content: 'GH' }] },
  'avatar-group': { avatars: [{ alt: 'Ada Lovelace', content: 'AL' }, { alt: 'Alan Turing', content: 'AT' }, { alt: 'Grace Hopper', content: 'GH' }] },
  'button-toggle-group': { options: [{ value: 'day', label: 'Day' }, { value: 'week', label: 'Week' }, { value: 'month', label: 'Month' }] },
  'toggle-group': { options: [{ value: 'a', label: 'Option A' }, { value: 'b', label: 'Option B' }, { value: 'c', label: 'Option C' }] },
  'code-preview': {
    snippets: [
      { language: 'html', label: 'HTML', code: '<ui-button label="Save"></ui-button>' },
      { language: 'javascript', label: 'JS', code: "document.querySelector('ui-button').addEventListener('buttonClick', () => console.log('clicked'));" },
    ],
  },
  'empty-state': {
    actions: [{ label: 'Create item', value: 'create', variant: 'primary' }, { label: 'Learn more', value: 'docs', variant: 'text' }],
    items: [{ icon: 'file', label: 'Import a file', value: 'import' }, { icon: 'plus', label: 'Start from scratch', value: 'new' }],
  },
  'multi-cascading-dropdown': {
    options: [
      { label: 'Europe', value: 'eu', children: [{ label: 'Germany', value: 'de' }, { label: 'France', value: 'fr' }] },
      { label: 'Asia', value: 'as', children: [{ label: 'Japan', value: 'jp' }, { label: 'India', value: 'in' }] },
    ],
  },
  'smart-location-dropdown': {
    options: [
      { value: 'us', label: 'United States', type: 'country' },
      { value: 'us-ny', label: 'New York', type: 'city', path: 'United States / New York' },
      { value: 'jp', label: 'Japan', type: 'country' },
    ],
  },
  splitter: { panels: [{ size: 30, minSize: 10, collapsible: true }, { size: 70 }], sizes: [30, 70] },
  'resizable-panel': { panels: [{ id: 'one', size: 40, minSize: 10 }, { id: 'two', size: 60 }] },
  toolbar: {
    items: [
      { type: 'button', id: 'new', label: 'New', icon: 'plus' },
      { type: 'button', id: 'save', label: 'Save', icon: 'save', variant: 'outline' },
      { type: 'separator' },
      { type: 'button', id: 'share', label: 'Share', icon: 'share' },
    ],
  },
  'transfer-list': {
    sourceItems: [{ key: '1', label: 'Alpha' }, { key: '2', label: 'Beta' }, { key: '3', label: 'Gamma' }, { key: '4', label: 'Delta' }],
    targetItems: [{ key: '5', label: 'Epsilon' }],
  },
  'top-bar': {
    userMenuItems: [{ id: 'profile', label: 'Profile', icon: 'user' }, { id: 'settings', label: 'Settings', icon: 'settings' }, { id: 'out', label: 'Sign out', icon: 'log-out', divider: true }],
  },
  'navigation-bar': {
    items: [
      { id: 'home', label: 'Home', icon: 'home' },
      { id: 'search', label: 'Search', icon: 'search' },
      { id: 'inbox', label: 'Inbox', icon: 'mail' },
    ],
    bottomItems: [{ id: 'settings', label: 'Settings', icon: 'settings' }],
  },
  'aside-panel': { actionItems: [{ label: 'Pin', icon: 'pin' }, { label: 'Close', icon: 'x' }] },
  'dialog-header': { menuItems: [{ label: 'Rename', icon: 'pencil' }, { label: 'Delete', icon: 'trash' }] },
  pagination: { pageSizes: [10, 25, 50, 100] },
  'tag-group': { value: ['Design', 'Code'] },
  'code-editor': { tabs: [{ title: 'index.html', language: 'html', content: '<h1>Hello</h1>' }, { title: 'app.js', language: 'javascript', content: "console.log('hi');" }] },
  anchor: {
    items: [
      { id: 'intro', label: 'Introduction', href: '#intro' },
      { id: 'install', label: 'Installation', href: '#install' },
      { id: 'usage', label: 'Usage', href: '#usage' },
      { id: 'api', label: 'API', href: '#api' },
    ],
  },
  'drag-drop': {
    items: [
      { id: '1', label: 'Design review', description: 'Wireframes and mockups' },
      { id: '2', label: 'Build feature', description: 'Implementation' },
      { id: '3', label: 'Write tests', description: 'Unit and e2e' },
      { id: '4', label: 'Ship', description: 'Release to production' },
    ],
  },
  tree: {
    nodes: [
      { id: '1', label: 'Root Folder', expanded: true, children: [
        { id: '1-1', label: 'Documents', children: [
          { id: '1-1-1', label: 'Resume.pdf', icon: 'file-pdf', color: 'danger' },
          { id: '1-1-2', label: 'CoverLetter.doc', icon: 'file-word', color: 'primary' } ] },
        { id: '1-2', label: 'Pictures', children: [{ id: '1-2-1', label: 'Vacation.jpg', icon: 'image', color: 'success' }] },
        { id: '1-3', label: 'Music', icon: 'music', color: 'info' } ] },
    ],
  },
  timeline: {
    events: [
      { id: '1', label: 'Order placed', description: 'Your order was received', date: '2026-01-02', status: 'completed' },
      { id: '2', label: 'Packed', description: 'Items packed at warehouse', date: '2026-01-03', status: 'completed' },
      { id: '3', label: 'Shipped', description: 'On the way', date: '2026-01-04', status: 'active' },
      { id: '4', label: 'Delivered', description: 'Expected soon', date: '2026-01-06', status: 'pending' },
    ],
  },
  'workspace-manager': {
    regions: [
      { id: 'left', title: 'Explorer', size: 20, minSize: 10, collapsible: true },
      { id: 'center', title: 'Editor', size: 55 },
      { id: 'right', title: 'Inspector', size: 25, collapsible: true },
    ],
  },
  'top-bar': {
    actions: [
      { id: 'search', icon: 'search', label: 'Search' },
      { id: 'bell', icon: 'bell', label: 'Notifications', badge: '3' },
      { id: 'help', icon: 'help-circle', label: 'Help' },
    ],
  },
  'command-palette': {
    commands: [
      { id: 'new', label: 'New File', shortcut: 'Ctrl+N', group: 'File', icon: 'file-plus' },
      { id: 'open', label: 'Open…', shortcut: 'Ctrl+O', group: 'File', icon: 'folder-open' },
      { id: 'save', label: 'Save', shortcut: 'Ctrl+S', group: 'File', icon: 'save' },
      { id: 'theme', label: 'Toggle Theme', group: 'View', icon: 'moon' },
    ],
  },
  'meter-group': {
    values: [
      { label: 'Apps', value: 16, color: '#34d399' },
      { label: 'Messages', value: 8, color: '#fbbf24' },
      { label: 'Media', value: 24, color: '#60a5fa' },
      { label: 'System', value: 10, color: '#f472b6' },
    ],
  },
  'horizontal-nav': {
    items: [
      { id: 'home', label: 'Home', icon: 'home', active: true },
      { id: 'products', label: 'Products', icon: 'package' },
      { id: 'pricing', label: 'Pricing', icon: 'tag', badge: 'New' },
      { id: 'about', label: 'About', icon: 'info', disabled: true },
    ],
  },
  'context-menu': {
    items: [
      { label: 'Cut', icon: 'scissors', shortcut: 'Ctrl+X' },
      { label: 'Copy', icon: 'copy', shortcut: 'Ctrl+C' },
      { label: 'Paste', icon: 'clipboard', shortcut: 'Ctrl+V' },
      { type: 'separator' },
      { label: 'Delete', icon: 'trash', variant: 'danger' },
    ],
  },
};
for (const [id, props] of Object.entries(MANUAL)) {
  const comp = comps.find((c) => c.id === id);
  if (!comp) continue;
  for (const [name, value] of Object.entries(props)) {
    if (comp.props.some((p) => p.name === name)) (out[id] ??= {})[name] ??= value;
  }
}
// Older demos use outdated shapes; convert them to what the library's types require.
const NORMALIZE = {
  'advanced-data-table': {
    // TableColumn needs `id` and `label`; demos used `header` and numeric widths
    columns: (cols) =>
      cols.map((c) => {
        const { header, flex, width, ...rest } = c;
        const out = { ...rest, id: c.id ?? c.field, label: c.label ?? header ?? c.field };
        if (width !== undefined) out.width = typeof width === 'number' ? width + 'px' : width;
        return out;
      }),
  },
};
for (const [id, fns] of Object.entries(NORMALIZE)) {
  for (const [name, fn] of Object.entries(fns)) if (out[id]?.[name]) out[id][name] = fn(out[id][name]);
}

// Props whose demo data switches the component into a special mode (e.g. `steps` turns a dialog into a wizard)
const EXCLUDE = { 'dialog-box': ['steps'] };
for (const [id, names] of Object.entries(EXCLUDE)) names.forEach((n) => out[id] && delete out[id][n]);
fs.writeFileSync('src/data/sampleData.json', JSON.stringify(out, null, 1));
console.log(Object.keys(out).length, 'components with sample data');
for (const [k, v] of Object.entries(out)) console.log(k, Object.keys(v).join(','));
