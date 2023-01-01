import React from 'react'
import {Link} from 'react-router-dom'
import ToolTip from './ToolTip';
import { Tooltip } from '@mui/material'

function Card() {
    const logo = require('./svgg2.png');


        return (
    <div className="carddd">
        <img src='https://img.freepik.com/premium-photo/top-view-gaming-gear_160097-847.jpg?w=2000' alt=''/>
        <div className='cardddimg'>
            <img src={logo} className='img123' />
            <div className='cardinsimg'></div>
        </div>
        <a href='www.google.com'>

        
        <div className='CardProfile'>
        <Tooltip title={<ToolTip img="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=466&q=80" link="/profile/123" name="Mark" about="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, sunt deleniti? Illum " footer="114 likes" />} arrow>
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            </Tooltip>
        </div>
        </a>
        <div className='CardContent'>
            <div className='CardContentHeading'>
                this is something
            </div>
            hello there this is someone from the something and hope to see you soon. bye!and this ish toiajdslfk liajsldfkj laksdjf lasjdfkalskdfjl l
        </div>

    </div>
  )
}

export default Card