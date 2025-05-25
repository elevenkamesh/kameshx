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
    <div className="eductionx" id="cert">
      <div>
        <div>
          <h3 className="display-5 fw-bold text-center text-body-emphasis lh-1 mb-3 pt-0">
            {t('education.title')}
          </h3>
        </div>

        <div className="col-lg-12 d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
          <div className="list-group list-group-checkable d-grid gap-2 border-0">
            <label className="box-lab spb-3 list-group-item rounded-3 py-3">
              {t('education.masters')}
              <span className="d-block small opacity-50 mx-5 px-2">{t('education.mastersCollege')}</span>
            </label>

            <label className="box-lab list-group-item rounded-3 py-3">
              {t('education.bachelors')}
              <span className="d-block small opacity-50 mx-5 px-2">{t('education.bachelorsCollege')}</span>
            </label>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h3 className="display-5 fw-bold text-center text-body-emphasis lh-1 mb-3">
            {t('education.certTitle')}
          </h3>
        </div>

        <div className="col-lg-12 d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
          <div className="list-group list-group-checkable d-grid gap-2 border-0">
            {certification.map((e, i) => (
              <a href={e.url} target="_blank" rel="noopener noreferrer" key={i}>
                <label className="box-lab list-group-item rounded-3 py-3">
                  {e.certName}
                  <span className="d-block small opacity-50 mx-5 px-2">{e.website}</span>
                </label>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
