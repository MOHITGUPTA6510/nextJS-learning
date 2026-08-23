import { notFound } from "next/navigation";
import { posts } from "../../lib/posts";
import LikeButton from "../../../components/LikeButton";
import CommentForm from "../../../components/CommentForm";

export default async function BlogPost({ params }) {
  const { slug } = await params;

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="blog-post">

      <p className="post-category">
        {post.category}
      </p>

      <h1>
        {post.title}
      </h1>

      <p className="post-description">
        {post.description}
      </p>

      <article>
        {post.content}
      </article>
      <LikeButton />
      <CommentForm />
    </main>
  );
}