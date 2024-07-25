import { badges } from '../../data/badges';
import { capitalize } from '../../utils/capitalize';
import './_ProjectCard.scss';

export default function ProjectCard({
  project = {
    title: '',
    text: '',
    img: '',
    links: [{ img: '', url: '' }],
    coverImg: '',
    category: '',
    stack: ['']
  }
}) {
  const handleCloseCard = () => {
    const card = document.querySelector('.tarjeta-container');
    card.style.display = 'none';
  };

  return (
    <div className="tarjeta-container">
      <div className="tarjeta" id="tarjeta">
        {/* Header */}
        <div className="tarjeta-header">
          <h3 className="titulo-header">{project.title}</h3>

          <button
            onClick={handleCloseCard}
            className="tarjeta-close-btn"
            id="tarjeta-close-btn"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Contenido */}
        <div className="tarjeta-body">
          <div className="fotos-tarjeta">
            <img className="foto" src={project.img} alt="Work Presentation" />
          </div>

          <div className="nombre-explicacion">
            <div className="stack">
              {project.stack?.map(skill => (
                <img
                  title={capitalize(badges[skill].name)}
                  src={badges[skill].src}
                  alt={capitalize(badges[skill].name)}
                />
              ))}
            </div>
            <div className="texto-container">
              <p className="texto-tarjeta">{project.text}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="tarjeta-footer">
          <div className="logos-tiendas">
            {project.links &&
              project.links.map((link, index) => (
                <a
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                  href={link.url}
                  aria-label="Link al proyecto"
                >
                  <img src={link.img} alt="Imagen del link al proyecto" />
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
