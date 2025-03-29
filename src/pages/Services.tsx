
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";

const servicesData = [
  {
    title: "STARTUP STUDIO",
    description: "Our core offering brings together entrepreneurs, designers, developers, and business strategists to co-build startups from the ground up. We validate ideas, develop MVPs, and prepare companies for market entry and growth.",
    features: [
      "Idea validation and market research",
      "MVP development and technical resources",
      "Business model refinement",
      "Go-to-market strategy",
      "Team building support"
    ]
  },
  {
    title: "SEED FUNDING",
    description: "We provide pre-seed and seed capital to promising startups, both within our studio and to select external companies. Our investment thesis focuses on ventures solving meaningful problems in African markets with scalable solutions.",
    features: [
      "Pre-seed investments: $25K-$50K",
      "Seed investments: $50K-$250K",
      "Follow-on funding access",
      "Investor network connections",
      "Fundraising strategy and support"
    ]
  },
  {
    title: "MENTORSHIP & ADVISORY",
    description: "Our network of experienced entrepreneurs, industry experts, and investors provides hands-on guidance to help founders navigate the challenges of building companies in African markets.",
    features: [
      "One-on-one mentorship sessions",
      "Industry-specific guidance",
      "Growth and scaling strategies",
      "Operational excellence support",
      "Crisis management and pivoting assistance"
    ]
  },
  {
    title: "MARKET ENTRY",
    description: "We help startups navigate the complexities of launching and expanding across multiple African markets, providing localized insights and connections.",
    features: [
      "Regulatory navigation",
      "Local partnership development",
      "Cultural adaptation strategies",
      "Market-specific business modeling",
      "Geographic expansion roadmapping"
    ]
  },
  {
    title: "TECHNICAL RESOURCES",
    description: "Our in-house technical team helps founders build robust, scalable technology solutions tailored to African markets and infrastructure realities.",
    features: [
      "Product development and engineering",
      "UX/UI design",
      "Technical architecture planning",
      "Infrastructure optimization for African contexts",
      "Quality assurance and testing"
    ]
  },
  {
    title: "GROWTH ACCELERATION",
    description: "For startups that have achieved product-market fit, we provide specialized resources to accelerate growth and prepare for larger funding rounds.",
    features: [
      "Marketing and customer acquisition strategy",
      "Sales process optimization",
      "Operational scaling frameworks",
      "Data analytics and performance optimization",
      "Series A preparation"
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="brutalist-section bg-brutalist-black text-brutalist-white relative">
          <div className="absolute inset-0 brutalist-noise opacity-10"></div>
          
          <div className="brutalist-container px-4 relative z-10">
            <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6">OUR SERVICES</h1>
            <p className="text-xl md:text-2xl max-w-3xl">
              A comprehensive suite of resources, capital, and expertise to help founders at every stage of their journey.
            </p>
          </div>
        </section>
        
        {/* Services Details */}
        <section className="brutalist-section bg-brutalist-white">
          <div className="brutalist-container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {servicesData.map((service, index) => (
                <div key={index} className="brutalist-border p-8">
                  <h2 className="text-3xl font-bebas mb-4">{service.title}</h2>
                  <p className="mb-6">{service.description}</p>
                  <h3 className="text-xl font-bebas mb-3">KEY FEATURES:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-brutalist-orange mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="brutalist-section bg-brutalist-lightgray">
          <div className="brutalist-container px-4">
            <h2 className="text-5xl mb-12 text-center">OUR PROCESS</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="brutalist-border bg-brutalist-white p-6 relative">
                <div className="w-12 h-12 brutalist-border flex items-center justify-center font-bebas text-2xl bg-brutalist-orange absolute -top-6 -left-6">
                  1
                </div>
                <h3 className="text-2xl font-bebas mb-4 mt-2">IDEATION</h3>
                <p>Validate ideas and conduct market research to ensure we're solving real problems.</p>
              </div>
              <div className="brutalist-border bg-brutalist-white p-6 relative">
                <div className="w-12 h-12 brutalist-border flex items-center justify-center font-bebas text-2xl bg-brutalist-orange absolute -top-6 -left-6">
                  2
                </div>
                <h3 className="text-2xl font-bebas mb-4 mt-2">BUILD</h3>
                <p>Develop MVP, assemble founding team, and establish core operations.</p>
              </div>
              <div className="brutalist-border bg-brutalist-white p-6 relative">
                <div className="w-12 h-12 brutalist-border flex items-center justify-center font-bebas text-2xl bg-brutalist-orange absolute -top-6 -left-6">
                  3
                </div>
                <h3 className="text-2xl font-bebas mb-4 mt-2">LAUNCH</h3>
                <p>Go-to-market strategy implementation and initial customer acquisition.</p>
              </div>
              <div className="brutalist-border bg-brutalist-white p-6 relative">
                <div className="w-12 h-12 brutalist-border flex items-center justify-center font-bebas text-2xl bg-brutalist-orange absolute -top-6 -left-6">
                  4
                </div>
                <h3 className="text-2xl font-bebas mb-4 mt-2">SCALE</h3>
                <p>Growth acceleration and preparation for follow-on funding rounds.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Eligibility Section */}
        <section className="brutalist-section bg-brutalist-white">
          <div className="brutalist-container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl mb-6">WHO WE WORK WITH</h2>
                <div className="space-y-4">
                  <p className="text-lg">
                    We partner with visionary founders who are:
                  </p>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start">
                      <span className="text-brutalist-orange mr-2 text-xl">•</span>
                      <span>Building solutions to significant problems in African markets</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brutalist-orange mr-2 text-xl">•</span>
                      <span>Committed to creating scalable, sustainable businesses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brutalist-orange mr-2 text-xl">•</span>
                      <span>Open to collaboration and willing to iterate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brutalist-orange mr-2 text-xl">•</span>
                      <span>Domain experts or deeply passionate about their sector</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brutalist-orange mr-2 text-xl">•</span>
                      <span>Ready to leverage technology to create outsized impact</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="brutalist-border bg-brutalist-lightgray p-8 relative">
                <div className="text-xl space-y-4">
                  <p>
                    <span className="font-bebas text-2xl block mb-2">FOCUS SECTORS:</span>
                    FinTech, AgriTech, HealthTech, EdTech, CleanTech, LogisticsTech, and other sectors addressing pressing African challenges.
                  </p>
                  <p>
                    <span className="font-bebas text-2xl block mb-2">STAGE:</span>
                    Ideation to early seed stage with preference for pre-launch or recently launched startups.
                  </p>
                  <p>
                    <span className="font-bebas text-2xl block mb-2">GEOGRAPHY:</span>
                    Primary focus on startups targeting West, East, and Southern African markets.
                  </p>
                </div>
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

export default Services;
