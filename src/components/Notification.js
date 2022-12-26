import React from 'react'
import Avatar from '@mui/material/Avatar';


function Notification() {
    return (
        <div className='NotificationJs'>
            {/* display all notifications here */}
            <h3>
                Mark all as read
            </h3>
            <div className='NewMemberCard'>
                <div className='NewMemberCardProfile'>
                    <Avatar alt="Remy Sharp" src="https://dominicrussel.com/authors/admin/avatar_hu8d30e29128cae2b0d49276543cea6665_24055_250x250_fill_q90_lanczos_center.jpg" />
                </div>
                <div className='NewMemberCardDetails'>
                    <span className='NewMemberCardDetailsName'>Amanda</span>
                    <span className='NewMemberCardDetailsTime'>Hey there!</span>
                </div>

            </div>
            <div className='NewMemberCard'>
                <div className='NewMemberCardProfile'>
                    <Avatar alt="Remy Sharp" src="https://dominicrussel.com/authors/admin/avatar_hu8d30e29128cae2b0d49276543cea6665_24055_250x250_fill_q90_lanczos_center.jpg" />
                </div>
                <div className='NewMemberCardDetails'>
                    <span className='NewMemberCardDetailsName'>Save Children</span>
                    <span className='NewMemberCardDetailsTime'>Started a fund raising</span>
                </div>

            </div>
            <div className='NewMemberCard'>
                <div className='NewMemberCardProfile'>
                    <Avatar alt="Remy Sharp" src="https://dominicrussel.com/authors/admin/avatar_hu8d30e29128cae2b0d49276543cea6665_24055_250x250_fill_q90_lanczos_center.jpg" />
                </div>
                <div className='NewMemberCardDetails'>
                    <span className='NewMemberCardDetailsName'>Save humanity</span>
                    <span className='NewMemberCardDetailsTime'>Started a live streaming!</span>
                </div>

            </div>
        </div>
    )
}

export default Notification