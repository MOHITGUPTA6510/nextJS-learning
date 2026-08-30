"use server";

let like = {};
export default async function LikePost(previousState , formdata){
    const slug = formdata.get("slug");
    
    if (like[slug]===undefined){
        like[slug] = 1;
    }
    else{
        like[slug] = like[slug] + 1;
    }

    return like[slug];
}