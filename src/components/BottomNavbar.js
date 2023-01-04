import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import RightSideNavDiv from './RightSideNavDiv'
import LeftNavDiv from './LeftNavDiv';
import LeftNavDivMob from './LeftNavDivMob';
import {RiMenuFoldLine} from 'react-icons/ri'
import {RiMenuUnfoldLine} from 'react-icons/ri'
import SearchBar from './SearchBar';
export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className='BottomNavbarJs'>
      {['left', 'right'].map((anchor) => (
        <React.Fragment key={anchor} style={{"width":"500px"}}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          {anchor==='left'&&<RiMenuUnfoldLine className='LeftSideNavOpener' onClick={toggleDrawer('left', true)}/>}
          {anchor==='right'&&
  <input type="text" className='SearchBox2' placeholder='Search...'  style={{"height":"100%","width":"100%","fontSize":"1rem"}}/>
}
          {anchor==='right'&&<RiMenuFoldLine className='RightSideNavOpener' onClick={toggleDrawer('right', true)}/>}
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            variant="temporary"
  ModalProps={{
    keepMounted: true,
  }}
          style={{"width":"500px"}}>
            <Box  sx={{ width: 284 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>

            {anchor==='right'&&<RightSideNavDiv style={{"width":"100%","backgroundColor":"red"}}/>}
            {anchor==='left'&&<LeftNavDivMob style={{"width":"100%"}}/>}
            </Box>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

