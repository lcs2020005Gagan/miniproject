import React, { Component, useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {FaShareAlt} from 'react-icons/fa'
import {AiFillCloseCircle} from 'react-icons/ai'
import {GrDocumentUpload} from 'react-icons/gr'
import {TiDocumentAdd} from 'react-icons/ti'
import JoditEditor from "jodit-react"
import { borderRadius } from '@mui/system';
import { InputTags } from 'react-bootstrap-tagsinput'
import {FaBuilding} from 'react-icons/fa'
import 'react-bootstrap-tagsinput/dist/index.css'
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
import { useNavigate} from 'react-router-dom';

export default function BasicModal(props) {
   
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const shareUrl = props.link;
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height:800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    borderRadius:3
  };
  const editor=useRef(null)
  const [content, setcontent] = useState('')
  const [aim, setAim] = useState([])
  const [note, setnote] = useState({ name: "",email:"",password:"",profileImg:"" });
  const handlechange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value })
    // console.log(note);
}
  function handleKeyDown(e){
      if(e.key !== 'Enter') return
      const value = e.target.value
      if(!value.trim()) return
      setAim([...aim, value])
      e.target.value = ''
  }

  function removeTag(index){
      setAim(aim.filter((el, i) => i !== index))
  }
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
      const name=note.name
      const email=note.email
      const password=note.password
      const profileImg=note.profileImg
      const about=content
          const response=await fetch("http://localhost:5000/api/auth/createfoundation",{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({name,email,about,password,profileImg,aim}),
            });
          const json=await response.json();
          console.log(json);
          if(json)
          {
            console.log(json);
            localStorage.setItem('foundation',json.authtoken)
            handleClose();
          }
          else
          {
            // alert("invalid cred");
            console.log("invalid cred")
          }
  

}

  return (
    <div>
<div className="Card8Share" onClick={handleOpen}>
<div className="RightSideNavBut hoverEffects2">
        Register Foundation <FaBuilding/>
      </div>
          </div>      
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
     q >
        <Box sx={style} style={{"display":"flex","flexDirection":"column","gap":"1.5rem","height":"95%","width":"90%","overflow":"auto","fontSize":"1.3rem","color":"black"}}>
            <div className="cont"  >
                
        <AiFillCloseCircle className='hoverEffects' onClick={handleClose}/>
            </div>
        <div id="formStory">
        
        <MDBInput wrapperClass='mb-4' label='Name' id='form1' name='name' type='text' onChange={handlechange}  />
      <MDBInput wrapperClass='mb-4' label='Email' id='form2' type='email' name='email' onChange={handlechange}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form3' type='password' name='password' onChange={handlechange}/>
      <MDBInput wrapperClass='mb-4' label='Profile image url' id='form4' type='text' name='profileImg' onChange={handlechange}/>
   

      <div className="cont mb-5" >
    <label for="exampleInputEmail1" class="form-label" style={{"fontSize":"1.3rem"}}>About</label>
            <JoditEditor style={{"width":"100%","border":"1px solid black"}}ref={editor} value={content} onChange={newContent=>{setcontent(newContent)}}/>
            </div>
    <div className="cont mb-3">

        <div className="tags-input-container">

            { aim.map((tag, index) => (
                <div className="tag-item" key={index}>
                    <span className="text">{tag}</span>
                    <span className="close" onClick={() => removeTag(index)}>&times;</span>
                </div>
            )) }
            <input onKeyDown={handleKeyDown} type="text" className="tags-input" placeholder="Add aim" />
        </div>
        </div>

        
  <button type="submit" class="btn btn-primary" id="postButton" onClick={handlesubmit}>Post</button>
</div>
          
        </Box>
      </Modal>
    </div>
  );
}


