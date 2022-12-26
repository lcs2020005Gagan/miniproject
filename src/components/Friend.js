import React, { useEffect, useRef, useState } from 'react';
import AgoraRTM from 'agora-rtm-sdk';
import { v4 as uuidv4 } from 'uuid';
import Avatar from '@mui/material/Avatar';
import {IoVideocam} from 'react-icons/io5';
import {RiSendPlaneLine} from 'react-icons/ri';
import {RxExit} from 'react-icons/rx';
import { VideoRoom } from './VideoRoom';


let queryString = window.location.search
let urlParams = new URLSearchParams(queryString)
let CHANNEL = urlParams.get('connection')

const APP_ID = '452f99a0814b44d29d9a446ec20356fc';
// const CHANNEL = 'wdj';

let client = AgoraRTM.createInstance(APP_ID);
let uid = uuidv4();

function Friend() {
    const [joined, setJoined] = useState(false);

    const messagesRef = useRef();
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');
    const [channel, setChannel] = useState(null);
  
    const appendMessage = (message) => {
      setMessages((messages) => [...messages, message]);
    };
  
    useEffect(() => {
      const connect = async () => {
        await client.login({ uid, token: null });
        const channel = await client.createChannel(CHANNEL);
        await channel.join();
        channel.on('ChannelMessage', (message, peerId) => {
          appendMessage({
            text: message.text,
            uid: peerId,
          });
        });
        setChannel(channel);
        return channel;
      };
      const connection = connect();
  
      return () => {
        const disconnect = async () => {
          const channel = await connection;
          await channel.leave();
          await client.logout();
        };
        disconnect();
      };
    }, [joined]);
  
    useEffect(() => {
      messagesRef.current.scrollTop =
        messagesRef.current.scrollHeight;
    }, [messages]);
  
    const sendMessage = (e) => {
      e.preventDefault();
      if (text === '') return;
      channel.sendMessage({ text, type: 'text' });
      appendMessage({
        text: text,
        uid,
      });
      setText('');
    };
  return (
    <div className='FriendJs'>
        <div className="FriendHeader">
            <div className='AvatarAndName'>

        <Avatar alt="Remy Sharp" src="https://cyber-privacy.net/wp-content/uploads/thispersondoesnotexist.com-image01.jpg.webp" />
        <div className='AvatarName'>

        Yeager
        </div>
            </div>
        <div className='AvatarVideoCall'>

        {!joined && (
          <IoVideocam onClick={() => setJoined(true)}/>
      )}
        {joined && (
          <RxExit onClick={() => setJoined(false)} style={{color:'red'}}/>
      )}
        </div>
        </div>
        <div className="panel">
        {joined && <VideoRoom />}
        {/* {!joined&&<p>You've left the chat</p>} */}
        <div className="messages" ref={messagesRef}>
          <div className="inner">
            {messages.map((message, idx) => (
              <div key={idx} className="message">
                {message.uid === uid && (
                  <div className="user-self">
                    You:&nbsp;
                  </div>
                )}
                {message.uid !== uid && (
                  <div className="user-them">
                    Them:&nbsp;
                  </div>
                )}
                <div className="text">{message.text}</div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={sendMessage} className='MessageBox'>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button><RiSendPlaneLine/></button>
        </form>
      </div>
    </div>
  )
}

export default Friend