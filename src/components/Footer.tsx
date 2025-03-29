
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brutalist-black text-brutalist-white py-12">
      <div className="brutalist-container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div>
            <h2 className="text-3xl font-bebas mb-4">FirstFounders</h2>
            <p className="mb-4">
              Partnering with early-stage founders to build, scale, and fund startups in African markets.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="brutalist-border p-2 bg-brutalist-white" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brutalist-black"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://twitter.com" className="brutalist-border p-2 bg-brutalist-white" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brutalist-black"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bebas mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-brutalist-orange transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brutalist-orange transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-brutalist-orange transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-brutalist-orange transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-brutalist-orange transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bebas mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Lagos, Nigeria</li>
              <li>info@firstfounders.cc</li>
              <li>+234 123 456 7890</li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bebas mb-4">Newsletter</h3>
            <p className="mb-2">Subscribe to our newsletter for updates</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="py-2 px-3 w-full text-brutalist-black focus:outline-none" 
              />
              <button className="bg-brutalist-orange text-brutalist-black font-bebas px-4">
                Join
              </button>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-brutalist-gray mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} FirstFounders Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
