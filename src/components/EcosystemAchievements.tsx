import React from 'react';

// Import partner logos
import morrowSodaliLogo from '../assets/logos/morrow-sodali1.png';
import ventureStudiosLogo from '../assets/logos/venture-studios.svg';
import fundraiseMapLogo from '../assets/logos/fundraise-map.svg';
import startupStudioInsiderLogo from '../assets/logos/startup-studioinsider.svg';
import lsetfLogo from '../assets/logos/lsetf.svg';
import pawenLogo from '../assets/logos/pawen.svg';

// // Import award logos
// import bestAcceleratorLogo from '../assets/logos/';
// import innovationAwardLogo from '../logos/innovation-award.png';
// import mentorshipExcellenceLogo from '../logos/excellence-in-mentorship.png';
// import topStartupEnablerLogo from '../logos/top-startup-enabler.png';
// import globalImpactAwardLogo from '../logos/global-impact-award.png';
// import entrepreneurshipChampionLogo from '../logos/entrepreneurship-champion.png';

// Updated data for Ecosystem Support Partners with imported assets
const partnersData = [
  { name: "Morrow Sodalli", logo: morrowSodaliLogo },
  { name: "Venture Studios", logo: ventureStudiosLogo },
  { name: "Studio Fundraise Map", logo: fundraiseMapLogo },
  { name: "Startup Studio Insider", logo: startupStudioInsiderLogo },
  { name: "Lagos State Empowerment Trust Fund", logo: lsetfLogo },
  { name: "Pan African Women Empowerment Network", logo: pawenLogo },
];

// Updated data for Awards & Recognition with imported assets
// const awardsData = [
//   { name: "Best Accelerator 2023", logo: bestAcceleratorLogo },
//   { name: "Innovation Award", logo: innovationAwardLogo },
//   { name: "Excellence in Mentorship", logo: mentorshipExcellenceLogo },
//   { name: "Top Startup Enabler", logo: topStartupEnablerLogo },
//   { name: "Global Impact Award", logo: globalImpactAwardLogo },
//   { name: "Entrepreneurship Champion", logo: entrepreneurshipChampionLogo },
// ];

const EcosystemAchievements = () => {
  return (
    <section className="brutalist-section bg-brutalist-lightgray">
      <div className="brutalist-container px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-4">OUR ECOSYSTEM</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our network of innovative partners driving growth and impact.
          </p>
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
        {/* Uncomment this section when ready and the imported logos will work */}
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