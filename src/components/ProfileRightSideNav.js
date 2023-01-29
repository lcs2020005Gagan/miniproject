import React, { useEffect, useState } from 'react'
import RightSideCard from './RightSideCard'
import {HiTrendingUp} from 'react-icons/hi'
import {MdRecommend} from 'react-icons/md'
import RightSideCard2 from './RightSideCard2'
import { useParams } from 'react-router-dom'

function ProfileRightSideNav() {
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
              //  console.log(user);
     }, [])

  return (
    <div className='ProfileRightSideNavJs RightSideContent' >
        <div className="ProfileRightSideNavTrending">
            Friends:
         {/* <RightSideCard2 img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" name="John"/>
         <RightSideCard2 img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" name="John"/>
         <RightSideCard2 img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" name="John"/> */}
          {user&&user.friends.map((element) => {
    return <div key={rand++} style={{"padding":"0","margin":"0"}}>
       <RightSideCard2 {...element}/>
    </div>

})}  
         
        </div>

      
    </div>
  )
}

export default ProfileRightSideNav