import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { action as loginAction } from './pages/Login.jsx';
import { action as registerAction } from './pages/Register.jsx';
import { action as addFavorisAction } from './pages/AddConsole.jsx';
import EditUser, { action as updateUserAction } from './pages/EditUser.jsx';

import { loader as dashboardLoader } from './pages/Dashboard.jsx';
import DeleteConsole, {
  action as deleteFavorisAction,
} from './pages/DeleteConsole.jsx';
import {
  Dashboard,
  SharedLayout,
  Collection,
  ErrorPage,
  Login,
  Register,
  Addconsole,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
        action: loginAction,
      },
      {
        path: '/register',
        element: <Register />,
        action: registerAction,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
        loader: dashboardLoader,
      },
      {
        path: '/edituser',
        element: <EditUser />,
        action: updateUserAction,
      },
      {
        path: '/addFavoris/:id',
        element: <Addconsole />,
        action: addFavorisAction,
      },

      {
        path: '/collection',
        element: <Collection />,
        loader: dashboardLoader,
      },
      {
        path: '/deleteFavoris/:id',
        element: <DeleteConsole />,
        action: deleteFavorisAction,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
