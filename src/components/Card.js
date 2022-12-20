import React from 'react'


function Card() {
    const logo = require('./svgg2.png');


        return (
            <a href='www.twitter.com'>
    <div className="carddd">
        <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt=''/>
        <div className='cardddimg'>
            <img src={logo} className='img123' />
            <div className='cardinsimg'></div>
        </div>
        <a href='www.google.com'>

        
        <div className='CardProfile'>
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
        </div>
        </a>
        <div className='CardContent'>
            <div className='CardContentHeading'>
                this is something
            </div>
            hello there this is someone from the something and hope to see you soon. bye!and this ish toiajdslfk liajsldfkj laksdjf lasjdfkalskdfjl l
        </div>

    </div>
    </a>
  )
}

export default Card