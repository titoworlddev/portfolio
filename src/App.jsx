import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

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
      <SimpleBar style={{ maxHeight: '100vh' }}>
        <RouterProvider router={router} />
      </SimpleBar>
    </>
  );
}
