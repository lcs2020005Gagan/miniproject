import React from 'react'
import {BsFillPersonPlusFill} from 'react-icons/bs'
function UserList(props) {
    const host="http://localhost:5000"
    const addFriend=async ()=>{
        const user_id=props._id;
        const response=await fetch(`${host}/api/auth/addfriend`,{
            method: 'POST',
            headers: {
              'auth-token': localStorage.getItem('token'),
              'Content-Type':'application/json'
            },
            body: JSON.stringify({user_id}),
          });
    
          const json=await response.json();
          console.log(json)
        }
  return (
    <div className='UserList'>
        <div className="UserListImg">
            <img src={props.profileImg} alt="" />
        </div>
        <div className="UserListCont">
            <div className="UserListName">
            {props.name}
            </div>
            <div className="UserListAddFriend hoverEffects">
            <BsFillPersonPlusFill onClick={addFriend}/>
            </div>
        </div>
    </div>
  )
}

export default UserList