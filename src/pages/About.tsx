
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Ade Johnson",
    role: "Founder & CEO",
    bio: "20+ years experience in tech and venture capital across African markets."
  },
  {
    name: "Sarah Nkosi",
    role: "Chief Operating Officer",
    bio: "Former startup founder with exits in fintech and healthtech sectors."
  },
  {
    name: "Kofi Mensah",
    role: "Investment Director",
    bio: "15 years in investment banking focused on emerging markets."
  },
  {
    name: "Amina Said",
    role: "Head of Partnerships",
    bio: "Built strategic partnerships across 12 African countries."
  },
  {
    name: "Victor Okonkwo",
    role: "Technical Director",
    bio: "Led engineering teams at major tech companies across Africa."
  },
  {
    name: "Fatima Diallo",
    role: "Startup Advisor",
    bio: "Mentored over 100 startups through accelerator programs."
  },
  {
    name: "Kwame Addo",
    role: "Financial Strategist",
    bio: "Specialized in helping startups achieve financial sustainability and growth."
  },
  {
    name: "Nia Abebe",
    role: "Marketing Director",
    bio: "Expert in brand building for emerging market startups and scale-ups."
  },
  {
    name: "Tunde Osei",
    role: "Innovation Lead",
    bio: "Pioneered innovation frameworks for tech startups across Sub-Saharan Africa."
  }
];

const About = () => {
  const [showAllTeam, setShowAllTeam] = useState(false);
  
  const displayedTeamMembers = showAllTeam ? teamMembers : teamMembers.slice(0, 6);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="brutalist-section bg-brutalist-black text-brutalist-white relative">
          <div className="absolute inset-0 brutalist-noise opacity-10"></div>
          
          <div className="brutalist-container px-4 relative z-10">
            <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6">ABOUT US</h1>
            <p className="text-xl md:text-2xl max-w-3xl">
              FirstFounders is a startup studio focused on partnering with early-stage founders to build, scale, and fund startups with an emphasis on African markets.
            </p>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="brutalist-section bg-brutalist-white">
          <div className="brutalist-container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl mb-6">OUR MISSION</h2>
                <div className="text-xl">
                  <p className="mb-4">
                    We believe in the transformative power of entrepreneurship to solve Africa's most pressing challenges. Our mission is to empower founders with the resources, guidance, and capital they need to build sustainable, scalable businesses.
                  </p>
                  <p>
                    Through our startup studio model, we reduce the risk of startup failure by providing hands-on support, from ideation to market entry and beyond.
                  </p>
                </div>
              </div>
              <div className="brutalist-border bg-brutalist-lightgray p-12 relative">
                <div className="text-5xl md:text-6xl font-bebas text-center">
                  EMPOWERING FOUNDERS.
                  <br />
                  SOLVING PROBLEMS.
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brutalist-orange brutalist-border"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="brutalist-section bg-brutalist-lightgray">
          <div className="brutalist-container px-4">
            <h2 className="text-5xl mb-12 text-center">OUR TEAM</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedTeamMembers.map((member, index) => (
                <div key={index} className="brutalist-border bg-brutalist-white p-8">
                  <div className="w-24 h-24 rounded-full brutalist-border bg-brutalist-black mb-4 mx-auto"></div>
                  <h3 className="text-2xl font-bebas mb-1 text-center">{member.name}</h3>
                  <p className="text-center mb-4 text-lg">{member.role}</p>
                  <p className="text-center">{member.bio}</p>
                </div>
              ))}
            </div>
            
            {!showAllTeam && teamMembers.length > 6 && (
              <div className="mt-8 text-center">
                <Button 
                  onClick={() => setShowAllTeam(true)}
                  className="brutalist-border bg-brutalist-black text-brutalist-white font-bebas uppercase tracking-wide px-8 py-3 text-xl hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  SEE ALL TEAM
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Achievements Section */}
        <section className="brutalist-section bg-brutalist-white">
          <div className="brutalist-container px-4">
            <h2 className="text-5xl mb-12 text-center">ACHIEVEMENTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="brutalist-border p-8">
                <h3 className="text-3xl font-bebas mb-4">5 YEARS OF IMPACT</h3>
                <ul className="space-y-4 text-lg">
                  <li>• Launched 30+ startups across FinTech, AgriTech, HealthTech, and EdTech</li>
                  <li>• 85% survival rate for portfolio companies after 3 years</li>
                  <li>• Created 500+ jobs across Africa</li>
                  <li>• Expanded operations to 8 African countries</li>
                </ul>
              </div>
              <div className="brutalist-border p-8">
                <h3 className="text-3xl font-bebas mb-4">RECOGNITION</h3>
                <ul className="space-y-4 text-lg">
                  <li>• Top 10 Most Innovative Companies in Africa, 2022</li>
                  <li>• Best Startup Studio in West Africa, 2021</li>
                  <li>• Impact Investor of the Year, Pan-African Tech Awards</li>
                  <li>• Featured in TechCrunch, Quartz Africa, and CNBC Africa</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="brutalist-section bg-brutalist-orange">
          <div className="brutalist-container px-4 text-center">
            <h2 className="text-5xl mb-6">JOIN OUR JOURNEY</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Whether you're a founder with a bold idea, an investor looking for opportunities, or a partner wanting to support Africa's tech ecosystem, we'd love to connect.
            </p>
            <Link to="/contact" className="brutalist-border bg-brutalist-black text-brutalist-white font-bebas uppercase tracking-wide px-8 py-3 text-xl inline-block hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
              GET IN TOUCH
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
