import './_HomeSection.scss';

export default function HomeSection() {
  return (
    <section className='home'>
      <div className='home-texts'>
        <p>Cristian Arias</p>
        <h1 className='title-text'>Desarrollador FrontEnd</h1>
      </div>

      <div className='home-img'>
        <img
          className='foto'
          src='/assets/img/mis-fotos/mi-foto.webp'
          alt='My Photo'
        />
      </div>
    </section>
  );
}
