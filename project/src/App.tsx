import  { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Assessment from './pages/Assessment';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import { PreviewPage } from './pages/PreviewPage';
import FeedbackForm from './components/FeedbackForm';

// ScrollToTop component to handle scrolling on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-16">
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/preview" element={<PreviewPage />}/>
            <Route path="/feedback" element={<FeedbackForm />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;