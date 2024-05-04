import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Base } from './screens/Base.jsx';
import { Links } from './screens/Links.jsx';

const routes = createBrowserRouter([
  {
    path: '/',
    errorElement: <div>Página não encontrada</div>,
    element: <Base />,
    children: [
      {
        index: true,
        element: <div>Conteúdo base</div>
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
