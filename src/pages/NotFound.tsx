
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center px-4 py-24">
          <div className="inline-block mb-8 brutalist-border bg-brutalist-orange p-8 rotate-3">
            <h1 className="text-8xl md:text-9xl font-bebas">404</h1>
          </div>
          <h2 className="text-4xl md:text-5xl font-bebas mb-6">PAGE NOT FOUND</h2>
          <p className="text-xl mb-8 max-w-lg mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="brutalist-btn inline-block">
            BACK TO HOME
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
