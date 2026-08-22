export default function AboutPage() {
  return (
    <main className="about-page">

      <section className="about-header">

        <p>About DevBlog</p>

        <h1>
          Learn Web Development
        </h1>

        <p>
          DevBlog is a simple blog where we
          learn React, Next.js, JavaScript
          and modern web development.
        </p>

      </section>


      <section className="about-content">

        <div className="about-card">

          <h2>
            Why DevBlog?
          </h2>

          <p>
            The goal of DevBlog is to make
            web development easier to understand
            through practical examples and projects.
          </p>

        </div>


        <div className="about-card">

          <h2>
            What We Learn
          </h2>

          <p>
            React, Next.js, JavaScript, APIs,
            databases, authentication and
            modern web development.
          </p>

        </div>

      </section>

    </main>
  );
}