
import React, { useState, useEffect } from 'react';
import { MessageCircle} from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Georges KASSAVI",
      company: "Consul du Bénin à Port-Gentil",
      image: <MessageCircle  className="w-8 h-8" />,
      text: "Tech4All a transformé notre administration avec une solution web exceptionnelle. Leur accompagnement a été parfait du début à la fin. Cette application développée a permis de moderniser efficacement la gestion des usagers au sein du consulat. Elle offre une interface claire, fluide et adaptée à nos besoins. Un gain de temps considérable pour notre équipe. Je recommande à 100 % !',",
      rating: 5
    },
    {
      name: "Stephen",
      company: "DG Ivindo Capitals",
      image: <MessageCircle  className="w-8 h-8" />,
      text: "Grâce à Tech4All, nous avons pu digitaliser tous nos processus. Une équipe professionnelle et réactive, un vrai gain de temps pour tous !.",
      rating: 5
    },
    {
      name: "Jacques Sébastien ALBERTINI",
      company: "DG AGPS Gabon",
      image: <MessageCircle  className="w-8 h-8" />,
      text: "Le support technique de Tech4All est exceptionnel. Ils sont toujours disponibles et trouvent des solutions rapidement. vons bénéficié d’un accompagnement technique de qualité. Les incidents informatiques sont désormais traités avec réactivité et efficacité, ce qui améliore considérablement la productivité de nos équipes.",
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
    <section className="py-10 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Témoignages <span className="text-blue-600">Clients</span>
          </h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Ce que nos clients disent de nos services
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto animate-on-scroll">
          {/* Main Testimonial */}
          <div className="bg-white animate-slide-in-left rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-4xl">
                {testimonials[currentTestimonial].image}
              </div>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
            </div>

            <blockquote className="text-md md:text-md text-gray-700 mb-8 italic leading-relaxed">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            <div>
              <div className="font-semibold text-gray-900 text-md">
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

      </div>
    </section>
  );
};

export default TestimonialsSection;
