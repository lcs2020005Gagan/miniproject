import React, { Component ,useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {FaShareAlt} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import {FiLogOut} from 'react-icons/fi';
import Avatar from '@mui/material/Avatar';
import { AiOutlinePlus } from 'react-icons/ai';
import { Tooltip } from "@mui/material";

import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
  import { Link } from 'react-router-dom';
  import {FiLogIn} from 'react-icons/fi'
import UserList from './UserList';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
    const host="http://localhost:5000"
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const shareUrl = props.link;
  const navigate = useNavigate();
  const [note, setnote] = useState({user:""});
  const [list, setList] = useState([]);
  
  const handlechange=(e)=>{
    setnote({...note,   [e.target.name]:e.target.value})
    console.log(note)
  }
  const handleSearch= async(e)=>{

    e.preventDefault();
    setList([])
    const userName=note.user
    const response=await fetch(`${host}/api/auth/getallusersforfriends`,{
        method: 'GET',
    
      });

      const json=await response.json();
      for(let i=0;i<json.length;i++){
        if(json[i].name.includes(userName)){
            setList(list => [...list, json[i]]);
        }
      }
    //   console.log(list)
    }

   
  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  return (
    
    <div>
<div  onClick={handleOpen}>
<div className='hoverEffects' data-bs-toggle="modal" data-bs-target="#exampleModal"  >
<Tooltip title="Start a new chat" arrow  placement="bottom">
                     <div className='CreateNew'>
                            <AiOutlinePlus />

                     </div>
                     </Tooltip >
</div>          </div>      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{"display":"flex","gap":"0.5rem","height":"90%","width":"80%","borderRadius":"1rem"
}}>
            
        <MDBContainer className="d-flex flex-column">


<MDBTabsContent>

<MDBTabsPane show={justifyActive === 'tab1'}>

   
 <MDBInput wrapperClass='mb-4' label='Search user' id='form1' name='user' type='text' onChange={handlechange} />

 <MDBBtn className="mb-4" data-dismiss="Modal" onClick={handleSearch}>Search</MDBBtn>
 {list&&list.map((element) => {
                     
                     return <div key={list._id} style={{"padding":"0","margin":"0"}}>
                        <UserList {...element}/>
                     </div>
                 })}
</MDBTabsPane>



</MDBTabsContent>

</MDBContainer>

        </Box>
      </Modal>
    </div>
  );
}