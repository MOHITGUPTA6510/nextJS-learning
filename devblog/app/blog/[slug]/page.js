import { notFound } from "next/navigation";
import { posts } from "../../lib/posts";
import LikeButton from "../../../components/LikeButton";
import CommentForm from "../../../components/CommentForm";
import Image from "next/image";


export async function generateMetadata({ params }) {
  const { slug } = await params;

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | DevBlog",
    };
  }

  return {
    title: `${post.title} | DevBlog`,
    description: post.description,
  };
}

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

      <Image
        src={post.image}
        alt={post.title}
        width={1000}
        height={600}
        className="blog-post-image"
      />

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