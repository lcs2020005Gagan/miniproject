
import React from 'react'
import { Link } from 'react-router-dom'
import Modal2 from './Modal2'
import ToolTip from './ToolTip'
import { Tooltip } from '@mui/material'
function card4(props) {
  return (
    <div className='card4'>
 
     <img src={`${props.img}`}  className="card4__image" alt="" />
     <div className="card4__overlay">
       <div className="card4__header">
         <svg className="card4__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>     
         <Tooltip title={<ToolTip img="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=466&q=80" link="/profile/123" name="Mark" about="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, sunt deleniti? Illum " footer="114 likes" />} arrow>
         <img className="card4__thumb" src={`${props.authorImg}`} alt="" />
         </Tooltip>
         <div className="card4__header-text">
           <h3 className="card4__title">{props.author}</h3>
           <span className="card4__tagline">{props.title}</span>    
           <Link to={`${props.link}`}>        
           <span className="card4__status">Learn More</span>
           </Link>

         </div>
           <Modal2/>
       </div>
       <p className="card4__description">{props.desc}</p>
     </div>

    </div>
  )
}

export default card4