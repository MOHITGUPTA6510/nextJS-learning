import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getPosts } from "@/lib/posts";

export default async function BlogPage({searchParams}) {

  const {search} = await searchParams;
  console.log(search);

  const data = await getPosts();

  const filteredPosts = search
    ? data.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      )
    : data;

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

    <form method="GET" className="search-form">
    <input
        type="text"
        name="search"
        placeholder="Search articles..."
    />

    <button type="submit">
        Search
    </button>
</form>

    <div className="blog-card-container" >
        {
          filteredPosts.map((blog) => {
            return(
              
                <BlogCard  heading={blog.title} description={blog.body} key ={blog.id} slug ={blog.title.toLowerCase().replaceAll(" ", "-")}/>
              
            );
          })
        }
    </div>
    </>
  );
}
