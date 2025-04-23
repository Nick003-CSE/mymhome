import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { ScrollReveal } from '../utils/animations';
import Poster from '../components/poster.jpg';
import Logo from '../components/logo.jpg';

const HomePage: React.FC = () => {
  const companyName = "मारवाड़ी युवा मंच, सरायकेला";
  const imageUrl = Poster;
  const imageAlt = "Beautiful workspace with modern technology";
  const logoUrl = Logo; // Replace this with your actual logo URL

  return (
    <main className="container mx-auto px-4 py-24 max-w-6xl">
      <ScrollReveal>
        <Header companyName={companyName} logoUrl={logoUrl} />
      </ScrollReveal>
      
      <ScrollReveal className="mt-12">
        <Hero imageUrl={imageUrl} imageAlt={imageAlt} />
      </ScrollReveal>
    </main>
  );
};

export default HomePage;