# AI Assistant Guidelines for AtherUI & AtomicUI

This repository uses **AtomicUI** (`atomicuilibrary`), a library of ~99 custom web components tagged `ui-*`.

## Workspace Skills Available
When designing screens or using `ui-*` components, consult the workspace skills:
- **`using-atomic-ui`** (`.agents/skills/using-atomic-ui/SKILL.md`): Setup, loader registration, theming, license checks, and comprehensive per-component prop/event/slot references in `references/components/<tag>.md`.
- **`building-screens-with-atomic-ui`** (`.agents/skills/building-screens-with-atomic-ui/SKILL.md`): Composition patterns, screen recipes (forms, dashboards, tables, dialogs), and UI need-to-component mappings (`references/need-to-component.md`).
- **`frontend-design`** (`.agents/skills/frontend-design/SKILL.md`): Aesthetic and layout guidance to avoid generic boilerplate design.

## Core Rules for Working with `ui-*` Components
1. **Prefer library components**: Do not hand-roll buttons, inputs, modals, cards, tabs, or badges with plain HTML/CSS when a `ui-*` component exists.
2. **Never guess props**: Look up the exact component specification in `.agents/skills/using-atomic-ui/references/components/<tag>.md`. Wrong prop names fail silently.
3. **Custom Events**: Components emit CustomEvents with camelCase names (e.g., `buttonClick`, `inputChange`, `tabChange`), with event payload in `event.detail`.
4. **Complex Data**: Set arrays and objects (`items`, `columns`, `options`) as JavaScript DOM properties (`el.items = [...]`), not string attributes.
5. **Theming & Tokens**: Never hard-code hex colors. Always use CSS theme custom properties (`var(--bg-primary)`, `var(--text-primary)`, `var(--border-default)`).

