# ui-code-editor

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `language` | `"csharp" \| "css" \| "html" \| "java" \| "javascript" \| "json" \| "ladder" \| "markdown" \| "python"` | `'javascript'` |  |
| line-numbers (`lineNumbers`) | `boolean` | `true` |  |
| `readonly` | `boolean` | `false` |  |
| `tabs` | `{ title: string; language: string; content: string; }[]` | `[]` |  |
| `theme` | `"vs-dark" \| "vs-light"` | `'vs-dark'` |  |
| `toolbar` | `boolean` | `false` |  |
| `toolbarGroups` | `string[]` | `['all']` |  |
| toolbar-label-display (`toolbarLabelDisplay`) | `"always" \| "hidden" \| "hover"` | `'hover'` |  |
| `value` | `string` | `''` |  |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `runCode` | `void` |  |
| `valueChange` | `string` |  |
