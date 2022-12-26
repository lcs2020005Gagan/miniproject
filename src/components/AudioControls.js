import React, { useState } from 'react'
import {BsFillMicFill,BsFillMicMuteFill} from 'react-icons/bs'
import {FaVideo,FaVideoSlash} from 'react-icons/fa'
import {TbHeadphones,TbHeadphonesOff} from 'react-icons/tb'

function AudioControls() {
  const [audio, setAudio] = useState(true)
  const [video, setVideo] = useState(true)
  const [deafen, setDeafen] = useState(true)
  const handleAudio=()=>{
    setAudio(!audio)
  }
  const handleVideo=()=>{
setVideo(!video)
  }
  const handleDeafen=()=>{
setDeafen(!deafen)
  }
  return (
    <div className='AudioControlsJs'>
        <div className='AudioControlsProfile' style={{"backgroundImage":"url(https://cpb-us-w2.wpmucdn.com/portfolio.newschool.edu/dist/2/485/files/2014/08/DSC_1004-2-1a1yqd6.jpg)","backgroundSize":"2.2rem 2.2rem"}}>

        </div>
        <div className='AudioControlsAudio hoverEffects' onClick={handleAudio}>
            {audio&&<BsFillMicFill/>}
            {!audio&&<BsFillMicMuteFill/>}
        </div>
        <div className='AudioControlsVideo hoverEffects' onClick={handleVideo}>
            {video&&<FaVideo/>}
            {!video&&<FaVideoSlash/>}
        </div>
        <div className='AudioControlsVideo hoverEffects' onClick={handleDeafen}>
           { deafen&&<TbHeadphones/>}
           {!deafen&&<TbHeadphonesOff/>}
        </div>

    </div>
  )
}

export default AudioControls