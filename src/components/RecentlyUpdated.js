import React from 'react'
import Card from './Card'
import SeeAll from './SeeAll'
import { MdTipsAndUpdates } from 'react-icons/md'
import Card4 from './Card4'
function RecentlyUpdated() {
  return (
    <div className='RecentlyUpdatedJs'>
      <div className="RecentlyUpdatedTop" style={{ "display": "flex", "justifyContent":"space-between","color":"white","fontSize":"1.5rem" }}>
        <div className="RecentlyUpdatedTopTitle">Recently Updated <MdTipsAndUpdates /></div>
        <SeeAll />
      </div>
      <div className="RecentlyUpdatedJsBottom">
        <Card4 link="/story/123" img="https://i.imgur.com/oYiTqum.jpg" authorImg="https://i.imgur.com/7D7I6dI.png" author="Mark Buffalo" title="lorem ipsum ipsumly islmlf" desc=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ducimus, corporis quia odio similique voluptatem esse ea provident, rem commodi aliquam, at placeat voluptas nostrum dicta omnis impedit consectetur. Delectus!"/>
        <Card4 link="/story/123" img="https://i.imgur.com/oYiTqum.jpg" authorImg="https://i.imgur.com/7D7I6dI.png" author="Mark Buffalo" title="lorem ipsum ipsumly islmlf" desc=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ducimus, corporis quia odio similique voluptatem esse ea provident, rem commodi aliquam, at placeat voluptas nostrum dicta omnis impedit consectetur. Delectus!"/>
        <Card4 link="/story/123" img="https://i.imgur.com/oYiTqum.jpg" authorImg="https://i.imgur.com/7D7I6dI.png" author="Mark Buffalo" title="lorem ipsum ipsumly islmlf" desc=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ducimus, corporis quia odio similique voluptatem esse ea provident, rem commodi aliquam, at placeat voluptas nostrum dicta omnis impedit consectetur. Delectus!"/>
        <Card4 link="/story/123" img="https://i.imgur.com/oYiTqum.jpg" authorImg="https://i.imgur.com/7D7I6dI.png" author="Mark Buffalo" title="lorem ipsum ipsumly islmlf" desc=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ducimus, corporis quia odio similique voluptatem esse ea provident, rem commodi aliquam, at placeat voluptas nostrum dicta omnis impedit consectetur. Delectus!"/>
       
      </div>
    </div>
  )
}

export default RecentlyUpdated