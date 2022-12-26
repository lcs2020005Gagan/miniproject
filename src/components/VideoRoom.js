import React, { useEffect, useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import { VideoPlayer } from './VideoPlayer';

const APP_ID = '2eea4e5788844d25b0e2cce520ccbead';
const TOKEN =null;
const CHANNEL = 'wdj';

const client = AgoraRTC.createClient({
  mode: 'rtc',
  codec: 'vp8',
});

export const VideoRoom = () => {
  // const [users, setUsers] = useState([]);
  // const [localTracks, setLocalTracks] = useState([]);

  // const handleUserJoined = async (user, mediaType) => {
  //   await client.subscribe(user, mediaType);

  //   if (mediaType === 'video') {
  //     setUsers((previousUsers) => [...previousUsers, user]);
  //   }

  //   if (mediaType === 'audio') {
  //     // user.audioTrack.play()
  //   }
  // };

  // const handleUserLeft = (user) => {
  //   setUsers((previousUsers) =>
  //     previousUsers.filter((u) => u.uid !== user.uid)
  //   );
  // };

  // useEffect(() => {
  //   client.on('user-published', handleUserJoined);
  //   client.on('user-left', handleUserLeft);

  //   client
  //     .join(APP_ID, CHANNEL, TOKEN, null)
  //     .then((uid) =>
  //       Promise.all([
  //         AgoraRTC.createMicrophoneAndCameraTracks(),
  //         uid,
  //       ])
  //     )
  //     .then(([tracks, uid]) => {
  //       const [audioTrack, videoTrack] = tracks;
  //       setLocalTracks(tracks);
  //       setUsers((previousUsers) => [
  //         ...previousUsers,
  //         {
  //           uid,
  //           videoTrack,
  //           audioTrack,
  //         },
  //       ]);
  //       client.publish(tracks);
  //     });

  //   return () => {
  //     for (let localTrack of localTracks) {
  //       localTrack.stop();
  //       localTrack.close();
  //     }
  //     client.off('user-published', handleUserJoined);
  //     client.off('user-left', handleUserLeft);
  //     client.unpublish(tracks).then(() => client.leave());
  //   };
  // }, []);

  return (
    <></>
    // <div
    //   style={{ backgroundColor:'black',display: 'flex', justifyContent: 'center',height:'50%' ,zIndex:1000}}
    // >
    //   <div
    //     style={{
    //       display: 'grid',
    //       gridTemplateColumns: 'repeat(2, 50%)',
    //       borderRadius:'50%',
    //     //   padding:'2rem'
    //     }}
    //   >
    //     {users.map((user) => (
    //       <VideoPlayer key={user.uid} user={user} style={{borderRadius:'50%',overFlow:'hidden'}} />
    //     ))}
    //   </div>
    // </div>
  );
};