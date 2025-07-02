
import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Jean-Baptiste Mbeng",
      role: "CEO & Fondateur",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Expert en transformation digitale avec plus de 10 ans d'expérience",
      linkedin: "#",
      twitter: "#",
      email: "jean@tech4all.ga"
    },
    {
      id: 2,
      name: "Marie Ondo",
      role: "Directrice Technique",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Développeuse fullstack passionnée par l'innovation technologique",
      linkedin: "#",
      twitter: "#",
      email: "marie@tech4all.ga"
    },
    {
      id: 3,
      name: "Paul Nguema",
      role: "Chef de Projet",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Spécialiste en gestion de projets digitaux et accompagnement client",
      linkedin: "#",
      twitter: "#",
      email: "paul@tech4all.ga"
    },
    {
      id: 4,
      name: "Sophie Mba",
      role: "Designeuse UX/UI",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Créatrice d'expériences utilisateur exceptionnelles et interfaces modernes",
      linkedin: "#",
      twitter: "#",
      email: "sophie@tech4all.ga"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-white via-blue-50 to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full animate-pulse neon-glow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Notre <span className="text-gradient">Équipe</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une équipe passionnée et experte, dédiée à votre réussite digitale
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className="group animate-on-scroll light-effect"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="glass-effect p-6 rounded-3xl hover:shadow-neon transition-all duration-500 transform hover:-translate-y-2">
                {/* Member Photo */}
                <div className="relative mb-6 overflow-hidden rounded-3xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a 
                    href={member.linkedin} 
                    className="w-10 h-10 bg-blue-100 hover:bg-blue-600 rounded-20 flex items-center justify-center transition-all duration-300 group/social"
                  >
                    <Linkedin size={18} className="text-blue-600 group-hover/social:text-white" />
                  </a>
                  <a 
                    href={member.twitter} 
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-800 rounded-20 flex items-center justify-center transition-all duration-300 group/social"
                  >
                    <Twitter size={18} className="text-gray-600 group-hover/social:text-white" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`} 
                    className="w-10 h-10 bg-orange-100 hover:bg-orange-500 rounded-20 flex items-center justify-center transition-all duration-300 group/social"
                  >
                    <Mail size={18} className="text-orange-600 group-hover/social:text-white" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-on-scroll" style={{ animationDelay: '0.8s' }}>
          <div className="glass-effect p-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rejoignez notre équipe !
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nous recherchons constamment des talents passionnés pour renforcer notre équipe et relever de nouveaux défis ensemble.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-20 font-semibold transition-all duration-300 transform hover:scale-105 shadow-glow hover:shadow-neon btn-rounded neon-glow">
              Voir nos offres d'emploi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
