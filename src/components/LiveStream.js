import {React,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
function LiveStream() {
    const {roomId} =useParams();
    const {role}=useParams();
    
    
    const myMeeting=async(element) =>{
        const appID=1161488507;
        const serverSecret="b02bef866a23974a51899e03f62876ad";
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),"Gagan");
        const zp=ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container:element,
            scenario:{
                mode:ZegoUIKitPrebuilt.LiveStreaming,
            },
        });
        
    }
  return (

    <div className='LiveStream'>
        <div ref={myMeeting} className='LiveStreamWindow'/>
    </div>
  )
}

export default LiveStream