
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            À propos de <span className="text-blue-600">Tech4All</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre partenaire technologique de confiance au Gabon
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Notre Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Tech4All a pour mission de démocratiser l'accès aux technologies numériques au Gabon et en Afrique. 
              Nous croyons que chaque entreprise, quelle que soit sa taille, mérite d'avoir accès aux meilleures 
              solutions technologiques pour prospérer dans l'économie numérique.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8">Notre Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Devenir le leader des services numériques en Afrique centrale en proposant des solutions 
              innovantes, accessibles et adaptées aux besoins locaux. Nous accompagnons la transformation 
              digitale avec humanité et expertise.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-700">Années d'expérience</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-orange-500 mb-2">100+</div>
              <div className="text-gray-700">Clients satisfaits</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-700">Support technique</div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded"></div>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h4>
            <p className="text-gray-600">Solutions technologiques de pointe adaptées à vos besoins</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Accessibilité</h4>
            <p className="text-gray-600">Technologies simples et accessibles pour tous</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full"></div>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h4>
            <p className="text-gray-600">Qualité et professionnalisme dans chaque projet</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
