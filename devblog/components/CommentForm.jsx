"use client";

import { useActionState } from "react";
import {addComment} from "@/app/action";

export default function AddComment(){
    const [state ,  fromAction , isPending] = useActionState(
        addComment,
        null
    );

    return (
        <form action={fromAction} >
            <input type="text" name="comment" placeholder="add a comment" />
            <button type="submit">
                {isPending ? "Adding..." : "Add Comment"}
            </button>

            {state && <p>{state}</p>}
        </form>
    );
}