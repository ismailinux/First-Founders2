
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EcosystemAchievements from "@/components/EcosystemAchievements";
import Awards from "@/components/Awards";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Testimonials />
        <EcosystemAchievements />
        <Awards />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
