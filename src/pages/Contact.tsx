
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="brutalist-section bg-brutalist-black text-brutalist-white relative">
          <div className="absolute inset-0 brutalist-noise opacity-10"></div>
          
          <div className="brutalist-container px-4 relative z-10">
            <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6">CONTACT US</h1>
            <p className="text-xl md:text-2xl max-w-3xl">
              Have a question or want to apply to our startup studio? We'd love to hear from you.
            </p>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="brutalist-section bg-brutalist-white">
          <div className="brutalist-container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bebas mb-6">GET IN TOUCH</h2>
                <div className="space-y-6 text-lg">
                  <div>
                    <h3 className="text-xl font-bebas mb-2">LOCATIONS</h3>
                    <p>Lagos, Nigeria (Headquarters)</p>
                    <p>Nairobi, Kenya</p>
                    <p>Accra, Ghana</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bebas mb-2">EMAIL</h3>
                    <p>info@firstfounders.cc</p>
                    <p>partnerships@firstfounders.cc</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bebas mb-2">PHONE</h3>
                    <p>+234 (0) 123 456 7890</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bebas mb-2">FOLLOW US</h3>
                    <div className="flex space-x-4 mt-2">
                      <a href="https://linkedin.com" className="brutalist-border p-2 bg-brutalist-white" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>
                      <a href="https://twitter.com" className="brutalist-border p-2 bg-brutalist-white" aria-label="Twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bebas mb-6">APPLY NOW</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="brutalist-section bg-brutalist-lightgray">
          <div className="brutalist-container px-4">
            <h2 className="text-4xl font-bebas mb-6 text-center">FIND US</h2>
            <div className="brutalist-border relative h-96 bg-brutalist-white flex items-center justify-center">
              <div className="text-2xl font-bebas">MAP PLACEHOLDER</div>
              <div className="absolute -left-4 -bottom-4 w-16 h-16 brutalist-border bg-brutalist-orange"></div>
              <div className="absolute -right-4 -top-4 w-16 h-16 brutalist-border bg-brutalist-black"></div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="brutalist-section bg-brutalist-white">
          <div className="brutalist-container px-4">
            <h2 className="text-4xl font-bebas mb-10 text-center">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="brutalist-border p-6">
                <h3 className="text-xl font-bebas mb-3">WHAT STAGE COMPANIES DO YOU WORK WITH?</h3>
                <p>We primarily work with early-stage companies, from idea to seed stage. We're most effective when we can partner with you from the beginning.</p>
              </div>
              <div className="brutalist-border p-6">
                <h3 className="text-xl font-bebas mb-3">HOW MUCH EQUITY DO YOU TAKE?</h3>
                <p>Our equity stake typically ranges from 15-30% depending on the stage of your company and the level of resources we provide.</p>
              </div>
              <div className="brutalist-border p-6">
                <h3 className="text-xl font-bebas mb-3">HOW LONG IS YOUR PROGRAM?</h3>
                <p>Our studio program is typically 12-18 months, though our partnership with portfolio companies continues well beyond that timeframe.</p>
              </div>
              <div className="brutalist-border p-6">
                <h3 className="text-xl font-bebas mb-3">DO I NEED TO RELOCATE?</h3>
                <p>While we have a preference for founders who can spend time in one of our hub locations, we work with teams across Africa and can accommodate remote arrangements.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
