import logo from './logo.svg';
import { useEffect, useState,useRef } from 'react';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
  useLocation,
} from "react-router-dom";

import { BiSend } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FiLogOut } from 'react-icons/fi';
import { MdArrowUpward} from 'react-icons/md';
import { IoSettings } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import Avatar from '@mui/material/Avatar';
import Modall from './components/Modall';
import Modal2 from './components/Modal2';
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
import ToolTip from './components/ToolTip';
import Footer from './components/Footer';
import LeftNavDiv from './components/LeftNavDiv';
import BottomNavbar from './components/BottomNavbar'
import Home from './components/Home';
import MainContentRight from './components/MainContentRight';
function App() {
  const [Mode, setMode] = useState("");
  const [bool1,setbool1]=useState(false)
  const handleClick = (lmao) => {
    setMode(lmao);
  }
  const handleClickNull = () => {
    setMode("");
  }
  const handleLogout=()=>{
    localStorage.clear('token')
  }
  const MainContentRef = useRef();
useEffect(() => {
  const scrollDemo = document.querySelector(".MainContent");
  const toTheTop = document.querySelector(".ToTop");
    setbool1(!bool1);
    if(scrollDemo.scrollTop>0)
    {
      toTheTop.style.display='block';
    }
    if(scrollDemo.scrollTop==0)
    {
      toTheTop.style.display='none';
    }
  },[])


const handleTop=()=>{
  const scrollDemo = document.querySelector(".MainContent");
  const to = document.querySelector(".ToTop");

  scrollDemo.scrollTop=0;
  

    }

  return (
    <BrowserRouter>

      <div className="Container">
        <LeftNavDiv/>

        <div className='MainContent' ref={MainContentRef}style={{"display":"flex","flexDirection":"column"}}>
          {/* <div className="App">
      <h1>WDJ Virtual Call</h1>

      
    </div> */}
                <BottomNavbar/>

<Routes>
            <Route exact path="/" element=<Home /> />
            <Route exact path="/explore" element=<MainContentPage /> />
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
          <button onClick={()=>handleTop()} className='ToTop'>Back To Top <MdArrowUpward/></button>

        </div>

        <div className='RightSideNav' >


          <div className='MainContentPageJsTop' >
            <input type="text" className='SearchBox' placeholder='Search...' />
          </div>
          <div className="RightSideNavTop" style={{ "marignTop": "3rem" }}>

            <div className='RightSideNavTopIcon'>
              <IoMdNotificationsOutline onClick={() => handleClick('notifications')} />

            </div>
            <div className='RightSideNavTopIcon'>
              <IoSettings onClick={() => handleClick('settings')} />
            </div>
            {localStorage.getItem('token')===null&&<Modall />}
            {localStorage.getItem('token')!==null&&<div className='logout'><FiLogOut className="hoverEffects" onClick={()=>handleLogout()} /></div>}
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
                <Route exact path="/explore" element=<MainContentRight /> />

                <Route exact path="/story/:storyId" element=<StoryRightSideNav /> />
                <Route exact path="/foundations" element=<FoundationsRightSideNav /> />
                <Route exact path="/stories" element=<StoriesRightSideNav /> />
                <Route exact path="/streams" element=<StreamsRightSideNav /> />
                <Route exact path="/profile/:profileId" element=<ProfileRightSideNav /> />
                <Route exact path="/profile/:profileId/:x" element=<ProfileRightSideNav /> />
              </Routes>
            </div>
          }


        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
