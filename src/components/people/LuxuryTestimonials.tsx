import React from 'react';
import { Users, Quote } from 'lucide-react';

const LuxuryTestimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Working at Global Technocrats has been the most rewarding experience of my career. I'm constantly challenged to innovate and given the resources to bring my ideas to life. The collaborative culture and focus on cutting-edge technology keeps me excited to come to work every day.",
      author: "Dr. Vikram Singh",
      position: "Senior Research Scientist",
      tenure: "5 years",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 2,
      quote: "The growth opportunities at Global Technocrats are exceptional. I joined as a junior engineer four years ago and have since led multiple projects and traveled internationally. The company invests significantly in employee development and recognizes achievement.",
      author: "Neha Kapoor",
      position: "Project Manager",
      tenure: "4 years", 
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 3,
      quote: "What sets Global Technocrats apart is the meaningful impact of our work. Knowing that our technologies help protect critical infrastructure and keep people safe gives me tremendous satisfaction. The international work environment and diverse team bring valuable perspectives to every project.",
      author: "Ahmed Al-Farsi",
      position: "Systems Engineer",
      tenure: "3 years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Luxury Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-800/50 via-transparent to-primary-800/50"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"></div>
      
      <div className="container relative">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          {/* Section Badge */}
          <div className="inline-flex items-center bg-primary-800/50 backdrop-blur-sm text-primary-200 rounded-full py-2 px-4 mb-8 text-sm font-medium border border-primary-700/50">
            <Users className="w-4 h-4 mr-2" /> 
            Team Voices
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 tracking-tight leading-tight">
            What Our 
            <span className="block bg-gradient-to-r from-primary-200 to-white bg-clip-text text-transparent">
              Team Says
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-xl text-primary-200 leading-relaxed font-light">
            Hear from the people who make Global Technocrats an amazing place to work and grow.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="group">
              <div className="relative h-full">
                {/* Card Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-800/60 via-primary-700/40 to-primary-800/60 rounded-3xl backdrop-blur-sm"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-primary-600/20 via-transparent to-primary-600/20 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                {/* Main Card */}
                <div className="relative h-full bg-primary-700/30 backdrop-blur-lg rounded-3xl border border-primary-600/20 shadow-2xl hover:shadow-3xl transition-all duration-700 group-hover:-translate-y-2 overflow-hidden">
                  {/* Top Accent */}
                  <div className="h-px bg-gradient-to-r from-transparent via-primary-400/50 to-transparent"></div>
                  
                  <div className="p-8 h-full flex flex-col">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500/30 to-primary-600/20 rounded-2xl flex items-center justify-center border border-primary-500/20">
                        <Quote className="w-6 h-6 text-primary-300" />
                      </div>
                    </div>
                    
                    {/* Testimonial Text */}
                    <div className="flex-1 mb-8">
                      <p className="text-primary-100 leading-relaxed font-light text-lg italic group-hover:text-white transition-colors duration-300">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    
                    {/* Author Section */}
                    <div className="flex items-center">
                      {/* Profile Image with Luxury Frame */}
                      <div className="relative mr-4">
                        <div className="w-16 h-16 p-0.5 bg-gradient-to-br from-primary-400 via-primary-300 to-primary-500 rounded-full group-hover:from-primary-300 group-hover:to-primary-400 transition-all duration-500">
                          <div className="w-full h-full bg-primary-800 p-0.5 rounded-full">
                            <img 
                              src={testimonial.image}
                              alt={testimonial.author}
                              className="w-full h-full rounded-full object-cover"
                            />
                          </div>
                        </div>
                        
                        {/* Corner Accent */}
                        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-primary-400/60 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      </div>
                      
                      {/* Author Info */}
                      <div>
                        <p className="font-bold text-white text-lg group-hover:text-primary-100 transition-colors duration-300">
                          {testimonial.author}
                        </p>
                        <p className="text-primary-300 text-sm font-medium">
                          {testimonial.position}
                        </p>
                        <p className="text-primary-400 text-xs">
                          {testimonial.tenure}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Accent */}
                  <div className="h-px bg-gradient-to-r from-transparent via-primary-400/30 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryTestimonials;