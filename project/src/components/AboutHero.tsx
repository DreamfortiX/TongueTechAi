const AboutHero = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-20 px-4 lg:px-14 gap-8">
      <div className="flex-1">
        <div className="w-full h-[800px] bg-emerald-100 rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1577467014381-aa7c13dbf331?auto=format&fit=crop&q=80&w=1920" 
            alt="Traditional Chinese Medicine"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex-1">
      <h1 className="text-4xl text-black font-bold mb-6">
          About My Herbal Advisor
        </h1>
        <div className="prose prose-lg text-gray-700 space-y-4">
          <p>
            My Herbal Advisor is a cutting-edge health platform that blends the ancient diagnostic principles of Traditional Chinese Medicine (TCM) with modern artificial intelligence. Our mission is to empower individuals worldwide with accessible, personalized, and holistic herbal care—starting with a simple photo of your tongue.
          </p>
          <p>
            Our journey began when our founder, Kim Leibowitz—a seasoned acupuncturist and licensed herbalist with over 20 years of experience—realized the need to make the powerful insights of TCM more accessible. Kim's own life was transformed by TCM after overcoming severe allergies, and since then, he has dedicated himself to helping others do the same.
          </p>
          <p>
            Traditional one-on-one consultations, while effective, could only reach a limited number of people. So Kim returned to school to study software engineering and UX design, determined to create a platform that could deliver TCM’s personalized insights at scale, using the latest advancements in AI and digital health.
          </p>
          <p>
            The result is My Herbal Advisor—a seamless fusion of ancient wisdom and modern technology. Our AI analyzes tongue images through the lens of TCM to detect internal imbalances. Combined with a tailored health questionnaire, we generate personalized herbal and lifestyle recommendations to guide your wellness journey.
          </p>
          <p>
            We are proud to support users in achieving harmony of body, mind, and spirit—wherever they are. Whether you're just starting out with herbal remedies or seeking long-term wellness support, My Herbal Advisor is your intelligent companion on the path to better health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;