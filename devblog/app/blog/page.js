import Link from "next/link";
import BlogCard from "@/components/BlogCard";

export default function BlogPage() {

  const blogs = [
    {
      id : 1,
      heading: "Next.js routing",
      description: "Learning about the routing ...."
    },
    {
      id : 2,
      heading: "React Components",
      description: "Learning about the react components ...."
    },
    {
      id : 3,
      heading: "JavaScript Fundamentals",
      description: "Learning about the javascript fundamentals  ...."
    }
  ]

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
              
                <BlogCard  heading={blog.heading} description={blog.description} key ={blog.id}/>
              
            );
          })
        }
    </div>
    </>
  );
}
