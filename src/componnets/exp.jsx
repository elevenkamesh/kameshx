import React from 'react';
import { useTranslation } from 'react-i18next';
const Experience =()=>{
  const { t } = useTranslation();
    const data = [{
    title: t('experience.maticz.Software_Developer'),
    company: 'Maticz Technologies Pvt Ltd',
    image : "data:image/jpeg;base64,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",
    start : t('experience.maticz.start'),
    end :t('experience.maticz.end'),
    description: t('experience.maticz.description') ,
    points: t('experience.maticz.points' ,  { returnObjects: true }),

    }
,
{
    title: t('experience.railway.title'),
    company: t('experience.railway.company'),
    image : "data:image/png;base64,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",

    start : t('experience.railway.start'),
    end :t('experience.railway.end'),
    description: t('experience.railway.description'),
    points: []
    
    }
    ,
    {
        title:  t('experience.freelance.title'),
        company: t('experience.freelance.company'),
    image : "",

        start : t('experience.freelance.start'),
        end :t('experience.freelance.end'),
        description:t('experience.freelance.description'),
    points: []
        
    }
]
    return (
        <div class="container px-4 py-2">
                <h1 class="display-10 text-center fw-bold  mb-3 border-bottom  pb-2">{t("heading.experience")}</h1>
        <div class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
            
  <div class="list-group">
  {data.map((e)=> 
    <a class="list-group-item list-group-item-action d-flex gap-3 py-3">
      <img src={e.image ? e.image :  "https://thebig.co/wp-content/uploads/2017/02/no-logo-featured.jpg"} alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0" />
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class="mb-0">{e.title}</h6>
          <h6 class="mb-0">{e.company}</h6>

          <p class="mb-0 opacity-75">{e.description}</p>

          {e.points.length > 0 && <ul>
           { e.points.map(e=> 
            <li>{e}</li>
            )
            }
          </ul>}
        </div>
        <div className="justify-content-center">
        <small class="opacity-50 text-nowrap px-4">{e.start}</small>
       
        <small class="opacity-50 text-nowrap">{e.end}</small>
        </div>
      </div>
    </a>
  )
  }
  

  </div>
</div>
</div>
    )
}


export default Experience