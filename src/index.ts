import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';

const rootNode = document.getElementById('root');

if (!rootNode) {
  throw new Error('Root node not found');
}

const root = createRoot(rootNode);
root.render(React.createElement(App, {}));
