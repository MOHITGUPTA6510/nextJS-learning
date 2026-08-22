import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <article className="post-card">

      <div className="post-image">
        {post.category}
      </div>

      <div className="post-content">

        <p className="post-category">
          {post.category}
        </p>

        <h2>
          {post.title}
        </h2>

        <p>
          {post.description}
        </p>

        <Link href={`/blog/${post.slug}`}>
          Read Article →
        </Link>

      </div>

    </article>
  );
}