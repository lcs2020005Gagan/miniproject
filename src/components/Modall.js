import React, { Component ,useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {FaShareAlt} from 'react-icons/fa'

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
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const shareUrl = props.link;
   
  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  return (
    
    <div>
<div className="Card8Share" onClick={handleOpen}>
<div className='hoverEffects' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{"display":"flex","borderRadius":"1rem","backgroundColor":"#5b5189","height":"100%","width":"3rem","padding":"0.3rem","justifyContent":"center","alignItems":"center","color":"white"}} >
  <FiLogIn/>
</div>          </div>      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{"display":"flex","gap":"0.5rem","height":"90%","width":"80%","borderRadius":"1rem"
}}>
            
        <MDBContainer className="d-flex flex-column">

<MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
<MDBTabsItem>
    <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
    Login
    </MDBTabsLink>
</MDBTabsItem>
<MDBTabsItem>
    <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
    Register
    </MDBTabsLink>
</MDBTabsItem>
</MDBTabs>

<MDBTabsContent>

<MDBTabsPane show={justifyActive === 'tab1'}>

    {/* <div className="text-center mb-3">
    <p>Sign in with:</p>

    <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        <MDBIcon fab icon='facebook-f' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        <MDBIcon fab icon='twitter' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        <MDBIcon fab icon='google' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        <MDBIcon fab icon='github' size="sm"/>
        </MDBBtn>
    </div>

    <p className="text-center mt-3">or:</p>
    </div> */}

    <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
    <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

    <div className="d-flex justify-content-between mx-4 mb-4" style={{"alignItems":"center"}} >
    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
    <a href="!#" style={{"fontSize":"0.6rem"}}>Forgot password?</a>
    </div>

    <MDBBtn className="mb-4 w-100" data-dismiss="Modal" onClick={()=>window.location.reload()}>Sign in</MDBBtn>
    <p className="text-center">Not a member? <a href="#!">Register</a></p>

</MDBTabsPane>

<MDBTabsPane show={justifyActive === 'tab2'}>

    {/* <div className="text-center mb-3">
    <p>Sign un with:</p>

    <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        <MDBIcon fab icon='facebook-f' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        <MDBIcon fab icon='twitter' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        <MDBIcon fab icon='google' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        <MDBIcon fab icon='github' size="sm"/>
        </MDBBtn>
    </div>

    <p className="text-center mt-3">or:</p>
    </div> */}

    <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>
    <MDBInput wrapperClass='mb-4' label='About' id='form1' type='text'/>
    <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
    <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

    <div className='d-flex justify-content-center mb-4'>
    <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' required/>
    </div>
    
    <MDBBtn className="mb-4 w-100" data-dismiss="Modal" onClick={()=>window.location.reload()}>Sign up</MDBBtn>

</MDBTabsPane>

</MDBTabsContent>

</MDBContainer>

        </Box>
      </Modal>
    </div>
  );
}