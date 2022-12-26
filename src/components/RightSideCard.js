import React from 'react'
import { Link } from 'react-router-dom'

function RightSideCard(props) {
    return (
        <Link to={`${props.link}`}>
            <div className='RightSideCardJs hoverEffects'>
                <div className="RightSideCardJsImg ImageDiv">
                    <img src={`${props.img}`} alt="" />
                </div>
                <div className="RightSideCardJsInfo">
                    <div className="RightSideCardJsTitle">
                        {props.title}         
                         </div>
                    <div className="RightSideCardJsDesc">
                        {props.desc
                        }            </div>
                    <div className="RightSideCardJsFooter">
                        {props.footer}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RightSideCard