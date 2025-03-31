
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-24 bg-brutalist-black text-brutalist-white">
      <div className="brutalist-container px-4 text-center">
        <h2 className="text-5xl md:text-6xl mb-6">READY TO BUILD THE NEXT BIG THING?</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Join us in shaping Africa's tech future. Apply to our startup studio program, access funding, and connect with mentors and resources to scale your vision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="brutalist-btn inline-block">
            APPLY NOW
          </Link>
          <Link to="/services" onClick={() => window.scrollTo(0, 0)} className="brutalist-border bg-brutalist-white text-brutalist-black font-bebas uppercase tracking-wide px-8 py-3 text-xl inline-block hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all">
            LEARN MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
