import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
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
import Modal from './components/Modal';
import Setting from './components/Setting';
import LeftSideNav from './components/LeftSideNav';
import MainContentPage from './components/MainContentPage';
import SideIconsJs from './components/SideIconsJs';
import RightSideNav from './components/RightSideNav';
import Friend from './components/Friend';
import Notification from './components/Notification';
import { VideoRoom } from './components/VideoRoom';
import LiveStreams from './components/LiveStreams';
import LiveStream from './components/LiveStream';
import Card from './components/Card';
import Organization from './components/Organization';
import Profile from './components/Profile';
import Stream from './components/Stream';
import AudioControls from './components/AudioControls';
import SpeechWave from './components/SpeechWave';
import Foundations from './components/Foundations';
import Streams from './components/Streams';
import Stories from './components/Stories';
import Story from './components/Story';
import StoryRightSideNav from './components/StoryRightSideNav';
import FoundationsRightSideNav from './components/FoundationsRightSideNav';
import StoriesRightSideNav from './components/StoriesRightSideNav';
import StreamsRightSideNav from './components/StreamsRightSideNav';
import ProfileRightSideNav from './components/ProfileRightSideNav';

function App() {
  const [Mode, setMode] = useState("");
  const handleClick = (lmao) => {
    setMode(lmao);
  }
  const handleClickNull = () => {
    setMode("");
  }

  return (
    <BrowserRouter>

      <div className="Container">
        <div className='LeftNavDiv'>
          <div className='LeftNavDivTop'>
            <div className='SideIcons'>
              <SideIconsJs />
            </div>
            <div className='LeftSideNav'>
              <LeftSideNav />
            </div>
          </div>
          <div className='LeftNavDivBottom'>
            <div className='SpeechWave'>
              <SpeechWave />
            </div>
            <div className='AudioControls'>
              <AudioControls />
            </div>
          </div>

        </div>

        <div className='MainContent'>
          {/* <div className="App">
      <h1>WDJ Virtual Call</h1>

      
    </div> */}
          <Routes>
            <Route exact path="/" element=<MainContentPage /> />
            <Route exact path="/friend" element=<Friend /> />
            <Route exact path="/live-stream/:roomId" element=<LiveStream /> />
            <Route exact path="/live-streams" element=<LiveStreams /> />
            <Route exact path="/foundations" element=<Foundations /> />
            <Route exact path="/foundation/:foundationId" element=<Organization /> />
            <Route exact path="/profile/:profileId" element=<Profile toRender={"subscriptions"} /> />
            <Route exact path="/profile/:profileId/contributions" element=<Profile toRender={"contributions"} /> />
            <Route exact path="/profile/:profileId/liked" element=<Profile toRender={"liked"} /> />
            <Route exact path="/stream/:streamId" element=<Stream /> />
            <Route exact path="/streams" element=<Streams /> />
            <Route exact path="/stories" element=<Stories /> />
            <Route exact path="/story/:storyId" element=<Story /> />

            {/* <Route exact path="/call" element=<VideoRoom/> /> */}

          </Routes>

        </div>

        <div className='RightSideNav' >
        

          <div className='MainContentPageJsTop' >
            <input type="text" className='SearchBox' placeholder='Search twitter' />
          </div>
          <div className="RightSideNavTop" style={{ "marignTop": "3rem" }}>

            <div className='RightSideNavTopIcon'>
              <IoMdNotificationsOutline onClick={() => handleClick('notifications')} />

            </div>
            <div className='RightSideNavTopIcon'>
              <IoSettings onClick={() => handleClick('settings')} />
            </div>
            <Modal />
          </div>
          {
                Mode==="notifications"&&<div className="RightSideNavBottom Notifs">
                    
                    <div className='NotifsTop'>
                        <div className='Notifsclose'>

                        <AiOutlineClose className=' hoverEffects' onClick={() => handleClickNull()}/>
                        </div>
                        <div style={{"textAlign":"center","display":"flex","justifyContent":"center"}}>

                        <h5>
                            Notifications
                        </h5>
                        </div>
                    </div>
                    <Notification/>
                </div>
            }

            {
                Mode==="settings"&&<div className="RightSideNavBottom Notifs">
                    
                    <div className='NotifsTop'>
                        <div className='Notifsclose'>

                        <AiOutlineClose className=' hoverEffects' onClick={() => handleClickNull()}/>
                        </div>
                        <div style={{"textAlign":"center","display":"flex","justifyContent":"center"}}>

                        <h5>
                            Settings
                        </h5>
                        </div>
                        <Setting/>
                    </div>
                    
                </div>
            }

          {
            
            Mode===""&&
          <div className="RightSideRoute">
            <Routes>
          <Route exact path="/" element=<RightSideNav /> />
          <Route exact path="/story/:storyId" element=<StoryRightSideNav /> />
          <Route exact path="/foundations" element=<FoundationsRightSideNav/> />
          <Route exact path="/stories" element=<StoriesRightSideNav/> />
          <Route exact path="/streams" element=<StreamsRightSideNav/> />
          <Route exact path="/profile/:profileId" element=<ProfileRightSideNav/> />
          <Route exact path="/profile/:profileId/:x" element=<ProfileRightSideNav/> />
          </Routes>
          </div>
          }


        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
