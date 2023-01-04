import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { BiSend } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoSettings } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import Avatar from '@mui/material/Avatar';
import Modal from './Modal';
import Modal2 from './Modal2';
import Setting from './Setting';
import LeftSideNav from './LeftSideNav';
import MainContentPage from './MainContentPage';
import SideIconsJs from './SideIconsJs';
import RightSideNav from './RightSideNav';
import Friend from './Friend';
import Notification from './Notification';
import { VideoRoom } from './VideoRoom';
import LiveStreams from './LiveStreams';
import LiveStream from './LiveStream';
import Card from './Card';
import Organization from './Organization';
import Profile from './Profile';
import Stream from './Stream';
import AudioControls from './AudioControls';
import SpeechWave from './SpeechWave';
import Foundations from './Foundations';
import Streams from './Streams';
import Stories from './Stories';
import Story from './Story';
import StoryRightSideNav from './StoryRightSideNav';
import FoundationsRightSideNav from './FoundationsRightSideNav';
import StoriesRightSideNav from './StoriesRightSideNav';
import StreamsRightSideNav from './StreamsRightSideNav';
import ProfileRightSideNav from './ProfileRightSideNav';
import ToolTip from './ToolTip';
import Footer from './Footer';
import LeftNavDiv from './LeftNavDiv';
function RightSideNavDiv() {
    const [Mode, setMode] = useState("");
  const handleClick = (lmao) => {
    setMode(lmao);
  }
  const handleClickNull = () => {
    setMode("");
  }
 
  return (
<div className='RightSideNavMob' >
<div className="RightSideNavTop" style={{ "marignTop": "3rem" }}>

  <div className='RightSideNavTopIcon'>
    <IoMdNotificationsOutline onClick={() => handleClick('notifications')} />

  </div>
  <div className='RightSideNavTopIcon'>
    <IoSettings onClick={() => handleClick('settings')} />
  </div>
  {/* <Modal /> */}
</div>
{
  Mode === "notifications" && <div className="RightSideNavBottom Notifs">

    <div className='NotifsTop'>
      <div className='Notifsclose'>

        <AiOutlineClose className=' hoverEffects' onClick={() => handleClickNull()} />
      </div>
      <div style={{ "textAlign": "center", "display": "flex", "justifyContent": "center" }}>

        <h5>
          Notifications
        </h5>
      </div>
    </div>
    <Notification />
  </div>
}

{
  Mode === "settings" && <div className="RightSideNavBottom Notifs">

    <div className='NotifsTop'>
      <div className='Notifsclose'>

        <AiOutlineClose className=' hoverEffects' onClick={() => handleClickNull()} />
      </div>
      <div style={{ "textAlign": "center", "display": "flex", "justifyContent": "center" }}>

        <h5>
          Settings
        </h5>
      </div>
      <Setting />
    </div>

  </div>
}

{

  Mode === "" &&
  <div className="RightSideRoute">
    <Routes>
      <Route exact path="/" element=<RightSideNav /> />
      <Route exact path="/story/:storyId" element=<StoryRightSideNav /> />
      <Route exact path="/foundations" element=<FoundationsRightSideNav /> />
      <Route exact path="/stories" element=<StoriesRightSideNav /> />
      <Route exact path="/streams" element=<StreamsRightSideNav /> />
      <Route exact path="/profile/:profileId" element=<ProfileRightSideNav /> />
      <Route exact path="/profile/:profileId/:x" element=<ProfileRightSideNav /> />
    </Routes>
  </div>
}


</div>  )
}

export default RightSideNavDiv