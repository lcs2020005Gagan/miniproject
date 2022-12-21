import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { BsMusicNote,BsPlayCircleFill } from 'react-icons/bs';
import { IoGameController } from 'react-icons/io5';
import { GiMaterialsScience } from 'react-icons/gi';
import { BiBook } from 'react-icons/bi';
import { SiHubspot } from 'react-icons/si';
import { Link } from 'react-router-dom';



function LeftSideNav() {
  return (
    <div>
        <div className='LeftSideNavTop'>
            Explore
        </div>
        <div className='LeftSideNavBottom'>
        <ul className='LeftSideNavList'>
            <Link to="/" className='UlList'>
            <AiFillHome/> <p className='para'>Home</p>
            </Link>
            <Link to="/music" className='UlList'>
                <BsMusicNote/><p className='para'>Music</p>
            </Link>
            <Link to="/music" className='UlList'>
                <IoGameController/><p className='para'>Gaming</p>
                </Link>
            <Link to="/music" className='UlList'>
                <GiMaterialsScience/><p className='para'>Science & Tech</p>
                </Link>
            <Link to="/music" className='UlList'>
                <BiBook/><p className='para'>Education</p>
                </Link>
            <Link to="/music" className='UlList'>
                <BsPlayCircleFill/><p className='para'>Entertainment</p>
                </Link>
            <Link to="/music" className='UlList'>
                <SiHubspot/><p className='para'>Students Hub</p>
                </Link>
        </ul>
        </div>
      
        
    </div>
  )
}

export default LeftSideNav