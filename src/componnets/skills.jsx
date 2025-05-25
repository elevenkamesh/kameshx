import { useTranslation } from 'react-i18next';
import GetImage from '../utils/images.jsx';

const images = GetImage();

const Skills = () =>{
    const { t } = useTranslation();

    const sxx = [
        {
            image : images.js ,
            title : 'JavaScript',
            description : 'programing language'
        },
        {
            image : images.ts ,
            title : 'TypeScript',
            description : 'wrapper of javaScript'
        },

        {
            image : images.golang ,
            title : 'Golang',
            description : 'programing language'
        } ,
        {
            image : images.react ,
            title : 'React',
            description : 'frontend library'
        },
        {
            image : images.node ,
            title : 'Node Js ',
            description : 'JS runtime'
        },
        {
            image : images.mongo ,
            title : 'mongo',
            description : 'Database'
        },
        {
            image : images.posgress ,
            title : 'Posgress',
            description : 'Database'
        },
        {
            image : images.aws ,
            title : 'AWS',
            description : 'cloud Provider'
        }
        ,
        {
            image : images.git ,
            title : 'GIT',
            description : 'version control'
        }
        ,
        {
            image : images.docker ,
            title : 'Docker',
            description : 'let we ship our computer'
        }
        ,
        {
            image : images.kubernetes ,
            title : 'K8s',
            description : 'kubernetes'
        }
        ,
        {
            image : images.bash ,
            title : 'bash',
            description : 'script'
        }
    ]

    return (
<div class="container pb-4" id="skill">
    <h1 class="pb-2 border-bottom display-10 text-center">{t("heading.skills")}</h1>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">

    {sxx.map((e) => 
    
    <div class="col d-flex align-items-start">
    <img class="bi text-body-secondary flex-shrink-0 me-3" width="50" height="50" src={e.image}/>
   
    <div>
      <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">{e.title}</h3>
      {/* <p>{e.description}</p> */}
    </div>
  </div>
  
  )}

 





 
      </div>
    </div>



    ) 
}

export default Skills;