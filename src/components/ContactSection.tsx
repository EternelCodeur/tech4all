
import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Début handleSubmit');

    try {
      const response = await fetch('http://127.0.0.1:8000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      console.log('Requête fetch envoyée, statut :', response.status);
      console.log('Réponse backend :', response.text()); // ajout de cette ligne

      const data = await response.json();
      console.log('Réponse backend JSON :', data);

      if (response.ok && data.success) {
        alert('Message envoyé !');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Erreur dans la réponse');
      }
    } catch (error) {
      console.error('Erreur fetch :', error);
      alert('Erreur réseau ou serveur');
    }
  };


  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'eternelcodeur@gmail.com',
      action: 'mailto:eternelcodeur@gmail.com',
      actionText: 'Envoyer un email'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'WhatsApp',
      value: '+241 74 63 95 07',
      action: 'https://wa.me/24174639507',
      actionText: 'Contacter sur WhatsApp'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="animate-on-scroll text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-dark mb-4">
            Contactez-<span className="text-blue-600">moi</span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Un projet en tête ? Besoin d'assistance technique ? N'hésitez pas à me contacter pour discuter de vos besoins.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Formulaire de contact */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-portfolio-dark">
                Envoyez-moi un message
              </CardTitle>
            </CardHeader>
            <CardContent>
            <div className="bg-white rounded-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-6">Demande de contact</h3>
              
              {submitMessage && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-fade-in">
                  {submitMessage}
                </div>
              )}
                <form onSubmit={handleSubmit} className="space-y-2 animate-on-scroll">
                  <div className="grid md:grid-cols-2 gap-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Objet de votre message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full"
                      placeholder="Message *"
                    />
                  </div>

                  <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl'
                  }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                        Envoi en cours...
                      </div>
                    ) : (
                      'Envoyer le message'
                    )}
                  </button>
                </form>
              </div>
            </CardContent>
          </Card>

          {/* Informations de contact */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="mt-1">
              <h4 className="text-xl font-semibold mb-4"> <span className="text-gradient">Horaires</span> d'ouverture</h4>
              <div className="space-y-2 text-gray-500">
                <p>Lundi - Vendredi : 8h00 - 18h00</p>
                <p>Samedi : 9h00 - 15h00</p>
                <p>Dimanche : Fermé</p>
                <p className="text-blue-600 font-semibold">Support technique 24/7</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h4 className="font-semibold text-portfolio-dark mb-3">
                Temps de réponse
              </h4>
              <p className="text-gray-600 text-sm">
                Je m'engage à répondre à tous les messages dans un délai de 24 heures maximum. 
                Pour les urgences techniques, n'hésitez pas à me contacter directement par téléphone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
