const fs = require('fs');
const path = require('path');

const tags = ['layout-manager', 'lm-container', 'lm-floating-window', 'lm-panel', 'lm-splitter', 'lm-tabs', 'category-section', 'library-card', 'nav-bar', 'smart-step', 'timeline-item'];

function searchDir(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (!['node_modules', '.git', 'dist'].includes(file)) {
        searchDir(fullPath);
      }
    } else if (/\.(tsx|ts|html|md|scss|css|json)$/.test(file)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      tags.forEach(tag => {
        if (content.includes('<' + tag) || content.includes('"' + tag + '"') || content.includes("'" + tag + "'")) {
          console.log(tag, 'found in atherui:', path.relative(path.resolve(__dirname, '..'), fullPath));
        }
      });
    }
  });
}

searchDir(path.resolve(__dirname, '../src'));
