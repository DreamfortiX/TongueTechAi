import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Aboutus = () => {
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section 
      ref={contentRef}
      className={`min-h-screen flex items-center justify-center w-full bg-gray-100 transition-opacity duration-700 ${
        contentInView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="w-full md:w-1/2 p-6 space-y-6">
        <h2 className="text-3xl text-center capitalize font-semibold text-emerald-800">
          About Us
        </h2>
        <h3 className="text-2xl capitalize font-semibold text-emerald-700">
          My Herbal Advisor
        </h3>
        <p className="text-gray-600 leading-relaxed">
          At My Herbal Advisor, we believe in the timeless wisdom of Traditional
          Chinese Medicine (TCM) and its profound ability to harmonize body,
          mind, and spirit. Our journey began with a simple yet ambitious
          mission: to bridge the gap between ancient wisdom and contemporary
          living, making personalized herbal solutions accessible to all.
        </p>
        <div className="flex justify-center">
          <Link
            to="/about"
            className="group inline-flex items-center bg-white text-emerald-600 border border-emerald-400 px-8 py-3 rounded-lg hover:bg-emerald-600 hover:text-white transition duration-300"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;