import { Globe, ShoppingCart, Smartphone, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

function Services() {
  // Funkcja do przewijania do kontaktu
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Lista usług
  const services = [
    {
      icon: Globe,
      title: 'Strony internetowe',
      description: 'Tworzymy nowoczesne, responsywne strony internetowe, które przyciągają uwagę i konwertują odwiedzających w klientów.',
      features: ['Responsywny design', 'Optymalizacja SEO', 'Szybkie ładowanie', 'Panel CMS']
    },
    {
      icon: ShoppingCart,
      title: 'Sklepy internetowe',
      description: 'Kompleksowe rozwiązania e-commerce z integracją systemów płatności i zarządzania zamówieniami.',
      features: ['Płatności online', 'Zarządzanie produktami', 'System zamówień', 'Integracje z hurtowniami']
    },
    {
      icon: Smartphone,
      title: 'Aplikacje webowe',
      description: 'Zaawansowane aplikacje webowe dostosowane do specyficznych potrzeb Twojego biznesu.',
      features: ['Progressive Web Apps', 'Integracje API', 'Bezpieczeństwo danych', 'Skalowalne architektury']
    },
    {
      icon: Headphones,
      title: 'Wsparcie techniczne',
      description: 'Kompleksowa opieka techniczna nad Twoją stroną lub aplikacją po zakończeniu projektu.',
      features: ['Monitoring 24/7', 'Regularne aktualizacje', 'Kopie zapasowe', 'Optymalizacja wydajności']
    }
  ];

  // Etapy pracy
  const processSteps = [
    {
      step: '1',
      title: 'Konsultacja',
      description: 'Poznajemy Twoje potrzeby i cele biznesowe'
    },
    {
      step: '2', 
      title: 'Projekt',
      description: 'Tworzymy koncepcję i makiety Twojej strony'
    },
    {
      step: '3',
      title: 'Realizacja', 
      description: 'Kodujemy i testujemy Twoje rozwiązanie'
    },
    {
      step: '4',
      title: 'Wdrożenie',
      description: 'Uruchamiamy stronę i zapewniamy wsparcie'
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Nagłówek sekcji */}
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Co oferujemy?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferujemy pełen zakres usług webowych - od prostych stron wizytówkowych 
              po złożone aplikacje biznesowe.
            </p>
          </div>

          {/* Siatka usług */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className="reveal shadow-lg hover:shadow-xl transition-shadow duration-300 border-border/50"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Sekcja procesu pracy */}
          <div className="bg-secondary/30 rounded-2xl p-8 md:p-12 reveal">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Jak pracujemy?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sekcja CTA */}
          <div className="text-center mt-12 reveal">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Gotowy na rozpoczęcie współpracy?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Skontaktuj się z nami już dziś i porozmawiajmy o Twoim projekcie. 
              Oferujemy bezpłatną konsultację i wycenę.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-hover shadow-hero text-lg px-8 py-4"
              onClick={scrollToContact}
            >
              Darmowa wycena
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;