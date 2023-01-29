import React, { useEffect,useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import { Tooltip } from "@mui/material";

import ToolTip from "./ToolTip";

function FriendAvatar(props) {
    var rand=0;
       const host="http://localhost:5000"
       const [user,setUser]=useState(null)
       const [link,setLink]=useState([])
       useEffect(() => {
                const sortLinks=()=>{
                    if(props._id>user._id)
                    {
                        setLink([user._id,props._id]);
                    }
                    else
                    {
                        setLink([props._id,user._id]);
                    }
                    console.log(link)
                }
              const getUserProfile=async ()=>{
                    const response=await fetch(`${host}/api/auth/getuser2`,{
                        method: 'GET',
                        headers: {
                          'auth-token': localStorage.getItem('token')
                        },
                      });
                
                      const json=await response.json();
                     setUser(json[0])    
                    }
                    getUserProfile();
                    if(user)
                    sortLinks();
          }, [])
  return (
    
    <Link to={`/friend/${link[0]}_${link[1]}`}>
    {user&&<div className='Avatars'>
           <Tooltip title={<ToolTip img={props.profileImg} link={`/profile/${props._id}`} name={props.name} about={props.about} footer="114 likes" />} arrow  placement="right" style={{"backgroundColor":"red"}}>
                  <Avatar alt="Remy Sharp" src={props.profileImg} />
           </Tooltip>

    </div>}
</Link> 
 )
}

export default FriendAvatar