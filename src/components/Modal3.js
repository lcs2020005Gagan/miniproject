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
  const [tags, setTags] = useState([])
  const [note, setnote] = useState({ title: "",image:"" });
  const handlechange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value })
    // console.log(note);
}
  function handleKeyDown(e){
      if(e.key !== 'Enter') return
      const value = e.target.value
      if(!value.trim()) return
      setTags([...tags, value])
      e.target.value = ''
  }

  function removeTag(index){
      setTags(tags.filter((el, i) => i !== index))
  }
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    const title = note.title
    const image = note.image
    const description=content
    const authtoken=localStorage.getItem('token');
    const response = await fetch("http://localhost:5000/api/upload/addarticle", {
        method: 'POST',
        headers: {
            'auth-token':(localStorage.getItem('token')),
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify({ title ,description,image,tags}),
    });
    const json = await response.json();
    console.log(json);
    if (json) {
        
        console.log("success mf")
        // navigate('/');
        window.location.reload();
        handleClose();

    }
    else {
        console.log("invalid cred")
    }

}

  return (
    <div>
<div className="Card8Share" onClick={handleOpen}>
    <div className="RightSideNavBut hoverEffects2">

Post Your Story <TiDocumentAdd/>
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
        
        <MDBInput wrapperClass='mb-4' label='Title' id='form1' name='title' type='text' onChange={handlechange}  />
      <MDBInput wrapperClass='mb-4' label='Paste your image url here' id='form2' type='text' name='image' onChange={handlechange}/>

        <div className="cont mb-5" >
    <label for="exampleInputEmail1" class="form-label" style={{"fontSize":"1.3rem"}}>Description</label>
            <JoditEditor style={{"width":"100%","border":"1px solid black"}}ref={editor} value={content} onChange={newContent=>{setcontent(newContent)}}/>
            </div>
        <div className="cont mb-3">

        <div className="tags-input-container">

            { tags.map((tag, index) => (
                <div className="tag-item" key={index}>
                    <span className="text">{tag}</span>
                    <span className="close" onClick={() => removeTag(index)}>&times;</span>
                </div>
            )) }
            <input onKeyDown={handleKeyDown} type="text" className="tags-input" placeholder="Add tags" />
        </div>
        </div>

  <button type="submit" class="btn btn-primary" id="postButton" onClick={handlesubmit}>Post</button>
</div>
          
        </Box>
      </Modal>
    </div>
  );
}


