
import { Link } from 'react-router-dom';

const portfolioData = [
  {
    name: "AgriTech Co",
    industry: "Agriculture",
    logo: "AG"
  },
  {
    name: "FinanceAfrica",
    industry: "Fintech",
    logo: "FA"
  },
  {
    name: "EduTech Pro",
    industry: "Education",
    logo: "EP"
  },
  {
    name: "HealthBot",
    industry: "Healthcare",
    logo: "HB"
  },
  {
    name: "LogisticsPro",
    industry: "Supply Chain",
    logo: "LP"
  },
  {
    name: "SolarPower",
    industry: "Clean Energy",
    logo: "SP"
  }
];

const Portfolio = () => {
  return (
    <section className="brutalist-section bg-brutalist-lightgray">
      <div className="brutalist-container px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-4">OUR PORTFOLIO</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Meet some of the innovative startups we've helped build and scale across Africa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.map((company, index) => (
            <div key={index} className="brutalist-border bg-brutalist-white p-8 text-center hover:bg-brutalist-orange transition-colors group">
              <div className="w-20 h-20 brutalist-border flex items-center justify-center mx-auto mb-4 bg-brutalist-black text-brutalist-white text-3xl font-bebas group-hover:bg-brutalist-white group-hover:text-brutalist-black transition-colors">
                {company.logo}
              </div>
              <h3 className="text-2xl font-bebas mb-2">{company.name}</h3>
              <p className="mb-4">{company.industry}</p>
              <Link to="/portfolio" className="font-bebas uppercase hover:underline">
                Learn More
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/portfolio" className="brutalist-btn inline-block">
            VIEW ALL COMPANIES
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
