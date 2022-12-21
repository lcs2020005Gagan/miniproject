import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

// get token
function generateToken(tokenServerUrl, userID, roomID, userName) {
    // Obtain the token interface provided by the App Server
    return fetch(
      `${tokenServerUrl}/access_token?userID=${userID}&userName=${userName}&roomID=${roomID}&expired_ts=7200`,
      {
        method: 'GET',
      }
    ).then((res) => res.json());
  }

  function randomID(len) {
    let result = '';
    if (result) return result;
    var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
      maxPos = chars.length,
      i;
    len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  }

  function getUrlParams(url) {
    let urlStr = url.split('?')[1];
    const urlSearchParams = new URLSearchParams(urlStr);
    const result = Object.fromEntries(urlSearchParams.entries());
    return result;
  }

  const init=async(element)=> {
    const roomID = getUrlParams(window.location.href)['roomID'] || randomID(5);
    let role = getUrlParams(window.location.href)['role'] || 'Host';
    role =
      role === 'Host'
        ? ZegoUIKitPrebuilt.Host
        : role === 'Cohost'
        ? ZegoUIKitPrebuilt.Cohost
        : ZegoUIKitPrebuilt.Audience;
  
    const { token } = await generateToken(
      'https://nextjs-token-7berndqqr-choui666.vercel.app/api',
      randomID(5),
      roomID,
      "name of user"
    );
    console.log("token: ",token);
  
    let sharedLinks = [];
    if (role === ZegoUIKitPrebuilt.Host || role === ZegoUIKitPrebuilt.Cohost) {
      sharedLinks.push({
        name: 'Join as co-host',
        url:
          window.location.origin +
          window.location.pathname +
          '?roomID=' +
          roomID +
          '&role=Cohost',
      });
    }
    sharedLinks.push({
      name: 'Join as audience',
      url:
        window.location.origin +
        window.location.pathname +
        '?roomID=' +
        roomID +
        '&role=Audience',
    });
  
    const zp = ZegoUIKitPrebuilt.create(token);
    zp.joinRoom({
        container:element,

      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
        config: {
          role,
        },
      },
      showPreJoinView: false,

      sharedLinks,
      onLeaveRoom: () => {
        // do do something
        //remove the stream from database and navigate the user back to homepage or something
      },
      showUserList: true,
    });
  }
  
  

function Stream() {

  return (
    <div className='StreamJs'>

    <div id='app' ref={init}/>
    </div>
  )
//   init();
}

export default Stream

//







