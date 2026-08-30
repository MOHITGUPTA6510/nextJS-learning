"use server";

let likes = 0;
export default async function LikePost(previousState , formdata){
    const slug = formdata.get("slug");
    console.log("like ation executed")
    console.log(slug);

    likes=likes+1;

    return likes;
}