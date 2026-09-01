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

export async function addComment(previousState, formData) {
    const comment = formData.get("comment");

    if (!comment || comment.trim() === "") {
        return {
            success: false,
            message: "Comment cannot be empty"
        };
    }

    return {
        success: true,
        message: `Comment Added: ${comment}`
    };
}