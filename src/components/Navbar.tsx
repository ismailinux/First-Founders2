
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-brutalist-white border-b-2 border-brutalist-black">
      <div className="brutalist-container px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-3xl font-bebas tracking-wider">
            FirstFounders
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-bebas uppercase text-xl hover:text-brutalist-orange transition-colors">
              Home
            </Link>
            <Link to="/about" className="font-bebas uppercase text-xl hover:text-brutalist-orange transition-colors">
              About
            </Link>
            <Link to="/services" className="font-bebas uppercase text-xl hover:text-brutalist-orange transition-colors">
              Services
            </Link>
            <Link to="/portfolio" className="font-bebas uppercase text-xl hover:text-brutalist-orange transition-colors">
              Portfolio
            </Link>
            <Link to="/contact" className="font-bebas uppercase text-xl hover:text-brutalist-orange transition-colors">
              Contact
            </Link>
            <Link to="/contact" className="brutalist-btn">
              Apply Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden brutalist-border p-2" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-brutalist-white border-t-2 border-brutalist-black animate-slide-in">
          <div className="flex flex-col px-4 py-2">
            <Link 
              to="/" 
              className="py-3 font-bebas uppercase text-xl border-b border-brutalist-lightgray"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="py-3 font-bebas uppercase text-xl border-b border-brutalist-lightgray"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="py-3 font-bebas uppercase text-xl border-b border-brutalist-lightgray"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className="py-3 font-bebas uppercase text-xl border-b border-brutalist-lightgray"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              to="/contact" 
              className="py-3 font-bebas uppercase text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="brutalist-btn my-4 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
