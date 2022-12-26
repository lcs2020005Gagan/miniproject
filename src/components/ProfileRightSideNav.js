import React from 'react'
import RightSideCard from './RightSideCard'
import {HiTrendingUp} from 'react-icons/hi'
import {MdRecommend} from 'react-icons/md'
import RightSideCard2 from './RightSideCard2'
function ProfileRightSideNav() {
  return (
    <div className='ProfileRightSideNavJs RightSideContent' >
        <div className="ProfileRightSideNavTrending">
            Friends:
         <RightSideCard2 img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" name="John"/>
         <RightSideCard2 img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" name="John"/>
         <RightSideCard2 img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" name="John"/>
        </div>

      
    </div>
  )
}

export default ProfileRightSideNav