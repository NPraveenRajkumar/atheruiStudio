# ui-code-preview

Shadow DOM: no

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| active-lang (`activeLang`) | `string` | `''` | Current active language tab |
| css-code (`cssCode`) | `string` | `''` | The CSS code to display (Legacy) |
| `expanded` | `boolean` | `true` | Whether the code block is expanded or collapsed |
| html-code (`htmlCode`) | `string` | `''` | The HTML code to display (Legacy) |
| js-code (`jsCode`) | `string` | `''` | The JavaScript/JSX code to display (Legacy) |
| `label` | `string` | `''` | Label for the code block (optional) |
| show-reset (`showReset`) | `boolean` | `false` | Whether to show the reset button |
| `snippets` | `CodeSnippet[] \| string` | `[]` | Array of code snippets to display. Can be a JSON string or an array of { language, code, label? } objects. Supports any language supported by PrismJS (e.g., 'python', 'java', 'csharp', 'json'). |
| ts-code (`tsCode`) | `string` | `''` | The TypeScript/TSX code to display (Legacy) |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `expandedChange` | `boolean` | Emitted when expansion state changes |
| `uiReset` | `void` | Emitted when the reset button is clicked |
