import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { HomeView } from './HomeView';

export const router = createBrowserRouter([
  {
    path: '/',
    element: React.createElement(HomeView, {})
  }
] as const);
