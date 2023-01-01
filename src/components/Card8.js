import React from 'react'
import {BsFillBookmarkPlusFill} from 'react-icons/bs'
import Modal2 from './Modal2'
import ToolTip from './ToolTip';
import { Tooltip } from '@mui/material'

function Card8() {
  return (
    <div className='Card8'>
      <div className="Card8Header">
        <div className="Card8Profile">
        <Tooltip title={<ToolTip img="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=466&q=80" link="/profile/123" name="Mark" about="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, sunt deleniti? Illum " footer="114 likes" />} arrow>
          <img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-2.jpg" alt="" />
          </Tooltip>
        </div>
        <div className="Card8HeaderContent">
          <div className="Card8Name textClip-1">
              Mark
          </div>
          <div className="Card8Date textClip-1">
              28th December 2021
          </div>
        </div>
      </div>
      <div className="Card8Content">
          <img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-2.jpg" alt="" />
          <div className="Card8Title textClip-1">
                  This is how you do stuff
          </div>
          <div className="Card8Desc textClip-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla eveniet dolore iste repudiandae officia quae magni. Eum libero modi, quisquam accusantium cum in esse? Nostrum ea illo unde excepturi pariatur!
          </div>
      </div>
      <div className="Card8Footer">
          <div className="Card8Save">
                <BsFillBookmarkPlusFill  className='hoverEffects'/>
          </div>
          <Modal2/>
      </div>
    </div>
  )
}

export default Card8