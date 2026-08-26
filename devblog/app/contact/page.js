import Link from "next/link";

export default function Home() {
  return (
    <main 
      className="contact-page"
    >
      <h1 
        className="contact-heading"
      > 
        Contact
      </h1>
      <p 
        className="contact-para"
      >
        Help to comtact with the devlopers .
      </p>
      <Link 
        href=  "/" 
        className="contact-explore-button" 
      >
        Back to home
      </Link>
      
    </main>
  );
}
