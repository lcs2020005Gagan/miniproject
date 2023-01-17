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

      <img src="https://scontent.fblr2-2.fna.fbcdn.net/v/t1.6435-9/51890271_2298627836816179_7514224874114514944_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=ctOrcU6nhSIAX_FJu_Y&_nc_ht=scontent.fblr2-2.fna&oh=00_AfDs31Om9L2KwftCkKQlEaaqXEqCsiEaB1l0rpg5szCZxg&oe=63D52D2F" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block" style={{"position":"absolute","top":"10%","left":"10%"}}>
      let's build the better world together
      </div>
      </div>
    </div>
    <div className="carousel-item ">
      <img src="https://www.feedingamerica.org/sites/default/files/styles/max_2600x2600/public/2020-05/Mass%20Distrib%201360X450.jpg?itok=05WVE6Jc" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
       
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.alhudatrust.in/data1/images/08.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      
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