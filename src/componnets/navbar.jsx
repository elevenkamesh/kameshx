import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import '../i18n';

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Scroll to section after navigating to home
  const handleSectionClick = (section) => {
    navigate('/', { state: { scrollTo: section} });
    // navigate('/');
    // setTimeout(() => {
    //   const el = document.getElementById(section);
    //   if (el) el.scrollIntoView({ behavior: 'smooth' });
    // }, 100); // Wait for navigation/render
  };

  return (
    <div className="container sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse fw-bold justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {t('nav.home')}
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  type="button"
                  onClick={() => handleSectionClick('cert')}
                >
                  {t('nav.certifications')}
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  type="button"
                  onClick={() => handleSectionClick('skills')}
                >
                  {t('nav.skills')}
                </button>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/project">
                  {t('nav.project')}
                </Link>
              </li> */}
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  type="button"
                  onClick={() => handleSectionClick('about')}
                >
                  {t('nav.about')}
                </button>
              </li>
            </ul>

            <div className="ms-auto d-flex">
              <button
                className={`btn btn-sm me-2 ${
                  i18n.language === 'en' ? 'btn-primary' : 'btn-outline-secondary'
                }`}
                onClick={() => changeLanguage('en')}
              >
                EN
              </button>
              <button
                className={`btn btn-sm ${
                  i18n.language === 'ja' ? 'btn-primary' : 'btn-outline-secondary'
                }`}
                onClick={() => changeLanguage('ja')}
              >
                日本語
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
