import { useEffect } from 'react';
import Footer from '/src/components/Footer/Footer';
import Header from '/src/components/Header/Header';
import Main from '/src/components/Main/Main';
import { initFunctions } from '/src/utils/initFunctions';

export default function HomePage() {
  useEffect(() => {
    initFunctions();
  }, []);

  return (
    <>
      {/* <img
        className='stars-bg'
        src='/assets/img/estrellas.svg'
        alt='Stars BG'
      /> */}
      <Header />
      <Main />
      <Footer />
    </>
  );
}
