import React, { useState } from 'react'
import { BiSend } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoSettings } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import Avatar from '@mui/material/Avatar';
import Modal from './Modal';
import Notification from './Notification';
import Setting from './Setting';
import { Link } from 'react-router-dom';


function RightSideNav() {
    const [Mode, setMode] = useState("");
    const handleClick = (lmao) => {
        setMode(lmao);
    }
    const handleClickNull = () => {
        setMode("");
    }
    return (

        <div className='RightSideNavJs'>
             
            {Mode===""&&<div className="RightSideNavBottom">
                {/* <div className='RightSideModalDiv'>

                    <Modal />
                </div> */}
                <div className='Profile'>
                    <div className='ProfileImgDiv'>
                        <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                            <defs>
                                <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                                    <image href="https://cpb-us-w2.wpmucdn.com/portfolio.newschool.edu/dist/2/485/files/2014/08/DSC_1004-2-1a1yqd6.jpg" width="150" height="100" />
                                </pattern>
                            </defs>
                            <Link to="/profile/123">

                                <polygon id="profilePic" points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)" />
                            </Link>
                            

                        </svg>
                    </div>
                    <p>Random Guy</p>
                </div>

                <div className='NewMembers'>
                    <div className='NewMembersTop'>
                        <p>New Members</p>
                        <p id="NewMembersTopSeeAll">See All</p>
                    </div>
                    <div className='NewMembersBottom'>
                        <div className='NewMemberCard'>
                            <div className='NewMemberCardProfile'>
                                <Avatar alt="Remy Sharp" src="https://dominicrussel.com/authors/admin/avatar_hu8d30e29128cae2b0d49276543cea6665_24055_250x250_fill_q90_lanczos_center.jpg" />
                            </div>
                            <div className='NewMemberCardDetails'>
                                <span className='NewMemberCardDetailsName'>Amanda</span>
                                <span className='NewMemberCardDetailsTime'>3 minutes ago</span>
                            </div>

                        </div>
                        <div className='NewMemberCard'>
                            <div className='NewMemberCardProfile'>
                                <Avatar alt="Remy Sharp" src="https://cyber-privacy.net/wp-content/uploads/thispersondoesnotexist.com-image01.jpg.webp" />
                            </div>
                            <div className='NewMemberCardDetails'>
                                <span className='NewMemberCardDetailsName'>Amanda</span>
                                <span className='NewMemberCardDetailsTime'>3 minutes ago</span>
                            </div>

                        </div>
                        <div className='NewMemberCard'>
                            <div className='NewMemberCardProfile'>
                                <Avatar alt="Remy Sharp" src="https://cyber-privacy.net/wp-content/uploads/thispersondoesnotexist.com-image02.jpg.webp" />
                            </div>
                            <div className='NewMemberCardDetails'>
                                <span className='NewMemberCardDetailsName'>Amanda</span>
                                <span className='NewMemberCardDetailsTime'>3 minutes ago</span>
                            </div>

                        </div>
                    </div>

                </div>


                {/* recent activity */}

                <div className='NewMembers'>
                    <div className='NewMembersTop'>
                        <p>Recent Activity</p>
                        <p id="NewMembersTopSeeAll">See All</p>
                    </div>
                    <div className='NewMembersBottom'>
                        <div className='NewMemberCard'>
                            <div className='NewMemberCardProfile'>
                                <Avatar alt="Remy Sharp" src="https://dominicrussel.com/authors/admin/avatar_hu8d30e29128cae2b0d49276543cea6665_24055_250x250_fill_q90_lanczos_center.jpg" />
                            </div>
                            <div className='NewMemberCardDetails'>
                                <span className='NewMemberCardDetailsName'>Amanda</span>
                                <span className='NewMemberCardDetailsTime'>3 minutes ago</span>
                            </div>

                        </div>
                        <div className='NewMemberCard'>
                            <div className='NewMemberCardProfile'>
                                <Avatar alt="Remy Sharp" src="https://cyber-privacy.net/wp-content/uploads/thispersondoesnotexist.com-image01.jpg.webp" />
                            </div>
                            <div className='NewMemberCardDetails'>
                                <span className='NewMemberCardDetailsName'>Amanda</span>
                                <span className='NewMemberCardDetailsTime'>3 minutes ago</span>
                            </div>

                        </div>
                        <div className='NewMemberCard'>
                            <div className='NewMemberCardProfile'>
                                <Avatar alt="Remy Sharp" src="https://cyber-privacy.net/wp-content/uploads/thispersondoesnotexist.com-image02.jpg.webp" />
                            </div>
                            <div className='NewMemberCardDetails'>
                                <span className='NewMemberCardDetailsName'>Amanda</span>
                                <span className='NewMemberCardDetailsTime'>3 minutes ago</span>
                            </div>

                        </div>
                    </div>

                </div>

            </div>}
            
        </div>
    )
}

export default RightSideNav