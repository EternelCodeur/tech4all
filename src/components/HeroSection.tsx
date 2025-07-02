
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply animate-pulse neon-glow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply animate-pulse delay-500 neon-glow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply animate-pulse neon-glow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Animated Logo/Brand */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">
            Tech<span className="text-blue-600 animate-glow">4</span><span className="text-orange-500 animate-glow">All</span>
          </h1>
        </div>

        {/* Animated Slogan */}
        <div className="mb-8 animate-slide-in-right light-effect" style={{ animationDelay: '0.5s' }}>
          <p className="text-2xl md:text-3xl text-gray-700 font-light">
            L'informatique pour tous, <span className="font-semibold text-gradient">simplement</span>.
          </p>
        </div>

        {/* Scrolling Keywords with enhanced effects */}
        <div className="mb-12 overflow-hidden glass-effect rounded-20 py-4">
          <div className="flex animate-scroll-right whitespace-nowrap">
            <span className="text-lg text-gray-600 mx-8 font-medium">✨ Réactivité</span>
            <span className="text-lg text-gray-600 mx-8 font-medium">🌟 Accessibilité</span>
            <span className="text-lg text-gray-600 mx-8 font-medium">💎 Simplicité</span>
            <span className="text-lg text-gray-600 mx-8 font-medium">🔒 Sécurité</span>
            <span className="text-lg text-gray-600 mx-8 font-medium">🎯 Sur-mesure</span>
            <span className="text-lg text-gray-600 mx-8 font-medium">✨ Réactivité</span>
            <span className="text-lg text-gray-600 mx-8 font-medium">🌟 Accessibilité</span>
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
          <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-20 text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-neon hover:shadow-glow btn-rounded neon-glow">
            Découvrir nos services
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </button>
        </div>

        {/* Company Description with glass effect */}
        <div className="mt-16 animate-fade-in glass-effect rounded-20 p-6" style={{ animationDelay: '1.5s' }}>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            <span className="font-semibold text-blue-600">Tech4All</span> est votre partenaire technologique au Gabon. 
            Nous rendons l'informatique accessible à tous avec nos solutions sur-mesure et notre accompagnement personnalisé.
          </p>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-20 flex justify-center glass-effect">
            <div className="w-1 h-3 bg-blue-600 rounded-full mt-2 animate-pulse neon-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
