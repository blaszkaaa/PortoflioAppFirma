import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  // Funkcja do przewijania do sekcji
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Linki nawigacyjne
  const navLinks = [
    { id: 'hero', label: 'Strona główna' },
    { id: 'about', label: 'O nas' },
    { id: 'services', label: 'Usługi' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Kontakt' }
  ];

  // Lista usług
  const services = [
    'Strony internetowe',
    'Sklepy internetowe', 
    'Aplikacje webowe',
    'Wsparcie techniczne'
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Informacje o firmie */}
            <div className="md:col-span-2">
              <h3 className="font-bold text-2xl mb-4 text-background">
                TechFlow Solutions
              </h3>
              <p className="text-background/80 mb-6 max-w-md">
                Tworzymy nowoczesne strony internetowe i aplikacje webowe, 
                które pomagają firmom rozwijać się w cyfrowym świecie.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-primary" />
                  <span className="text-background/80">kontakt@techflowsolutions.pl</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-primary" />
                  <span className="text-background/80">+48 123 456 789</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-primary" />
                  <span className="text-background/80">ul. Przykładowa 123, 00-000 Warszawa</span>
                </div>
              </div>
            </div>

            {/* Szybkie linki */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-background">
                Nawigacja
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button 
                      onClick={() => scrollToSection(link.id)}
                      className="text-background/80 hover:text-background transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Usługi */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-background">
                Usługi
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-background/80">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Dolna sekcja */}
          <div className="mt-12 pt-8 border-t border-background/20">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-background/60 text-sm">
                © {currentYear} TechFlow Solutions. Wszystkie prawa zastrzeżone.
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link 
                  to="/polityka-prywatnosci" 
                  className="text-background/60 hover:text-background text-sm transition-colors"
                >
                  Polityka prywatności
                </Link>
                <Link 
                  to="/regulamin" 
                  className="text-background/60 hover:text-background text-sm transition-colors"
                >
                  Regulamin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;