import React, { useState,useEffect } from "react";
import Chip from '@material-ui/core/chip'
import {FaRegThumbsUp,FaRegThumbsDown,FaThumbsDown,FaThumbsUp} from 'react-icons/fa'
import { Tooltip } from "@mui/material";
import Card2 from "./Card2";
import ToolTip from "./ToolTip";
import Modal2 from './Modal2'
import { Link } from "react-router-dom";


function Card3(props) {
  const host="http://localhost:5000"
  const [user,setUser]=useState(null)
    useEffect(() => {
			const func=async()=>{
			const response=await fetch(`${host}/api/upload/getarticleauthor/${props.author}`,{
				method: 'POST',
			
					  });
			  const json=await response.json();
			  setUser(json)
			  console.log(user)
			}
			func();
		},[])
  

const [likes, setlikes] = useState(props.likes) 
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
    <div className='Card3'>
      <div className='Card3Img'>
      <Link to={`/story/${props._id}`}>
          <img src={props.image} alt="" />
      </Link>
      </div>

      <div className='Card3Info'>
        {user&&<div className="Card3Author">
          <Tooltip title={<ToolTip img={user.profileImg} link={`/profile/${user._id}`} name={user.name} about={user.about} footer="114 friends"/>} arrow >
            <div className="Card3AuthorPic">
             <Link to={`/profile/${user._id}`}>
            <img src={user.profileImg} alt="" className="hoverEffects"/>
             </Link>
            
            </div>
            
            </Tooltip>
            <div className="Card3AuthorName">
              {user.name}
            </div>
            <div className="share" style={{"marginLeft":"auto","fontSize":"1.3rem"}}>
              <Modal2/>
            </div>
        </div>}
        <div className="Card3InfoTitle ">
{props.title}            
        </div>
        <div className="Card3InfoDesc" dangerouslySetInnerHTML={{__html: props.description}}>
          
        </div>
        <div className="Card3InfoTags">
       
        {props.tags.length&&<Chip label={props.tags[0]}variant="outlined" className='ChipMui hoverEffects' style={{"color":"rgb(129, 115, 249)","border":"1px solid rgb(129, 115, 249)","fontSize":"0.7rem"}}/>}
        {props.tags.length>1&&<Chip label={props.tags[1]}variant="outlined" className='ChipMui hoverEffects' style={{"color":"rgb(129, 115, 249)","border":"1px solid rgb(129, 115, 249)","fontSize":"0.7rem"}}/>}
        {props.tags.length>2&&<Chip label={props.tags[2]}variant="outlined" className='ChipMui hoverEffects' style={{"color":"rgb(129, 115, 249)","border":"1px solid rgb(129, 115, 249)","fontSize":"0.7rem"}}/>}
        
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
            <Link to={`/story/${props._id}`} style={{"color":"grey"}}>
            Read More
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Card3