import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RecpieForm from './components/RecpieForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/recpie_form',
    element: <RecpieForm />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
