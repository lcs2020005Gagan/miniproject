import React from 'react'
import {FaComments} from 'react-icons/fa'
import {BsFillBookmarkPlusFill} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Modal2 from './Modal2'
import SpeechWave from './SpeechWave'
import {FaDonate} from 'react-icons/fa'

function Card9(props) {
  return (
    <div className="Card9" >
     <div className="Card9Pic">
        <img src="https://dominicrussel.com/authors/admin/avatar_hu8d30e29128cae2b0d49276543cea6665_24055_250x250_fill_q90_lanczos_center.jpg" alt="" />
     </div>
     <div className="Card9Cont">
        <div className="Card9Title textClip-1">
          <div className="Card9Name">
          Mark
          </div>
          <div className="Card9Date">
            <BsDot/>20th October,2021
          </div>
        </div>
        <div className="Card9Content textClip-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, non dolorum dignissimos asperiores dicta ratione voluptatum cupiditate quis explicabo voluptates ipsa ex possimus quaerat nobis at. Esse assumenda id voluptates.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, non dolorum dignissimos asperiores dicta ratione voluptatum cupiditate quis explicabo voluptates ipsa ex possimus quaerat nobis at. Esse assumenda id voluptates.
        </div>
        <div className="Card9Image">
            <img src="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" alt="" />
        </div>
        <div className="Card9Footer">
            {/* <div className="Card9Comments hoverEffects">
              <FaComments/> 133

            </div>
            <div className="Card9Like hoverEffects">
              <BsFillBookmarkPlusFill/>
            </div>
            <div className="Card9Share">
              <Modal2/>
            </div> */}

            <div className="Donate">
             <FaDonate/> Donate 
            </div>
            <div className="LearnMore">
                    <Link to={`${props.link}`} style={{"color":"grey"}}>

              Learn More ->
                  </Link>

            </div>
        </div>

     </div>
    </div>
  )
}

export default Card9