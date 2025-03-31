import React from 'react';
import businessDayLogo from '../assets/logos/business-day.svg';
import culturatiLogo from '../assets/logos/culturati.svg';
import ceoMonthlyLogo from '../assets/logos/ceo-monthly.svg';
import lagosBusinessSchoolLogo from '../assets/logos/lagos-businessschool.svg';
import globalLogo from '../assets/logos/global.svg';

const awardsData = [
  { name: "Best Accelerator 2023", logo: businessDayLogo },
  { name: "Innovation Award", logo: culturatiLogo },
  { name: "Excellence in Mentorship", logo: ceoMonthlyLogo },
  { name: "Top Startup Enabler", logo: lagosBusinessSchoolLogo },
  { name: "Global Impact Award", logo: globalLogo },
];

const Awards = () => {
  return (
    <section className="brutalist-section bg-brutalist-white">
      <div className="brutalist-container px-4">
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
    </section>
  );
};

export default Awards;