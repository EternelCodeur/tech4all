

import React, { useState } from 'react';
import ContactModal from './ContactModal';
import { Code, Smartphone, Monitor, Brush, Palette, Server, Wrench, HeadphonesIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: <Code className="w-12 h-10" />,
      title: 'Développement Web',
      description: 'Sites web modernes et applications web sur mesure',
      color: "bg-orange-500",
      features: [
        'Sites vitrines & e-commerce',
        'Applications web complexes',
        'CMS personnalisés',
        'APIs & intégrations',
        'Responsive design',
        'SEO & performances'
      ],
    },
    {
      icon: <Brush className="w-12 h-10" />,
      title: 'UI/UX Design',
      description: 'Conception du design graphique des interfaces utilisateurs',
      color: "bg-blue-500",
      features: [
        'Création de maquettes UI/UX',
        'Conception de parcours utilisateur (UX flows)',
        'Design de composants réutilisables',
        'Utilisation de design systems (Material, Tailwind, etc.)',
        'Prototypage interactif (Figma, Adobe XD)',
        'Tests utilisateurs & itérations graphiques'
      ],
    },
    {
      icon: <Palette className="w-12 h-10" />,
      title: 'Design Graphique',
      description: 'Conception de logos etc...',
      color: "bg-green-500",
      features: [
        'Création de logos professionnels',
        'Conception de chartes graphiques complètes',
        'Supports de communication (affiches, flyers, cartes)',
        'Visuels pour réseaux sociaux & publicités',
        'Déclinaisons print et web',
        'Maîtrise de la suite Adobe (Photoshop, Illustrator, InDesign)'
      ],
    },
    {
      icon: <Smartphone className="w-12 text-white h-10" />,
      title: 'Développement Mobile',
      description: 'Applications mobiles iOS et Android performantes',
      color: "bg-purple-900",
      features: [
        'Apps natives & cross-platform',
        'Interface utilisateur intuitive',
        'Intégration API',
        'Notifications push',
        'Publication stores',
        'Maintenance & support'
      ],
    },
    {
      icon: <Server className="w-12 h-10" />,
      title: 'Backend & Infrastructure',
      description: 'Architectures robustes et sécurisées',
      color: "bg-red-500",
      features: [
        'APIs RESTful',
        'Bases de données',
        'Hébergement & déploiement',
        'Sécurité & sauvegarde',
        'Monitoring',
        'Optimisation performances'
      ],
    },
    {
      icon: <Monitor className="w-12 text-white h-10" />,
      title: 'Support Informatique',
      description: 'Assistance technique complète pour entreprises',
      color: "bg-orange-900",
      features: [
        'Dépannage matériel/logiciel',
        'Installation & configuration',
        'Formation utilisateurs',
        'Maintenance préventive',
        'Gestion parc informatique',
        'Support à distance'
      ],
    },
    {
      icon: <Wrench className="w-12 text-white h-10" />,
      title: 'Maintenance & Réparation',
      description: 'Réparation et maintenance de matériel informatique',
      color: "bg-blue-900",
      features: [
        'Diagnostic & réparation PC',
        'Récupération de données',
        'Upgrade matériel',
        'Nettoyage & optimisation',
        'Installation périphériques',
        'Conseil achat matériel'
      ],
    },
    {
      icon: <HeadphonesIcon className="w-12 text-white h-10" />,
      title: 'Consulting IT',
      description: 'Conseil et stratégie informatique sur mesure',
      color: "bg-green-800",
      features: [
        'Audit infrastructure',
        'Plan de modernisation',
        'Choix technologies',
        'Gestion de projet',
        'Formation équipes',
        'Accompagnement digital'
      ],
    },
    {
      icon: "☁️",
      title: 'Solutions Cloud',
      description: 'Migration cloud, hébergement et sauvegarde sécurisée',
      color: "bg-indigo-900",
      features: [
        'Audit infrastructure',
        'Plan de modernisation',
        'Choix technologies',
        'Gestion de projet',
        'Formation équipes',
        'Accompagnement digital'
      ],
    }
  ];

  return (
    <>
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour accompagner votre transformation digitale
            </p>
          </div>

          <div className="animate-on-scroll grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in border-0 shadow-md"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={` w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-portfolio-dark mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-portfolio-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mt-1">
                      Devis personnalisé gratuit
                    </div>
                  </div>
                </CardContent>
              </Card>
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
