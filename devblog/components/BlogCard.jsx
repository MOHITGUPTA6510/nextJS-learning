import Link from "next/link";

export default function BlogCard({heading , description}){
    return (
        <div className="blog-card">
            <h2 className="blog-card-heading" > {heading}</h2>
            <p className="blog-card-para" >{description} </p>
            <Link href = "/" className="blog-card-link" >Read Article</Link>
        </div>
    );
}