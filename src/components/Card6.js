import React from 'react'
import { Link } from 'react-router-dom'
import Modal2 from './Modal2'

function Card6(props) {
    return (
        <Link to={`/profile/${props._id}`}>
            <div className="profile-card-2">
                <img src={props.profileImg} className="img img-responsive" />
                <div className="profile-name textClip-1">{props.name}</div>
                <div className="profile-username textClip-3">{props.about}</div>
                <div className="profile-icons"><Modal2/></div>
            </div>
            </Link>
    )
}

export default Card6