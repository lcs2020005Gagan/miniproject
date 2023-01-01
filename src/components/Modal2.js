import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {FaShareAlt} from 'react-icons/fa'

import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    TelegramShareButton,
    RedditShareButton,
    PinterestShareButton,
    InstapaperShareButton,
    WhatsappIcon,
    TwitterIcon,
    FacebookIcon,
    TelegramIcon,
    InstapaperIcon,
    RedditIcon,
    PinterestIcon,
  } from 'react-share';
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

  return (
    
    <div>
<div className="Card8Share" onClick={handleOpen}>
                <FaShareAlt className='hoverEffects'/>
          </div>      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{"display":"flex","gap":"0.5rem","height":"10rem"}}>
            
        <FacebookShareButton
          url={shareUrl}
          quote={'Check Out This Amazing Post I Found On TheGivingHub'}
          hashtag={'#TheGivingHub'}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>

        <WhatsappShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>        
        <TwitterShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>     
        <TelegramShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <TelegramIcon size={40} round={true} />
        </TelegramShareButton>       
        <RedditShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <RedditIcon size={40} round={true} />
        </RedditShareButton>  
        <PinterestShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <PinterestIcon size={40} round={true} />
        </PinterestShareButton>  
        <InstapaperShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <InstapaperIcon size={40} round={true} />
        </InstapaperShareButton>        
        </Box>
      </Modal>
    </div>
  );
}