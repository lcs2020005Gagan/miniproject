import React, { useEffect } from 'react'
import Card4 from './Card4';
import SearchBar from './SearchBar';
import logo from './Beautiful-gray-wave-vector-PNG.png';
import CardJs from './CardJs';
import Carousel from './Carousel';
import RecentlyUpdated from './RecentlyUpdated';
import ToolTip from './ToolTip';
import Card5 from './Card5';
import Card6 from './Card6';
import WhoToFollow from './WhoToFollow';
import TimeLine from './TimeLine';
import WhatsHappening from './WhatsHappening';
import Card8 from './Card8';
import Card9 from './Card9';
import RecommendedForYou from './RecommendedForYou';
import Carousel2 from './Carousel2';
import Footer from './Footer';
import { DiscussionEmbed } from 'disqus-react';
import BottomNavbar from './BottomNavbar';
import Modall from './Modall'

function MainContentPage() {


  const handleTop = () => {
    const scrollDemo = document.querySelector(".MainContent");

    scrollDemo.scrollTop = 0;

  }

  return (
    <div className='MainContentPageJs'>
      {/* <div className="MainCarousel" style={{"marginBottom":"3rem","backgroundImage":"url(https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/banner-bg.png)"}}>
            <Carousel2/>
          </div> */}
      <div className='MainContentPageJsBottom'>

        <div id="whatshappening">
          <WhatsHappening x/>x

          </div>
          <div id="recommendedforyou">

          <RecommendedForYou />
        </div>

        <div id="whotofollow">

          <WhoToFollow />
        </div>
        <div id="recentlyupdated">
          <RecentlyUpdated />

        </div>
        <div id="timeline">

          <TimeLine />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
      {/* <Card5/> */}
    </div>
  )
}

export default MainContentPage



