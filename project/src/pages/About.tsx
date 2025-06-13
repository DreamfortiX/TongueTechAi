import { useEffect } from 'react';
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import AboutHero from "../components/AboutHero";
import AboutFeatures from "../components/AboutFeatures";

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <AboutHero />
      <AboutFeatures />
      <CTASection />
      <Footer />
    </div>
  );
};

export default About;