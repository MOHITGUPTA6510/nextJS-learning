import Link from "next/link";
import { notFound } from "next/navigation";
import {blogs} from "@/data/blogs";

export default async function SlugPost({params}){
    console.log("Running on the server");
    
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
            <p>By {data.author}</p>
            <p>{data.date}</p>
            <p>{data.description}</p>
            <p>{data.content}</p>
            <Link href="/blog">Back to blog</Link>
        </div>
        
    );
}