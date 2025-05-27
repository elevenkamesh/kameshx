import { useTranslation } from 'react-i18next';
import profile from '../assets/x.webp.webp';
import { FaFileDownload } from "react-icons/fa";
import Social from './socials';

function HeroSection() {
  const { t } = useTranslation();

  return (
    <div id="home" className="container full-height-screen">
      <div className="row flex-lg-row-reverse justify-content-center align-items-center g-4 g-lg-5 py-3 py-lg-5">
        {/* Image Column - Fully responsive */}
        <div className="col-12 col-md-10 col-lg-6 mb-4 mb-lg-0 text-center">
          <div className="image-container">
            <img
              src={profile}
              className="profile-img img-fluid rounded-5"
              alt={t('hero.greeting')}
              loading="lazy"
            />
          </div>
        </div>
        
        {/* Content Column - Optimized for all screens */}
        <div className="col-12 col-lg-6 text-center text-lg-start px-3 px-sm-0">
          <h1 className="hero-title mb-3">
            {t('hero.greeting')}
          </h1>
          <p className="hero-description mb-4">
            {t('hero.description')}
          </p>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <button 
              type="button" 
              className="hero-btn btn btn-primary px-4 py-2"
            >
              <FaFileDownload className="me-2" /> 
              {t('hero.resume')}
            </button>
          </div>
        </div>
      </div>
      <Social />
    </div>
  );
}

export default HeroSection;