export default function Skill({ title = '', img = '' }) {
  const url = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';

  return (
    <label title={title}>
      <img
        height='48'
        alt={title}
        className={title.includes('Wordpress') ? 'wordpress-logo' : ''}
        src={`${url}${img}`}
      />
    </label>
  );
}
