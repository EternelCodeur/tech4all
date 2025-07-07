
import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Tech<span className="text-blue-400">4</span><span className="text-orange-400">All</span>
            </h3>
            <p className="text-gray-300 text-md leading-relaxed">
              L'informatique pour tous, simplement. Votre partenaire technologique 
              de confiance au Gabon pour tous vos projets numériques.
            </p>
          </div>
          {/* Réseaux sociaux */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-15">
              {<a 
                href="https://github.com/EternelCodeur" 
                className="text-gray-300 hover:text-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>}
              <a 
                href="https://www.linkedin.com/public-profile/settings" 
                className="text-gray-300 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-000 text-sm mb-4 md:mb-0">
            © {currentYear} Tech4All. Tous droits réservés.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-000 hover:text-white transition-colors duration-300">
            Développé <span className="text-gray-000 hover:text-blue-400 transition-colors duration-300">ETERNEL CODEUR</span>
            </a>
            <a href="#" className="text-gray-000 hover:text-white transition-colors duration-300">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
