import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {Link} from 'react-router-dom'
function ToolTip(props) {
  return (
    <div className="ToolTipJs">
        <div className="ToolTipAuth">

        <div className="ToolTipImg">
        <Link to={`${props.link}`}
 className='hoverEffects'>
            <img src={`${props.img}`} alt="" />
            </Link>
        </div>
        <div className="ToolTipName" >
        {props.name}         
        </div>
       
        </div>
        <div className="ToolTipAbout">
            <b>About:</b>
            {props.about}   
        </div>
        <div className="ToolTipFooter">
        {props.footer}
        </div>
    </div>
    )
}

export default ToolTip