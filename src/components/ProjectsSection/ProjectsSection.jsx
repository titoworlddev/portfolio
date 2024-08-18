import { useState } from 'react';
import './_ProjectsSection.scss';
import { getJSON } from '/src/utils/projects/tarjetasAssets';
import Project from '../Project/Project';
import { useEffect } from 'react';
import Loader from '../Loader/Loader';

export default function ProjectsSection() {
  const [category, setCategory] = useState('web');
  const [tarjetasAssets, setTarjetasAssets] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getJSON('/assets/json/tarjetaAssets.json').then(assets => {
      setTarjetasAssets(assets);
      setTimeout(() => setIsLoading(false), 500);
    });
  }, []);

  const categoryEntries = e =>
    Object.entries(tarjetasAssets).filter(([, v]) => v.category === e);

  const handleSetCategory = e => {
    const category = e.target.id;
    setCategory(category);
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

      {isLoading && <Loader />}

      <div
        className="trabajos-container"
        style={{ display: !isLoading && category === 'web' ? 'grid' : 'none' }}
      >
        {categoryEntries('web').map(([key, value]) => (
          <Project key={key} name={key} project={value} />
        ))}
      </div>

      <div
        className="trabajos-container"
        style={{
          display: !isLoading && category === 'movil' ? 'grid' : 'none'
        }}
      >
        {categoryEntries('movil').map(([key, value]) => (
          <Project key={key} name={key} project={value} />
        ))}
      </div>
    </section>
  );
}
