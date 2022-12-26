import React, { useState } from "react";
import Chip from '@material-ui/core/chip'
import {FaRegThumbsUp,FaRegThumbsDown,FaThumbsDown,FaThumbsUp} from 'react-icons/fa'

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
          <img src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/117818/Picture1_clyfjb.jpg" alt="" />
      </div>
      <div className='Card3Info'>
        <div className="Card3Author">
            <div className="Card3AuthorPic">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            </div>
            <div className="Card3AuthorName">
              Mark 
            </div>
        </div>
        <div className="Card3InfoTitle">
            How we saved 1M+ children around the world and this
        </div>
        <div className="Card3InfoDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore earum corrupti odio eum id vero nam repudiandae incidunt, molestiae fugit officiis veritatis ea ex accusant...
        </div>
        <div className="Card3InfoTags">
        
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