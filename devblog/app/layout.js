import Navbar from "../components/Navbar" ;
import "./globals.css";

export const  metadata = {
  title: "DevBlog",
  description: "Learn React, Next.js , JavaScript and modern web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
