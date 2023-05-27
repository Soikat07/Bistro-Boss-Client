import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home/Home';
import Main from '../Layout/Main';
import Menu from '../pages/Menu/Menu/Menu';

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
      }
    ],
  },
]);

export default router;
