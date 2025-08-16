import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Smartphone, Zap } from 'lucide-react';

function Hero() {
  // Funkcja do przewijania do sekcji kontaktowej
  const handleContactScroll = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Funkcja do przewijania do portfolio
  const handlePortfolioScroll = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Tło z gradientami */}
      <div className="absolute inset-0 hero-gradient opacity-5"></div>
      <div className="absolute inset-0 subtle-gradient"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Główny nagłówek */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 fade-in">
            Profesjonalne strony internetowe{' '}
            <span className="text-primary">dla Twojego biznesu</span>
          </h1>

          {/* Podtytuł */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 fade-in" style={{animationDelay: '0.2s'}}>
            Tworzymy nowoczesne rozwiązania webowe, które przyciągają klientów 
            i pomagają rozwijać Twoją firmę. Od prostych stron po zaawansowane aplikacje.
          </p>

          {/* Przyciski CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 fade-in" style={{animationDelay: '0.4s'}}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover shadow-hero text-lg px-8 py-4"
              onClick={handleContactScroll}
            >
              Darmowa konsultacja
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={handlePortfolioScroll}
            >
              Nasze realizacje
            </Button>
          </div>

          {/* Główne zalety */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 fade-in" style={{animationDelay: '0.6s'}}>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Nowoczesne technologie</h3>
              <p className="text-muted-foreground">React, TypeScript, Next.js - używamy najlepszych narzędzi</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Responsywny design</h3>
              <p className="text-muted-foreground">Strony działają perfekcyjnie na wszystkich urządzeniach</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Szybka realizacja</h3>
              <p className="text-muted-foreground">Twój projekt gotowy w terminie, który Ci odpowiada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;