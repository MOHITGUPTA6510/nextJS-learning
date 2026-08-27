import Link from "next/link";

export default function BlogPage() {
  return (
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
  );
}
