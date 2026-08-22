import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <Link href="/">DevBlog</Link>
      </div>

      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </div>

    </nav>
  );
}