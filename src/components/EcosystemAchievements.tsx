import React from 'react';

// Updated data for Ecosystem Support Partners with PNG file paths
const partnersData = [
  { name: "Morrow Sodalli", logo: "/assets/logos/morrow-sodali1.png" },
  { name: "Venture Studios", logo: "/assets/logos/venture-studios.svg" },
  { name: "Studio Fundraise Map", logo: "/assets/logos/fundraise-map.svg" },
  { name: "Startup Studio Insider", logo: "assets/logos/startup-studioinsider.svg" },
  { name: "Lagos State Empowerment Trust Fund", logo: "assets/logos/lsetf.svg" },
  { name: "Pan African Women Empowerment Network", logo: "assets/logos/pawen.svg" },
];

// Updated data for Awards & Recognition with PNG file paths
const awardsData = [
  { name: "Best Accelerator 2023", logo: "/logos/best-accelerator-2023.png" },
  { name: "Innovation Award", logo: "/logos/innovation-award.png" },
  { name: "Excellence in Mentorship", logo: "/logos/excellence-in-mentorship.png" },
  { name: "Top Startup Enabler", logo: "/logos/top-startup-enabler.png" },
  { name: "Global Impact Award", logo: "/logos/global-impact-award.png" },
  { name: "Entrepreneurship Champion", logo: "/logos/entrepreneurship-champion.png" },
];

const EcosystemAchievements = () => {
  return (
    <section className="brutalist-section bg-brutalist-lightgray">
      <div className="brutalist-container px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-4">OUR ECOSYSTEM</h2>
          <p className="text-xl max-w-3xl mx-auto">
          Discover our network of innovative partners driving growth and impact.          </p>
        </div>

        {/* Ecosystem Support Partners Subsection */}
        <div className="mb-16">
          <h3 className="text-3xl font-bebas mb-8 text-center">ECOSYSTEM SUPPORT PARTNERS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnersData.map((partner, index) => (
              <div
                key={index}
                className="brutalist-border bg-brutalist-white p-8 text-center hover:bg-brutalist-orange transition-colors group"
              >
                <div className="w-40 h-20 brutalist-border flex items-center justify-center mx-auto mb-4 bg-brutalist-black group-hover:bg-brutalist-white transition-colors">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <h3 className="text-2xl font-bebas mb-2">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition Subsection */}
        {/* <div>
          <h3 className="text-3xl font-bebas mb-8 text-center">AWARDS & RECOGNITION</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awardsData.map((award, index) => (
              <div
                key={index}
                className="brutalist-border bg-brutalist-white p-8 text-center hover:bg-brutalist-orange transition-colors group"
              >
                <div className="w-20 h-20 brutalist-border flex items-center justify-center mx-auto mb-4 bg-brutalist-black group-hover:bg-brutalist-white transition-colors">
                  <img
                    src={award.logo}
                    alt={award.name}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <h3 className="text-2xl font-bebas mb-2">{award.name}</h3>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default EcosystemAchievements;