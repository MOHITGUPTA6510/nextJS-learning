import Link from "next/link";

export default function Navbar(){
    return (
        <>
            <div>
                <nav className = "navbar">
                    <div className ="nav-logo"> DevBlog </div>
                    <div className ="nav-links">
                        <Link href ="/">Home</Link>
                        <Link href ="/about">About</Link>
                        <Link href ="/contact">Contact</Link>
                        
                    </div>
                </nav>
            </div>
        </>
    );
}