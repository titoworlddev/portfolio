import { openCloseCard } from '../../utils/generalFunctions';
import './_ProjectCard.scss';

export default function ProjectCard({
  project = {
    title: '',
    text: '',
    img: '',
    coverImg: '',
    linkImg: '',
    url: '',
    category: ''
  }
}) {
  return (
    <div className='tarjeta-container'>
      <div className='tarjeta' id='tarjeta'>
        {/* <!-- Header --> */}
        <div className='tarjeta-header'>
          <button
            onClick={openCloseCard}
            className='tarjeta-close-btn'
            id='tarjeta-close-btn'
          >
            <i className='fa-solid fa-xmark'></i>
          </button>
        </div>

        {/* <!-- Contenido --> */}
        <div className='tarjeta-body'>
          <div className='fotos-tarjeta'>
            <img className='foto' src={project.img} alt='Work Presentation' />
          </div>

          <div className='nombre-explicacion'>
            <h3 className='titulo-tarjeta'>{project.title}</h3>
            <div className='texto-container'>
              <p className='texto-tarjeta'>{project.text}</p>
            </div>
          </div>
        </div>

        {/* <!-- Footer --> */}
        <div className='tarjeta-footer'>
          <div className='logos-tiendas'>
            <a
              target='_blank'
              rel='noreferrer'
              href={project.url}
              aria-label='Link al proyecto'
            >
              <img src={project.linkImg} alt='Imagen del link al proyecto' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
