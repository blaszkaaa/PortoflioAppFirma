import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Code } from 'lucide-react';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Lista projektów
  const projects = [
    {
      id: 1,
      title: 'Sklep z modą',
      category: 'ecommerce',
      description: 'Nowoczesny sklep internetowy z modą damską i męską',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'System CRM',
      category: 'webapp',
      description: 'System zarządzania relacjami z klientami dla firmy consultingowej',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      link: '#'
    },
    {
      id: 3,
      title: 'Strona firmowa',
      category: 'website',
      description: 'Reprezentacyjna strona internetowa dla firmy logistycznej',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Tailwind', 'Contentful'],
      link: '#'
    },
    {
      id: 4,
      title: 'Platforma edukacyjna',
      category: 'webapp',
      description: 'Platforma do nauki online z systemem testów i certyfikatów',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Firebase', 'Stripe'],
      link: '#'
    },
    {
      id: 5,
      title: 'Restauracja - menu online',
      category: 'website',
      description: 'Elegancka strona restauracji z systemem rezerwacji stolików',
      image: '/api/placeholder/600/400',
      technologies: ['WordPress', 'Custom Theme', 'WooCommerce'],
      link: '#'
    },
    {
      id: 6,
      title: 'Portal B2B',
      category: 'ecommerce',
      description: 'Portal łączący dostawców z odbiorcami w branży przemysłowej',
      image: '/api/placeholder/600/400',
      technologies: ['Django', 'React', 'PostgreSQL'],
      link: '#'
    }
  ];

  // Filtry kategorii
  const filters = [
    { key: 'all', label: 'Wszystkie' },
    { key: 'website', label: 'Strony internetowe' },
    { key: 'ecommerce', label: 'E-commerce' },
    { key: 'webapp', label: 'Aplikacje webowe' }
  ];

  // Filtrowanie projektów
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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

  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Nagłówek sekcji */}
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nasze realizacje
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Zobacz przykłady projektów, które zrealizowaliśmy dla naszych klientów. 
              Każdy z nich był dopasowany do specyficznych potrzeb branży.
            </p>
          </div>

          {/* Przyciski filtrów */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 reveal">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                variant={activeFilter === filter.key ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.key)}
                className={activeFilter === filter.key 
                  ? "bg-primary hover:bg-primary-hover" 
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Siatka projektów */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className="reveal shadow-lg hover:shadow-xl transition-all duration-300 border-border/50 group overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Code className="w-16 h-16 text-primary/40" />
                  </div>
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button 
                      variant="outline"
                      className="bg-background/90 border-background text-foreground hover:bg-background"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Zobacz projekt
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sekcja CTA */}
          <div className="text-center reveal">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Masz pomysł na projekt?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Niezależnie od tego, czy potrzebujesz prostej strony wizytówkowej, 
              czy zaawansowanej aplikacji webowej - pomożemy Ci zrealizować Twoje cele.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-hover shadow-hero text-lg px-8 py-4"
              onClick={scrollToContact}
            >
              Porozmawiajmy o Twoim projekcie
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;