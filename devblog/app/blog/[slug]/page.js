import Link from "next/link";
import { notFound } from "next/navigation";
import {blogs} from "@/data/blogs";
import LikeButton from "@/components/LikeButton";


export async function generateMetadata({params}){
    const { slug } = await params;
    const data = blogs.find((blog) => {
        return (blog.slug === slug);
    });

    if (data === undefined){
            notFound();
    }

    return{
        title : data.heading,
        description : data.description
    };

}

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
        
        <div className="slug-page">
            <h1 className="slug-page-heading">{data.heading}</h1>
            
            <p className="slug-page-description">{data.description}</p>
            <p className="slug-page-para">{data.content}</p>
            <p className="slug-page-author">By {data.author}</p>
            <p className="slug-page-date">{data.date}</p>
            <Link href="/blog" className="slug-page-link">Back to Blog</Link>
            <br></br>

            <LikeButton slug={slug}/>
        </div>
        
    );
}