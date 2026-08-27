import Link from "next/link";
import BlogCard from "@/components/BlogCard";

export default function BlogPage() {
  return (
    <>
    <main 
      className="blog-page"
    >
      <h1 
        className="blog-heading"
      > 
        DevBlog Articles
      </h1>
      <p 
        className="blog-para"
      >
        Learn web development through practical tutorials and guides.
      </p>
      <Link 
        href=  "/" 
        className="blog-explore-button" 
      >
        Back to home
      </Link>
      
    </main>
    <div className="blog-card-container">
    <BlogCard heading={"Next.js routing"} description={"Learning about the routing ...."}/>
    <BlogCard heading={"React Components"} description={"Learning about the react components ...."}/>
    <BlogCard heading={"JavaScript Fundamentals"} description={"Learning about the javascript fundamentals  ...."}/>
    </div>
    </>
  );
}
