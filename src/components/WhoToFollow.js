import React, { useEffect, useState } from 'react'
import Card from './Card'
import SeeAll from './SeeAll'
import { RiUserFollowFill } from 'react-icons/ri'
import Card4 from './Card4'
import Card6 from './Card6'

function WhoToFollow() {
  var rand=0
  const host="http://localhost:5000"
  const [user,setUser]=useState([])
  useEffect(() => {
    const func=async()=>
      { 
    const response=await fetch(`${host}/api/auth/getallusers`,{
      method: 'GET',
    
          });
      const json=await response.json();
      setUser(json);
    }
    if(localStorage.getItem('token')){
      func();
      // console.log("who ", user)
    }
  },[])
  return (
<div className='RecentlyUpdatedJs'>
      <div className="RecentlyUpdatedTop" style={{ "display": "flex", "justifyContent":"space-between","color":"white","fontSize":"1.5rem" }}>
        <div className="RecentlyUpdatedTopTitle">Who To Follow <RiUserFollowFill /></div>
        <SeeAll />
      </div>
      <div className="RecentlyUpdatedJsBottom">
      {user&&user.map((element) => {
    return <div key={rand++} style={{"padding":"0","margin":"0","width":"300px","height":"400px"}}>
       <Card6 {...element}/>
    </div>
})}
        {/* <Card6 link="/story/123" img="https://i.imgur.com/oYiTqum.jpg" authorImg="https://i.imgur.com/7D7I6dI.png" author="Mark Buffalo" title="lorem ipsum ipsumly islmlf" desc=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ducimus, corporis quia odio similique voluptatem esse ea provident, rem commodi aliquam, at placeat voluptas nostrum dicta omnis impedit consectetur. Delectus!"/>
        <Card6 link="/story/123" img="https://i.imgur.com/oYiTqum.jpg" authorImg="https://i.imgur.com/7D7I6dI.png" author="Mark Buffalo" title="lorem ipsum ipsumly islmlf" desc=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ducimus, corporis quia odio similique voluptatem esse ea provident, rem commodi aliquam, at placeat voluptas nostrum dicta omnis impedit consectetur. Delectus!"/>
        <Card6 link="/story/123" img="https://i.imgur.com/oYiTqum.jpg" authorImg="https://i.imgur.com/7D7I6dI.png" author="Mark Buffalo" title="lorem ipsum ipsumly islmlf" desc=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ducimus, corporis quia odio similique voluptatem esse ea provident, rem commodi aliquam, at placeat voluptas nostrum dicta omnis impedit consectetur. Delectus!"/>
        <Card6 link="/story/123" img="https://i.imgur.com/oYiTqum.jpg" authorImg="https://i.imgur.com/7D7I6dI.png" author="Mark Buffalo" title="lorem ipsum ipsumly islmlf" desc=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ducimus, corporis quia odio similique voluptatem esse ea provident, rem commodi aliquam, at placeat voluptas nostrum dicta omnis impedit consectetur. Delectus!"/> */}
       
      </div>
    </div>  )
}

export default WhoToFollow



