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

function App() {

  return (
    <BrowserRouter>

    <div className="Container">
      <div className='LeftNavDiv'>
        <div className='LeftNavDivTop'>
          <div className='SideIcons'>
                <SideIconsJs/>
          </div>
          <div className='LeftSideNav'>
                <LeftSideNav/>
          </div>
        </div>
        <div className='LeftNavDivBottom'>
            <div className='SpeechWave'>
                  SpeechWave
            </div>
            <div className='AudioControls'>
                AudioControls
            </div>
        </div>
       
      </div>

      <div className='MainContent'>
      {/* <div className="App">
      <h1>WDJ Virtual Call</h1>

      
    </div> */}
      <Routes>
      <Route exact path="/" element= <MainContentPage/> />
      <Route exact path="/friend" element=<Friend/> />
      <Route exact path="/live-stream/:roomId" element=<LiveStream/> />
      <Route exact path="/live-streams" element=<LiveStreams/> />
      <Route exact path="/organization" element=<Organization/> />
      
      {/* <Route exact path="/call" element=<VideoRoom/> /> */}
     
      </Routes>
      
            </div>

      <div className='RightSideNav'>
      
        

       <RightSideNav/> 

      </div>
    </div>
    </BrowserRouter>

  );
}

export default App;
