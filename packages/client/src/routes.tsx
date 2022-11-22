import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from './layouts/SidebarLayout';
import Loader from './components/SuspenseLoader';
import BaseLayout from './layouts/BaseLayout';

const Explore = Loader(lazy(() => import('src/pages/Explore')));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <SidebarLayout />,
    children: [
      {
        path: 'explore',
        element: <Explore />,
      },
      {
        path: 'add-order',
        element: <Explore />,
      },
      {
        path: 'my-orders',
        element: <Explore />,
      },
      {
        path: 'my-schedules',
        element: <Explore />,
      },
      {
        path: 'recently-orders',
        element: <Explore />,
      },
      {
        path: 'contact',
        element: <Explore />,
      },
      {
        path: 'feedback-app',
        element: <Explore />,
      },
      {
        path: '/',
        element: <Navigate to="/explore" replace />,
      },
    ],
  },
];

export default routes;
