import React from 'react'
import { Link } from 'react-router-dom'

function Card2() {
  return (
    <div className='Card2' style={{"backgroundImage":"url(https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=)","backgroundSize":"cover","width":"100%","minHeight":"17rem","backgroundRepeat":"no-repeat","backgroundPosition":"right","borderRadius":"1rem", "boxShadow": "0 0 100px rgba(0,0,0,0.9) inset","border":"1px solid grey"}}>
       
        <div className='Card2Info'>
            <div className='Card2InfoTitle'>
                This is title
            </div>
            <div className='Card2InfoDetail'>
                Lorem ipsum dolorReiciendis, nisi recusandae atque laudantium a mollitia corrupti exercitationem tempore. Ex, cumque maxime quia aut delectus ducimus labore autem facilis quidem rerum?
            </div>
            <div className='Card2InfoFoot'>
                <p>1231 Members</p>
                <p>Some button/action</p>
            </div>
            <Link to="/foundation/123">
            <div className="Card2InfoLearn">
            Learn More ->
        </div>
            </Link>

        </div>
        
    </div>
  )
}

export default Card2