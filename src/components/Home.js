import React from 'react'
import Card9 from './Card9'
import {HiSparkles} from 'react-icons/hi'
import Carousel from './Carousel'
import FoundMain from './FoundMain'
import FoundCont from './FoundCont'
function Home() {
  
  return (
    <div className='HomeJs'>
        <h1>
            Your Feed <HiSparkles/>
        </h1>
        {/* <FoundMain/> */}
        <FoundCont/>
        <Card9/>
        <Card9/>
        <Card9/>
        <Card9/>
        <Card9/>
        <Card9/>
        <Card9/>
    </div>
  )
}

export default Home