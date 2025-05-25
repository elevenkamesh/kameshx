import React from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n'; // Make sure your i18n setup file is imported

const NavBar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
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
                <a className="nav-link" aria-current="page" href="#">
                  {t('nav.home')}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cert">
                  {t('nav.certifications')}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skill">
                  {t('nav.skills')}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  {t('nav.about')}
                </a>
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
