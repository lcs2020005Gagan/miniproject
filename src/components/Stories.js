import React, { useEffect, useState } from 'react'
import Card3 from './Card3'
function Stories() {
  var rand=0
  const host="http://localhost:5000"
  const [articles,setArticles]=useState([])
  useEffect(() => {
    const func=async()=>{
      const response=await fetch(`${host}/api/upload/getallarticles`,{
          method: 'GET',
        });
        const json=await response.json();
        setArticles(json);         
      }
      func();
      console.log(articles);
  }, [])
  
  return (
    <div className='StoriesJs'>
       {articles&&articles.map((element) => {
    return <div key={rand++} style={{"padding":"0","margin":"0","height":"16rem","width":"100%"}}>
       <Card3 {...element}/>
    </div>
})}
    </div>
  )
}

export default Stories