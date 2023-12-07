export const handleSetPathName = () => {
  const simpleBarContent = document.querySelector(
    '.my-simplebar .simplebar-content-wrapper'
  );

  // Si tiene # se lo quita
  if (window.location.hash) {
    window.history.replaceState(null, null, window.location.hash.slice(1));
  }
  const home = document.querySelector('.home');
  const projects = document.querySelector('.projects');
  const about = document.querySelector('.about');
  const contact = document.querySelector('.contact');
  let currentURL = window.location.pathname;

  const setHistoryState = url => {
    if (currentURL !== url) {
      window.history.replaceState(null, null, url);
      currentURL = url;
    }
  };

  const setBtnActive = () => {
    const btnsMenu = document.querySelectorAll('.btn-menu');
    const location = window.location.pathname.substring(1);
    btnsMenu.forEach(btn => {
      const btnId = btn.id.split('-')[0];
      if (btnId === location) {
        btn.classList.add('btn-menu-active');
      } else {
        btn.classList.remove('btn-menu-active');
      }
    });
  };
  setBtnActive();

  const onScrollEvent = () => {
    // Set timeout para evitar muchas llamadas al mismo tiempo
    setTimeout(() => {
      setBtnActive();

      const vh = window.innerHeight;

      const homeTop = home.getBoundingClientRect().top;
      const projectsTop = projects.getBoundingClientRect().top;
      const aboutTop = about.getBoundingClientRect().top;
      const contactTop = contact.getBoundingClientRect().top;

      if (contactTop <= vh / 2) setHistoryState('contact');
      else if (aboutTop <= vh / 2) setHistoryState('about');
      else if (projectsTop <= vh / 2) setHistoryState('projects');
      else if (homeTop <= vh / 2) setHistoryState('/');
    }, 100);
  };

  simpleBarContent.addEventListener('scroll', onScrollEvent);

  return () => {
    simpleBarContent.removeEventListener('scroll', onScrollEvent);
  };
};
