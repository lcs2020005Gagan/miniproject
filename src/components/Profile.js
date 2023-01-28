import React, { useEffect, useState } from 'react'
import profileBanner from "../assets/img/profileBanner.png";
import { BsCalendarEvent } from 'react-icons/bs';
import { MdModeEditOutline } from 'react-icons/md';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Card2 from './Card2';
import Card3 from './Card3';
import NoContent from './NoContent';

function Profile(toRender) {
    var rand=0
    const params=useParams()
    const {profileId} =useParams();
   
    const host="http://localhost:5000"
    const [user,setUser]=useState(null)
    useEffect(() => {
        const func=async()=>
          { 
        const response=await fetch(`${host}/api/auth/getuserwithid/${params.profileId}`,{
          method: 'GET',
            });
          const json=await response.json();
          setUser(json)
        }
       
            func();
            // console.log("user ",user)
            // console.log(date.toDateString())
      },[])

  return (
    <div className='ProfileJs' >
        <div className="ProfileJsBanner">
            <img src={profileBanner} alt="image" />
        </div>
        {user&&<div className='ProfileJsProfilePic'>
            <img src={user.profileImg} alt="image" />
        </div>}
        {user&&<div className='ProfileJsProfileInfo'>
            <div className="ProfileJsProfileInfoBio">
                <div className="ProfileJsProfileInfoBioTop">
                <h5>{user.name}</h5>
                <MdModeEditOutline className='MdModeEditOutline'/>
                {/* <BsFillPersonPlusFill className='MdModeEditOutline'/> */}
                </div>
            <p>{user.about}</p>
            </div>
            <div className='ProfileJsProfileInfoDetails' style={{"display":"flex","gap":"0.3rem","alignItems":"end"}}>
               <div style={{"fontSize":"1.2rem"}}>
               <BsCalendarEvent/> 
                </div>
                Joined on {user.date}
            </div>
        </div>}
        <div className='ProfileJsTabs' style={{"backgroundColor":"rgb(2, 9, 22)"}}>
            <div className={`${toRender.toRender==="subscriptions"?"UlListActive":""} ProfileJsTabsLi`}>

            <Link to={`/profile/${profileId}`} style={{"textDecoration":"none"}}>
            <li >
                Subscriptions
            </li>
            </Link>
            </div>
            <div className={`${toRender.toRender==="contributions"?"UlListActive":""} ProfileJsTabsLi`}>

            <Link to={`/profile/${profileId}/contributions`} style={{"textDecoration":"none"}}>

            <li >
                Contributions
            </li>
            </Link>
            </div>
            <div className={`${toRender.toRender==="liked"?"UlListActive":""} ProfileJsTabsLi`}>
            <Link to={`/profile/${profileId}/liked`} style={{"textDecoration":"none"}}>
            <li >
                Liked
            </li>
            </Link>

            </div>
        </div>
        <div className='ProfileJsUnderTabs'>
        {toRender.toRender==="subscriptions"&&<div className='ProfileJsUnderTabsCon'>
        {user&&user.followedFoundations.map((element) => {
    return <div key={rand++} style={{"padding":"0","margin":"0","width":"100%"}}>
       <Card2 {...element}/>
    </div>
})}
{
    user&&user.followedFoundations.length===0&&<NoContent/>
}
            </div>}

            {toRender.toRender==="contributions"&&<div className='ProfileJsUnderTabsCon'>
            <Card2/>
            </div>}
            {toRender.toRender==="liked"&&<div className='ProfileJsUnderTabsCon'>
            {user&&user.savedForLater.map((element) => {
    return <div key={rand++} style={{"padding":"0","margin":"0","height":"16rem","width":"100%"}}>
       <Card3 {...element}/>
    </div>

})}  
{
    user&&user.savedForLater.length===0&&<NoContent/>
}
          </div>}
            
        </div>
       

    </div>
  )
}

export default Profile