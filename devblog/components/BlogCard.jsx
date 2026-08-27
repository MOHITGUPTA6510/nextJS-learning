import Link from "next/link";

export default function BlogCard({heading , description , slug}){
    return (
        <div className="blog-card">
            <h2 className="blog-card-heading" > {heading}</h2>
            <p className="blog-card-para" >{description} </p>
            <Link href = {`/blog/${slug}`} className="blog-card-link" >Read Article</Link>
        </div>
    );
}