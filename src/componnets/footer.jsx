import { useTranslation, Trans } from 'react-i18next';
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub, FaDev, FaMedium, FaHeart } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import links from '../utils/links';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <div className="container mt-5">
      <footer className="py-4">
        {/* Social Icons */}
        <ul className="nav flex-wrap justify-content-center border-bottom pb-3 mb-3 gap-3">
          <li className="nav-item">
            <a href={links.linkedin} className="nav-link px-2 text-body-secondary" aria-label="LinkedIn">
              <IoLogoLinkedin size={24} />
            </a>
          </li>
          <li className="nav-item">
            <a href={links.github} className="nav-link px-2 text-body-secondary" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
          </li>
          <li className="nav-item">
            <a href={links.twitter} className="nav-link px-2 text-body-secondary" aria-label="Twitter">
              <FaXTwitter size={22} />
            </a>
          </li>
          <li className="nav-item">
            <a href={links.dev} className="nav-link px-2 text-body-secondary" aria-label="Dev.to">
              <FaDev size={24} />
            </a>
          </li>
          <li className="nav-item">
            <a href={links.medium} className="nav-link px-2 text-body-secondary" aria-label="Medium">
              <FaMedium size={22} />
            </a>
          </li>
        </ul>

        {/* Text Content */}
        <div className="text-center text-body-secondary small">
          <p className="mb-1">{t('footer.privacy')}</p>
          <p className="mb-1">{t('footer.copy')} &copy; {year}</p>
          <p>
            <Trans
              i18nKey="footer.made_with"
              components={{ 0: <span className="text-danger"><FaHeart /></span> }}
            />
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
