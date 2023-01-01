import React from 'react'
import Card from './Card'
import SeeAll from './SeeAll'
import { ImFire } from 'react-icons/im'
import Card4 from './Card4'
import Card6 from './Card6'
import Card5 from './Card5'
import Card8 from './Card8'
function WhatsHappening() {
  return (
<div className='RecentlyUpdatedJs'>
      <div className="RecentlyUpdatedTop" style={{ "display": "flex", "justifyContent":"space-between","color":"white","fontSize":"1.5rem" }}>
        <div className="RecentlyUpdatedTopTitle">What's Happening <ImFire /></div>
        <SeeAll />
      </div>
      <div className="RecentlyUpdatedJsBottom" style={{"height":"400px"}}>
        <Card4 link="/story/123" img="https://i.imgur.com/oYiTqum.jpg" authorImg="https://i.imgur.com/7D7I6dI.png" author="Mark Buffalo" title="lorem ipsum ipsumly islmlf" desc=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ducimus, corporis quia odio similique voluptatem esse ea provident, rem commodi aliquam, at placeat voluptas nostrum dicta omnis impedit consectetur. Delectus!"/>
        <Card4 link="/story/123" img="https://i.imgur.com/oYiTqum.jpg" authorImg="https://i.imgur.com/7D7I6dI.png" author="Mark Buffalo" title="lorem ipsum ipsumly islmlf" desc=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ducimus, corporis quia odio similique voluptatem esse ea provident, rem commodi aliquam, at placeat voluptas nostrum dicta omnis impedit consectetur. Delectus!"/>
        <Card4 link="/story/123" img="https://i.imgur.com/oYiTqum.jpg" authorImg="https://i.imgur.com/7D7I6dI.png" author="Mark Buffalo" title="lorem ipsum ipsumly islmlf" desc=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ducimus, corporis quia odio similique voluptatem esse ea provident, rem commodi aliquam, at placeat voluptas nostrum dicta omnis impedit consectetur. Delectus!"/>
        <Card4 link="/story/123" img="https://i.imgur.com/oYiTqum.jpg" authorImg="https://i.imgur.com/7D7I6dI.png" author="Mark Buffalo" title="lorem ipsum ipsumly islmlf" desc=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ducimus, corporis quia odio similique voluptatem esse ea provident, rem commodi aliquam, at placeat voluptas nostrum dicta omnis impedit consectetur. Delectus!"/>
       
      </div>
    </div>  )
}

export default WhatsHappening