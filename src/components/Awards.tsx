import React from 'react';

// Updated data for Ecosystem Support Partners with PNG file paths
// const partnersData = [
//   { name: "Morrow Sodalli", logo: "/assets/logos/morrow-sodali1.png" },
//   { name: "Venture Studios", logo: "/assets/logos/venture-studios.svg" },
//   { name: "Studio Fundraise Map", logo: "/assets/logos/fundraise-map.svg" },
//   { name: "Startup Studio Insider", logo: "assets/logos/startup-studioinsider.svg" },
//   { name: "Lagos State Empowerment Trust Fund", logo: "assets/logos/lsetf.svg" },
//   { name: "Pan African Women Empowerment Network", logo: "assets/logos/pawen.svg" },
// ];

// Updated data for Awards & Recognition with PNG file paths
const awardsData = [
  { name: "Best Accelerator 2023", logo: "assets/logos/business-day.svg" },
  { name: "Innovation Award", logo: "assets/logos/culturati.svg" },
  { name: "Excellence in Mentorship", logo: "assets/logos/ceo-monthly.svg" },
  { name: "Top Startup Enabler", logo: "assets/logos/lagos-businessschool.svg" },
  { name: "Global Impact Award", logo: "assets/logos/global.svg" },
];

const Awards = () => {
  return (
    <section className="brutalist-section bg-brutalist-white">
      <div className="brutalist-container px-4">
        {/* Section Header */}
        {/* <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-4">OUR ECOSYSTEM & ACHIEVEMENTS</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our network of partners and the recognitions we’ve earned.
          </p>
        </div> */}

        {/* Ecosystem Support Partners Subsection */}
        

        {/* Awards & Recognition Subsection */}
        <div>
          {/* <h3 className="text-3xl font-bebas mb-8 text-center">AWARDS & RECOGNITION</h3>
          <p className="text-xl max-w-3xl mx-auto">
          Celebrating our excellence with prestigious industry recognition.
          </p> */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-4">AWARDS</h2>
          <p className="text-xl max-w-3xl mx-auto">
          Celebrating our excellence with prestigious industry recognition.
          </p>
        </div>
          <h3 className="text-3xl font-bebas mb-8 text-center">OUR AWARDS & RECOGNITION</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awardsData.map((award, index) => (
              <div
                key={index}
                className="brutalist-border bg-brutalist-white p-8 text-center hover:bg-brutalist-orange transition-colors group"
              >
                <div className="w-40 h-20 brutalist-border flex items-center justify-center mx-auto mb-4 bg-brutalist-black group-hover:bg-brutalist-white transition-colors">
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
        </div>
      </div>
    </section>
  );
};

export default Awards;