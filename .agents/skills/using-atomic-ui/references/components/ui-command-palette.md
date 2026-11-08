# ui-command-palette

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `commands` | `CommandItem[] \| string` | `[]` | List of commands |
| max-visible (`maxVisible`) | `number` | `8` | Max visible items |
| `open` | `boolean` | `false` | Open state |
| persist-key (`persistKey`) | `string` | `'ui-command-palette-recent'` | localStorage key for persisting recent commands (empty = no persistence) |
| `placeholder` | `string` | `'Search commands…'` | Placeholder text |
| `shortcut` | `string` | `'k'` | Keyboard shortcut to open (default: Meta+K) |
| show-recent (`showRecent`) | `boolean` | `true` | Show recent items |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `commandSelect` | `CommandItem` |  |
| `paletteClose` | `void` |  |
| `paletteOpen` | `void` |  |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `hide` | `hide() => Promise<void>` |  |
| `show` | `show() => Promise<void>` |  |
