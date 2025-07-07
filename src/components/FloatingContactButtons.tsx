
import React, { useState } from 'react';
import { MessageCircle, Mail, Phone } from 'lucide-react';

const FloatingContactButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      label: 'WhatsApp',
      href: 'https://wa.me/24174639507',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      label: 'Email',
      href: 'mailto:eternelcodeur@tech4all.ga',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      label: 'Appel',
      href: 'tel:+24165178757',
      color: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      label: 'SMS',
      href: 'sms:+24165178757',
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Buttons */}
      <div className={`flex flex-col space-y-3 mb-4 transition-all duration-300 ${isExpanded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 pointer-events-none'}`}>
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.href}
            className={`group flex items-center ${method.color} text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110`}
            title={method.label}
          >
            <span className="text-xl">{method.icon}</span>
            <span className="ml-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {method.label}
            </span>
          </a>
        ))}
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 ${isExpanded ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center animate-pulse`}
        title={isExpanded ? 'Fermer' : 'Nous contacter'}
      >
        <span className="text-2xl">
          {isExpanded ? '✕' : '💬'}
        </span>
      </button>
    </div>
  );
};

export default FloatingContactButtons;
