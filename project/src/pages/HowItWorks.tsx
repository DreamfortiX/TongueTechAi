import { Camera, Brain, FileText, Activity, Package, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      title: "1. Upload Tongue Image",
      icon: <Camera className="w-12 h-12 text-emerald-600" />,
      sections: [
        {
          subtitle: "Capture Your Tongue Photo",
          content: "Begin by uploading a high-resolution image of your tongue. This image acts as the primary input for our AI system, enabling early detection of potential signs of oral tongue cancer."
        },
        {
          subtitle: "Why It Matters",
          content: "The tongue is a key indicator of oral health. Early signs of tongue cancer—such as sores, white patches, or unusual textures—can be detected through careful image analysis."
        },
        {
          subtitle: "Secure & Confidential",
          content: "All uploaded images are securely stored and processed using encrypted systems, ensuring full privacy and safety of your personal health data."
        }
      ]
    },
    {
      title: "2. AI-Based Analysis",
      icon: <Brain className="w-12 h-12 text-emerald-600" />,
      sections: [
        {
          subtitle: "Deep Learning Detection",
          content: "Our Convolutional Neural Network (CNN) model, trained on thousands of tongue images, analyzes the uploaded photo to identify abnormal patterns potentially linked to cancer."
        },
        {
          subtitle: "Advanced Techniques",
          content: "Using techniques like image augmentation and noise reduction, the system ensures accurate diagnosis regardless of lighting or angle."
        }
      ]
    },
    {
      title: "3. View Results Instantly",
      icon: <FileText className="w-12 h-12 text-emerald-600" />,
      sections: [
        {
          subtitle: "Quick Preliminary Diagnosis",
          content: "After analysis, results are shown instantly—highlighting any detected signs and recommending further medical consultation if needed."
        },
        {
          subtitle: "Report Summary",
          content: "Receive a downloadable report outlining observations and risk levels, helping both patients and healthcare professionals in decision-making."
        }
      ]
    },
    {
      title: "4. Connect with a Specialist",
      icon: <UserPlus className="w-12 h-12 text-emerald-600" />,
      sections: [
        {
          subtitle: "Expert Review",
          content: "Users can opt to forward their results to a certified medical professional for expert advice and a second opinion."
        },
        {
          subtitle: "Guided Next Steps",
          content: "Our network of specialists can recommend further diagnostic tests or treatments based on AI findings."
        }
      ]
    },
    {
      title: "5. Health Monitoring Dashboard",
      icon: <Activity className="w-12 h-12 text-emerald-600" />,
      sections: [
        {
          subtitle: "Track Your Progress",
          content: "Users can log new images over time to monitor any changes and track improvements or deterioration, supporting continuous health awareness."
        },
        {
          subtitle: "Real-Time Alerts",
          content: "The platform can alert users if a pattern in their uploads suggests increased risk, ensuring timely re-evaluation."
        }
      ]
    },
    {
      title: "6. Support and Education",
      icon: <Package className="w-12 h-12 text-emerald-600" />,
      sections: [
        {
          subtitle: "Educational Resources",
          content: "Access curated articles, infographics, and videos to better understand tongue cancer, symptoms, and preventive care."
        },
        {
          subtitle: "Patient Stories and Guidance",
          content: "Read testimonials and case studies of early detection success made possible by AI-supported tools."
        }
      ]
    }
  ];

  const benefits = [
    "Accurate Detection: Leverages CNN models for early and reliable cancer screening.",
    "Cost-Effective: Minimizes the need for expensive preliminary tests and doctor visits.",
    "Privacy First: All uploads and reports are kept secure and confidential.",
    "Remote Screening: Users can check for potential cancer signs from home.",
    "Healthcare Accessibility: Bridges diagnostic gaps in remote and underserved regions."
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-500 to-blue-500 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-xl">AI-Powered Tongue Image Analysis for Early Detection of Oral Cancer</p>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-12">
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Our AI-based platform provides a fast, secure, and accurate solution to screen for early signs of oral tongue cancer using a simple tongue image. Trained using deep learning on medical datasets, it bridges the gap between preliminary diagnosis and professional care.
        </p>
      </div>

      {/* Steps */}
      <div className="container mx-auto px-4 py-12">
        {steps.map((step, index) => (
          <div key={index} className="mb-16">
            <div className="flex items-center mb-6">
              {step.icon}
              <h2 className="text-3xl font-bold text-emerald-800 ml-4">{step.title}</h2>
            </div>
            <div className="space-y-8 pl-16">
              {step.sections.map((section, sIndex) => (
                <div key={sIndex}>
                  <h3 className="text-xl font-semibold text-emerald-700 mb-2">{section.subtitle}</h3>
                  <p className="text-gray-600">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="bg-emerald-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-emerald-800 mb-8">Why Choose This System?</h2>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-4"></div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-teal-500 to-blue-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Screening Now</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Sign up and upload your first image to begin your AI-assisted tongue cancer screening. It's quick, private, and could help save your life.
          </p>
          <Link
            to="/signup"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition duration-300 ease-in-out"
          >
            Create My Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
