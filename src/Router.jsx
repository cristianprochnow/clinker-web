import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Base } from './screens/Base.jsx';
import { Links } from './screens/Links.jsx';
import { NotFound } from './screens/NotFound.jsx';
import { Dashboard } from './screens/Dashboard.jsx';
import { Login } from './screens/Login.jsx';
import { Register } from './screens/Register.jsx';

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
  },
  {
    path: '/login',
    errorElement: <NotFound/>,
    element: <Login />,
  },
  {
    path: '/register',
    errorElement: <NotFound/>,
    element: <Register />,
  }
]);

export function Router() {
  return <RouterProvider router={routes} />;
}
