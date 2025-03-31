
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";

const portfolioCompanies = [
  {
    name: "PocketLawyers",
    description: "PocketLawyers is Africa’s first fully integrative legal tech startup that offers access to affordable premium legal services and solutions to SMEs and Startups.",
    category: "LegalTech",
    year: 2019,
    initial: "PL",
    logo: "./assets/logos/pocket-lawyers.svg",
  },
  {
    name: "Paysonet",
    description: "Fintech company dedicated to making digital payments easy and accessible, by providing tailored digital financial solutions to empower market women and business owners, helping them to conduct business and process payments without any hassle.",
    category: "Fintech",
    year: 2020,
    initial: "  PS",
    logo: "./assets/logos/paysonet.svg",
  },
  {
    name: "Escape",
    description: "A digital wallet payment solution, simplifying payments to improve lives.",
    category: "Fintech",
    year: 2018,
    initial: "ES",
    logo: "./assets/logos/escape.svg",
  },
  {
    name: "PayAfta",
    description: "We offer you the safest way to pay for your online purchases. With Payafta, your money is held securely until you receive your goods or services as promised. Trust is at the core of what we do, and your peace of mind is our priority.",
    category: "Fintech",
    year: 2021,
    initial: "PA",
    logo: "./assets/logos/payafta.svg",
  },
  {
    name: "Wiggo",
    description: "Wiggo is a travel financing platform that makes it easier for travellers to plan, save and pay for their travels.",
    category: "Travel",
    year: 2019,
    initial: "WG",
    logo: "./assets/logos/wiggo.svg",
  },
  {
    name: "Tappit",
    description: "Tappit is a revolutionary fintech app that harnesses the power of Near Field Communication (NFC) technology, allowing users to make seamless and secure payments using their mobile devices.",
    category: "Fintech",
    year: 2020,
    initial: "TP",
    logo: "./assets/logos/tappit.svg",
  },
  // {
  //   name: "DataInsight",
  //   description: "Analytics platform helping businesses make data-driven decisions with limited infrastructure.",
  //   category: "Data & Analytics",
  //   year: 2021,
  //   initial: "DI"
  // },
  // {
  //   name: "SecurePay",
  //   description: "Secure payment processing system designed specifically for African markets and currencies.",
  //   category: "Fintech",
  //   year: 2018,
  //   initial: "SP"
  // },
  // {
  //   name: "WorkConnect",
  //   description: "Digital platform connecting skilled workers with employment opportunities across the continent.",
  //   category: "HR Tech",
  //   year: 2022,
  //   initial: "WC"
  // }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="brutalist-section bg-brutalist-black text-brutalist-white relative">
          <div className="absolute inset-0 brutalist-noise opacity-10"></div>
          
          <div className="brutalist-container px-4 relative z-10">
            <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6">OUR PORTFOLIO</h1>
            <p className="text-xl md:text-2xl max-w-3xl">
              Discover the innovative companies we've helped build and scale across Africa. Each one solving meaningful problems with technology.
            </p>
          </div>
        </section>
        
        {/* Portfolio Grid */}
        <section className="brutalist-section bg-brutalist-white">
          <div className="brutalist-container px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioCompanies.map((company, index) => (
                <div key={index} className="brutalist-border group relative overflow-hidden">
                  {/* Company initial/Initial */}
                  <div className="aspect-square flex items-center justify-center bg-brutalist-black">
                    <div className="text-brutalist-white text-6xl font-bebas">
                      {company.initial}
                    </div>
                  </div>
                  
                  {/* Hover Content */}
                  <div className="absolute inset-0 bg-brutalist-orange p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <img src={company.logo} alt={company.name} className="w-fit h-14 mb-1"/>
                    <h3 className="text-2xl font-bebas mb-2">{company.name}</h3>
                    <div className="mb-2 font-medium">{company.category} | Est. {company.year}</div>
                    <p className="mb-4">{company.description}</p>
                    <button className="brutalist-border bg-brutalist-black text-brutalist-white font-bebas uppercase px-4 py-2 self-start hover:bg-brutalist-white hover:text-brutalist-black transition-colors">
                      CASE STUDY
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="brutalist-section bg-brutalist-lightgray">
          <div className="brutalist-container px-4">
            <h2 className="text-5xl mb-12 text-center">PORTFOLIO IMPACT</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="brutalist-border bg-brutalist-white p-8 text-center">
                <div className="text-6xl font-bebas mb-2">$35M+</div>
                <div className="text-xl">Total Follow-on Funding Raised</div>
              </div>
              <div className="brutalist-border bg-brutalist-white p-8 text-center">
                <div className="text-6xl font-bebas mb-2">2.5M+</div>
                <div className="text-xl">Users Served Across Africa</div>
              </div>
              <div className="brutalist-border bg-brutalist-white p-8 text-center">
                <div className="text-6xl font-bebas mb-2">1,200+</div>
                <div className="text-xl">Jobs Created</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Investment Criteria */}
        <section className="brutalist-section bg-brutalist-white">
          <div className="brutalist-container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl mb-6">INVESTMENT CRITERIA</h2>
                <div className="space-y-4 text-lg">
                  <p>
                    Our investment decisions are guided by a focus on:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-brutalist-orange mr-2 text-xl">•</span>
                      <span><strong>Problem Scale:</strong> Addressing significant challenges affecting millions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brutalist-orange mr-2 text-xl">•</span>
                      <span><strong>Market Size:</strong> $100M+ total addressable market</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brutalist-orange mr-2 text-xl">•</span>
                      <span><strong>Founder Quality:</strong> Domain expertise and execution capability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brutalist-orange mr-2 text-xl">•</span>
                      <span><strong>Tech-Enabled:</strong> Leveraging technology for scale</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brutalist-orange mr-2 text-xl">•</span>
                      <span><strong>Africa Focus:</strong> Solutions tailored to African markets</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="brutalist-border p-8 relative">
                <div className="text-xl mb-6 font-bebas">INTERESTED IN JOINING OUR PORTFOLIO?</div>
                <p className="mb-6">
                  We're always looking for visionary founders building innovative solutions for African markets. If you're building something amazing, we want to hear from you.
                </p>
                <button className="brutalist-btn">
                  APPLY NOW
                </button>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brutalist-orange brutalist-border"></div>
              </div>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
