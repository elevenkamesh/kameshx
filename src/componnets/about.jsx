import React from 'react';
import { useTranslation } from 'react-i18next';
import keyboad from '../assets/keyboard.gif';

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about">
      <div className="full-screen-height px-4 my-5 text-center border-bottom">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{t('about.title')}</h1>

        <div className="col-lg-6 mx-auto">
          <div className="mb-4 text-align-right width-100">
            {t('about.description')}
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="container px-5">
            <img
              src={keyboad}
              className="border-outline img-fluid rounded-3"
              alt="Example"
              width="auto"
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
