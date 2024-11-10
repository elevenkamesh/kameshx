// import images from "../utils/images";
import profile from '../assets/profile.jpg';
// import profile from '../assets/me.jpg';

import { FaFileDownload  } from "react-icons/fa";
import Social from './socials';
function HeroSection (){
    return (
        <>
        <div id='home' className="container full-height-screen">
            <div class="  row flex-lg-row-reverse justify-content-center align-items-center g-5 py-3">
            <div className="col-10 col-sm-8 col-lg-6">
                <img src={profile} className=" border-outline rounded-circle d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="400" height="500" loading="lazy" />
          
            </div>
            <div class="col-lg-6 text-center">
                <h1 class="display-6 fw-bold text-body-emphasis lh-1 mb-3">hi Kamesh Here !</h1>
                <p class="lead">
                23-year-old software developer from india,

 am a full-stack dev, drink instant coffee and get coding advice from my Dog, Zara.</p>
                <div>
                <button type="button" class="btn border-outline btn-lg px-4 me-md-2"><FaFileDownload /> Resume</button>
              
                </div>
                <Social />
            </div>
            </div>
            </div>
        </>
    )
}

export default HeroSection;
