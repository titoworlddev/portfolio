import './_Project.scss';
import ProjectCard from '../ProjectCard/ProjectCard';

export default function Project({
  name = '',
  project = {
    coverImg: ''
  }
}) {
  const handleShowCard = () => {
    const card = document.querySelector(`.${project.selector}`);
    card.style.display = 'flex';
  };

  return (
    <>
      <div className="trabajo" onClick={handleShowCard}>
        <img src={project.coverImg} alt={`${name} Image`} />
        <p>{name}</p>
      </div>

      <ProjectCard project={project} />
    </>
  );
}
