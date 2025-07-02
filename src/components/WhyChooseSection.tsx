
import React from 'react';

const WhyChooseSection = () => {
  const advantages = [
    {
      title: "Accompagnement Humain",
      description: "Une équipe dédiée qui vous accompagne à chaque étape de votre projet",
      icon: "👥",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Réactivité",
      description: "Intervention rapide et support technique disponible 24h/24",
      icon: "⚡",
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "Solutions Personnalisées",
      description: "Chaque solution est adaptée à vos besoins spécifiques",
      icon: "🎯",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Suivi Complet",
      description: "De la conception à la maintenance, nous assurons un suivi continu",
      icon: "📈",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pourquoi choisir <span className="text-blue-600">Tech4All</span> ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre succès est notre priorité. Découvrez ce qui nous différencie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-16 h-16 ${advantage.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl">{advantage.icon}</span>
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {advantage.title}
              </h3>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tech4All en chiffres
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                100+
              </div>
              <div className="text-gray-700 text-lg">Projets réalisés</div>
            </div>
            
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-gray-700 text-lg">Clients satisfaits</div>
            </div>
            
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-gray-700 text-lg">Support disponible</div>
            </div>
            
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                5+
              </div>
              <div className="text-gray-700 text-lg">Années d'expérience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
