import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Base } from './screens/Base.jsx';
import { Links } from './screens/Links.jsx';
import { Login } from './screens/Login.jsx';
import { NotFound } from './screens/NotFound.jsx';
import { Profile } from './screens/Profile.jsx';
import { Register } from './screens/Register.jsx';
import { ToHome, ToLogin } from './components/Redirector.jsx';

const routes = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    element: (
      <ToLogin>
        <Base />
      </ToLogin>
    ),
    children: [
      {
        index: true,
        element: <Links />
      },
      {
        path: 'links',
        element: <Links />
      },
      {
        path: 'profile',
        element: <Profile />
      }
    ],
  },
  {
    path: '/login',
    errorElement: <NotFound/>,
    element: (
      <ToHome>
        <Login />
      </ToHome>
    )
  },
  {
    path: '/register',
    errorElement: <NotFound/>,
    element: (
      <ToHome>
        <Register />
      </ToHome>
    ),
  }
]);

export function Router() {
  return <RouterProvider router={routes} />;
}