import React from 'react'
import SpeechWave  from './SpeechWave'
import SideIconsJs from './SideIconsJs'
import LeftSideNav from './LeftSideNav'
import AudioControls from './AudioControls'
function LeftNavDivMob() {
  return (
<div className='LeftNavDivMob'>
          <div className='LeftNavDivTop'>
            <div className='SideIcons'>
              <SideIconsJs />
            </div>
            <div className='LeftSideNav'>
              <LeftSideNav />
            </div>
          </div>
          <div className='LeftNavDivBottom'>
            <div className='SpeechWave'>
              <SpeechWave />
            </div>
            <div className='AudioControls'>
              <AudioControls />
            </div>
          </div>

        </div>  )
}

export default LeftNavDivMob