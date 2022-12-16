import logo from './logo.svg';
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
      <Routes>
      <Route exact path="/" element= <MainContentPage/> />
      <Route exact path="/friend" element=<Friend/> />
     
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
