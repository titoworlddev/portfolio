import { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './_ProjectsSection.scss';
import { getJSON } from '/src/utils/projects/tarjetasAssets';
import Project from '../Project/Project';
import { useEffect } from 'react';

export default function ProjectsSection() {
  const [category, setCategory] = useState('web');
  const [project, setProject] = useState({});
  const [tarjetasAssets, setTarjetasAssets] = useState({});

  useEffect(() => {
    getJSON('/assets/json/tarjetaAssets.json').then(assets =>
      setTarjetasAssets(assets)
    );
  }, []);

  const categoryEntries = Object.entries(tarjetasAssets).filter(
    ([, v]) => v.category === category
  );

  const handleSetCategory = e => {
    const category = e.target.id;
    setCategory(category);
  };

  const handleSetAndOpenProject = project => {
    setProject(project);
    // La card siempre esta ahi, simplemente la muestro despues de actualizar el estado
    const card = document.querySelector('.tarjeta-container');
    setTimeout(() => {
      card.style.display = 'flex';
    }, 150);
  };

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Mis proyectos</h2>
      <ul className="projects--categories">
        <li
          onClick={handleSetCategory}
          id="web"
          className={`btn-category ${
            category === 'web' && 'btn-category-active'
          }`}
        >
          Web
        </li>

        <li
          onClick={handleSetCategory}
          id="movil"
          className={`btn-category ${
            category === 'movil' && 'btn-category-active'
          }`}
        >
          Móvil
        </li>
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
