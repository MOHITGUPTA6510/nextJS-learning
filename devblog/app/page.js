export default function Home() {
  return (
    <main className="home">

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">
          <p className="hero-small-text">
            Welcome to DevBlog
          </p>

          <h1>
            Learn. Build. Share.
          </h1>

          <p className="hero-description">
            A simple blog about React, Next.js,
            JavaScript and web development.
          </p>

          <a
            href="/blog"
            className="hero-button"
          >
            Explore Articles
          </a>
        </div>

      </section>


      {/* Latest Posts */}
      <section className="latest-posts">

        <h2>
          Latest Posts
        </h2>

        <div className="post-grid">

          <article className="post-card">

            <div className="post-image">
              Next.js
            </div>

            <div className="post-content">

              <p className="post-category">
                Next.js
              </p>

              <h3>
                Understanding Next.js App Router
              </h3>

              <p>
                Learn how routing works in modern
                Next.js applications.
              </p>

              <a href="/blog/nextjs-routing">
                Read Article →
              </a>

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

              <h3>
                Understanding React Components
              </h3>

              <p>
                Learn how React components work
                and how to build reusable UI.
              </p>

              <a href="/blog/react-components">
                Read Article →
              </a>

            </div>

          </article>


          <article className="post-card">

            <div className="post-image">
              JavaScript
            </div>

            <div className="post-content">

              <p className="post-category">
                JavaScript
              </p>

              <h3>
                JavaScript Concepts You Should Know
              </h3>

              <p>
                Important JavaScript concepts for
                modern web development.
              </p>

              <a href="/blog/javascript-basics">
                Read Article →
              </a>

            </div>

          </article>

        </div>

      </section>

    </main>
  );
}