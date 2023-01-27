import React from 'react'
import { Link } from 'react-router-dom'
import Modal2 from './Modal2'
import ToolTip from './ToolTip'

function Card2(props) {
  return (
    <div className='Card2' style={{"backgroundImage":`url(${props.profileImg})`,"backgroundSize":"cover","width":"100%","minHeight":"19rem","backgroundRepeat":"no-repeat","backgroundPosition":"right","borderRadius":"1rem", "boxShadow": "0 0 100px rgba(0,0,0,0.9) inset","border":"1px solid grey"}}>
       <div className='Card2Info'>
            <div className='Card2InfoTitle textClip-2'>
{props.name}            </div>
            <div className='Card2InfoDetail textClip-4'  dangerouslySetInnerHTML={{__html: props.about}}>

            </div>
            <div className='Card2InfoFoot'>
            <Link to={`/foundation/${props._id}`}>
            Learn More ->
            </Link>
                <Modal2/>
            </div>
           
        </div>
        
    </div>
  )
}

export default Card2