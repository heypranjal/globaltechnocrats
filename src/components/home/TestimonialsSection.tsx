import React from 'react';
import { Quote } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const testimonials = [
  {
    id: 1,
    quote: "Global Technocrats has provided us with top-notch security solutions for our military installations. Their expertise in defense technology is unmatched in the industry.",
    author: "Maj. Gen. Rajiv Kumar",
    position: "Defense Procurement Officer",
    organization: "Indian Armed Forces",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    quote: "The Advanced AI Products from Global Technocrats have revolutionized our surveillance capabilities. The image enhancement technology provides unprecedented clarity for critical security operations.",
    author: "Sarah Al-Mansouri",
    position: "Security Director",
    organization: "Gulf Security Consortium",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    quote: "We've partnered with Global Technocrats for our border security infrastructure, and their fencing solutions provide reliable protection that meets our strict requirements for durability and effectiveness.",
    author: "Dr. Ahmed Hassan",
    position: "Chief Technology Officer",
    organization: "National Security Agency",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  }
];

const TestimonialsSection: React.FC = () => {
  const [sectionRef, isInView] = useInView();

  return (
    <section 
      ref={sectionRef}
      className={`section section-alternate-luxury section-luxury relative overflow-hidden opacity-0 transform transition-all duration-1000 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'translate-y-10'
      }`}
    >
      {/* Background pattern - very subtle */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAtNmgtMlYwaDJ2NHptLTYgMTJoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0yNGgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bS02LTI0aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptLTYtMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0yNGgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      
      <div className="container max-w-[1200px] relative z-10">
        <div className={`section-heading opacity-0 transition-all duration-1000 delay-200 ${
          isInView ? 'opacity-100 translate-y-0' : 'translate-y-10'
        }`}>
          <span className="inline-block text-primary-600 font-medium text-sm tracking-wider px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-6">CLIENT TESTIMONIALS</span>
          <h2 className="section-title">Trusted by Experts</h2>
          <p className="section-subtitle">
            Hear what security and defense professionals have to say about our innovative solutions and reliable service.
          </p>
        </div>
        
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-subtle hover:shadow-lg transform transition-all duration-700 opacity-0 ${
                isInView ? 'opacity-100 translate-x-0' : 'translate-x-20'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              <div className="mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-50 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              
              <p className="text-gray-700 mb-8 sm:mb-10 text-sm sm:text-lg leading-relaxed italic">{testimonial.quote}</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover mr-3 sm:mr-4 border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-xs sm:text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-xs sm:text-xs text-primary-600">{testimonial.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;