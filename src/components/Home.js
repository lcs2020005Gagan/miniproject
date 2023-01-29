import React from 'react'
import Card9 from './Card9'
import {HiSparkles} from 'react-icons/hi'
import Carousel from './Carousel'

import Footer from './Footer'
import WhoToFollow from './WhoToFollow'
import WhatsHappening from './WhatsHappening'
import RecommendedForYou from './RecommendedForYou'


function Home() {
  
  return (
    <div className='HomeJs'>
        <h1>
            Your Feed <HiSparkles/>
        </h1>
        {/* <FoundMain/> */}
        {/* <FoundCont/> */}
        <Card9/>
        <Card9/>
        <div id="whotofollow">
          <WhoToFollow />
        </div>
        <div id="whatshappening">
          <RecommendedForYou/>
          </div>
        <Card9/>
        <Card9/>
        <Card9/>
        <Card9/>
        <div id="footer">
          <Footer />
        </div>
    </div>
  )
}

export default Home