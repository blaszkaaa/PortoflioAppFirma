// Komponenty strony głównej
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Hooki
import { useScrollReveal } from '@/hooks/useScrollReveal';

function Index() {
  // Inicjalizacja animacji scroll reveal
  useScrollReveal();

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

export default Index;
