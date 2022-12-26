import React, { useState } from 'react'
import Switch from '@mui/material/Switch';
import FormControlLabel from '@material-ui/core/formcontrollabel'
import { InputLabel } from '@mui/material';
import Alert from './Alert';


function Setting() {
    let [Mode, setMode] = useState([0,0,0,0,0,1])
    
  return (
    <div className='SettingJs'>
      <Alert message="Your profile was updated successfully" color="success"/>
        <h4>
            Account
        </h4>
        {Mode[0]===1?<div class="form-check form-switch" onClick={()=>setMode(Mode[0]=!Mode[0])}>
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
  <label class="form-check-label" for="flexSwitchCheckChecked">Notify me when someone follows me</label>
</div>:<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
  <label class="form-check-label" for="flexSwitchCheckChecked">Notify me when someone follows me</label>
</div>}



{Mode[1]===1?<div class="form-check form-switch" onClick={()=>setMode(Mode[1]=!Mode[1])}>
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
  <label class="form-check-label" for="flexSwitchCheckChecked">Notify me when someone answers on my post
</label>
</div>:<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
  <label class="form-check-label" for="flexSwitchCheckChecked">Notify me when someone answers on my post
</label>
</div>}


{Mode[2]===1?<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
  <label class="form-check-label" for="flexSwitchCheckChecked">Notify me when someone mentions me
</label>
</div>:<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
  <label class="form-check-label" for="flexSwitchCheckChecked">Notify me when someone mentions me
</label>
</div>}


<h4>
    Application
</h4>
{Mode[3]===1?<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
  <label class="form-check-label" for="flexSwitchCheckChecked">New launches and projects
</label>
</div>:<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
  <label class="form-check-label" for="flexSwitchCheckChecked">New launches and projects

</label>
</div>}



{Mode[4]===1?<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
  <label class="form-check-label" for="flexSwitchCheckChecked">Monthly product updates
</label>
</div>:<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
  <label class="form-check-label" for="flexSwitchCheckChecked">Monthly product updates
</label>
</div>}




    </div>
  )
}

export default Setting