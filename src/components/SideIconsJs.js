import React, { useEffect,useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import { Tooltip } from "@mui/material";

import ToolTip from "./ToolTip";
import FriendAvatar from './FriendAvatar';


function SideIconsJs() {
       var rand=0;
       const host="http://localhost:5000"
       const [user,setUser]=useState(null)
       useEffect(() => {
              const getUserProfile=async ()=>{
                    const response=await fetch(`${host}/api/auth/getuser2`,{
                        method: 'GET',
                        headers: {
                          'auth-token': localStorage.getItem('token')
                        },
                      });
                
                      const json=await response.json();
                     //  console.log("side",json);
                     setUser(json[0])    
                    }
                    getUserProfile();
                    console.log(user);
          }, [])
       return (
              <div className="SideIconsJs">
              {/* 
                     <Link to="/friend">
                            <div className='Avatars'>
                                   <Tooltip title={<ToolTip img="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=466&q=80" link="/profile/123" name="Mark" about="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, sunt deleniti? Illum " footer="114 likes" />} arrow  placement="right" style={{"backgroundColor":"red"}}>
                                          <Avatar alt="Remy Sharp" src="https://dominicrussel.com/authors/admin/avatar_hu8d30e29128cae2b0d49276543cea6665_24055_250x250_fill_q90_lanczos_center.jpg" />
                                   </Tooltip>

                            </div>
                     </Link>
                     <Link to="/friend?connection=1">

                            <div className='Avatars'>
                                   <Tooltip title={<ToolTip img="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=466&q=80" link="/profile/123" name="Mark" about="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, sunt deleniti? Illum " footer="114 likes" />} arrow  placement="right">

                                          <Avatar alt="Remy Sharp" src="https://cyber-privacy.net/wp-content/uploads/thispersondoesnotexist.com-image01.jpg.webp" />
                                   </Tooltip>
                            </div>
                     </Link>

                     <Link to="/friend?connection=1">

                            <div className='Avatars'>
                                   <Tooltip title={<ToolTip img="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=466&q=80" link="/profile/123" name="Mark" about="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, sunt deleniti? Illum " footer="114 likes" />} arrow  placement="right">
                                          <Avatar alt="Remy Sharp" src="https://cyber-privacy.net/wp-content/uploads/thispersondoesnotexist.com-image02.jpg.webp" />
                                   </Tooltip>

                            </div>
                     </Link>

                     <Link to="/friend?connection=1">

                            <div className='Avatars'>
                                   <Tooltip title={<ToolTip img="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=466&q=80" link="/profile/123" name="Mark" about="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, sunt deleniti? Illum " footer="114 likes" />} arrow  placement="right">
                                          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                                   </Tooltip>

                            </div>
                     </Link>

                     <Link to="/friend?connection=1">

                            <div className='Avatars'>
                                   <Tooltip title={<ToolTip img="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=466&q=80" link="/profile/123" name="Mark" about="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, sunt deleniti? Illum " footer="114 likes" />} arrow  placement="right">
                                          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                   </Tooltip>

                            </div>
                     </Link> */}
                        {user&&user.friends.map((element) => {
                     
    return <div key={user._id} style={{"padding":"0","margin":"0"}}>
       <FriendAvatar {...element}/>
    </div>
})}
                     <Tooltip title="Start a new chat" arrow  placement="bottom">
                     <div className='CreateNew'>
                            <AiOutlinePlus />

                     </div>
                     </Tooltip >
              </div>
       )
}

export default SideIconsJs