import { RouterProvider } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import './_App.scss';

import { useEffect, useRef } from 'react';
import { initFunctions } from '/src/utils/initFunctions';
import { router } from './routes/router';
import { closeMenuCard } from './utils/generalFunctions';

export default function App() {
  const scrollableNodeRef = useRef();

  useEffect(() => {
    initFunctions(scrollableNodeRef.current);
  }, []);

  useEffect(closeMenuCard, []);

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
