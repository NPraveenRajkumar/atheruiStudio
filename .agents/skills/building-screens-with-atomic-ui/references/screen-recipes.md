# Screen recipes

Starting points in plain HTML. Translate to the project's framework (JSX, Angular template, Vue), keeping the same tags and props. Item shapes for `items`, `columns`, `actions` and `userMenuItems` are deliberately left as placeholders: read the component file for the exact fields before filling them in.

Wrapper styling uses theme tokens so every recipe follows the active theme and dark mode.

## 1. App shell

```html
<div style="display:grid; grid-template-rows:auto 1fr; height:100vh; background:var(--bg-primary); color:var(--text-primary)">
  <ui-top-bar company-name="Acme" user-name="Jane Doe"></ui-top-bar>
  <div style="display:grid; grid-template-columns:auto 1fr; min-height:0">
    <ui-navigation-bar id="nav" collapsible></ui-navigation-bar>   <!-- nav.items = [...]; nav.activeId = route -->
    <main style="overflow:auto; padding:24px">
      <ui-breadcrumb></ui-breadcrumb>
      <!-- page content -->
    </main>
  </div>
</div>
```

On route change call `nav.setActive(id)`. On small screens, put the navigation in a `ui-aside-panel` opened from a `ui-button` in the top bar rather than hiding it.

## 2. Form screen

```html
<ui-card card-title="Project details">
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; padding:16px">
    <ui-input label="Project name" placeholder="My app"></ui-input>
    <ui-input label="Repository URL"></ui-input>
    <ui-input label="Description" multiline="true" style="grid-column:span 2"></ui-input>
    <ui-dropdown id="env"></ui-dropdown>                        <!-- env.options / items = [...] -->
    <div>
      <ui-label>Environment</ui-label>
      <ui-button-toggle-group value="prod">
        <ui-button-toggle value="dev" label="Development"></ui-button-toggle>
        <ui-button-toggle value="prod" label="Production"></ui-button-toggle>
      </ui-button-toggle-group>
    </div>
    <div style="display:flex; justify-content:space-between; align-items:center; grid-column:span 2">
      <span>Enable telemetry</span><ui-switch checked="true"></ui-switch>
    </div>
  </div>
  <div slot="actions" style="display:flex; gap:12px; justify-content:flex-end">
    <ui-button label="Discard" variant="ghost"></ui-button>
    <ui-button id="save" label="Save" variant="primary"></ui-button>
  </div>
</ui-card>
```

Check `ui-card.md` for which slot names it actually offers before relying on `slot="actions"`. Wrap fields that need helper or error text in `ui-form-control`. On save: set `loading` on the button, then show a `ui-snackbar` on success or a `ui-callout-banner` on failure. Multi-section or long forms read better as `ui-stepper` steps or `ui-tabs`.

## 3. Dashboard

```html
<div style="display:grid; gap:24px">
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:16px">
    <ui-card card-title="Revenue" description="$48,200"></ui-card>     <!-- repeat per KPI -->
    <ui-card card-title="Users" description="3,120"></ui-card>
  </div>
  <div style="display:grid; grid-template-columns:2fr 1fr; gap:16px">
    <ui-card card-title="Recent orders"><ui-advanced-data-table id="orders"></ui-advanced-data-table></ui-card>
    <ui-card card-title="Activity"><ui-timeline id="activity"></ui-timeline></ui-card>
  </div>
  <ui-card card-title="Capacity"><ui-meter-group id="capacity"></ui-meter-group></ui-card>
</div>
```

While data loads, render `ui-skeleton` in each card instead of an empty card. There is no chart component; if the screen needs one, put the project's chart library inside a `ui-card` and say so.

## 4. List and detail

Left: `ui-list` of `ui-list-item`s (or a table), right: the selected record in a `ui-card` with `ui-tabs` for sections. Use `ui-splitter` when the user should resize the panes, or open the detail in a `ui-aside-panel` for a lighter feel. When nothing is selected, show `ui-empty-state` with a short message instead of a blank pane.

## 5. Data table page

```html
<div style="display:grid; gap:16px">
  <div style="display:flex; justify-content:space-between; align-items:center">
    <h1>Customers</h1>
    <ui-button label="New customer" variant="primary" icon="plus"></ui-button>
  </div>
  <ui-callout-banner id="error" heading="Could not load customers" closable></ui-callout-banner>  <!-- only when failing -->
  <ui-advanced-data-table id="table" filterable exportable></ui-advanced-data-table>
</div>
```

Set `table.columns` and `table.data` as properties, `loading` while fetching, and `emptyMessage` for zero rows. Handle row actions through the table's events (see `ui-advanced-data-table.md`), and open edit forms in a `ui-dialog-box` or `ui-aside-panel`.

## 6. Dialog and confirm flow

```html
<ui-button id="open" label="Delete project" color="danger"></ui-button>
<ui-dialog-box id="dlg" dialog-title="Delete project?">
  <div slot="body">This cannot be undone.</div>
  <div slot="footer" style="display:flex; gap:12px; justify-content:flex-end">
    <ui-button id="cancel" label="Cancel" variant="ghost"></ui-button>
    <ui-button id="confirm" label="Delete" color="danger"></ui-button>
  </div>
</ui-dialog-box>
<script>
  open.addEventListener('buttonClick', () => (dlg.open = true));
  cancel.addEventListener('buttonClick', () => (dlg.open = false));
</script>
```

`ui-dialog-box` also has built-in confirm and alert types and a `buttonSet` prop; check the component file before hand-building a footer for a simple yes/no.

## 7. Login or empty first-run screen

Centre a `ui-card` (`max-width:420px`) containing two `ui-input`s (one `type="password"`, check the prop name in `ui-input.md`), a primary `ui-button` with `loading` during submit, and a `ui-anchor` for "forgot password". Show errors with `ui-callout-banner` above the form. For a first-run screen with no data, `ui-empty-state` with a `primaryAction` does the same job with less code.

## 8. Settings page

`ui-tabs` (or `ui-navigation-bar` in vertical orientation) for sections; each section is a `ui-card` of rows of label on the left and a `ui-switch`, `ui-dropdown` or `ui-input` on the right, with `ui-divider` between rows. Persist on change and confirm with a `ui-snackbar`, or collect changes and offer Save/Discard buttons, but do not mix the two within one page.
