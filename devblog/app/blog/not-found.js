import Link from "next/link";

export default function BlogNotFound() {
  return (
    <main className="not-found">

      <h1>
        Post Not Found
      </h1>

      <p>
        Sorry, we couldn't find the blog post
        you're looking for.
      </p>

      <Link href="/blog">
        ← Back to Blog
      </Link>

    </main>
  );
}