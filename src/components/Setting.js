import React, { useState,useEffect } from 'react'
import Switch from '@mui/material/Switch';
import FormControlLabel from '@material-ui/core/formcontrollabel'
import { InputLabel } from '@mui/material';
import Alert from './Alert';


function Setting() {
    const host="http://localhost:5000"
    const [user,setUser]=useState(null)
    let [Mode, setMode] = useState([])
    useEffect(() => {
        const func=async()=>
          { 
        const response=await fetch(`${host}/api/auth/getuser`,{
          method: 'GET',
          headers: {
            'auth-token':localStorage.getItem('token'),
            'Content-Type': 'application/json',
            },
    
        
              });
          const json=await response.json();
          setUser(json[0])
          // console.log("user ",user)
          setMode(json[0].settings);
          // console.log("mode ",Mode)
        }
        if(localStorage.getItem('token')){
          func();
        }
      },[])
  
    
  return (
    <div className="Settingsss">

   {localStorage.getItem('token')&& <div className='SettingJs'>
      {/* <Alert message="Your profile was updated successfully" color="success"/> */}
      
        <h4>
            Account
        </h4>
        {Mode[0]===1?<div className="form-check form-switch" onClick={()=>setMode(Mode[0]=!Mode[0])}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
  <label className="form-check-label" for="flexSwitchCheckChecked">Notify me when someone follows me</label>
</div>:<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
  <label className="form-check-label" for="flexSwitchCheckChecked">Notify me when someone follows me</label>
</div>}



{Mode[1]===1?<div className="form-check form-switch" onClick={()=>setMode(Mode[1]=!Mode[1])}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
  <label className="form-check-label" for="flexSwitchCheckChecked">Notify me when someone answers on my post
</label>
</div>:<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
  <label className="form-check-label" for="flexSwitchCheckChecked">Notify me when someone answers on my post
</label>
</div>}


{Mode[2]===1?<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
  <label className="form-check-label" for="flexSwitchCheckChecked">Notify me when someone mentions me
</label>
</div>:<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
  <label className="form-check-label" for="flexSwitchCheckChecked">Notify me when someone mentions me
</label>
</div>}


<h4>
    Application
</h4>
{Mode[3]===1?<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
  <label className="form-check-label" for="flexSwitchCheckChecked">New launches and projects
</label>
</div>:<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
  <label className="form-check-label" for="flexSwitchCheckChecked">New launches and projects

</label>
</div>}



{Mode[4]===1?<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
  <label className="form-check-label" for="flexSwitchCheckChecked">Monthly product updates
</label>
</div>:<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
  <label className="form-check-label" for="flexSwitchCheckChecked">Monthly product updates
</label>
</div>}




    </div>}
   
    </div>
  )
}

export default Setting