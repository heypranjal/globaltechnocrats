import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { StagewiseToolbar } from '@stagewise/toolbar-react';
import ReactPlugin from '@stagewise-plugins/react';
import './index.css';

// Render the main app
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Initialize toolbar separately
const toolbarConfig = {
  plugins: [ReactPlugin()],
};

document.addEventListener('DOMContentLoaded', () => {
  const toolbarRoot = document.createElement('div');
  toolbarRoot.id = 'stagewise-toolbar-root';
  document.body.appendChild(toolbarRoot);

  createRoot(toolbarRoot).render(
    <StrictMode>
      <StagewiseToolbar config={toolbarConfig} />
    </StrictMode>
  );
});