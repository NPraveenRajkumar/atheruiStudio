import type { DocArticle } from './docs';

/**
 * Task-sized guides. Every prop, event and method named here exists on the component (checked against the catalog
 * and the demos); snippets use plain HTML plus the property/event patterns from "Props, Events, Methods & Slots".
 */
export const RECIPES: DocArticle[] = [
  {
    id: 'recipe-signin-form',
    category: 'Recipes',
    title: 'Recipe: A sign-in form',
    summary: 'Native form submission, built-in validation, a loading button and server-side error messages.',
    readTime: '4 min read',
    body: [
      { p: 'The input, checkbox and button are **form-associated**, so they behave like native controls: they appear in `FormData`, take part in `checkValidity()`, and a `type="submit"` button submits the form.' },
      { h: 'The markup' },
      { code: '<form id="signin" novalidate>\n  <ui-input name="email" type="email" label="Email" required></ui-input>\n  <ui-input name="password" type="password" label="Password" required></ui-input>\n  <ui-checkbox name="remember" label="Keep me signed in"></ui-checkbox>\n  <ui-button type="submit" label="Sign in" color="primary"></ui-button>\n</form>', title: 'index.html' },
      { h: 'Validate, submit, show the result' },
      { code: "const form = document.getElementById('signin');\nconst button = form.querySelector('ui-button');\n\nform.addEventListener('submit', async (event) => {\n  event.preventDefault();\n  if (!form.checkValidity()) {\n    form.reportValidity(); // highlights the first invalid field\n    return;\n  }\n\n  const { email, password, remember } = Object.fromEntries(new FormData(form));\n  button.loading = true;\n  try {\n    await signIn(email, password, remember === 'on'); // your API call\n    location.href = '/dashboard';\n  } catch (error) {\n    // Server-side problems use the same fields the browser uses for its own checks\n    const field = form.querySelector('ui-input[name=\"password\"]');\n    field.validationState = 'error';\n    field.errorText = 'That email and password do not match.';\n  } finally {\n    button.loading = false;\n  }\n});", title: 'sign-in.js' },
      { note: 'The checkbox only appears in `FormData` while it is checked, and its value is `on` unless you set one. Test with the same `Object.fromEntries(new FormData(form))` call you use in production.' },
      { h: 'In React' },
      { p: 'Attach the event with a ref (this works in React 18 and 19). The elements keep their own state, so read values from the form on submit instead of mirroring every keystroke.' },
      { code: "import { useRef } from 'react';\n\nexport function SignIn() {\n  const form = useRef<HTMLFormElement>(null);\n\n  const onSubmit = (e: React.FormEvent) => {\n    e.preventDefault();\n    if (!form.current?.checkValidity()) return form.current?.reportValidity();\n    const values = Object.fromEntries(new FormData(form.current));\n    signIn(values);\n  };\n\n  return (\n    <form ref={form} onSubmit={onSubmit} noValidate>\n      <ui-input name=\"email\" type=\"email\" label=\"Email\" required />\n      <ui-input name=\"password\" type=\"password\" label=\"Password\" required />\n      <ui-button type=\"submit\" label=\"Sign in\" color=\"primary\" />\n    </form>\n  );\n}", title: 'SignIn.tsx' },
      { p: 'See **Forms & Validation** for the full list of form-associated components, and the **ui-input** page for every validation prop.' },
    ],
  },
  {
    id: 'recipe-confirm-dialog',
    category: 'Recipes',
    title: 'Recipe: Confirm before a destructive action',
    summary: 'Open a dialog from a button, react to OK and Cancel, and keep your state in step when it closes.',
    readTime: '3 min read',
    body: [
      { p: '`ui-dialog-box` is controlled by its `open` property. It emits `ok` and `cancel` for the two buttons and `dialogClosed` whenever it closes for any reason (the buttons, Escape, the backdrop).' },
      { code: '<ui-button id="delete" label="Delete project" color="danger"></ui-button>\n\n<ui-dialog-box id="confirm" dialog-title="Delete this project?" ok-text="Delete" cancel-text="Keep">\n  <p>All files and history are removed. This cannot be undone.</p>\n</ui-dialog-box>', title: 'index.html' },
      { code: "const dialog = document.getElementById('confirm');\n\ndocument.getElementById('delete').addEventListener('buttonClick', () => {\n  dialog.open = true;\n});\n\ndialog.addEventListener('ok', async () => {\n  await deleteProject(); // your API call\n  document.querySelector('ui-snackbar')?.add({ title: 'Deleted', message: 'The project was removed.', type: 'success' });\n});\n\n// Closing can come from OK, Cancel, Escape or a click outside, so reset your state here once\ndialog.addEventListener('dialogClosed', () => {\n  dialog.open = false;\n});", title: 'confirm.js' },
      { note: 'Set `open` back to `false` in `dialogClosed`. If you only reset it on OK and Cancel, pressing Escape leaves your state saying the dialog is open and the next click appears to do nothing.', tone: 'warn' },
      { h: 'Accessibility you get for free' },
      { list: ['Focus moves into the dialog and is trapped there, then returns to the button that opened it.', 'Escape closes it (set `closeOnEsc` to `false` for a dialog that must be answered).', 'Give the trigger a clear name, and make the dialog title say what will happen ("Delete this project?", not "Are you sure?").'] },
    ],
  },
  {
    id: 'recipe-data-table',
    category: 'Recipes',
    title: 'Recipe: A sortable, searchable data table',
    summary: 'Define columns, load rows, turn on search, filters and paging, and react to selection.',
    readTime: '4 min read',
    body: [
      { p: '`ui-advanced-data-table` takes its content as **properties**, not attributes: set `columns` and `data` from JavaScript. Each column names the row field it shows and which features apply to it.' },
      { code: '<ui-advanced-data-table id="people"></ui-advanced-data-table>', title: 'index.html' },
      { code: "const table = document.getElementById('people');\n\ntable.columns = [\n  { id: 'name', field: 'name', label: 'Name', sortable: true, width: '180px' },\n  { id: 'email', field: 'email', label: 'Email', sortable: true, width: '220px' },\n  { id: 'department', field: 'department', label: 'Department', sortable: true, filterable: true, width: '140px' },\n  {\n    id: 'salary', field: 'salary', label: 'Salary', sortable: true, width: '110px',\n    format: (value) => '$' + Number(value).toLocaleString('en-US'),\n  },\n];\n\ntable.data = rows; // an array of objects, one per row\n\ntable.sortable = true;\ntable.filterable = true;\ntable.searchable = true;\ntable.pagination = true;\ntable.pageSize = 10;", title: 'table.js' },
      { h: 'Reacting to what people do' },
      { code: "table.addEventListener('rowSelect', (e) => console.log('selected', e.detail));\ntable.addEventListener('sortChange', (e) => console.log('sort', e.detail));\ntable.addEventListener('filterChange', (e) => console.log('filter', e.detail));\ntable.addEventListener('pageChange', (e) => console.log('page', e.detail));", title: 'events.js' },
      { p: 'Log `e.detail` first to see the exact payload for your version, then use the fields you need. The table has about a hundred props (grouping, pinning, tree data, virtual scroll, export), so open the **Advanced Data Table** page to see all of them, or search for one with the palette (⌘K).' },
      { note: 'A large data set works best when you set `data` once and let the table page, sort and filter it. Replacing `data` on every keystroke elsewhere in your app forces the table to start over.' },
    ],
  },
  {
    id: 'recipe-toasts',
    category: 'Recipes',
    title: 'Recipe: Feedback toasts after an action',
    summary: 'One snackbar for the whole app, called from anywhere, with types, stacking and update-in-place.',
    readTime: '3 min read',
    body: [
      { p: 'Keep **one** `ui-snackbar` near the root of your app and call its `add()` method from anywhere. It returns a promise that resolves to the notification id, so you can update or close that exact toast later.' },
      { code: '<ui-snackbar id="toasts" position="bottom-right" max-visible="5"></ui-snackbar>', title: 'index.html' },
      { code: "const toasts = document.getElementById('toasts');\n\n// Success after a save\ntoasts.add({ title: 'Saved', message: 'Your changes are live.', type: 'success' });\n\n// A long task: show progress, then update the same toast when it finishes\nconst id = await toasts.add({ message: 'Uploading...', type: 'loading', duration: 0 });\nawait upload();\ntoasts.update(id, { title: 'Uploaded', message: 'All files are stored.', type: 'success' });", title: 'toasts.js' },
      { list: ['`type` is one of `success`, `error`, `warning`, `info`, `neutral` or `loading`.', 'A `duration` of `0` keeps the toast until you update or close it.', 'It emits `snackbarAdded`, `snackbarUpdated` and `snackbarClosed` if you want to log or react to them.'] },
      { note: 'Call methods only after the element is defined (see **Props, Events, Methods & Slots**). In a framework, do it from an effect or a lifecycle hook, not during the first render.' },
    ],
  },
];
