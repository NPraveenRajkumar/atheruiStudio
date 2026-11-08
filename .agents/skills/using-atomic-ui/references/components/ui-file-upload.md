# ui-file-upload

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `accept` | `string` | `''` | Accept attribute (e.g. 'image/*,.pdf') |
| auto-close-on-success (`autoCloseOnSuccess`) | `boolean` | `false` | Automatically emit completion event and hide list when all files succeed |
| auto-upload (`autoUpload`) | `boolean` | `true` | When true (default), upload begins immediately after files are selected. When false, files stay in "Ready" state until the user clicks the Upload button inside the queue dialog. |
| `capture` | `"environment" \| "user" \| boolean` | `false` | Capture attribute for mobile camera |
| `directory` | `boolean` | `false` | Allow the user to select an entire folder instead of individual files. Sets webkitdirectory on the hidden input. Implicitly enables multiple. |
| `disabled` | `boolean` | `false` | Disabled |
| file-name-pattern (`fileNamePattern`) | `string` | `''` | Custom regex pattern filenames must satisfy |
| header-title (`headerTitle`) | `string` | `''` | Integrated header title (for sideload variant) |
| helper-text (`helperText`) | `string` | `''` | Helper text |
| `label` | `string` | `''` | Label |
| max-files (`maxFiles`) | `number` | `5` | Max number of files |
| max-size (`maxSize`) | `number` | `10 * 1024 * 1024` | Max file size in bytes |
| min-size (`minSize`) | `number` | `0` | Min file size in bytes |
| `multiple` | `boolean` | `false` | Allow multiple files |
| `rtl` | `boolean` | `false` | RTL support |
| show-preview (`showPreview`) | `boolean` | `true` | Show file previews |
| show-upload-button (`showUploadButton`) | `boolean` | `false` | Show manual upload button — overrides auto-upload when true |
| show-validate-button (`showValidateButton`) | `boolean` | `false` | Show manual validate button |
| upload-icon (`uploadIcon`) | `string` | `''` | Custom upload icon: pass a lucide icon name (e.g. "file-plus") or any emoji/text. Defaults to the upload-cloud lucide icon when left empty. |
| validate-file-name (`validateFileName`) | `boolean` | `true` | Enable basic filename validation |
| `variant` | `"button" \| "compact" \| "dropzone" \| "inline" \| "sideload"` | `'dropzone'` | Variant: 'dropzone' \| 'button' \| 'compact' \| 'inline' \| 'sideload' |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `allUploadsComplete` | `UploadedFile[]` |  |
| `fileReject` | `FileUploadValidationError[]` |  |
| `fileRemove` | `string` |  |
| `fileSelect` | `UploadedFile[]` |  |
| `uploadProgress` | `{ fileName: string; progress: number; }` |  |
| `uploadSuccess` | `UploadedFile` |  |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `clear` | `clear() => Promise<void>` | Public API: Clear all files and reset state |
| `removeInvalidFiles` | `removeInvalidFiles() => Promise<void>` | Public API: Remove all files that have errors or are rejected |
| `upload` | `upload() => Promise<void>` | Public API: Programmatically trigger upload of all valid files |
| `validate` | `validate() => Promise<boolean>` | Public API: Programmatically trigger validation of all pending files |
