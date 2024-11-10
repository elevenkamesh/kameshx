
import { IoLogoLinkedin } from "react-icons/io5";
import {  FaGithub, FaDev , FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import links from '../utils/links';

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
    <p class="text-center text-body-secondary">© {year} 11kamesh.in | privacy?</p>
  </footer>
</div>
)
}

export default Footer;
