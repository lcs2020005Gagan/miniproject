import React, { useEffect, useState } from 'react'
import Card2 from './Card2'
import ToolTip from './ToolTip'

function Foundations() {
  var rand=0
  const host="http://localhost:5000"
  const [articles,setArticles]=useState([])
  useEffect(() => {
    const func=async()=>{
      const response=await fetch(`${host}/api/upload/getallfoundations`,{
          method: 'GET',
        });
        const json=await response.json();
        setArticles(json);         
      }
      func();
      console.log(articles);
  }, [])
  return (
    <div className='FoundationsJs'>
          {articles&&articles.map((element) => {
    return <div key={rand++} style={{"padding":"0","margin":"0","width":"100%"}}>
       <Card2 {...element}/>
    </div>
})}
    </div>
  )
}

export default Foundations