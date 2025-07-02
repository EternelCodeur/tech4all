
import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marie Nkoghe",
      company: "Directrice, EcoGabon",
      image: "👩‍💼",
      text: "Tech4All a transformé notre entreprise avec une solution web exceptionnelle. Leur accompagnement a été parfait du début à la fin.",
      rating: 5
    },
    {
      name: "Jean Mbadinga",
      company: "CEO, StartupLib",
      image: "👨‍💼",
      text: "Grâce à Tech4All, nous avons pu digitaliser tous nos processus. Une équipe professionnelle et réactive.",
      rating: 5
    },
    {
      name: "Sarah Bouanga",
      company: "Manager IT, BankGab",
      image: "👩‍💻",
      text: "Le support technique de Tech4All est exceptionnel. Ils sont toujours disponibles et trouvent des solutions rapidement.",
      rating: 5
    },
    {
      name: "Paul Ondoua",
      company: "Fondateur, TechHub",
      image: "👨‍🔬",
      text: "Les formations dispensées par Tech4All ont révolutionné les compétences de notre équipe. Très recommandé !",
      rating: 5
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Témoignages <span className="text-blue-600">Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ce que nos clients disent de nos services
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto animate-on-scroll">
          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-4xl">
                {testimonials[currentTestimonial].image}
              </div>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            <div>
              <div className="font-semibold text-gray-900 text-lg">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-blue-600 font-medium">
                {testimonials[currentTestimonial].company}
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All testimonials grid for larger screens */}
        <div className="grid md:grid-cols-2 gap-6 mt-16 animate-on-scroll">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                  {testimonial.image}
                </div>
                <div className="flex-1">
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-blue-600 text-sm">{testimonial.company}</div>
                  </div>
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
