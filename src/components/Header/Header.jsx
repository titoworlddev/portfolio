import GitHubLogo from '../Icons/GitHubLogo';
import LinkedInLogo from '../Icons/LinkedInLogo';
import './_Header.scss';

export default function Header() {
  return (
    <header>
      <nav>
        <button className='portfolio' aria-label='Portfolio Link'>
          <img
            className='my-logo'
            src='/assets/img/logo/logo.webp'
            alt='TitoWorld Logo'
          />
        </button>

        {/* <!-- Menus --> */}
        <div className='menus'>
          {/* <!-- Desktop menu --> */}
          <ul className='desktop-menu' id='desktop-menu'>
            <li id='projects-btn' className='btn-menu'>
              Proyectos
            </li>
            <li id='about-btn' className='btn-menu'>
              Sobre mí
            </li>
            <li id='contact-btn' className='btn-menu'>
              Contacto
            </li>
          </ul>
          {/* <!-- Socials --> */}
          <ul className='socials-desktop'>
            <li className='social github'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://github.com/titoworlddev'
                aria-label='GitHub Link'
              >
                <GitHubLogo />
              </a>
            </li>

            <li className='social linkedin'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/cristian-arias-mejuto/'
                aria-label='LinkedIn Link'
              >
                <LinkedInLogo />
              </a>
            </li>
          </ul>

          <ul className='socials-mobile'>
            <li className='social github'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://github.com/titoworlddev'
                aria-label='GitHub Link'
              >
                <GitHubLogo />
              </a>
            </li>

            <li className='social linkedin'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/cristian-arias-mejuto/'
                aria-label='LinkedIn Link'
              >
                <LinkedInLogo />
              </a>
            </li>
          </ul>

          {/* <!-- Mobile menu --> */}
          <div className='mobile-menu' id='mobile-menu'>
            <button
              className='mobile-menu-button'
              id='mobile-menu-button'
              aria-label='Boton del menu'
            >
              <i className='fa-solid fa-bars'></i>
            </button>

            <div className='mobile-menu-content'>
              <button className='close-button'>
                <i className='fa-solid fa-xmark'></i>
              </button>
              <ul className='mobile-menu-items'>
                <li id='projects-btn' className='btn-menu'>
                  Proyectos
                </li>
                <li id='about-btn' className='btn-menu'>
                  Sobre mí
                </li>
                <li id='contact-btn' className='btn-menu'>
                  Contacto
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
