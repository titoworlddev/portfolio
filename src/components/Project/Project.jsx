import './_Project.scss';

export default function Project({
  name = '',
  project = {
    coverImg: ''
  },
  onClick = () => {}
}) {
  return (
    <div className='trabajo' onClick={onClick}>
      <img src={project.coverImg} alt={`${name} Image`} />
      <p>{name}</p>
    </div>
  );
}
