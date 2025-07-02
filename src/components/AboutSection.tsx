
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            À propos de <span className="text-gradient">Tech4All</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre partenaire technologique de confiance au Gabon
          </p>
        </div>

        {/* Mission & Vision - Clean Modern Design */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission Card */}
            <div className="group animate-on-scroll delay-200">
              <div className="glass-effect p-8 rounded-3xl hover:shadow-neon transition-all duration-500 light-effect">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-20 flex items-center justify-center mr-4 neon-glow">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Notre Mission</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Tech4All a pour mission de <span className="font-semibold text-blue-600">démocratiser l'accès aux technologies numériques</span> au Gabon et en Afrique.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Nous croyons que chaque entreprise, quelle que soit sa taille, mérite d'avoir accès aux meilleures solutions technologiques pour prospérer dans l'économie numérique.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group animate-on-scroll delay-400">
              <div className="glass-effect p-8 rounded-3xl hover:shadow-neon transition-all duration-500 light-effect">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-20 flex items-center justify-center mr-4 neon-glow">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Notre Vision</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Devenir le <span className="font-semibold text-orange-600">leader des services numériques</span> en Afrique centrale en proposant des solutions innovantes, accessibles et adaptées aux besoins locaux.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Nous accompagnons la transformation digitale avec humanité et expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-3xl shadow-lg hover:shadow-neon transition-all duration-300 animate-on-scroll delay-300 light-effect">
            <div className="text-4xl font-bold text-blue-600 mb-2 animate-glow">5+</div>
            <div className="text-gray-700 font-medium">Années d'expérience</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-3xl shadow-lg hover:shadow-neon transition-all duration-300 animate-on-scroll delay-400 light-effect">
            <div className="text-4xl font-bold text-orange-500 mb-2 animate-glow">100+</div>
            <div className="text-gray-700 font-medium">Clients satisfaits</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-3xl shadow-lg hover:shadow-neon transition-all duration-300 animate-on-scroll delay-500 light-effect">
            <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-700 font-medium">Support technique</div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-neon transition-all duration-300 animate-on-scroll delay-200 light-effect group">
            <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <div className="w-10 h-10 bg-blue-600 rounded-20"></div>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h4>
            <p className="text-gray-600 leading-relaxed">Solutions technologiques de pointe adaptées à vos besoins</p>
          </div>

          <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-neon transition-all duration-300 animate-on-scroll delay-300 light-effect group">
            <div className="w-20 h-20 bg-orange-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <div className="w-10 h-10 bg-orange-500 rounded-3xl"></div>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Accessibilité</h4>
            <p className="text-gray-600 leading-relaxed">Technologies simples et accessibles pour tous</p>
          </div>

          <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-neon transition-all duration-300 animate-on-scroll delay-400 light-effect group">
            <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <div className="w-10 h-10 bg-green-600 rounded-3xl"></div>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h4>
            <p className="text-gray-600 leading-relaxed">Qualité et professionnalisme dans chaque projet</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
