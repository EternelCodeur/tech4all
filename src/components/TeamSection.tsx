
import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import ProfilImg from '../assets/img_profil.jpg';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Ronn Joxy GNOSSIGUI-NGUA",
      role: "Developpeur Full Stack & Support",
      image: ProfilImg,
      bio: "Expert en transformation digitale avec plus de 4 ans d'expérience",
      linkedin: "https://www.linkedin.com/public-profile/settings",
      github: "https://github.com/EternelCodeur",
      email: "eternelcodeur@gmail.com"
    },
    {
      id: 2,
      name: "Barros Wency OKANA OBOUOYI",
      role: "Admintrateur Réseau",
      image: ProfilImg,
      bio: "Expert en admin reau",
      linkedin: "#",
      github: "#",
      email: "marie@tech4all.ga"
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
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Notre <span className="text-gradient">Équipe</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une équipe passionnée et experte, dédiée à votre réussite digitale
          </p>
        </div>

        {/* Team Grid */}
        <div className="animate-on-scroll grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                    href={member.github} 
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-800 rounded-20 flex items-center justify-center transition-all duration-300 group/social"
                  >
                    <Github size={18} className="text-gray-600 group-hover/social:text-white" />
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
      </div>
    </section>
  );
};

export default TeamSection;
