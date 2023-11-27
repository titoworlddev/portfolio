export function scrollToSection(ref) {
  const path = window.location.pathname;
  const scroll = path => {
    ref.getScrollElement().scroll({
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
