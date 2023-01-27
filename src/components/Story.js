import React, { useState,useEffect } from "react";
import { FaRegThumbsUp, FaRegThumbsDown, FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
import NoContent from "./NoContent";
import Modal2 from './Modal2'
import Chip from '@material-ui/core/chip'
import { Link, useParams } from "react-router-dom";
function Story() {
    const params=useParams();
    var rand=0
    const host="http://localhost:5000"
    const [article,setArticle]=useState(null)
    const [stop,setStop]=useState(true)
    const [user,setUser]=useState(null)

    useEffect(() => {
      const func=async()=>{
        console.log(params.storyId)
        const response=await fetch(`${host}/api/upload/getarticle/${params.storyId}`,{
            method: 'GET',
          });
          const json=await response.json();
          setArticle(json);   
        //   if(article)  
        //   {
        //       funcc();
        //   }
        //   else{
        //     setStop(!stop)
        //   }
        }
        func();
        console.log(article);    

    }, [])
   
    


    const [likes, setlikes] = useState(23)
    const [liked, setliked] = useState("")
    const handleLiked = () => {
        if (liked === "l") {
            setliked("");
            setlikes(likes - 1);
        }
        else if (liked === "") {
            setliked("l");
            setlikes(likes + 1);
        }
        else {
            setliked("l")
            setlikes(likes + 2);
        }
    }
    const handledDisliked = () => {
        if (liked === "d") {
            setliked("");
            setlikes(likes + 1);
        }
        else if (liked === "") {
            setliked("d");
            setlikes(likes - 1);
        }
        else {
            setliked("d")
            setlikes(likes - 2);
        }
    }
    return (
        <div className='StoryJs'>
            <div className="StoryJsAuthor">
               {article&& <Link to={`/profile/${article.author._id}`}>
                {article&&<div className="StoryJsAuthorPic">
                    <img src={article.author.profileImg} alt="" />
                </div>}
             </Link>}
                <div className="StoryJsInfo">
                   {article&& <div className="StoryJsAuthorName">
                        {article.author.name}
                    </div>}
                    <div className="StoryJsInfoList">
                        <div className="StoryJsInfoListLeft">

                        <div className="StoryJsDate">
                            December 21, 2021
                        </div>
                        <div className="StoryJsMinsRead">
                            10 mins read
                        </div>
                        <div className="share">
                            <Modal2/>
                        </div>
                        </div>
                        <div className="Card3InfoLike" style={{"alignItems":"center","fontSize":"0.8rem","display":"flex","marginBottom":"auto"}}>
                            <div className="Likes hoverEffects" style={{ "color": "white", "fontSize": "0.8rem" }}>
                                {liked === "l" && <FaThumbsUp onClick={() => handleLiked()} />}{liked !== "l" && <FaRegThumbsUp onClick={() => handleLiked()} />}
                            </div>
                            {likes}
                            <div className="Dislikes hoverEffects" style={{ "color": "white", "fontSize": "0.8rem" }}>

                                {liked === "d" && <FaThumbsDown onClick={() => handledDisliked()} />}{liked !== "d" && <FaRegThumbsDown onClick={() => handledDisliked()} />}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="StroyJsContent">
                
                {article&&<div className="StoryJsContentImg">
                    <img src={article.image} alt="" />
                </div>}
               {article&& <div className="Card3InfoTags" style={{"color":"grey"}}>
        Tags:
       
        {article.tags.length&&<Chip label={article.tags[0]}variant="outlined" className='ChipMui hoverEffects' style={{"color":"rgb(129, 115, 249)","border":"1px solid rgb(129, 115, 249)","fontSize":"0.7rem"}}/>}
        {article.tags.length>1&&<Chip label={article.tags[1]}variant="outlined" className='ChipMui hoverEffects' style={{"color":"rgb(129, 115, 249)","border":"1px solid rgb(129, 115, 249)","fontSize":"0.7rem"}}/>}
        {article.tags.length>2&&<Chip label={article.tags[2]}variant="outlined" className='ChipMui hoverEffects' style={{"color":"rgb(129, 115, 249)","border":"1px solid rgb(129, 115, 249)","fontSize":"0.7rem"}}/>}
        {article.tags.length>3&&<Chip label={article.tags[3]}variant="outlined" className='ChipMui hoverEffects' style={{"color":"rgb(129, 115, 249)","border":"1px solid rgb(129, 115, 249)","fontSize":"0.7rem"}}/>}
        {article.tags.length>4&&<Chip label={article.tags[4]}variant="outlined" className='ChipMui hoverEffects' style={{"color":"rgb(129, 115, 249)","border":"1px solid rgb(129, 115, 249)","fontSize":"0.7rem"}}/>}
        
        </div>}
                {article&&<div className="StoryJsContentTitle" style={{"fontSize":"2rem","color":"white"}}>
                {article.title}                
                </div>}
                {article&&<div className="StoryJsContentpara">

               {article.description}
                </div>}
            </div>
            {/* <NoContent/> */}
        </div>
    )
}

export default Story