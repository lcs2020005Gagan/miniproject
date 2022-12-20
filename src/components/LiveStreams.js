import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function LiveStreams() {
   
  return (
    <div className='LiveStreams'>
        <div className='LiveStreamCard'>
            <h1>
                Live Streaming for charity
            </h1>
            <p>this is a wonderful stream</p>
            <Link to="/live-stream/153">
            <button>
                Watch
            </button>
            </Link>
           
        </div> 
        <div className='LiveStreamCard'>
            <h1>
                Live Streaming for charity
            </h1>
            <p>this is a wonderful stream</p>
           <a href='/live-stream/154'>
           <button>
                Watch
            </button>
            </a> 
        </div>
        <div className='LiveStreamCard'>
            <h1>
                Live Streaming for charity
            </h1>
            <p>this is a wonderful stream</p>
            <button>
                Watch
            </button>
        </div>
        <div className='LiveStreamCard'>
            <h1>
                Live Streaming for charity
            </h1>
            <p>this is a wonderful stream</p>
            <button>
                Watch
            </button>
        </div>
        <div className='LiveStreamCard'>
            <h1>
                Live Streaming for charity
            </h1>
            <p>this is a wonderful stream</p>
            <button>
                Watch
            </button>
        </div>
        <div className='LiveStreamCard'>
            <h1>
                Live Streaming for charity
            </h1>
            <p>this is a wonderful stream</p>
            <button>
                Watch
            </button>
        </div>
        <div className='LiveStreamCard'>
            <h1>
                Live Streaming for charity
            </h1>
            <p>this is a wonderful stream</p>
            <button>
                Watch
            </button>
        </div>
        
    </div>
  )
}

export default LiveStreams