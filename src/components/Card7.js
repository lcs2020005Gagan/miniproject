import React from 'react'
import Modal2 from './Modal2'
function Card7() {
  return (
    <div className="Card7" style={{"border":"1px solid grey","backgroundImage":"linear-gradient(#340230,#060721)","borderRadius":"1rem"}}>
    <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(135).webp" className="card-img-top"
      alt="Responsive image" style={{"borderRadius":"1rem"}}/>
    <div className="card-body p-4" style={{"fontSize":"0.8rem","borderRadius":"1rem"}}>
    <div className="ok" style={{"display":"flex","justifyContent":"space-between","fontSize":"0.8rem"}}>
      <h4 className="fw-bold mb-4" style={{"fontSize":"1.3rem","color":"white"}}>Ut enim ad minim veniam</h4>
      <Modal2 style={{"fontSize":"1rem"}}/>
      </div>
    
      <p className="text-muted mb-4"><i className="far fa-clock" aria-hidden="true"></i> 2017</p>
      <p className="mb-0 clipText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
  )
}

export default Card7
 
