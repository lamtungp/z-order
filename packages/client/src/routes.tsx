import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from './layouts/SidebarLayout';
import Loader from './components/SuspenseLoader';
import BaseLayout from './layouts/BaseLayout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: 'manage',
        element: <SidebarLayout />,
        children: [],
      },

      {
        path: 'explore',
        element: <SidebarLayout />,
      },

      {
        path: '/',
        element: <Navigate to="/explore" replace />,
      },
    ],
  },
];

export default routes;
