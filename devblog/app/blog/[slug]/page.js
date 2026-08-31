import Link from "next/link";
import { notFound } from "next/navigation";
import LikeButton from "@/components/LikeButton";
import {getPostBySlug , getPosts} from "@/lib/posts";
import CommentForm from "@/components/CommentForm";


export async function generateStaticParams() {
    const posts = await getPosts();

    return posts.map((post) => ({
        slug: post.title.toLowerCase().replaceAll(" ", "-")
    }));
    
}

export async function generateMetadata({params}){

    const { slug } = await params;

    const data  =  await getPostBySlug(slug);

    if (data === undefined){
            notFound();
    }

    return{
        title : data.title,
        description : data.body
    };

}

export default async function SlugPost({params}){
    
    
    const { slug } = await params;

    const data = await getPostBySlug(slug);

    if (data === undefined){
            notFound();
    }
    
    return (
        <>
        
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
            <CommentForm />
        </>
        
    );
}

// export default aync function ({searchParams}){
//     const {search} = await searchParams;
// }