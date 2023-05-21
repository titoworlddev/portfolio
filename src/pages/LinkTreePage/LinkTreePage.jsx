import { Link } from 'react-router-dom';

export default function LinkTree() {
  return (
    <section className='main'>
      <div className='links-container'>
        <div className='title-links-404'>
          <Link to='/'>
            <img
              className='my-logo'
              src='/assets/img/logo/logo.webp'
              alt='TitoWorld Logo'
            />
          </Link>
          <h1 className='title'>Mis links</h1>
        </div>

        <div className='links'>
          {/* Random X App */}
          <div className='link'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://play.google.com/store/apps/details?id=com.hayaxelectronics.random_x_app&hl=es'
            >
              Random X App
            </a>
            <i className='fa-brands fa-google-play'></i>
          </div>

          {/* Operit App */}
          <div className='link'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://play.google.com/store/apps/details?id=com.hayaxelectronics.operit&gl=ES'
            >
              Operit App
            </a>
            <i className='fa-brands fa-google-play'></i>
          </div>

          {/* Portfolio */}
          <div className='link'>
            <Link to='/'>My portfolio</Link>
            <i className='fa-solid fa-briefcase'></i>
          </div>

          {/* LinkedIn */}
          <div className='link'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/cristian-arias-mejuto/'
              aria-label='LinkedIn Link'
            >
              LinkedIn
            </a>
            <i className='fa-brands fa-linkedin'></i>
          </div>

          {/* GitHub */}
          <div className='link'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://github.com/titoworlddev'
              aria-label='GitHub Link'
            >
              GitHub
            </a>
            <i className='fa-brands fa-github'></i>
          </div>

          {/* Instagram */}
          <div className='link'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.instagram.com/cristian_am91/'
              aria-label='Instagram Link'
            >
              Instagram
            </a>
            <i className='fa-brands fa-instagram'></i>
          </div>

          {/* Email */}
          <div className='link'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://mail.google.com/mail/u/?fs=1&tf=cm&su=Contact&to=titocristian.dev@gmail.com'
              aria-label='Email Link'
            >
              titocristian.dev@gmail.com
            </a>
            <i className='fa-solid fa-envelope'></i>
          </div>
        </div>
      </div>
    </section>
  );
}
