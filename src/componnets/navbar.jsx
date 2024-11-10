

const NavBar = ()=>{
    return (
        <div className="container sticky-top">

<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse fw-bold justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="#">Home</a>
           */}
          <a class="nav-link" aria-current="page" href="#">Home</a>
        
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#cert">Certifications</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#skill">Skills</a>
        </li>        <li class="nav-item">
          <a class="nav-link" href="#about">about</a>
        </li>


                
      </ul>

    </div>
  </div>

</nav>

        </div>
    )

}

export default NavBar;