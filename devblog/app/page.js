import Link from "next/link";

export default function HomePage() {
  return (
    <main 
      className="home-page"
    >
      <h1 
        className="home-heading"
      > 
        Welcome to DevBlog 
      </h1>
      <p 
        className="home-para"
      >
        Learn Web Development through the practical articles.
      </p>
      <Link 
        href= "/blog" 
        className="home-explore-button" 
      >
        Explore Blog 
      </Link>
      
    </main>
  );
}
