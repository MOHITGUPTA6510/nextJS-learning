"use client";


import { useActionState} from "react";
import LikePost from "@/app/action.js";

export default function LikeButton({slug}){
    const [state , formAction , isPending] = useActionState(
        LikePost,
        null
    );


    return(
        <form action={formAction}>
            
            <input
                type="hidden"
                name="slug"
                value={slug} 
            />
            <button    
                className= "like-button" 
            > {isPending ? "Liking..." : state ? `${state} ❤️` : "Like ❤️"}
            </button>
        </form>
    );
}