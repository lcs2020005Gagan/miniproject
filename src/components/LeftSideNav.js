import React, { useEffect, useState } from 'react'
import { AiFillHome } from 'react-icons/ai';
import { BsMusicNote,BsPlayCircleFill } from 'react-icons/bs';
import { IoGameController } from 'react-icons/io5';
import { GiMaterialsScience } from 'react-icons/gi';
import { BiBook } from 'react-icons/bi';
import { SiHubspot } from 'react-icons/si';
import { TbBuildingCastle } from 'react-icons/tb';
import { MdArticle } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import { AiFillInfoCircle } from 'react-icons/ai';
import { GiCastle } from 'react-icons/gi';
import { Link, useParams ,useLocation} from 'react-router-dom';
import tgh from "./tgh5.png"

function LeftSideNav() {
   
    
    let location=useLocation();

    
  return (
    <div>
        <div className='LeftSideNavTop'>
            <img src={tgh} alt="" style={{"height":"6rem","width":"20rem"}}/>
        </div>
        <div className='LeftSideNavBottom'>
        <ul className='LeftSideNavList'>
        {/* {`nav-link me-auto ${location.pathname==="/home"?"active":""}`} */}
            <Link to="/" className={`UlList hoverEffects ${location.pathname==="/"?"UlListActive":""}`}>
            <AiFillHome/> <p className='para'>Home</p>
            </Link>
            <Link to="/foundations" className={`UlList hoverEffects ${location.pathname==="/foundations"?"UlListActive":""}`}>
                <GiCastle/><p className='para'>Foundations</p>
            </Link>
            
            <Link to="/stories" className={`UlList hoverEffects ${location.pathname==="/stories"?"UlListActive":""}`}>
                <MdArticle/><p className='para'>Stories</p>
                </Link>
            <Link to="/streams" className={`UlList hoverEffects ${location.pathname==="/streams"?"UlListActive":""}`}>
                <IoGameController/><p className='para'>Streams</p>
                </Link>
            <Link to="/communities" className={`UlList hoverEffects ${location.pathname==="/communities"?"UlListActive":""}`}>
                <IoIosPeople/><p className='para'>Communities</p>
                </Link>
            <Link to="/about" className={`UlList hoverEffects ${location.pathname==="/about"?"UlListActive":""}`}>
                <AiFillInfoCircle/><p className='para'>About Us</p>
                </Link>
        </ul>
        </div>
      
        
    </div>
  )
}

export default LeftSideNav

// stream
// community
// flagship initiatives
// stories
// fund rising
// foundations
