const Education = () =>{

  const certification =[{
    url : "", 
    certName : "Red Hat Certified System Administrator (RHCSA)",
    website : "Red Hat"
  },
  {
    url : "https://www.linkedin.com/in/kameshx/details/certifications/1728218324706/single-media-viewer/?profileId=ACoAADOYZ2sBdGQ1KyLYcXDh2hy1JYW56RpFYmU", 
    certName : "TypeScript for Beginner to Advanced",
    website : "Udemy"
  }
,
{
  url : "https://www.linkedin.com/in/kameshx/details/certifications/1722185100106/single-media-viewer/?type=IMAGE&profileId=ACoAADOYZ2sBdGQ1KyLYcXDh2hy1JYW56RpFYmU", 
  certName : "Python Course Certification: Mastering the Essentials",
  website : "Scaler"
}] 
    return (
        <div className="eductionx container grid" id="cert">
<div>
            <div>
         
         <h3 class="display-5 fw-bold  text-body-emphasis lh-1 mb-3 pt-0">Education</h3>
         </div>

    <div class=" col-lg-12 d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
  <div class="list-group list-group-checkable d-grid gap-2 border-0">


    <label class="box-lab spb-3 list-group-item rounded-3 py-3" for="listGroupCheckableRadios1">
      Master of Computer Science
      <span class="d-block small opacity-50 mx-5 px-2">Thiagarajar college</span>
    </label>

    <label class="box-lab list-group-item rounded-3 py-3" for="listGroupCheckableRadios2">
       Bachelor of computer Appication
      <span class="d-block small opacity-50 mx-5 px-2">The American College</span>
    </label>

    </div>
    </div>


</div>



<div>
    <div>
    <h3 class="display-5 fw-bold text-center text-body-emphasis lh-1 mb-3">Certfications</h3>
    </div>

  <div class=" col-lg-12 d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
  <div class="list-group list-group-checkable d-grid gap-2 border-0">

    {certification.map(e=>
    
    <a href={e.url} target="_blank" >
    <label class="box-lab list-group-item rounded-3 py-3" for="listGroupCheckableRadios3">
    {e.certName}
      <span class="d-block small opacity-50 mx-5 px-2">{e.website}</span>
    </label>
    </a>
    )
    }



  </div>


</div>



</div>

        </div>
    )
    }

export default Education