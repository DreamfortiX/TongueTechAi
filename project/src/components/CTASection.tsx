import React from 'react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  backgroundImage?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ backgroundImage }) => {
  const bgStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : { backgroundColor: '#1F2937' };

  return (
    <div
      className="relative w-full h-[300px] mt-28 bg-cover bg-center"
      style={bgStyle}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500">
        <div className="h-full flex items-center px-10 md:px-16">
          <div className="text-white p-4 rounded max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Create Your Account for Exclusive Benefits
            </h2>
            <p className="mb-6 text-gray-200">
              Sign up to access your personalized health journey—view past tongue images,
              track your progress, and easily reorder your favorite formulas. Plus, receive
              special discounts, email updates, and wellness tips tailored just for you.
            </p>
            <Link
              to="/signup"
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition duration-300 ease-in-out"
            >
              Create my Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;