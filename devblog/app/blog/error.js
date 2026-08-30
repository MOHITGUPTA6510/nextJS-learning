"use client";

export default function ErrorHandle({error , reset }){
    return (
        <>
            <h3>Something went wrong</h3>
            <button onClick={() => {reset()}}>Try Again</button>
        </>
    );
}