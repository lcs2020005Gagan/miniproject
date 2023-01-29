import React from 'react'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {FaDonate} from 'react-icons/fa'
import {TiTick} from 'react-icons/ti'
import Card3 from './Card3'
import Carousel from './Carousel'
import Stories from './Stories'
function FoundationMain() {
  return (
    <div className='FoundationMain'>
          <div className="FoundationName">

<h3>
    Foundation name
</h3>
<button className="FoundationMainCardsCardBtn" style={{}}>
                        Subscribe
                    </button>
</div>
        <Carousel/>
        <div className="FoundationMainBody">

      
        <div className="FoundationMainCards">
            <div className="FoundationMainCardsHeader">
                <h6>
                    GET INVOLVED
                </h6>
                <h4 style={{"color":"white"}}>
                    Let's make a difference today
                </h4>
            </div>
            <div className="FoundationMainCardsBody">
                <div className="FoundationMainCardsCard">
                    <h1>
                    <AiOutlineUsergroupAdd/>
                    </h1>
                    <h5>
                        Become a volunteer today
                    </h5>
                    <p>
                       Become a volunteer and support us. Let us all together make the world a better place to live in.
                    </p>
                    <button className="FoundationMainCardsCardBtn" style={{}}>
                        Join Us Now
                    </button>
                </div>

                <div className="FoundationMainCardsCard">
                    <h1>
                    <FaDonate/>
                    </h1>
                    <h5>
                        Donate to support
                    </h5>
                    <p>
                    Help the needed by donating. Even a small donation can go a long way in improving a needy person's life
                    </p>
                    <button className="FoundationMainCardsCardBtn" style={{}}>
                        Donate Now
                    </button>
                </div>

            </div>
        </div>
        <div className="FoundationMainAboutCard">
            <div className="FoundationMainCardsAboutCardImage">
                <img src="https://www.thegardnerschool.com/wp-content/uploads/2022/11/Nashville-heart-hands-2-min.jpg" alt="" />
            </div>
            <div className="FoundationMainAboutCardContent">
                <div className="FoundationMainAboutCardAboutUs">
                    About Us
                </div>
                <div className="FoundationMainAboutCardTitle">
                    Our Work Promise To Uphold The Trust Placed
                </div>
                <div className="FoundationMainAboutCardDesc">
                    <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem pariatur fugit saepe nostrum asperiores ullam, numquam commodi quo maiores labore quas beatae quos dolores laudantium provident nulla officia iusto quam.</h6>
                </div>
                <div className="FoundationMainAboutCardYears">
                    <h1>
                        <b>28</b>
                    </h1>
                    <h3>YEARS OF EXPERIENCE</h3>
                </div>
            </div>
        </div>
        <div className="FoundationMainAim">
        <div className="FoundationMainCardsAboutCardImage">
                <img src="https://media.istockphoto.com/id/519317054/photo/reach-out-and-touch-their-lives.jpg?s=612x612&w=0&k=20&c=Vdr9OxvZPf7G4I6rEhy5y2C2ijCNT4d0qopSKDgLCMg=" alt="" />
            </div>
                <div className="FoundationMainAimBody">
        <div className="FoundationMainAboutCardAboutUs">
                    Our Aim
                
                </div>

                <div className="FoundationMainAimList">
                    <div className="FoundationMainAimListLi">
                        <h1><TiTick/> </h1><h3>Save Children</h3>
                    </div>
                    <div className="FoundationMainAimListLi">
                        <h1><TiTick/> </h1><h3>Women Empowerment</h3>
                    </div>
                    <div className="FoundationMainAimListLi">
                        <h1><TiTick/> </h1><h3>Reduce hunger</h3>
                    </div>
                </div>
        </div>
        </div>
        <div className="FoundationMainStories">
           <h6> Our Stories</h6>
          <Stories/>
        </div>
        </div>

    </div>
  )
}

export default FoundationMain