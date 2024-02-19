export default function Skill({ title = '', img = '' }) {
  const url = img.includes('-')
    ? 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/' + img
    : img;

  return (
    <label title={title}>
      <img
        height="48"
        alt={title}
        className={title.includes('Wordpress') ? 'wordpress-logo' : ''}
        src={url}
      />
    </label>
  );
}
