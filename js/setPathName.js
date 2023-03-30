export function setPathName() {
  if (window.location.hash) {
    window.history.replaceState(null, null, window.location.hash.slice(1));
  }
  const home = document.querySelector('.home');
  const projects = document.querySelector('.projects');
  const about = document.querySelector('.about');
  const contact = document.querySelector('.contact');
  let currentURL = window.location.pathname;

  function setHistoryState(url) {
    if (currentURL !== url) {
      window.history.replaceState(null, null, url);
      currentURL = url;
    }
  }

  window.addEventListener('scroll', () => {
    setTimeout(() => {
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
  });
}
