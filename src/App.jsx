import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import './_App.scss';

import HomePage from './pages/HomePage/HomePage';
import LinkTree from './pages/LinkTreePage/LinkTreePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { useEffect, useRef } from 'react';
import { initFunctions } from '/src/utils/initFunctions';

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
  const scrollableNodeRef = useRef();

  useEffect(() => {
    initFunctions(scrollableNodeRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SimpleBar
        className="my-simplebar"
        style={{ maxHeight: '100vh' }}
        ref={scrollableNodeRef}
      >
        <RouterProvider router={router} />
      </SimpleBar>
    </>
  );
}
