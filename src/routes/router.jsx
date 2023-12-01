import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import LinkTree from '../pages/LinkTreePage/LinkTreePage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

// Por alguna razon para ponerlo en este archivo separado necesitas poner la extension .jsx
export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: '/projects',
        element: <HomePage />
      },
      {
        path: '/about',
        element: <HomePage />
      },
      {
        path: '/contact',
        element: <HomePage />
      }
    ]
  },
  {
    path: '/link-tree',
    element: <LinkTree />
  },
  {
    path: '*',
    element: <ErrorPage />
  }
]);
