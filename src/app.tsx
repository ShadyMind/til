import React, { StrictMode } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { globalStore } from './store';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/views';
import './themes/theme.light.json';
import './index.css';


export function App() {
  return (
    <StrictMode>
      <StoreProvider store={globalStore}>
        <RouterProvider router={router} />
      </StoreProvider>
    </StrictMode>
  )
}
