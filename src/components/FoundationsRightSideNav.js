import React, { useState } from 'react'
import RightSideCard from './RightSideCard'
import {HiTrendingUp} from 'react-icons/hi'
import {MdRecommend} from 'react-icons/md'
import SeeAll from './SeeAll'
import Modal4 from './Modal4'
import { useEffect } from 'react'
function FoundationsRightSideNav() {
  const [trendingF,setTrendingF]=useState(null)
  const [recommededF,setRecommendedF]=useState([])
  const host="http://localhost:5000"
  useEffect(() => {
    const getTrendingFoundations=async ()=>{
        const response=await fetch(`${host}/api/upload/trendingfoundations`,{
            method: 'GET',
          });
    
          const json=await response.json();
          // console.log("trending found",json)
          setTrendingF(json)
          // console.log("trend", trendingF)
        }
        const getRecommendedFoundations=async ()=>{
          const response=await fetch(`${host}/api/upload/getallfoundations`,{
              method: 'GET',
            });
      
            const json=await response.json();
            // console.log("recc found",json)
            setRecommendedF([])
            // for(let i=0;i<3;i++)
            // {
            //   let j=Math.floor(Math.random() * json.length);
            //   let flag=true;
            //   for(let k=0;k<recommededF.length;k++)
            //   {
            //     if(recommededF[k]._id==json[j]._id)
            //     {
            //       flag=false;
            //       break;
            //     }
            //   }
            //   if(flag)
            //   setRecommendedF(recommededF => [...recommededF, json[j]]);
            // }
            // console.log("trend", recommededF)
              setRecommendedF(recommededF => [...recommededF, json[json.length-1]]);
              setRecommendedF(recommededF => [...recommededF, json[json.length-2]]);
              setRecommendedF(recommededF => [...recommededF, json[json.length-3]]);

          }
          getTrendingFoundations()
          getRecommendedFoundations()
  }, [])
  
  return (
    <div className='FoundationsRightSideNavJs RightSideContent' >
     <Modal4/>
        <div className="FoundationsRightSideNavTrending">
        Trending Foundations<HiTrendingUp/>
        {trendingF&&trendingF.map((element) => {
                     
                     return <div key={element._id} style={{"padding":"0","margin":"0"}}>
                        <RightSideCard {...element}/>
                     </div>
                 })}
        {/* <SeeAll/> */}
        </div>

      {localStorage.getItem('token')&&  <div className="FoundationsRightSideNavRecommended">
       Foundations For You<MdRecommend/>
       {recommededF&&recommededF.map((element) => {
                     
                     return <div key={element._id} style={{"padding":"0","margin":"0"}}>
                        <RightSideCard {...element}/>
                     </div>
                 })}
{/* <SeeAll/> */}
        </div>}

    </div>
  )
}

export default FoundationsRightSideNav