import { useState, useEffect } from "react";
import Nextpage from "../components/Nextpage";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import IntersectionWrapper from "../components/IntersectionWrapper";
import Aboutus from "../components/Aboutus";
import { ImageUpload } from "../components/ImageUpload";
import { ProfessionalTestimonials } from "../components/ProfessionalTestimonials";
import { PrivacyBanner } from "../components/PrivacyBanner";
import FeedbackForm from "../components/FeedbackForm";

const content = [
  {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1920",
    title: "Empowering Health Choices for a Vibrant Life",
    description: "Experience personalized healthcare solutions tailored to your unique needs. Start your wellness journey today.",
  },
  {
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=1920",
    title: "Traditional Wisdom Meets Modern Science",
    description: "Discover the perfect blend of ancient healing practices and cutting-edge technology for optimal health.",
  },
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1920",
    title: "Your Path to Natural Wellness",
    description: "Explore our comprehensive range of holistic health solutions designed to enhance your well-being.",
  },
  {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1920",
    title: "Personalized Care at Your Fingertips",
    description: "Access expert health insights and customized recommendations from the comfort of your home.",
  },
  {
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1920",
    title: "Transforming Healthcare Through Innovation",
    description: "Experience the future of healthcare with our AI-powered tongue analysis technology.",
  },
  {
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=1920",
    title: "Your Journey to Optimal Health",
    description: "Let us guide you on your path to better health with personalized herbal solutions.",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-teal-500 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                AI-Powered Tongue Disease Detection
              </h1>
              <p className="mt-3 text-lg text-white opacity-90">
                Get instant analysis of tongue conditions using our advanced AI technology. Quick, accurate, and non-invasive diagnosis at your fingertips.
              </p>
              <div className="mt-8">
                <ImageUpload />
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
            <div
              className="min-h-screen flex flex-col justify-center lg:px-32 text-white bg-no-repeat bg-cover bg-center relative transition-all duration-700"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${content[currentIndex].image})`,
              }}
            >
              <IntersectionWrapper className="w-full lg:w-9/6 space-y-4 mt-8"> 
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug"> 
                  {content[currentIndex].title} 
                </h1> 
                <p className="text-md md:text-lg"> 
                  {content[currentIndex].description} 
                </p> 
              </IntersectionWrapper>

              {/* Slide Indicators */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {content.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'w-4 bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <IntersectionWrapper>
        <ProfessionalTestimonials />
      </IntersectionWrapper>

      <IntersectionWrapper>
        <Nextpage />
      </IntersectionWrapper>
      <IntersectionWrapper>
        <PrivacyBanner />
      </IntersectionWrapper>
      
      <IntersectionWrapper>
        <Testimonials />
      </IntersectionWrapper>
      <IntersectionWrapper>
        <Aboutus />
      </IntersectionWrapper>
      
      <IntersectionWrapper>
        <CTASection />
      </IntersectionWrapper>
      {/* <IntersectionWrapper>
        <FeedbackForm />
      </IntersectionWrapper> */}
      
      <Footer />
    </div>
  );
};

export default Home;