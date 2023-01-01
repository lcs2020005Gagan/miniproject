import React from 'react'
import RightSideCard from './RightSideCard'
import {HiTrendingUp} from 'react-icons/hi'
import {MdRecommend} from 'react-icons/md'
import {RiLiveFill} from 'react-icons/ri'
import SeeAll from './SeeAll'
import { Link } from 'react-router-dom'

function StreamsRightSideNav() {
  return (
    <div className='FoundationsRightSideNavJs RightSideContent' >
      <div className="RightSideNavBut hoverEffects2" >
      <Link to="/stream/123" style={{"color":"white"}}>
        Start A Live Stream <RiLiveFill/>
      </Link>
      </div>
        <div className="FoundationsRightSideNavTrending">
        Trending Streams<HiTrendingUp/>
        <RightSideCard link="/story/124" img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" title="this is a title" desc="lorem jalskdfj lkajdf lkajs flkjafd kljadsfk jadsf" footer="1234 likes" />
        <RightSideCard link="/story/124" img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" title="this is a title" desc="lorem jalskdfj lkajdf lkajs flkjafd kljadsfk jadsf" footer="1234 likes" />
        <RightSideCard link="/story/124" img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" title="this is a title" desc="lorem jalskdfj lkajdf lkajs flkjafd kljadsfk jadsf" footer="1234 likes" />
        <SeeAll/>
        </div>

        <div className="FoundationsRightSideNavRecommended">
       Streams For You<MdRecommend/>
        <RightSideCard link="/story/124" img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" title="this is a title" desc="lorem jalskdfj lkajdf lkajs flkjafd kljadsfk jadsf" footer="1234 likes" />
        <RightSideCard link="/story/124" img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" title="this is a title" desc="lorem jalskdfj lkajdf lkajs flkjafd kljadsfk jadsf" footer="1234 likes" />
        <RightSideCard link="/story/124" img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" title="this is a title" desc="lorem jalskdfj lkajdf lkajs flkjafd kljadsfk jadsf" footer="1234 likes" />
<SeeAll/>
        </div>

    </div>
  )
}

export default StreamsRightSideNav