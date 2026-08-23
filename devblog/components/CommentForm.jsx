import { addComment } from "../app/lib/actions";

export default function CommentForm() {
  return (
    <form className="comment-form" action={addComment}> 

      <h2>Leave a Comment</h2>

      <input
        type="text"
        name="name"
        placeholder="Your name"
      />

      <textarea
        name="comment"
        placeholder="Write your comment..."
      />

      <button type="submit">
        Post Comment
      </button>

    </form>
  );
}