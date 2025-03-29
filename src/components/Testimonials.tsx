
const testimonialsData = [
  {
    quote: "FirstFounders was instrumental in helping us go from idea to market in just 6 months. Their mentorship and funding connections were invaluable.",
    author: "Chioma A.",
    role: "Founder, AgriTech Co"
  },
  {
    quote: "The studio approach gave us access to resources we couldn't have afforded on our own. FirstFounders' team feels like an extension of our own.",
    author: "Kwame O.",
    role: "CEO, FinanceAfrica"
  },
  {
    quote: "Beyond the funding, the network of founders and mentors has been the most valuable asset in scaling our startup across multiple African markets.",
    author: "Sarah N.",
    role: "Founder, EduTech Pro"
  }
];

const Testimonials = () => {
  return (
    <section className="brutalist-section bg-brutalist-white relative overflow-hidden">
      <div className="absolute inset-0 brutalist-noise"></div>
      
      {/* Geometric decoration */}
      <div className="absolute -left-10 top-1/3 w-24 h-24 bg-brutalist-orange brutalist-border -rotate-12"></div>
      <div className="absolute -right-10 bottom-1/4 w-32 h-32 bg-brutalist-lightgray brutalist-border rotate-12"></div>
      
      <div className="brutalist-container px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-4">FOUNDER STORIES</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Hear from the entrepreneurs we've partnered with on their journey to success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="brutalist-border bg-brutalist-white p-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brutalist-orange mb-4"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>
              <p className="mb-6 text-lg">{testimonial.quote}</p>
              <div className="font-bebas text-xl">{testimonial.author}</div>
              <div>{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
