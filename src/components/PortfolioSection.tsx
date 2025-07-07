
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import ConsulImg from '../assets/img_consul.png';
import IcaImg from '../assets/img_ica.png';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'Gestion des Usagers',
      description: 'Application web complète avec système d\'impression des documents.',
      image: ConsulImg,
      technologies: ['React', 'Codeigniter', 'MySQL'],
      github: '#',
      demo: '#'
    },
   /* {
      title: 'Système de Gestion des Documents Saas',
      description: 'Application sur mesure pour les entreprises et administrations pour permettre le transfert des documente t l\'archivage des document en toutes sécurité. Interface web responsive.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop',
      technologies: ['Reactjs','Laravel', 'PostgreSQL'],
      github: '#',
      demo: '#'
    },*/
    {
      title: 'Site Web Corporate',
      description: 'Site vitrine moderne avec CMS personnalisé, SEO optimisé et interface d\'administration intuitive.',
      image: IcaImg,
      technologies: ['Bootstrap', 'Codeigniter', 'MySQL'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Support & Maintenance',
      description: 'Service de maintenance préventive et curative pour parc informatique de 100+ postes. Taux de disponibilité 99.5%.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop',
      technologies: ['GLPI', 'PowerShell', 'WSUS', 'Monitoring'],
      github: null,
      demo: null
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="text-blue-600">Réalisations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez nos projets réalisés avec succès pour nos clients
          </p>
        </div>

        <div className="animate-on-scroll grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-portfolio-primary/0 group-hover:bg-portfolio-primary/10 transition-all duration-300"></div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-portfolio-dark mb-3">
                  {project.title}
                </CardTitle>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              {/*<CardFooter className="p-6 pt-0 flex gap-3">
                {project.github && (
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                )}
                {project.demo && (
                  <Button size="sm" className="flex-1 bg-portfolio-primary hover:bg-blue-600">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Démo
                  </Button>
                )}
                {!project.github && !project.demo && (
                  <Button variant="outline" size="sm" className="flex-1" disabled>
                    Projet Client
                  </Button>
                )}
              </CardFooter>*/}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
