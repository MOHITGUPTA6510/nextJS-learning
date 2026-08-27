"use client";

import { useState } from "react";

export default function LikeButton(){
    const [likeCount , setLikeCount] = useState(0);
    


    return(
        <button className= "like-button" onClick={() => {setLikeCount(likeCount+1)}}> {likeCount} Like</button>
    );
}