export function scrollToSection() {
  const path = window.location.pathname;
  const simpleBarContent = document.querySelector(
    '.my-simplebar .simplebar-content-wrapper'
  );
  const scroll = path => {
    simpleBarContent.scroll({
      left: 0,
      top: document.querySelector(`.${path}`).offsetTop - 96,
      behavior: 'instant'
    });
  };

  const sections = ['/projects', '/about', '/contact'];

  if (sections.includes(path)) {
    scroll(path.slice(1));
  }
}
