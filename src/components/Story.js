import React, { useState } from "react";
import { FaRegThumbsUp, FaRegThumbsDown, FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
import NoContent from "./NoContent";
function Story() {

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
                <div className="StoryJsAuthorPic">
                    <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>
                <div className="StoryJsInfo">
                    <div className="StoryJsAuthorName">
                        Mark
                    </div>
                    <div className="StoryJsInfoList">
                        <div className="StoryJsInfoListLeft">

                        <div className="StoryJsDate">
                            December 21, 2021
                        </div>
                        <div className="StoryJsMinsRead">
                            10 mins read
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
                
                <div className="StoryJsContentImg">
                    <img src="https://drscdn.500px.org/photo/143495567/m%3D900/ac580b90976ce1a4da085b52e91dbf71" alt="" />
                </div>
                <div className="StoryJsContentTitle" style={{"fontSize":"2rem","color":"white"}}>
                    This is the title
                </div>
                <div className="StoryJsContentpara">

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, maiores! Dolorem doloremque consequatur quo ex, molestiae adipisci quam voluptate voluptatibus temporibus, repellat architecto nobis minus et similique, impedit rem? Iure?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, maiores! Dolorem doloremque consequatur quo ex, molestiae adipisci quam voluptate voluptatibus temporibus, repellat architecto nobis minus et similique, impedit rem? Iure?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, maiores! Dolorem doloremque consequatur quo ex, molestiae adipisci quam voluptate voluptatibus temporibus, repellat architecto nobis minus et similique, impedit rem? Iure?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, maiores! Dolorem doloremque consequatur quo ex, molestiae adipisci quam voluptate voluptatibus temporibus, repellat architecto nobis minus et similique, impedit rem? Iure?
                </div>
            </div>
            {/* <NoContent/> */}
        </div>
    )
}

export default Story