import React, { useState } from 'react';
import { Quote, Star, ArrowLeft, ArrowRight } from 'lucide-react';

const MinimalTestimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Working at Global Technocrats has been transformative. The innovative culture and cutting-edge technology projects keep me excited to push boundaries every day.",
      author: "Dr. Vikram Singh",
      position: "Senior Research Scientist",
      tenure: "5 years",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      department: "R&D"
    },
    {
      id: 2,
      quote: "The growth opportunities here are exceptional. I've evolved from junior engineer to project lead, with international exposure that has shaped my career.",
      author: "Neha Kapoor",
      position: "Project Manager",
      tenure: "4 years",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      department: "Engineering"
    },
    {
      id: 3,
      quote: "The meaningful impact of our work in defense technology gives me tremendous satisfaction. Our diverse, international team brings invaluable perspectives.",
      author: "Ahmed Al-Farsi",
      position: "Systems Engineer",
      tenure: "3 years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      department: "Operations"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-12 md:py-16 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8 text-sm font-medium text-gray-600">
            <Quote className="w-4 h-4" />
            Team Voices
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            What Our <span className="text-blue-600">Team Says</span>
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            Authentic insights from the people who make our success possible
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12 mb-8">
            {/* Quote */}
            <div className="text-center mb-8">
              <Quote className="w-8 h-8 text-blue-600 mx-auto mb-6 opacity-50" />
              <blockquote className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed tracking-tight">
                "{current.quote}"
              </blockquote>
            </div>

            {/* Author Info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100">
                  <img
                    src={current.image}
                    alt={current.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Department Badge */}
                <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                  {current.department}
                </div>
              </div>

              {/* Details */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{current.author}</h3>
                <p className="text-blue-600 font-medium mb-2">{current.position}</p>
                <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-gray-500">
                  <span>{current.tenure} with us</span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            {/* Previous Button */}
            <button
              onClick={prevTestimonial}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              Previous
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              Next
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* All Testimonials Preview */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrentTestimonial(index)}
              className={`group text-left p-6 rounded-2xl border transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-blue-50 border-blue-200'
                  : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{testimonial.author}</h4>
                  <p className="text-xs text-gray-500">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 line-clamp-3 group-hover:text-gray-900 transition-colors duration-200">
                "{testimonial.quote}"
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinimalTestimonials;