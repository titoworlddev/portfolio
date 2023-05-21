export function scrollToSection() {
  const path = window.location.pathname;
  const scroll = path => {
    window.scroll({
      left: 0,
      top: document.querySelector(`.${path}`).offsetTop - 96,
      behavior: 'instant'
    });
  };

  if (path === '/projects') {
    scroll('projects');
  } else if (path === '/about') {
    scroll('about');
  } else if (path === '/contact') {
    scroll('contact');
  }
}
