import React from 'react'
import RightSideCard from './RightSideCard'
import {HiTrendingUp} from 'react-icons/hi'
import {MdRecommend} from 'react-icons/md'
import SeeAll from './SeeAll'
import Modal3 from './Modal3'
function StoriesRightSideNav() {
  return (
    <div className='FoundationsRightSideNavJs RightSideContent' >
      {localStorage.getItem('token')&&<Modal3/>}
        <div className="FoundationsRightSideNavTrending">
        Trending Stories <HiTrendingUp/>
        <RightSideCard link="/story/124" img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" title="this is a title" desc="lorem jalskdfj lkajdf lkajs flkjafd kljadsfk jadsf" footer="1234 likes" />
        <RightSideCard link="/story/124" img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" title="this is a title" desc="lorem jalskdfj lkajdf lkajs flkjafd kljadsfk jadsf" footer="1234 likes" />
        <RightSideCard link="/story/124" img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" title="this is a title" desc="lorem jalskdfj lkajdf lkajs flkjafd kljadsfk jadsf" footer="1234 likes" />
        <SeeAll/>
        </div>

       {localStorage.getItem('token')&& <div className="FoundationsRightSideNavRecommended">
        Stories For You<MdRecommend/>
        <RightSideCard link="/story/124" img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" title="this is a title" desc="lorem jalskdfj lkajdf lkajs flkjafd kljadsfk jadsf" footer="1234 likes" />
        <RightSideCard link="/story/124" img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" title="this is a title" desc="lorem jalskdfj lkajdf lkajs flkjafd kljadsfk jadsf" footer="1234 likes" />
        <RightSideCard link="/story/124" img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" title="this is a title" desc="lorem jalskdfj lkajdf lkajs flkjafd kljadsfk jadsf" footer="1234 likes" />
<SeeAll/>
        </div>}

    </div>
  )
}

export default StoriesRightSideNav