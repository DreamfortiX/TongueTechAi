import { Award, Stethoscope, GraduationCap } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Sarah Chen, MD",
    title: "Chief of Oral Medicine, Pacific Medical Center",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=2000",
    quote: "TongueHealth AI has revolutionized our early detection capabilities. The accuracy and speed of diagnosis have significantly improved our patient care.",
    icon: Stethoscope
  },
  {
    name: "Prof. James Miller, PhD",
    title: "AI Research Director, Medical Tech Institute",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=2000",
    quote: "The machine learning algorithms employed by TongueHealth AI represent a significant advancement in medical imaging analysis.",
    icon: GraduationCap
  },
  {
    name: "Dr. Lisa Thompson",
    title: "Board Certified Oral Pathologist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=2000",
    quote: "I've incorporated TongueHealth AI into my practice, and it's become an invaluable tool for preliminary screenings and patient education.",
    icon: Award
  }
];

export function ProfessionalTestimonials() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Trusted by Medical Professionals</h2>
          <p className="mt-4 text-lg text-gray-600">Leading healthcare experts endorse our technology</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon;
            return (
              <div 
                key={index}
                className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-8 -translate-y-8">
                  <div className="absolute inset-0 bg-teal-500 opacity-10 transform rotate-45"></div>
                </div>
                
                <div className="relative p-8">
                  <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-teal-600" />
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-teal-600">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-teal-600 bg-teal-50 px-4 py-2 rounded-full">
            <Award className="w-5 h-5" />
            <span className="text-sm font-medium">Endorsed by leading medical institutions</span>
          </div>
        </div>
      </div>
    </div>
  );
}