import React from 'react'
import { BiCompass } from 'react-icons/bi';
import { BsMusicNote,BsPlayCircleFill } from 'react-icons/bs';
import { IoGameController } from 'react-icons/io5';
import { GiMaterialsScience } from 'react-icons/gi';
import { BiBook } from 'react-icons/bi';
import { SiHubspot } from 'react-icons/si';



function LeftSideNav() {
  return (
    <div>
        <div className='LeftSideNavTop'>
            Explore
        </div>
        <div className='LeftSideNavBottom'>
        <ul className='LeftSideNavList'>
            <li>
            <BiCompass/> <p className='para'>Home</p>
            </li>
            <li>
                <BsMusicNote/><p className='para'>Music</p>
            </li>
            <li>
                <IoGameController/><p className='para'>Gaming</p>
            </li>
            <li>
                <GiMaterialsScience/><p className='para'>Science & Tech</p>
            </li>
            <li>
                <BiBook/><p className='para'>Education</p>
            </li>
            <li>
                <BsPlayCircleFill/><p className='para'>Entertainment</p>
            </li>
            <li>
                <SiHubspot/><p className='para'>Students Hub</p>
            </li>
        </ul>
        </div>
      
        
    </div>
  )
}

export default LeftSideNav