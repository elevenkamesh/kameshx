import React from 'react';
import { useTranslation } from 'react-i18next';
import keyboad from '../assets/keyboard.gif';

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about">
      <div className="container text-center border-bottom pb-5">
        <h1 className="display-6 fw-bold text-body-emphasis mb-4">
          {t('about.title')}
        </h1>

        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-10 col-lg-8">
            <p className="lead text-muted">{t('about.description')}</p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-10 col-md-8 col-lg-6">
            <img
              src={keyboad}
              alt="Example"
              className="img-fluid rounded-3 border"
              height="200"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
