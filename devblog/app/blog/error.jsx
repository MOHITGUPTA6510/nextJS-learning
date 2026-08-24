"use client";

export default function Error({
  error,
  reset,
}) {
  return (
    <main className="error-page">

      <h1>
        Something went wrong
      </h1>

      <p>
        We couldn't load the blog.
      </p>

      <button onClick={() => reset()}>
        Try Again
      </button>

    </main>
  );
}