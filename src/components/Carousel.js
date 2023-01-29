import React from 'react'

function Carousel() {
  return (
    <div className="CarouselJs">

    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="cont" style={{"boxShadow":" inset 0 0 100px black"}}>

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkEsxYywifbWDVq00CdG55qwFZU44D2SQKoQ&usqp=CAU" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block" style={{"position":"absolute","bottom":"0%","left":"0%","color":"white", "backdropFilter": "blur(6px)", "width":"100%",   "filter": "brightness(80%)",    "boxShadow": "inset 0 0 100px transparent"}}>
        <h3>
          Help make a difference 
        </h3>
        <p style={{"color":"#f3f3f3"}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur repudiandae quam adipisci nihil consectetur, velit nam perspiciatis natus voluptas ea placeat, deleniti laudantium est non magnam tempora animi nobis doloribus.
        </p>
      </div>
      </div>
    </div>
    <div className="carousel-item ">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQutGaOMtNT9qEOL5FJ9YfdhfpmQLVkbsG17g&usqp=CAU" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block" style={{"position":"absolute","bottom":"0%","left":"0%","color":"white", "backdropFilter": "blur(6px)", "width":"100%",   "filter": "brightness(80%)",    "boxShadow": "inset 0 0 100px transparent"}}>
        <h3>
          Help make a difference 
        </h3>
        <p style={{"color":"#f3f3f3"}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur repudiandae quam adipisci nihil consectetur, velit nam perspiciatis natus voluptas ea placeat, deleniti laudantium est non magnam tempora animi nobis doloribus.
        </p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://spweb-uploads.s3.theark.cloud/2012/08/0917ET-A15-feeding-programs.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block" style={{"position":"absolute","bottom":"0%","left":"0%","color":"white", "backdropFilter": "blur(6px)", "width":"100%",   "filter": "brightness(80%)",    "boxShadow": "inset 0 0 100px transparent"}}>
        <h3>
          Help make a difference 
        </h3>
        <p style={{"color":"#f3f3f3"}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur repudiandae quam adipisci nihil consectetur, velit nam perspiciatis natus voluptas ea placeat, deleniti laudantium est non magnam tempora animi nobis doloribus.
        </p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

  )
}

export default Carousel