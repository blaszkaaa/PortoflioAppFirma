import { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github,
  Play,
  Code,
  Loader2,
  AlertCircle,
  RefreshCw,
  Maximize2,
  Settings
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

// Typy dla projektu
interface ProjectData {
  id: string;
  name: string;
  description: string;
  githubUrl: string;
  technologies: string[];
  period: string;
  features: string[];
  entryPoint: string;
  components: {
    [key: string]: React.ComponentType<any>;
  };
  styles: string;
}

// Komponenty dla DomkiLukas
const DomkiLukasHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { 
      id: 1, 
      title: 'Zewnątrz', 
      image: 'https://i.postimg.cc/pdLxt6pn/temp-Imaged91-Ne5.avif'
    },
    { 
      id: 2, 
      title: 'Wnętrze', 
      image: 'https://i.postimg.cc/qBjb5N4f/temp-Image0kjp5-G.avif'
    },
    { 
      id: 3, 
      title: 'Z lotu ptaka', 
      image: 'https://i.postimg.cc/8PqYzX8q/temp-Image1kjp5-G.avif'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: index === currentSlide ? 1 : 0 }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Domki Modułowe
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-delay">
            Nowoczesne, ekologiczne domy modułowe o 60% szybsze w budowie
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <button className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Zobacz realizacje
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-colors font-semibold">
              Darmowa wycena
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

const DomkiLukasNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-gray-900">
            DomkiLukas
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              Strona główna
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              Galeria
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              O nas
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              Kontakt
            </a>
          </div>

          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

// Komponenty dla Expensify
const ExpensifyDashboard = () => {
  const stats = [
    {
      label: "Całkowite wydatki",
      value: "12,450 zł",
      change: "+12.5%",
      changeType: "increase",
      icon: "💰"
    },
    {
      label: "Średnio miesięcznie",
      value: "2,075 zł",
      change: "+8.2%",
      changeType: "increase",
      icon: "📈"
    },
    {
      label: "Największa kategoria",
      value: "Jedzenie",
      change: "1,850 zł",
      changeType: "neutral",
      icon: "🛒"
    },
    {
      label: "Oszczędności",
      value: "3,200 zł",
      change: "+15.3%",
      changeType: "increase",
      icon: "💎"
    }
  ];

  const recentTransactions = [
    { id: 1, description: "Zakupy spożywcze", amount: 245.50, category: "Jedzenie", date: "2024-01-15" },
    { id: 2, description: "Paliwo", amount: 180.00, category: "Transport", date: "2024-01-14" },
    { id: 3, description: "Kino", amount: 45.00, category: "Rozrywka", date: "2024-01-13" },
    { id: 4, description: "Rachunki", amount: 320.00, category: "Mieszkanie", date: "2024-01-12" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Dashboard
            </h1>
            <p className="text-slate-600">
              Przegląd Twoich finansów
            </p>
          </div>
          <div className="flex items-center space-x-2 text-slate-600">
            <span>Styczeń 2024</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-slate-900">
                    {stat.value}
                  </p>
                  <p className={`text-sm ${
                    stat.changeType === "increase"
                      ? "text-green-600"
                      : stat.changeType === "decrease"
                      ? "text-red-600"
                      : "text-slate-600"
                  }`}>
                    {stat.change}
                  </p>
                </div>
                <div className="p-3 bg-blue-100 rounded-lg">
                  <span className="text-2xl">{stat.icon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900">
              Ostatnie transakcje
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <span className="text-blue-600">💳</span>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">
                        {transaction.description}
                      </p>
                      <p className="text-sm text-slate-600">
                        {transaction.category} • {transaction.date}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold text-slate-900">
                    -{transaction.amount} zł
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExpensifySidebar = () => {
  const menuItems = [
    { icon: "🏠", label: "Dashboard", path: "/" },
    { icon: "💳", label: "Transakcje", path: "/transactions" },
    { icon: "📊", label: "Wykresy słupkowe", path: "/bar-charts" },
    { icon: "🥧", label: "Wykresy kołowe", path: "/pie-charts" },
    { icon: "⚙️", label: "Ustawienia", path: "/settings" }
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200">
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900">
            Expensify Smart
          </h1>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  className="flex items-center px-4 py-3 rounded-lg transition-colors text-slate-700 hover:bg-slate-100"
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

// Dane projektów z komponentami
const projectsData: ProjectData[] = [
  {
    id: 'domkilukas-github',
    name: 'DomkiLukas.pl - Domy modułowe',
    description: 'Nowoczesna platforma prezentująca ekologiczne domy modułowe z innowacyjną technologią budowy o 60% szybszą od tradycyjnej.',
    githubUrl: 'https://github.com/blaszkaaa/DomekLukas',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    period: '09.2024 - obecnie (10 mies.)',
    features: [
      'Interaktywne galerie projektów',
      '3D wizualizacje domów',
      'System smart home',
      'Kalkulator kosztów',
      'Mapa realizacji w Wielkopolsce'
    ],
    entryPoint: 'src/App.tsx',
    components: {
      Hero: DomkiLukasHero,
      Navbar: DomkiLukasNavbar
    },
    styles: `
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in { animation: fade-in 0.8s ease-out; }
      .animate-fade-in-delay { animation: fade-in 0.8s ease-out 0.2s both; }
      .animate-fade-in-delay-2 { animation: fade-in 0.8s ease-out 0.4s both; }
    `
  },
  {
    id: 'expensify-app',
    name: 'Expensify Smart - Aplikacja finansowa',
    description: 'Inteligentna aplikacja do zarządzania wydatkami z zaawansowanymi funkcjami analizy i raportowania.',
    githubUrl: 'https://github.com/blaszkaaa/expensify-smart-main',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    period: '03.2024 - 03.2024 (1 mies.)',
    features: [
      'Zarządzanie wydatkami',
      'Analiza finansowa',
      'Raporty i wykresy',
      'Kategorie wydatków',
      'Eksport danych'
    ],
    entryPoint: 'src/App.tsx',
    components: {
      Dashboard: ExpensifyDashboard,
      Sidebar: ExpensifySidebar
    },
    styles: ''
  }
];

function DynamicProjectRenderer() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [selectedComponent, setSelectedComponent] = useState<string>('main');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const project = projectsData.find(p => p.id === projectId);

  useEffect(() => {
    if (project?.styles) {
      const styleElement = document.createElement('style');
      styleElement.textContent = project.styles;
      document.head.appendChild(styleElement);
      
      return () => {
        document.head.removeChild(styleElement);
      };
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Projekt nie został znaleziony</h1>
          <Button onClick={() => navigate('/')}>Powrót do strony głównej</Button>
        </div>
      </div>
    );
  }

  const componentList = Object.keys(project.components);

  const renderProject = () => {
    if (project.id === 'domkilukas-github') {
      return (
        <div className="relative">
          <DomkiLukasNavbar />
          <DomkiLukasHero />
        </div>
      );
    } else if (project.id === 'expensify-app') {
      return (
        <div className="flex">
          <ExpensifySidebar />
          <div className="flex-1 ml-64">
            <ExpensifyDashboard />
          </div>
        </div>
      );
    }
    return null;
  };

  const renderSelectedComponent = () => {
    if (selectedComponent === 'main') {
      return renderProject();
    }
    
    const Component = project.components[selectedComponent];
    if (Component) {
      return <Component />;
    }
    
    return <div>Komponent nie został znaleziony</div>;
  };

  return (
    <div className={`${isFullscreen ? 'fixed inset-0 z-50 bg-white' : 'min-h-screen bg-background'}`}>
      {/* Nagłówek */}
      <div className={`${isFullscreen ? 'absolute top-0 left-0 right-0 z-10' : ''} bg-foreground text-background py-4`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="text-background hover:bg-background/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Powrót
              </Button>
              <div>
                <h1 className="text-xl font-bold">{project.name}</h1>
                <p className="text-background/80 text-sm">{project.description}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                onClick={() => window.open(project.githubUrl, '_blank')}
                className="border-background text-background hover:bg-background/10"
                size="sm"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="border-background text-background hover:bg-background/10"
                size="sm"
              >
                <Maximize2 className="w-4 h-4 mr-2" />
                {isFullscreen ? 'Wyjdź' : 'Pełny ekran'}
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsLoading(true)}
                className="border-background text-background hover:bg-background/10"
                size="sm"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <RefreshCw className="w-4 h-4 mr-2" />
                )}
                Odśwież
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar z komponentami */}
      {!isFullscreen && (
        <div className="fixed left-4 top-20 z-40">
          <Card className="w-64">
            <CardHeader>
              <CardTitle className="flex items-center text-sm">
                <Code className="w-4 h-4 mr-2" />
                Komponenty
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedComponent('main')}
                  className={`flex items-center w-full text-left p-2 rounded hover:bg-secondary/50 transition-colors text-sm ${
                    selectedComponent === 'main' ? 'bg-primary/10 text-primary' : ''
                  }`}
                >
                  <Play className="w-4 h-4 mr-2 text-green-500" />
                  Główna aplikacja
                </button>
                {componentList.map((componentName) => (
                  <button
                    key={componentName}
                    onClick={() => setSelectedComponent(componentName)}
                    className={`flex items-center w-full text-left p-2 rounded hover:bg-secondary/50 transition-colors text-sm ${
                      selectedComponent === componentName ? 'bg-primary/10 text-primary' : ''
                    }`}
                  >
                    <Code className="w-4 h-4 mr-2 text-blue-500" />
                    {componentName}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Główna zawartość */}
      <div className={`${isFullscreen ? 'pt-16' : 'pt-20 pl-72'}`}>
        {isLoading ? (
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
              <p>Ładowanie projektu...</p>
            </div>
          </div>
        ) : (
          <div className="relative">
            {renderSelectedComponent()}
          </div>
        )}
      </div>

      {/* Informacje o projekcie */}
      {!isFullscreen && (
        <div className="fixed right-4 top-20 z-40">
          <Card className="w-80">
            <CardHeader>
              <CardTitle className="text-sm">Informacje o projekcie</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-sm">Technologie</h4>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-sm">Okres realizacji</h4>
                <p className="text-muted-foreground text-sm">{project.period}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-sm">Funkcjonalności</h4>
                <div className="space-y-1">
                  {project.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      <span className="text-xs">{feature}</span>
                    </div>
                  ))}
                  {project.features.length > 3 && (
                    <p className="text-xs text-muted-foreground">
                      +{project.features.length - 3} więcej...
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

export default DynamicProjectRenderer;
