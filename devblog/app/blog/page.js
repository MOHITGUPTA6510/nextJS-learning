import BlogCart from "../../components/BlogCart";
import { posts } from "../lib/posts";

export default async function BlogPage() {

  // throw new Error("Testing blog error");

  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });

  return (
    <main className="blog-page">

      <section className="blog-header">
        <p>DevBlog</p>

        <h1>
          All Articles
        </h1>

        <p>
          Explore our latest articles about
          React, Next.js and web development.
        </p>
      </section>


      <section className="blog-content">

        {posts.map((post) =>(
          <BlogCart key={post.slug} post={post} />
        ))}

      </section>

    </main>
  );
}