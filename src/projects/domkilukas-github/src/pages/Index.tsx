
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import Technology from '../components/Technology';
import Projects from '../components/Projects';
import Gallery from '../components/Gallery';
import Address from '../components/Address';
import Configurator from '../components/Configurator';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import FloatingCTA from '../components/FloatingCTA';

const Index = () => {
  const [contactFormOpen, setContactFormOpen] = useState(false);
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Technology />
      <Projects />
      <Gallery />
      <Address />
      <Footer />
      
      {/* Floating CTA */}
      <FloatingCTA onClick={() => setContactFormOpen(true)} />
      
      {/* Contact Form Dialog */}
      <ContactForm open={contactFormOpen} onOpenChange={setContactFormOpen} />
    </div>
  );
};

export default Index;
