import React from 'react'
import Card4 from './Card4'

function Streams() {
  return (
    <div className='StreamsJs' style={{"width":"100%","height":"100%","display":"flex","flexDirection":"row","flexWrap":"wrap","justifyContent":"space-evenly","alignItems":"center","gap":"1rem"}}>
            <Card4 link="/story/123" img="https://i.imgur.com/oYiTqum.jpg" authorImg="https://i.imgur.com/7D7I6dI.png" author="Mark Buffalo" title="lorem ipsum ipsumly islmlf" desc=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ducimus, corporis quia odio similique voluptatem esse ea provident, rem commodi aliquam, at placeat voluptas nostrum dicta omnis impedit consectetur. Delectus!"/>
            <Card4 link="/story/123" img="https://i.imgur.com/oYiTqum.jpg" authorImg="https://i.imgur.com/7D7I6dI.png" author="Mark Buffalo" title="lorem ipsum ipsumly islmlf" desc=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ducimus, corporis quia odio similique voluptatem esse ea provident, rem commodi aliquam, at placeat voluptas nostrum dicta omnis impedit consectetur. Delectus!"/>
            <Card4 link="/story/123" img="https://i.imgur.com/oYiTqum.jpg" authorImg="https://i.imgur.com/7D7I6dI.png" author="Mark Buffalo" title="lorem ipsum ipsumly islmlf" desc=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ducimus, corporis quia odio similique voluptatem esse ea provident, rem commodi aliquam, at placeat voluptas nostrum dicta omnis impedit consectetur. Delectus!"/>
    </div>
  )
}

export default Streams