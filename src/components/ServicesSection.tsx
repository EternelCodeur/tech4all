
import React, { useState } from 'react';
import ContactModal from './ContactModal';

const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      title: "Développement Web & Mobile",
      description: "Sites web, applications mobiles et e-commerce sur-mesure",
      color: "bg-blue-600",
      icon: "💻"
    },
    {
      title: "Support IT & Assistance",
      description: "Maintenance, dépannage et support technique 24/7",
      color: "bg-orange-500",
      icon: "🛠️"
    },
    {
      title: "Réseaux & Sécurité",
      description: "Infrastructure réseau, cybersécurité et protection des données",
      color: "bg-green-600",
      icon: "🔒"
    },
    {
      title: "Formations Numériques",
      description: "Formation aux outils digitaux pour vos équipes",
      color: "bg-purple-600",
      icon: "🎓"
    },
    {
      title: "Audit & Conseil",
      description: "Audit technologique et conseil en transformation digitale",
      color: "bg-red-600",
      icon: "📊"
    },
    {
      title: "Solutions Cloud",
      description: "Migration cloud, hébergement et sauvegarde sécurisée",
      color: "bg-indigo-600",
      icon: "☁️"
    }
  ];

  return (
    <>
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour accompagner votre transformation digitale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6">
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300 group-hover:underline">
                    En savoir plus →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-on-scroll">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-pulse"
            >
              Demander un devis gratuit
            </button>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ServicesSection;
