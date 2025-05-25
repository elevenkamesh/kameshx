
// import { IoLogoLinkedin } from "react-icons/io5";
// import {  FaGithub, FaDev , FaMedium } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import links from '../utils/links';
// import { FaHeart } from "react-icons/fa";
// import { useTranslation } from "react-i18next";
// const Footer = () =>{
//   const { t } = useTranslation();
//   const year = new Date().getFullYear();
// return (
// <div class="container">
//   <footer class="py-3 my-4">
//     <ul class="nav justify-content-center border-bottom pb-3 mb-3">
//       <li class="nav-item"><a href={links.linkedin} class="nav-link px-4 text-body-secondary"><IoLogoLinkedin /></a></li>
//       <li class="nav-item"><a href={links.github} class="nav-link px-4 text-body-secondary"><FaGithub /></a></li>
//       <li class="nav-item"><a href={links.twitter} class="nav-link px-4 text-body-secondary"><FaXTwitter /></a></li>
//       <li class="nav-item"><a href={links.dev} class="nav-link px-4 text-body-secondary"><FaDev /></a></li>
//       <li class="nav-item"><a href={links.medium} class="nav-link px-4 text-body-secondary"><FaMedium /></a></li>
//     </ul>
//     <p class="text-center text-body-secondary">©  No  copyright issues. | privacy?</p>
//     <p class="text-center text-body-secondary"> Feel free to copy. If you need any help, ping me !
//     </p>
// <image  src="https://giphy.com/gifs/Dr20YdKvwrkg1UioCm" height="400" alt="plane"/>
//     <p class="text-center text-body-secondary">
//           Made with <span className="love"><FaHeart /></span> in India
//         </p>
//   </footer>
// </div>
// )
// }

// export default Footer;


import { useTranslation, Trans } from 'react-i18next';
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub, FaDev, FaMedium, FaHeart } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import links from '../utils/links';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href={links.linkedin} className="nav-link px-4 text-body-secondary"><IoLogoLinkedin /></a></li>
          <li className="nav-item"><a href={links.github} className="nav-link px-4 text-body-secondary"><FaGithub /></a></li>
          <li className="nav-item"><a href={links.twitter} className="nav-link px-4 text-body-secondary"><FaXTwitter /></a></li>
          <li className="nav-item"><a href={links.dev} className="nav-link px-4 text-body-secondary"><FaDev /></a></li>
          <li className="nav-item"><a href={links.medium} className="nav-link px-4 text-body-secondary"><FaMedium /></a></li>
        </ul>
        <p className="text-center text-body-secondary">{t('footer.privacy')}</p>
        <p className="text-center text-body-secondary">{t('footer.copy')}</p>
        {/* Corrected tag from <image> to <img> */}
        {/* <img src="https://giphy.com/gifs/Dr20YdKvwrkg1UioCm" height="400" alt="plane" /> */}
        <p className="text-center text-body-secondary">
          <Trans i18nKey="footer.made_with" components={{ 0: <span className="love"><FaHeart /></span> }} />
        </p>
      </footer>
    </div>
  );
}

export default Footer;
