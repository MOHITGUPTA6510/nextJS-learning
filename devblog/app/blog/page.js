export default function BlogPage() {
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

        <article className="post-card">

          <div className="post-image">
            Next.js
          </div>

          <div className="post-content">

            <p className="post-category">
              Next.js
            </p>

            <h2>
              Understanding Next.js App Router
            </h2>

            <p>
              Learn how the App Router works
              in Next.js.
            </p>

          </div>

        </article>


        <article className="post-card">

          <div className="post-image">
            React
          </div>

          <div className="post-content">

            <p className="post-category">
              React
            </p>

            <h2>
              Understanding React Components
            </h2>

            <p>
              Learn how React components work.
            </p>

          </div>

        </article>

      </section>

    </main>
  );
}