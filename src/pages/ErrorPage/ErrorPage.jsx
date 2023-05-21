import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <section className='main'>
      <div className='links-container'>
        <div className='title-links-404'>
          <Link to='/'>
            <img
              className='my-logo'
              src='/assets/img/logo/logo.webp'
              alt='TitoWorld Logo'
            />
          </Link>
          <h1 className='title'>ERROR 404</h1>
        </div>
        <div className='links'>
          <p>
            La página a la que intentas acceder no existe o no está disponible.
            <br />
            <br />
            Verifica que la dirección URL sea correcta o vuelve a la página
            anterior.
          </p>
        </div>
      </div>
    </section>
  );
}
