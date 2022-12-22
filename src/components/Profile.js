import React from 'react'
import profileBanner from "../assets/img/profileBanner.png";
import { MdModeEditOutline } from 'react-icons/md';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Card2 from './Card2';

function Profile(toRender) {
    const {profileId} =useParams();

  return (
    <div className='ProfileJs' >
        <div className="ProfileJsBanner">
            <img src={profileBanner} alt="image" />
        </div>
        <div className='ProfileJsProfilePic'>
            <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=466&q=80" alt="image" />
        </div>
        <div className='ProfileJsProfileInfo'>
            <div className="ProfileJsProfileInfoBio">
                <div className="ProfileJsProfileInfoBioTop">
                <h5>Yeager</h5>
                <MdModeEditOutline className='MdModeEditOutline'/>
                <BsFillPersonPlusFill className='MdModeEditOutline'/>
                </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptatibus rem sequi temporibus quasi architecto mollitia laudantium at! Provident molestiae ad hic obcaecati maiores! Tempora eum pariatur sint omnis itaque.</p>
            </div>
            <div className='ProfileJsProfileInfoDetails'>
                Joined on 5th November
            </div>
        </div>
        <div className='ProfileJsTabs'>
            <Link to={`/profile/${profileId}`} style={{"textDecoration":"none"}}>
            <li>
                Subscriptions
            </li>
            </Link>
            <Link to={`/profile/${profileId}/contributions`} style={{"textDecoration":"none"}}>

            <li>
                Contributions
            </li>
            </Link>
            <Link to={`/profile/${profileId}/liked`} style={{"textDecoration":"none"}}>
            <li style={{"textDecoration":"none"}}>
                Liked
            </li>
            </Link>
        </div>
        <div className='ProfileJsUnderTabs'>
        {toRender.toRender==="followed"&&<div className='ProfileJsUnderTabsCon'>
            <Card2/>
            </div>}

            {toRender.toRender==="history"&&<div>
            this is history
            </div>}
            
        </div>
       

    </div>
  )
}

export default Profile