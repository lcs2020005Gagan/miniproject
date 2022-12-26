import React, { useState } from 'react';
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

function Modal() {
    
  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <div>
<div className='hoverEffects' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{"display":"flex","borderRadius":"1rem","backgroundColor":"#5b5189","height":"100%","width":"3rem","padding":"0.3rem","justifyContent":"center","alignItems":"center","color":"white"}} >
  <FiLogIn/>
</div>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div className="modal-dialog modal-dialog-centered" style={{"width":"80rem"}}>
  <div class="modal-content" style={{"width":"100%"}}>
  <div class="modal-body" style={{"width":"100%"}}>

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

                            <div className="d-flex justify-content-between mx-4 mb-4">
                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                            <a href="!#">Forgot password?</a>
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

        </div>
        </div>
  </div>
</div>
    </div>
  )
}

export default Modal

