import { handleScrollToTop } from '../../utils/handleScrollToTop';
import GitHubLogo from '../Icons/GitHubLogo';
import LinkedInLogo from '../Icons/LinkedInLogo';
import './_Footer.scss';

export default function Footer() {
  return (
    <footer>
      <ul className="socials">
        <li className="social github">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/titoworlddev"
            aria-label="GitHub Link"
          >
            <GitHubLogo />
          </a>
        </li>

        <li className="social portfolio" onClick={handleScrollToTop}>
          <img
            aria-label="Portfolio Link"
            className="my-logo"
            src="/assets/img/logo/logo.webp"
            alt="TitoWorld Logo"
          />
        </li>

        <li className="social linkedin">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/cristian-arias-mejuto/"
            aria-label="LinkedIn Link"
          >
            <LinkedInLogo />
          </a>
        </li>
      </ul>
    </footer>
  );
}
