import React, { useState } from "react";
import Chip from '@material-ui/core/chip'
import {FaRegThumbsUp,FaRegThumbsDown,FaThumbsDown,FaThumbsUp} from 'react-icons/fa'
import { Tooltip } from "@mui/material";
import Card2 from "./Card2";
import ToolTip from "./ToolTip";
import Modal2 from './Modal2'
import { Link } from "react-router-dom";


function Card3() {
    
const [likes, setlikes] = useState(23) 
const [liked, setliked] = useState("") 
   const handleLiked=()=>{
    if(liked==="l")
    {
      setliked("");
      setlikes(likes-1);
    }
    else if(liked==="")
    {
      setliked("l");
      setlikes(likes+1);
    }
    else
    {
      setliked("l")
      setlikes(likes+2);
    }
    }
    const handledDisliked=()=>{
      if(liked==="d")
      {
        setliked("");
        setlikes(likes+1);
      }
      else if(liked==="")
      {
        setliked("d");
        setlikes(likes-1);
      }
      else
      {
        setliked("d")
        setlikes(likes-2);
      }
    }
  return (
    <div className='Card3 hoverEffects2'>
      <div className='Card3Img'>
      <Link to="/story/123">
          <img src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/117818/Picture1_clyfjb.jpg" alt="" />
      </Link>
      </div>

      <div className='Card3Info'>
        <div className="Card3Author">
          <Tooltip title={<ToolTip img="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=466&q=80" link="/profile/123" name="Mark" about="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, sunt deleniti? Illum " footer="114 likes"/>} arrow >
            <div className="Card3AuthorPic">
             
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className="hoverEffects"/>
            
            </div>
            
            </Tooltip>
            <div className="Card3AuthorName">
              Mark 
            </div>
            <div className="share" style={{"marginLeft":"auto","fontSize":"1.3rem"}}>
              <Modal2/>
            </div>
        </div>
        <div className="Card3InfoTitle ">
            How we saved 1M+ children around the world and this
            
        </div>
        <div className="Card3InfoDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore earum corrupti odio eum id vero nam repudiandae incidunt, molestiae fugit officiis veritatis ea ex accusant...
        </div>
        <div className="Card3InfoTags">
        
        <Chip label="Chip Outlined" variant="outlined" className='ChipMui hoverEffects' style={{"color":"rgb(129, 115, 249)","border":"1px solid rgb(129, 115, 249)","fontSize":"0.7rem"}}/>
        <Chip label="Chip Outlined" variant="outlined" className='ChipMui hoverEffects' style={{"color":"rgb(129, 115, 249)","border":"1px solid rgb(129, 115, 249)","fontSize":"0.7rem"}}/>
        <Chip label="Chip Outlined" variant="outlined" className='ChipMui hoverEffects' style={{"color":"rgb(129, 115, 249)","border":"1px solid rgb(129, 115, 249)","fontSize":"0.7rem"}}/>
        <Chip label="Chip Outlined" variant="outlined" className='ChipMui hoverEffects' style={{"color":"rgb(129, 115, 249)","border":"1px solid rgb(129, 115, 249)","fontSize":"0.7rem"}}/>
        <Chip label="Chip Outlined" variant="outlined" className='ChipMui hoverEffects' style={{"color":"rgb(129, 115, 249)","border":"1px solid rgb(129, 115, 249)","fontSize":"0.7rem"}}/>
        <Chip label="Chip Outlined" variant="outlined" className='ChipMui hoverEffects' style={{"color":"rgb(129, 115, 249)","border":"1px solid rgb(129, 115, 249)","fontSize":"0.7rem"}}/>
        <Chip label="Chip Outlined" variant="outlined" className='ChipMui hoverEffects' style={{"color":"rgb(129, 115, 249)","border":"1px solid rgb(129, 115, 249)","fontSize":"0.7rem"}}/>
        </div>
        <div className="Card3InfoFooter">
          <div className="Card3InfoLike">
              <div className="Likes hoverEffects" style={{"color":"white","fontSize":"1.2rem"}}>
              {liked==="l"&&<FaThumbsUp onClick={()=>handleLiked()} />}{liked!=="l"&&<FaRegThumbsUp onClick={()=>handleLiked()}/>}
               </div>
               {likes}
               <div className="Dislikes hoverEffects" style={{"color":"white","fontSize":"1.2rem"}}>

               {liked==="d"&&<FaThumbsDown onClick={()=>handledDisliked()}/>}{liked!=="d"&&<FaRegThumbsDown onClick={()=>handledDisliked()}/>}
               </div>
            </div>
          <div className="Card3InfoDate">
                  Dec 21, 2021
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Card3