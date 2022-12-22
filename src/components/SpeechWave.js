import React from 'react'
import {FaDonate} from 'react-icons/fa'

function SpeechWave() {
  return (
    <div className='SpeechWaveJs hoverEffects2' >
        <div style={{"display":"flex","justifyContent":"center","alignItems":"center","padding":"3px","fontSize":"1.1rem"}}>
        <FaDonate/>
        </div>
        <div style={{"display":"flex","justifyContent":"center"}} className='donate'>
            Donate
        </div>
    </div>

  )
}

export default SpeechWave