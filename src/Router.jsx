import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Base } from './screens/Base.jsx';
import { Links } from './screens/Links.jsx';
import { NotFound } from './screens/NotFound.jsx';
import { Dashboard } from './screens/Dashboard.jsx';

const routes = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    element: <Base />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'links',
        element: <Links />
      }
    ],
  }
]);

export function Router() {
  return <RouterProvider router={routes} />;
}
