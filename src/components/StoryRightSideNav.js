import React from 'react'
import { BsFillPersonPlusFill } from 'react-icons/bs'
import { SiGooglemessages } from 'react-icons/si'
import NoContent from './NoContent'
import RightSideCard from './RightSideCard'

function StoryRightSideNav() {
  return (
    <div className='StoryRightSideNav'>
      <div className="StoryRightSideNavAbout">
        Author:
        <div className="StoryRightSideNavAboutPicAuthor">
          <div className="StoryRightSideNavAboutPic hoverEffects">
            <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
          </div>
          <div className="StoryRightSideNavAboutName">
            <div className="StoryAuthorName">
              Mark robinson
            </div>
            <div className="StoryRightSideNavAboutFooter">
              <BsFillPersonPlusFill className='hoverEffects' />
              <SiGooglemessages className='hoverEffects'/>
            </div>
          </div>
        </div>
        <div className="StoryRightSideNavAboutContent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ex reiciendis fugiat excepturi distinctio magni maxime, aut, voluptatum, laborum quis ipsam. Quidem excepturi molestias magnam in iure facilis suscipit ut.
        </div>
      </div>
      <div className="StoryRightSideNavMore" style={{"marginTop":"0.5rem"}}>
        More from the author:
        <RightSideCard link="/story/124" img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" title="this is a title" desc="lorem jalskdfj lkajdf lkajs flkjafd kljadsfk jadsf" footer="1234 likes" />
        <RightSideCard link="/story/124" img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" title="this is a title" desc="lorem jalskdfj lkajdf lkajs flkjafd kljadsfk jadsf" footer="1234 likes" />
        <RightSideCard link="/story/124" img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" title="this is a title" desc="lorem jalskdfj lkajdf lkajs flkjafd kljadsfk jadsf" footer="1234 likes" />
        <RightSideCard link="/story/124" img="https://st.depositphotos.com/1662850/1853/i/450/depositphotos_18538933-stock-photo-spectacular-view-to-the-mountains.jpg" title="this is a title" desc="lorem jalskdfj lkajdf lkajs flkjafd kljadsfk jadsf" footer="1234 likes" />
        
      </div>
    </div>
  )
}

export default StoryRightSideNav