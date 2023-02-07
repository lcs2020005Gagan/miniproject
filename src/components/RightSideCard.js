import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function RightSideCard(props) {
    // const [followers,setFollowers]=useState(0)
    // useEffect(() => {
    //  let i=0;
    //  for(let j=0;j<props.followers.length;j++)
    //  i++;
    //  setFollowers(i)
    // }, [])
    
    return (
        <Link to={`/foundation/${props._id}`}>
            <div className='RightSideCardJs hoverEffects'>
                <div className="RightSideCardJsImg ImageDiv">
                    <img src={`${props.profileImg}`} alt="" />
                </div>
                <div className="RightSideCardJsInfo">
                    <div className="RightSideCardJsTitle">
                        {props.name}         
                         </div>
                    <div className="RightSideCardJsDesc" dangerouslySetInnerHTML={{__html: props.about}}>
                      </div>
                    <div className="RightSideCardJsFooter">
                        {props.followers&&props.followers.length} followers
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RightSideCard