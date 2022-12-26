import React from 'react'
import { Link } from 'react-router-dom'
import {HiUserRemove} from 'react-icons/hi'
function RightSideCard2(props) {
    return (
            <div className='RightSideCard2Js'>
                <div className="RightSideCard2JsDet">

                <div className="RightSideCard2JsImg hoverEffects">
                    <img src={`${props.img}`} alt="" />
                </div>
                <div className="RightSideCard2JsName">
                    {props.name}
                </div>
                </div>
                <div className="RightSideCard2JsRemove">
                    <HiUserRemove className='hoverEffects'/>
                </div>
            </div>
    )
}

export default RightSideCard2