import React, { useEffect, useState } from 'react'
import RightSideCard3 from './RightSideCard3'
import {HiTrendingUp} from 'react-icons/hi'
import {MdRecommend} from 'react-icons/md'
import SeeAll from './SeeAll'

import Modal3 from './Modal3'
function StoriesRightSideNav() {
  const [trendingA,setTrendingA]=useState(null)
  const [recommendedA,setRecommendedA]=useState([])
  const host="http://localhost:5000"
  useEffect(() => {
    const getTrendingAoundations=async ()=>{
        const response=await fetch(`${host}/api/upload/trendingarticles`,{
            method: 'GET',
          });
    
          const json=await response.json();
          // console.log("trending found",json)
          setTrendingA(json)
          // console.log("trend", trendingA)
        }
        const getRecommendedAoundations=async ()=>{
          const response=await fetch(`${host}/api/upload/getallarticles`,{
              method: 'GET',
            });
      
            const json=await response.json();
            // console.log("recc found",json)
            setRecommendedA([])
            // for(let i=0;i<3;i++)
            // {
            //   let j=Math.floor(Math.random() * json.length);
            //   let flag=true;
            //   for(let k=0;k<recommendedA.length;k++)
            //   {
            //     if(recommendedA[k]._id===json[j]._id)
            //     {
            //       flag=false;
            //       break;
            //     }
            //   }
            //   if(flag)
            //   setRecommendedA(recommendedA => [...recommendedA, json[j]]);
            // }
            // console.log("trend", recommendedA)
            let j=json.length-1
            setRecommendedA(recommendedA => [...recommendedA, json[j--]]);
            setRecommendedA(recommendedA => [...recommendedA, json[j--]]);
            setRecommendedA(recommendedA => [...recommendedA, json[j--]]);
          }
          getTrendingAoundations()
          getRecommendedAoundations()
  }, [])
  
  return (
    <div className='FoundationsRightSideNavJs RightSideContent' >
      {localStorage.getItem('token')&&<Modal3/>}
        <div className="FoundationsRightSideNavTrending">
        Trending Stories <HiTrendingUp/>
        {trendingA&&trendingA.map((element) => {
                     
                     return <div key={element._id} style={{"padding":"0","margin":"0"}}>
                        <RightSideCard3 {...element}/>
                     </div>
                 })}
        </div>

       {localStorage.getItem('token')&& <div className="FoundationsRightSideNavRecommended">
        Stories For You<MdRecommend/>
        {recommendedA&&recommendedA.map((element) => {
                     
                     return <div key={element._id} style={{"padding":"0","margin":"0"}}>
                        <RightSideCard3 {...element}/>
                     </div>
                 })}

        </div>}

    </div>
  )
}

export default StoriesRightSideNav