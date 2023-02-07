import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function RightSideCard3(props) {
    // const [followers,setFollowers]=useState(0)
    // useEffect(() => {
    //  let i=0;
    //  for(let j=0;j<props.followers.length;j++)
    //  i++;
    //  setFollowers(i)
    // }, [])
    
    return (
        <Link to={`/story/${props._id}`}>
            <div className='RightSideCardJs hoverEffects'>
                <div className="RightSideCardJsImg ImageDiv">
                    <img src={`${props.image}`} alt="" />
                </div>
                <div className="RightSideCardJsInfo">
                    <div className="RightSideCardJsTitle">
                        {props.title}         
                         </div>
                    <div className="RightSideCardJsDesc" dangerouslySetInnerHTML={{__html: props.description}}>
                      </div>
                    <div className="RightSideCardJsFooter">
                        {props.likes} Likes
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RightSideCard3