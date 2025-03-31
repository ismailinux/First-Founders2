
const testimonialsData = [
  {
    quote: "PocketLawyers has been fabulous! The team is young, energetic and brilliant! They pointed my team and I to grey areas we didn't even think about and proferred solutions them! it's been an enlightening journey and they made it easy! I surely recommend them for your MVP build.",
    author: "Ngozi Nwabueze",
    role: "PocketLawyers"
  },
  {
    quote: "Working with FirstFounders on my project, Syarpa has experienced the burgeoning value that FirstFounders bring to the table especially with fundraising and startup advisory. Our relationship is consistent and continous. Thank you for your service. I highly recommend them!",
    author: "Adedapo Sodipo",
    role: "Founder, Syarpa"
  },
  {
    quote: "Partnering with an organization that shares our passion for supporting the growth of startups is a wholesome one, and that is how we describe our partnership with FirstFounders. FirstFounders commitment to providing an enabling environment for early stage startups is highly commendable.",
    author: "Hakeem Onsanya",
    role: "Head, Startups, Lagos Innovates"
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
