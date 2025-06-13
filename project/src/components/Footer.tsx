import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import tongueLogo from '../assessts/tongue.png'; // Adjust the path as needed

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* Logo and Brand */}
              <Link to="/" className="flex items-center space-x-2">
              <img src={tongueLogo} alt="Tongue Tech AI Logo" className="h-8 w-8" />
              <span className="text-xl font-bold text-emerald-800">Tongue Tech AI</span>
              </Link>
            </div>
            <p className="text-gray-400">
              Revolutionizing health assessment through AI-powered tongue analysis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-emerald-500">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-emerald-500">About Us</Link></li>
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-emerald-500">How It Works</Link></li>
              <li><Link to="/assessment" className="text-gray-400 hover:text-emerald-500">AI Assessment</Link></li>
              <li><Link to="/feedback" className="text-gray-400 hover:text-emerald-500">FeedBack</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-400 hover:text-emerald-500">Contact Us</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500">FAQ</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
  <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
  <div className="flex space-x-4">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500">
      <Facebook className="h-6 w-6" />
    </a>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500">
      <Twitter className="h-6 w-6" />
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500">
      <Instagram className="h-6 w-6" />
    </a>
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500">
      <Linkedin className="h-6 w-6" />
    </a>
  </div>
</div>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tongue Tech AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;