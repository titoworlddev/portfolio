import { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './_ProjectsSection.scss';
import { getJSON } from '/src/utils/projects/tarjetasAssets';
import Project from '../Project/Project';
import { openCloseCard } from '../../utils/generalFunctions';
import { useEffect } from 'react';

export default function ProjectsSection() {
  const [category, setCategory] = useState('web');
  const [project, setProject] = useState({});
  const [tarjetasAssets, setTarjetasAssets] = useState({});

  async function getTarjetasAssets() {
    setTarjetasAssets(await getJSON('/assets/json/tarjetaAssets.json'));
  }

  useEffect(() => {
    getTarjetasAssets();
  }, []);

  const categoryEntries = Object.entries(tarjetasAssets).filter(
    ([_, v]) => v.category === category
  );
  const ids = {
    web: 'Web',
    movil: 'Móvil'
  };

  const handleSetCategory = e => {
    const category = e.target.id;
    setCategory(category);
  };

  const handleSetAndOpenProject = project => {
    setProject(project);
    // La card siempre esta ahi, simplemente la muestro u oculto despues de actualizar el estado
    openCloseCard();
  };

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Mis proyectos</h2>
      <ul className="projects--categories">
        {Object.entries(ids).map(([key, value]) => (
          <li
            key={key}
            onClick={handleSetCategory}
            id={key}
            className={`btn-category ${
              category === key && 'btn-category-active'
            }`}
          >
            {value}
          </li>
        ))}
      </ul>

      <div id={`trabajos-${category}`} className="trabajos-container">
        {categoryEntries.map(([key, value]) => (
          <Project
            key={key}
            name={key}
            project={value}
            onClick={() => handleSetAndOpenProject(value)}
          />
        ))}
      </div>

      <ProjectCard project={project} />
    </section>
  );
}
