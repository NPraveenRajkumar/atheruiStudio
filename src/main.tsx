import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';
import { initTreeGlobals } from './utils/treeGlobals';
import { initTransferListGlobals } from './utils/transferListGlobals';

// Some recorded demos read these datasets from window globals.
initTreeGlobals();
initTransferListGlobals();

// Load the Stencil component library as one standalone module so lazy chunks share a single runtime.
(function injectStencilLibrary() {
  const script = document.createElement('script');
  script.type = 'module';
  script.src = `${import.meta.env.BASE_URL}exploration-project-tailwind/exploration-project-tailwind.esm.js`;
  document.head.appendChild(script);
})();

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
