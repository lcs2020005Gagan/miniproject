import logo from './logo.svg';
import './App.css';
import LeftSideNav from './components/LeftSideNav';
import MainContentPage from './components/MainContentPage';
import SideIconsJs from './components/SideIconsJs';
import RightSideNav from './components/RightSideNav';

function App() {
  return (
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
        <MainContentPage/>
      </div>
      <div className='RightSideNav'>
            <RightSideNav/>
      </div>
    </div>
  );
}

export default App;
