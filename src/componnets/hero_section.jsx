
// import profile from '../assets/x.webp.webp';



// import { FaFileDownload  } from "react-icons/fa";
// import Social from './socials';
// function HeroSection (){
//     return (
//         <>
//         <div id='home' className="container full-height-screen">
//             <div class="  row flex-lg-row-reverse justify-content-center align-items-center g-5 py-3">
//             <div className="col-6 col-sm-8 col-lg-6">
//                 <img src={profile} className=" border-outline profilex d-block mx-lg-auto img-fluid rounded-5" alt="Bootstrap Themes" width="300" height="100" loading="lazy" />
//                 {/* <img src={"https://akshaysaini.in/img/plane.gif"} className="mx-lg-auto plane img-fluid border-none" alt="Bootstrap Themes" loading="lazy" /> */}
              
//                 {/* <img style="display: block;-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);" src="https://akshaysaini.in/img/plane.gif" /> */}
//             </div>
//             <div class="col-lg-6 text-center">
//                 <h1 class="display-6 fw-bold text-body-emphasis lh-1 mb-3">hi Kamesh Here !</h1>
//                 <p class="lead">
//                 23-year-old software developer from india,

//  am a full-stack dev, drink instant coffee and get coding advice from my Dog, Zara.</p>
//                 <div>
//                 <button type="button" class="btn border-outline btn-lg px-4 me-md-2"><FaFileDownload /> Resume</button>
              
//                 </div>
//             </div>
//             </div>
//             <Social />

//             </div>
//         </>
//     )
// }

// export default HeroSection;

import { useTranslation } from 'react-i18next';
import profile from '../assets/x.webp.webp';
import { FaFileDownload } from "react-icons/fa";
import Social from './socials';

function HeroSection() {
  const { t } = useTranslation();

  return (
    <div id="home" className="container full-height-screen">
      <div className="row flex-lg-row-reverse justify-content-center align-items-center g-5 py-3">
        <div className="col-6 col-sm-8 col-lg-6">
          <img
            src={profile}
            className="border-outline profilex d-block mx-lg-auto img-fluid rounded-5"
            alt={t('hero.greeting')}
            width="300"
            height="100"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6 text-center">
          <h1 className="display-6 fw-bold text-body-emphasis lh-1 mb-3">{t('hero.greeting')}</h1>
          <p className="lead">{t('hero.description')}</p>
          <div>
            <button type="button" className="btn border-outline btn-lg px-4 me-md-2">
              <FaFileDownload /> {t('hero.resume')}
            </button>
          </div>
        </div>
      </div>
      <Social />
    </div>
  );
}

export default HeroSection;
