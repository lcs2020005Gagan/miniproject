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
import { InputTags } from 'react-bootstrap-tagsinput'
import 'react-bootstrap-tagsinput/dist/index.css'
import { borderRadius } from '@mui/system';


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
        <Box sx={style} style={{"display":"flex","flexDirection":"column","gap":"1.5rem","height":"95%","width":"90%","overflow":"auto"}}>
            <div className="cont"  style={{"fontSize":"1.3rem","color":"black"}}>
                
        <AiFillCloseCircle className='hoverEffects' onClick={handleClose}/>
            </div>
        <form id="formStory">
        
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" style={{"fontSize":"1.3rem"}}>Title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{"width":"100%","border":"1px solid black"}}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" style={{"fontSize":"1.3rem"}}>Paste image url</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{"width":"100%","border":"1px solid black"}}/>
  </div>
  
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

  <button type="submit" class="btn btn-primary" id="postButton">Post</button>
</form>
          
        </Box>
      </Modal>
    </div>
  );
}


