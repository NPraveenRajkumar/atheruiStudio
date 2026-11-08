# ui-top-bar

Top Bar — Navigation & Layout, Stable.

Top navigation bar

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `actions` | `TopBarAction[] \| string` | `'[]'` | Action icons as JSON string |
| background-color (`backgroundColor`) | `string` | `'var(--background-color)'` | Background color |
| company-logo (`companyLogo`) | `string` | `'🏢'` | Company logo/icon |
| company-logo-library (`companyLogoLibrary`) | `"bootstrap" \| "default" \| "fontawesome" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "se"` | `'se'` | Library for the company logo/icon |
| company-name (`companyName`) | `string` | `'Company Name'` | Company name |
| icon-library (`iconLibrary`) | `"bootstrap" \| "default" \| "fontawesome" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "se"` | `'default'` | Default library for actions and menu items |
| show-shadow (`showShadow`) | `boolean` | `true` | Show shadow |
| text-color (`textColor`) | `string` | `'var(--text-color)'` | Text color |
| user-avatar (`userAvatar`) | `string` | `'user'` | User avatar/icon |
| user-avatar-library (`userAvatarLibrary`) | `"bootstrap" \| "default" \| "fontawesome" \| "iconoir" \| "icons8" \| "ionicons" \| "lucide" \| "se"` | `'se'` | Library for the user avatar/icon |
| user-menu-items (`userMenuItems`) | `UserMenuItem[] \| string` | `'[]'` | User menu items as JSON string |
| user-name (`userName`) | `string` | `'John Doe'` | User name |
