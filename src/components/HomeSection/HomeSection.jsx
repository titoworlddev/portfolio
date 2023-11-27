import './_HomeSection.scss';

export default function HomeSection() {
  return (
    <section className="home">
      <div className="home-texts">
        <p>Cristian Arias</p>
        <h1 className="title-text">Desarrollador FrontEnd</h1>
        <small className="description">
          Apasionado desarrollador frontend con +3 años de experiencia en el
          estudio de desarrollo web y móvil. <br /> Busco oportunidades para
          aplicar y ampliar mis conocimientos, aportando entusiasmo y un enfoque
          centrado en la usabilidad y el diseño.
        </small>
      </div>

      <div className="home-img">
        <img
          className="foto"
          src="/assets/img/mis-fotos/mi-foto.webp"
          alt="My Photo"
        />
      </div>
    </section>
  );
}
