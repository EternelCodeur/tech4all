
import React from 'react';

const PortfolioSection = () => {
  const projects = [
    {
      title: "E-commerce Solutions",
      description: "Plateforme de vente en ligne moderne et sécurisée",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "💻",
      category: "web"
    },
    {
      title: "Application Mobile Banking",
      description: "App mobile pour services bancaires au Gabon",
      technologies: ["React Native", "Firebase", "API REST"],
      image: "📱",
      category: "mobile"
    },
    {
      title: "Système de Gestion RH",
      description: "Solution complète de gestion des ressources humaines",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      image: "👥",
      category: "web"
    },
    {
      title: "Infrastructure Cloud",
      description: "Migration et optimisation cloud pour PME",
      technologies: ["AWS", "Docker", "Kubernetes"],
      image: "☁️",
      category: "infrastructure"
    },
    {
      title: "App de Formation",
      description: "Plateforme d'apprentissage numérique interactive",
      technologies: ["React", "Django", "PostgreSQL"],
      image: "🎓",
      category: "education"
    },
    {
      title: "Système de Sécurité",
      description: "Solution de cybersécurité pour entreprises",
      technologies: ["Python", "Linux", "Monitoring"],
      image: "🔒",
      category: "security"
    }
  ];

  const [filter, setFilter] = React.useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="text-blue-600">Réalisations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos projets réalisés avec succès pour nos clients
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
          {['all', 'web', 'mobile', 'infrastructure', 'education', 'security'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'Tous' : 
               category === 'web' ? 'Web' :
               category === 'mobile' ? 'Mobile' :
               category === 'infrastructure' ? 'Infrastructure' :
               category === 'education' ? 'Formation' : 'Sécurité'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll border border-gray-100 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center">
                  <span className="text-6xl">{project.image}</span>
                </div>
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                  <button className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                    Voir le projet
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
