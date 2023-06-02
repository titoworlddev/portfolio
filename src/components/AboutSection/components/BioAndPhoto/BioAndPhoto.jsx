import './_BioAndPhoto.scss';

export default function BioAndPhoto() {
  return (
    <div className='bio-photo-container'>
      <p className='bio'>
        Actualmente me especializo en Frontend de Web y Móvil, pero estoy
        aprendiendo sobre el backend porque me gustaría llegar a ser un
        desarrollador fullstack.
        <br />
        <br />
        Con muchas ganas de trabajar, ya que me encanta lo que hago, la
        programación y el diseño, por lo que me apasiona crear aplicaciones
        funcionales, bonitas e intuitivas. <br />
        <br />
        En conclusión me gusta mucho el mundo de la tecnología y también soy muy
        curioso, lo cual me lleva a estar aprendiendo cosas nuevas
        constantemente.
        <br />
        <br />
        Si quieres saber más sobre mí, te invito a descargar mi CV.
        <br />
        <br />
        <a
          className='my-cv'
          href='/assets/Curriculum Cristian Arias.pdf'
          download=''
        >
          Descarga mi CV
        </a>
      </p>
    </div>
  );
}
