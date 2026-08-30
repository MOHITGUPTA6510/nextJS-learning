import Link from "next/link";
import { notFound } from "next/navigation";
// import {blogs} from "@/data/blogs";
import LikeButton from "@/components/LikeButton";


export async function generateMetadata({params}){

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const dataa = await response.json();

    const { slug } = await params;
    const data = dataa.find((post) => {
        return (post.title.toLowerCase().replaceAll(" ", "-") === slug);
    });

    if (data === undefined){
            notFound();
    }

    return{
        title : data.title,
        description : data.body
    };

}

export default async function SlugPost({params}){
    
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const dataa = await response.json();
    
    const { slug } = await params;
    const data = dataa.find((post) => {
        return (post.title.toLowerCase().replaceAll(" ", "-") === slug);
    });

    if (data === undefined){
            notFound();
    }

    return (
        
        <div className="slug-page">
            <h1 className="slug-page-heading">{data.title}</h1>
            
            <p className="slug-page-description">{data.body}</p>
            {/* <p className="slug-page-para">{data.content}</p>
            <p className="slug-page-author">By {data.author}</p>
            <p className="slug-page-date">{data.date}</p> */}
            <Link href="/blog" className="slug-page-link">Back to Blog</Link>
            <br></br>

            <LikeButton slug={slug}/>
        </div>
        
    );
}