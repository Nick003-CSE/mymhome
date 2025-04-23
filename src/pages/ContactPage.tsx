import React from 'react';
// import Logo from '../components/Logo';
import { ScrollReveal } from '../utils/animations';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Shubham Agrawal",
      role: "कार्यक्रम संयोजक(पंजीकरण)",
      phone: "7717732554"
    },
    {
      name: "Keshav Choudhary",
      role: "कार्यक्रम संयोजक",
      phone: "9155560603",
    },
    {
      name: "Anand Agrawal",
      role: "अध्यक्ष",
      phone: "9113363778",
    },
    {
      name: "Ashutosh Choudhary",
      role: "सचिव",
      phone: "7091743999",
    },
    {
      name: "Akash Agrawal",
      role: "प्रांतीय संयोजक, कृत्रिम अंग",
      phone: "7873195506",
    }
  ];

  return (
    <main className="container mx-auto px-4 py-24 max-w-4xl">
      <ScrollReveal>
        <div className="flex items-center justify-center mb-8">
          {/* <Logo size={48} className="mr-4" /> */}
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600">
            Contact Us
          </h1>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-white">About The Event</h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
The Marwari Yuva Manch, Seraikela Branch, in collaboration with Shree Bhagwan Mahaveer Viklang Sahayata Samiti, is organizing a Free Artificial Limb and Assistive Device Distribution Camp. This noble initiative aims to empower differently-abled individuals by providing them with artificial limbs and assistive devices such as prosthetic hands and legs, calipers, crutches, and hearing aids—completely free of cost.

The camp will take place on 23rd, 24th, and 25th May 2025 at the Marwari Dharamshala. The goal is to enhance mobility and independence among individuals with physical disabilities, enabling them to walk unaided, ride bicycles, climb mountains, dance, and work in fields.
          </p>
          
          <div className="flex flex-col gap-4 text-neutral-600 dark:text-neutral-300">
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-primary-600" />
              <span>9155560603</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-primary-600" />
              <span>aimymskla@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-primary-600" />
              <span>Sereikella, Jharkhand</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">{member.name}</h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">{member.role}</p>
              <div className="space-y-2 text-neutral-600 dark:text-neutral-300">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-primary-600" />
                  <span>{member.phone}</span>
                </div>
                {/* <div className="flex items-center gap-2">
                  <Mail size={16} className="text-primary-600" />
                  <span>{member.email}</span>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </main>
  );
};

export default ContactPage;