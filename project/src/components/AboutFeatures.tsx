
const features = [
  {
    title: "AI-Powered Tongue Diagnosis",
    description:
      "Our proprietary diagnostic tool 'Flora' uses advanced AI trained in Traditional Chinese Medicine (TCM) to analyze tongue images. This non-invasive process helps uncover imbalances in the body and generates precise, personalized herbal recommendations.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Trusted Herbal Solutions",
    description:
      "We go beyond diagnostics to offer safe, high-quality herbal products. All remedies are produced under strict cGMP guidelines to ensure purity, potency, and effectiveness—so you can trust what you put into your body.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Empowering Holistic Wellness",
    description:
      "My Herbal Advisor isn't just a tool—it's a holistic health companion. From lifestyle advice to progress tracking, we empower you with tools, education, and support to maintain balance and well-being long-term.",
    image:
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Rooted in Tradition, Built for Today",
    description:
      "We blend ancient TCM wisdom with modern AI and user-friendly design to make herbal healing accessible to all. Our goal is to honor the roots of Chinese medicine while advancing it through intelligent, scalable solutions.",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800"
  }
];


const AboutFeatures = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 mx-4 lg:mx-14">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="h-48 mb-6 overflow-hidden rounded-lg">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <h2 className="text-2xl font-bold text-emerald-800 mb-4">
            {feature.title}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AboutFeatures;