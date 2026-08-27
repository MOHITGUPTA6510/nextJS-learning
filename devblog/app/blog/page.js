import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import {blogs} from "@/data/blogs";

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
    <div className="blog-card-container" >
        {
          blogs.map((blog) => {
            return(
              
                <BlogCard  heading={blog.heading} description={blog.description} key ={blog.id} slug ={blog.slug}/>
              
            );
          })
        }
    </div>
    </>
  );
}
