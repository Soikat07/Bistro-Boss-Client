import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home/Home';
import Main from '../Layout/Main';
import Menu from '../pages/Menu/Menu/Menu';
import Order from '../pages/Order/Order/Order';
import Login from '../pages/Login/Login/Login';
import Registration from '../pages/Login/Registration/Registration';
import Dashboard from '../Layout/Dashboard';
import MyCart from '../pages/Dashboard/MyCart/MyCart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'menu',
        element:<Menu/>
      },
      {
        path: 'order/:category',
        element:<Order/>
      },
      {
        path: 'login',
        element:<Login/>
      },
      {
        path: 'registration',
        element:<Registration/>
      }
    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'myCart',
        element:<MyCart/>
      }
    ]
  }
]);

export default router;
