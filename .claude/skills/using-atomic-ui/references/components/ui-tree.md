# ui-tree

Shadow DOM: yes (style via CSS variables / ::part)

## Props

| Attribute / prop | Type | Default | Description |
|---|---|---|---|
| `animated` | `boolean` | `true` |  |
| checkbox-sync (`checkboxSync`) | `boolean` | `true` |  |
| `checkboxes` | `boolean` | `false` |  |
| collapse-all (`collapseAll`) | `boolean` | `false` |  |
| collapsed-icon (`collapsedIcon`) | `string` | `''` |  |
| `color` | `string` | `''` |  |
| connector-color (`connectorColor`) | `string` | `''` |  |
| connector-opacity (`connectorOpacity`) | `number` | `1` |  |
| connector-shape (`connectorShape`) | `"rounded" \| "square"` | `'rounded'` |  |
| connector-width (`connectorWidth`) | `number` | `1` |  |
| context-menu-enabled (`contextMenuEnabled`) | `boolean` | `false` |  |
| enable-drag (`enableDrag`) | `boolean` | `false` |  |
| expand-all (`expandAll`) | `boolean` | `false` |  |
| expand-icon-color (`expandIconColor`) | `string` | `''` |  |
| expand-icon-size (`expandIconSize`) | `string` | `'14px'` |  |
| expand-icon-type (`expandIconType`) | `"arrow" \| "caret" \| "chevron" \| "custom" \| "plus-minus"` | `'chevron'` |  |
| `expandable` | `boolean` | `true` |  |
| expanded-icon (`expandedIcon`) | `string` | `''` |  |
| icon-library (`iconLibrary`) | `string` | `'lucide'` |  |
| `indent` | `number` | `24` |  |
| inline-edit (`inlineEdit`) | `boolean` | `false` |  |
| `layout` | `"org-chart" \| "tree"` | `'tree'` |  |
| lazy-load (`lazyLoad`) | `boolean` | `false` |  |
| multi-select (`multiSelect`) | `boolean` | `false` |  |
| node-height (`nodeHeight`) | `number` | `40` |  |
| `nodes` | `TreeNode[] \| string` | `[]` |  |
| `orientation` | `"horizontal" \| "vertical"` | `'vertical'` |  |
| `searchable` | `boolean` | `false` |  |
| `selectable` | `boolean` | `false` |  |
| show-avatars (`showAvatars`) | `boolean` | `true` |  |
| show-glow (`showGlow`) | `boolean` | `false` |  |
| show-icons (`showIcons`) | `boolean` | `true` |  |
| show-lines (`showLines`) | `boolean` | `true` |  |
| show-node-actions (`showNodeActions`) | `boolean` | `true` |  |
| `size` | `"lg" \| "md" \| "sm"` | `'md'` |  |
| `theme` | `"dark" \| "light"` | `'light'` |  |
| undo-redo-enabled (`undoRedoEnabled`) | `boolean` | `false` |  |
| `variant` | `"bordered" \| "cards" \| "compact" \| "default" \| "directory" \| "git-graph" \| "glass" \| "minimal" \| "rounded"` | `'default'` |  |
| virtual-scroll (`virtualScroll`) | `boolean` | `false` |  |
| virtual-scroll-height (`virtualScrollHeight`) | `number` | `400` |  |

## Events

Dispatched as CustomEvent; payload is `event.detail`.

| Event | Detail | Description |
|---|---|---|
| `nodeAction` | `{ node: TreeNode; action: string; }` |  |
| `nodeAdd` | `{ parentId: string \| number; node: TreeNode; }` |  |
| `nodeCheck` | `{ node: TreeNode; checked: boolean; indeterminate: boolean; }` |  |
| `nodeClick` | `{ node: TreeNode; path: (string \| number)[]; }` |  |
| `nodeContextMenu` | `{ node: TreeNode; x: number; y: number; }` |  |
| `nodeDragStart` | `TreeNode` |  |
| `nodeDrop` | `TreeDropEvent` |  |
| `nodeEdit` | `{ node: TreeNode; newLabel: string; oldLabel: string; }` |  |
| `nodeExpand` | `{ node: TreeNode; expanded: boolean; }` |  |
| `nodeLazyLoad` | `{ node: TreeNode; }` |  |
| `nodeMove` | `{ nodeId: string \| number; targetId: string \| number; position: "after" \| "before" \| "inside"; }` |  |
| `nodeRemove` | `{ node: TreeNode; }` |  |
| `nodeSelect` | `{ node: TreeNode; selected: boolean; }` |  |
| `treeChange` | `{ nodes: TreeNode[]; selectedNodes: (string \| number)[]; }` |  |

## Methods

Call on the element after it is defined (they return Promises).

| Method | Signature | Description |
|---|---|---|
| `addNode` | `addNode(parentId: string \| number \| null, node: TreeNode) => Promise<void>` |  |
| `bfsTraversal` | `bfsTraversal(startId?: string \| number) => Promise<TreeNode[]>` |  |
| `collapseAllNodes` | `collapseAllNodes() => Promise<void>` |  |
| `dfsTraversal` | `dfsTraversal(startId?: string \| number, order?: "pre" \| "post") => Promise<TreeNode[]>` |  |
| `diffTrees` | `diffTrees(oldNodes: TreeNode[], newNodes: TreeNode[]) => Promise<TreeDiffResult>` |  |
| `expandAllNodes` | `expandAllNodes() => Promise<void>` |  |
| `expandByPath` | `expandByPath(path: (string \| number)[]) => Promise<void>` |  |
| `flattenTree` | `flattenTree(nodes?: TreeNode[]) => Promise<FlatNode[]>` |  |
| `getBreadcrumb` | `getBreadcrumb(id: string \| number) => Promise<TreeNodePath[]>` |  |
| `getNodePath` | `getNodePath(id: string \| number) => Promise<(string \| number)[]>` |  |
| `getSelectedNodes` | `getSelectedNodes() => Promise<TreeNode[]>` |  |
| `getState` | `getState() => Promise<TreeState>` |  |
| `moveNode` | `moveNode(nodeId: string \| number, targetId: string \| number, position: "before" \| "inside" \| "after") => Promise<void>` |  |
| `redo` | `redo() => Promise<void>` |  |
| `removeNode` | `removeNode(id: string \| number) => Promise<void>` |  |
| `restoreState` | `restoreState(state: TreeState) => Promise<void>` |  |
| `scrollToNode` | `scrollToNode(id: string \| number) => Promise<void>` |  |
| `selectByPath` | `selectByPath(path: (string \| number)[]) => Promise<void>` |  |
| `selectNode` | `selectNode(id: string \| number) => Promise<void>` |  |
| `undo` | `undo() => Promise<void>` |  |
| `updateNode` | `updateNode(id: string \| number, data: Partial<TreeNode>) => Promise<void>` |  |
