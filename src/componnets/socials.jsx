import { IoLogoLinkedin } from "react-icons/io5";
import { FaFileDownload , FaGithub, FaDev , FaMedium } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import links from '../utils/links';
const Social = ()=>{
    return (

  <div class="d-flex gap-2 justify-content-center py-5">
<div className="social-card">
<a href={links.linkedin} className="badge d-flex align-items-center  text-secondary-emphasis  border border-secondary-subtle rounded-pills" >
        <span className="logo-class px-2"><IoLogoLinkedin /> </span>
         <p  className="pt-3">linkedin</p>
          </a>
          </div>
<div className="social-card">

          <a href={links.github} className="badge d-flex align-items-center  text-secondary-emphasis  border border-secondary-subtle rounded-pills" >
        <span className="logo-class px-2"><FaGithub /> </span>
         <p  className="pt-3">GitHub</p>
          </a>
</div>
<div className="social-card">

          <a href={links.dev} className="badge d-flex align-items-center  text-secondary-emphasis  border border-secondary-subtle rounded-pills" >
        <span className="logo-class px-2"><FaDev /> </span>
         <p  className="pt-3">dev.to</p>
          </a>
</div>
<div className="social-card">

          <a href={links.medium} className="badge d-flex align-items-center  text-secondary-emphasis  border border-secondary-subtle rounded-pills" >
        <span className="logo-class px-2"><FaMedium /> </span>
         <p  className="pt-3">Medium</p>
          </a>
</div>

<div className="social-card">

          <a href={links.leetcode} className="badge d-flex align-items-center  text-secondary-emphasis  border border-secondary-subtle rounded-pills" >
        <span className="logo-class px-2"><TbBrandLeetcode /> </span>
         <p  className="pt-3">Leetcode</p>
          </a>
</div>
  
    
</div> 
    )
}

export default Social