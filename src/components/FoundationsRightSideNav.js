import React from 'react'
import RightSideCard from './RightSideCard'
import {HiTrendingUp} from 'react-icons/hi'
import {MdRecommend} from 'react-icons/md'
import {FaBuilding} from 'react-icons/fa'
import SeeAll from './SeeAll'
function FoundationsRightSideNav() {
  return (
    <div className='FoundationsRightSideNavJs RightSideContent' >
      <div className="RightSideNavBut hoverEffects2">
        Register Foundation <FaBuilding/>
      </div>
        <div className="FoundationsRightSideNavTrending">
        Trending Foundations<HiTrendingUp/>
        <RightSideCard link="/story/124" img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" title="this is a title" desc="lorem jalskdfj lkajdf lkajs flkjafd kljadsfk jadsf" footer="1234 likes" />
        <RightSideCard link="/story/124" img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" title="this is a title" desc="lorem jalskdfj lkajdf lkajs flkjafd kljadsfk jadsf" footer="1234 likes" />
        <RightSideCard link="/story/124" img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" title="this is a title" desc="lorem jalskdfj lkajdf lkajs flkjafd kljadsfk jadsf" footer="1234 likes" />
        <SeeAll/>
        </div>

        <div className="FoundationsRightSideNavRecommended">
       Foundations For You<MdRecommend/>
        <RightSideCard link="/story/124" img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" title="this is a title" desc="lorem jalskdfj lkajdf lkajs flkjafd kljadsfk jadsf" footer="1234 likes" />
        <RightSideCard link="/story/124" img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" title="this is a title" desc="lorem jalskdfj lkajdf lkajs flkjafd kljadsfk jadsf" footer="1234 likes" />
        <RightSideCard link="/story/124" img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" title="this is a title" desc="lorem jalskdfj lkajdf lkajs flkjafd kljadsfk jadsf" footer="1234 likes" />
<SeeAll/>
        </div>

    </div>
  )
}

export default FoundationsRightSideNav