import AssessmentStep from '../components/AssessmentStep';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Assessment = () => {
  const steps = [
    {
      title: 'Chat',
      description: "Begin by engaging with Flora, your friendly, knowledgeable AI powered guide. She'll ask you a few quick questions to understand your health goals and preferences.",
    },
    {
      title: 'Upload & Analyze',
      description: 'Next, simply upload a clear selfie of your tongue. Flora will analyze your tongue image and use this information to ask you a few follow-up questions to understand your health goals and preferences.',
    },
    {
      title: 'Receive',
      description: "Get Flora's personalized TCM herbal formula recommendations custom-tailored just for you. Enjoy the convenience of doorstep delivery and stay on track to achieving your wellness goals.",
    },
  ];

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Hero Section */}
      <div className="min-h-[60vh] flex flex-col justify-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-28">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-600 mb-4">
            Scan your Tongue
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold my-2">Get Free</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-neutral-600">
            Herbal Recommendations
          </h3>
        </div>
      </div>

      {/* Steps Section */}
      <div className="container mx-auto px-4 md:px-14">
        <div className="flex flex-col md:flex-row gap-5 my-6">
          {steps.map((step, index) => (
            <AssessmentStep
              key={index}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-11 mb-16">
        <h2 className="text-center text-4xl md:text-5xl font-bold my-16">
          Chat with Flora
        </h2>
        <h3 className="font-bold text-xl mb-5">Flora AI</h3>
        <div className="min-h-[60vh] bg-slate-500 rounded-2xl"></div>
        
        {/* Disclaimer */}
        <p className="my-9 text-sm text-gray-600">
          Recommendations from My Herbal Advisor LLC and its chatbot Flora AI are not meant to diagnose, 
          treat, or provide medical advice. Information on this page does not replace advice from a 
          healthcare professional. Claims about specific products in this blog are not approved to diagnose, 
          treat, cure, or prevent disease. For more details, please refer to our{' '}
          <button className="font-bold hover:text-emerald-600">Privacy Policy</button> and{' '}
          <button className="font-bold hover:text-emerald-600">Terms of Use Policy</button>
        </p>
      </div>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Assessment;