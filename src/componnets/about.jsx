import  keyboad from '../assets/keyboard.gif'; 
const About = ()=>{
    return (
        <div id="about">
<div class="full-screen-height px-4 pt-5 my-5 text-center border-bottom">
<h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">About Me</h1>

    <div class="col-lg-6 mx-auto">
      <div class="mb-4 text-align-right width-100">
      I've always had a deep fascination with technology. My journey began in childhood when I repaired my grandmother's phone and continued through my school years,
fixing my own PC and helping friends with theirs for free. This early exposure to troubleshooting and repairing computers led me to start a small business, charging for my repair services, which further fueled my passion for systems and gaming
My interest in tech expanded when I began building gaming PCs for others, merging my love for gaming and hardware. This passion drove me to think bigger, focusing on scalable and high-availability systems and servers.
      </div>
  
    </div>
    <div class="overflow-hidden">
      <div class="container px-5">
        <img src={keyboad} class="border-outline img-fluid  rounded-3 " alt="Example image" width="auto" height="200" loading="lazy" />
      </div>
    </div>
  </div>

        </div>
    )
}

export default About