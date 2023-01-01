import React from 'react'
import Card7 from './Card7'
import SeeAll from './SeeAll'
import { FaHistory } from 'react-icons/fa'

function TimeLine() {
  return (
    <div className='RecentlyUpdatedJs'>
      <div className="RecentlyUpdatedTop" style={{ "display": "flex", "justifyContent":"space-between","color":"white","fontSize":"1.5rem" }}>
        <div className="RecentlyUpdatedTopTitle">Jump Right Back In <FaHistory /></div>
        <SeeAll />
      </div>
      <div className="RecentlyUpdatedJsBottom" style={{"height":"100%"}}>
      <div className="container py-5">
    <div className="main-timeline-2">
      <div className="timeline-2 left-2">
       <Card7/>
      </div>
      <div className="timeline-2 right-2">
       <Card7/>
        
      </div>
      <div className="timeline-2 left-2">
       <Card7/>
       
      </div>
      <div className="timeline-2 right-2">
       <Card7/>
        
      </div>
      <div className="timeline-2 left-2">
       <Card7/>
       
      </div>
    </div>
    </div>
       
      </div>
    </div>  

  
  )
}

export default TimeLine