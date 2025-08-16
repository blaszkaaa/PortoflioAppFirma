import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Code, FolderOpen, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Lista projektów
  const projects = [
    {
      id: 1,
      title: 'DomkiLukas.pl - Domy modułowe',
      category: 'construction',
      description: 'Nowoczesna platforma prezentująca ekologiczne domy modułowe z innowacyjną technologią budowy o 60% szybszą od tradycyjnej.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      link: 'https://domkilukas.pl/',
      period: '09.2024 - obecnie (10 mies.)',
      projectId: 'domkilukas-github'
    },
    {
      id: 2,
      title: 'Expensify Smart - Aplikacja finansowa',
      category: 'webapp',
      description: 'Inteligentna aplikacja do zarządzania wydatkami z zaawansowanymi funkcjami analizy i raportowania.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      link: 'https://expensify-smart-main.vercel.app/',
      period: '03.2024 - 03.2024 (1 mies.)',
      projectId: 'expensify-app'
    },
    {
      id: 3,
      title: 'E-commerce Dashboard - Panel administracyjny',
      category: 'ecommerce',
      description: 'Zaawansowany panel administracyjny dla sklepów internetowych z analityką i zarządzaniem produktami.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Material-UI'],
      link: 'https://ecommerce-dashboard-blaszkaaa.vercel.app/',
      period: '03.2024 - 03.2024 (1 mies.)',
      projectId: 'ecommerce-dashboard'
    },
    {
      id: 4,
      title: 'Binance Spot Bot - Bot tradingowy',
      category: 'python',
      description: 'Automatyczny bot tradingowy dla giełdy Binance z zaawansowanymi strategiami inwestycyjnymi.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Binance API', 'Pandas', 'NumPy'],
      link: '#',
      period: '10.2024 - 10.2024 (1 mies.)',
      projectId: 'binance-bot'
    },
    {
      id: 5,
      title: 'Strona firmowa',
      category: 'website',
      description: 'Reprezentacyjna strona internetowa dla firmy logistycznej',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Tailwind', 'Contentful'],
      link: '#'
    },
    {
      id: 6,
      title: 'Platforma edukacyjna',
      category: 'webapp',
      description: 'Platforma do nauki online z systemem testów i certyfikatów',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Firebase', 'Stripe'],
      link: '#'
    },
    {
      id: 7,
      title: 'Restauracja - menu online',
      category: 'website',
      description: 'Elegancka strona restauracji z systemem rezerwacji stolików',
      image: '/api/placeholder/600/400',
      technologies: ['WordPress', 'Custom Theme', 'WooCommerce'],
      link: '#'
    },
    {
      id: 8,
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
    { key: 'webapp', label: 'Aplikacje webowe' },
    { key: 'construction', label: 'Branża budowlana' },
    { key: 'python', label: 'Python' }
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
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                          {project.link && project.link !== '#' ? (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-background/90 border border-background text-foreground hover:bg-background rounded-md transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Wyświetl projekt
                        </a>
                    ) : (
                      <Link 
                        to={`/projekty/${project.projectId || project.id}`}
                        className="inline-flex items-center px-4 py-2 bg-background/90 border border-background text-foreground hover:bg-background rounded-md transition-colors"
                      >
                        <FolderOpen className="w-4 h-4 mr-2" />
                        Zobacz kod
                      </Link>
                    )}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  {project.period && (
                    <p className="text-sm text-primary mb-2 font-medium">
                      {project.period}
                    </p>
                  )}
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                                          {project.link && project.link !== '#' ? (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:text-primary-hover transition-colors text-sm font-medium"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Wyświetl projekt
                        </a>
                    ) : (
                      <Link 
                        to={`/projekty/${project.projectId || project.id}`}
                        className="inline-flex items-center text-primary hover:text-primary-hover transition-colors text-sm font-medium"
                      >
                        <FolderOpen className="w-4 h-4 mr-2" />
                        Zobacz kod
                      </Link>
                    )}
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