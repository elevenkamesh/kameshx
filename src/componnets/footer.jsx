
import { IoLogoLinkedin } from "react-icons/io5";
import {  FaGithub, FaDev , FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import links from '../utils/links';
import { FaHeart } from "react-icons/fa";
const Footer = () =>{
    const year = new Date().getFullYear();
return (
<div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href={links.linkedin} class="nav-link px-4 text-body-secondary"><IoLogoLinkedin /></a></li>
      <li class="nav-item"><a href={links.github} class="nav-link px-4 text-body-secondary"><FaGithub /></a></li>
      <li class="nav-item"><a href={links.twitter} class="nav-link px-4 text-body-secondary"><FaXTwitter /></a></li>
      <li class="nav-item"><a href={links.dev} class="nav-link px-4 text-body-secondary"><FaDev /></a></li>
      <li class="nav-item"><a href={links.medium} class="nav-link px-4 text-body-secondary"><FaMedium /></a></li>
    </ul>
    <p class="text-center text-body-secondary">©  No  copyright issues. | privacy?</p>
    <p class="text-center text-body-secondary"> Feel free to copy. If you need any help, ping me !
    </p>
<image  src="https://giphy.com/gifs/Dr20YdKvwrkg1UioCm" height="400" alt="plane"/>
    <p class="text-center text-body-secondary">
          Made with <span className="love"><FaHeart /></span> in India
        </p>
  </footer>
</div>
)
}

export default Footer;
