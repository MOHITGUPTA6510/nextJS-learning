import { notFound } from "next/navigation";
import {blogs} from "@/data/blogs";

export default async function SlugPost({params}){
    
    const { slug } = await params;
    const data = blogs.find((blog) => {
        return (blog.slug === slug);
    });

    if (data === undefined){
            notFound();
    }

    return (
        
        <div>
            <h1>{data.heading}</h1>
            <p>{data.description}</p>
        </div>
        
    );
}