import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './_App.scss';

import HomePage from './pages/HomePage/HomePage';
import LinkTree from './pages/LinkTreePage/LinkTreePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
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

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
