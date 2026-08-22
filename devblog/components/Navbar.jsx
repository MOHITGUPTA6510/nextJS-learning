export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        DevBlog
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/about">About</a>
      </div>

    </nav>
  );
}