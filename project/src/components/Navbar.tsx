import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import tongueLogo from '../assessts/tongue.png'; // Adjust the path as needed


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(sessionStorage.getItem("name"));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fetch user details if logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const email = localStorage.getItem("userEmail");

    // If not logged in or email is missing, no need to fetch
    if (isLoggedIn !== "true" || !email) return;

    const fetchUser = async () => {
      try {
        const response = await fetch(
          `http://localhost/fyp/fyp/project/src/pages/auth/loginBackend/get_user.php?email=${email}`
        );
        const data = await response.json();

        if (data.success) {
          setUserName(data.user.name);
          // Optionally, store the name in local storage as well if needed
          localStorage.setItem("userName", data.user.name);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    localStorage.setItem("isLoggedIn", "false");
    setUserName(null);
    navigate("/signup");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-2">
          <img src={tongueLogo} alt="Tongue Tech AI Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-emerald-800">Tongue Tech AI</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-emerald-600 transition-colors">Home</Link>
            <Link to="/how-it-works" className="text-gray-600 hover:text-emerald-600 transition-colors">How it Works</Link>
            <Link to="/contact" className="text-gray-600 hover:text-emerald-600 transition-colors">Contact</Link>
            <Link to="/about" className="text-gray-600 hover:text-emerald-600 transition-colors">About Us</Link>
          </div>

          {/* User Section */}
          <div className="hidden md:flex items-center space-x-6">
            {userName ? (
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-gray-800 font-medium flex items-center space-x-2"
                >
                  <span>Welcome, {userName}</span>
                  <ChevronDown className="h-5 w-5 text-gray-600" />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                    <Link to="/profile" className="block px-4 py-2 text-gray-600 hover:bg-emerald-100 transition-colors">
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-emerald-100 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="px-4 py-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
                  Login
                </Link>
                <Link to="/signup" className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors shadow-sm">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="flex flex-col space-y-4 p-4">
              <Link to="/" className="text-gray-600 hover:text-emerald-600 transition-colors">Home</Link>
              <Link to="/how-it-works" className="text-gray-600 hover:text-emerald-600 transition-colors">How it Works</Link>
              <Link to="/contact" className="text-gray-600 hover:text-emerald-600 transition-colors">Contact</Link>
              <Link to="/about" className="text-gray-600 hover:text-emerald-600 transition-colors">About Us</Link>

              {userName ? (
                <>
                  <Link to="/profile" className="text-gray-600 hover:text-emerald-600 transition-colors">
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-red-600 hover:text-red-700 transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
                    Login
                  </Link>
                  <Link to="/signup" className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors shadow-sm">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
