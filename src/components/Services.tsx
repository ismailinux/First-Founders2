
import { Link } from 'react-router-dom';

const servicesData = [
  {
    title: "STARTUP STUDIO",
    description: "We partner with founders from idea to launch, providing technical resources, business strategy, and funding.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M8 16V8h8"></path><path d="M16 8 8 16"></path></svg>
    )
  },
  {
    title: "SEED FUNDING",
    description: "Access to pre-seed and seed-stage capital for promising startups addressing African market challenges.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
    )
  },
  {
    title: "MENTORSHIP",
    description: "Guidance from experienced entrepreneurs, industry experts, and investors who understand the African ecosystem.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"></path><path d="M15 3v6h6"></path></svg>
    )
  },
];

const Services = () => {
  return (
    <section className="brutalist-section bg-brutalist-white">
      <div className="brutalist-container px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-4">OUR SERVICES</h2>
          <p className="text-xl max-w-3xl mx-auto">
            We offer comprehensive support to early-stage founders, from ideation to scale.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="brutalist-card flex flex-col">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-3xl mb-4">{service.title}</h3>
              <p className="mb-6 flex-grow">{service.description}</p>
              <Link to="/services" className="font-bebas text-xl uppercase underline hover:text-brutalist-orange">
                Learn More
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="brutalist-btn inline-block">
            VIEW ALL SERVICES
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
