import Link from "next/link";
import BlogCard from "@/components/BlogCard";
// import {blogs} from "@/data/blogs";

export default async function BlogPage() {

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

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
          data.map((blog) => {
            return(
              
                <BlogCard  heading={blog.title} description={blog.body} key ={blog.id} slug ={blog.title.toLowerCase().replaceAll(" ", "-")}/>
              
            );
          })
        }
    </div>
    </>
  );
}
