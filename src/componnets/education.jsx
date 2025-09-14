import React from 'react';
import { useTranslation } from 'react-i18next';

const Education = () => {
  const { t } = useTranslation();

  const certification = [
    {
      url: "",
      certName: t('education.certifications.rhcsa'),
      website: "Red Hat"
    },
    {
      url: "https://www.linkedin.com/in/kameshx/details/certifications/1728218324706/single-media-viewer/?profileId=ACoAADOYZ2sBdGQ1KyLYcXDh2hy1JYW56RpFYmU",
      certName: t('education.certifications.ts'),
      website: "Udemy"
    },
    {
      url: "https://www.linkedin.com/in/kameshx/details/certifications/1722185100106/single-media-viewer/?type=IMAGE&profileId=ACoAADOYZ2sBdGQ1KyLYcXDh2hy1JYW56RpFYmU",
      certName: t('education.certifications.python'),
      website: "Scaler"
    }
  ];


  return (
    <section  id="cert">
      <div className="education-section py-5" >
      {/* Education Section */}
      <div className="mb-5 mb-lg-6 edu-first">
        <h3 className="display-6 fw-bold text-center text-body-emphasis lh-1 mb-4">
          {t('education.title')}
        </h3>
  
        <div className="d-flex flex-column flex-md-row flex-wrap gap-3 align-items-center justify-content-center">
          <div className="list-group w-100 w-md-auto list-group-checkable d-grid gap-3 border-0">
            <label className="box-lab list-group-item rounded-3 py-3 text-center text-md-start">
              {t('education.masters')}
              <span className="d-block small opacity-50 px-2">{t('education.mastersCollege')}</span>
            </label>
  
            <label className="box-lab list-group-item rounded-3 py-3 text-center text-md-start">
              {t('education.bachelors')}
              <span className="d-block small opacity-50 px-2">{t('education.bachelorsCollege')}</span>
            </label>
          </div>
        </div>
      </div>
  
      {/* Certification Section */}
      <div className="mb-5 mb-lg-6 edu-first" >
        <h3 className="display-6 fw-bold text-center text-body-emphasis lh-1 mb-4">
          {t('education.certTitle')}
        </h3>
  
        <div className="d-flex flex-column flex-md-row flex-wrap gap-3 align-items-center justify-content-center">
          <div className="list-group w-100 w-md-auto list-group-checkable d-grid gap-3 border-0">
            {certification.map((e, i) => (
              <a
                href={e.url}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                className="text-decoration-none"
              >
                <label className="box-lab list-group-item rounded-3 py-3 text-center text-md-start">
                  {e.certName}
                  <span className="d-block small opacity-50 px-2">{e.website}</span>
                </label>
              </a>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
  
};

export default Education;
