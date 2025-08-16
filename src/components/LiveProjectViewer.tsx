import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  ExternalLink, 
  Play,
  Pause,
  RotateCcw,
  Maximize,
  Minimize,
  Loader2,
  FolderOpen
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

// Typy dla projektu
interface LiveProject {
  id: string;
  name: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
  period: string;
  features: string[];
  status: 'online' | 'offline' | 'loading';
}

// Dane projektów z live demo
const liveProjects: LiveProject[] = [
  {
    id: 'domkilukas-github',
    name: 'DomkiLukas.pl - Domy modułowe',
    description: 'Nowoczesna platforma prezentująca ekologiczne domy modułowe z innowacyjną technologią budowy o 60% szybszą od tradycyjnej.',
    liveUrl: 'https://domkilukas.pl/',
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
    status: 'online'
  },
  {
    id: 'expensify-app',
    name: 'Expensify Smart - Aplikacja finansowa',
    description: 'Inteligentna aplikacja do zarządzania wydatkami z zaawansowanymi funkcjami analizy i raportowania.',
    liveUrl: 'https://expensify-smart-main.vercel.app/',
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
    status: 'online'
  },
  {
    id: 'ecommerce-dashboard',
    name: 'E-commerce Dashboard - Panel administracyjny',
    description: 'Zaawansowany panel administracyjny dla sklepów internetowych z analityką i zarządzaniem produktami.',
    liveUrl: 'https://ecommerce-dashboard-blaszkaaa.vercel.app/',
    githubUrl: 'https://github.com/blaszkaaa/E-commerce-Dashboard',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Material-UI', 'Node.js'],
    period: '03.2024 - 03.2024 (1 mies.)',
    features: [
      'Dashboard analityczny',
      'Zarządzanie produktami',
      'Zarządzanie zamówieniami',
      'Raporty sprzedaży',
      'System użytkowników'
    ],
    status: 'online'
  }
];

function LiveProjectViewer() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);

  const project = liveProjects.find(p => p.id === projectId);

  useEffect(() => {
    // Symulacja ładowania
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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

  const handleReload = () => {
    setIsLoading(true);
    setIframeKey(prev => prev + 1);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'offline': return 'bg-red-500';
      case 'loading': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online': return 'Online';
      case 'offline': return 'Offline';
      case 'loading': return 'Ładowanie';
      default: return 'Nieznany';
    }
  };

  return (
    <div className={`min-h-screen bg-background ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
      {/* Nagłówek */}
      <div className="bg-foreground text-background py-4">
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
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`}></div>
                <span className="text-sm text-background/80">{getStatusText(project.status)}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(project.githubUrl, '_blank')}
                className="border-background text-background hover:bg-background/10"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate(`/projekty/${project.id}`)}
                className="border-background text-background hover:bg-background/10"
              >
                <FolderOpen className="w-4 h-4 mr-2" />
                Zobacz kod
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Kontrolki */}
      <div className="bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleReload}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <RotateCcw className="w-4 h-4 mr-2" />
                )}
                Odśwież
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleFullscreen}
              >
                {isFullscreen ? (
                  <Minimize className="w-4 h-4 mr-2" />
                ) : (
                  <Maximize className="w-4 h-4 mr-2" />
                )}
                {isFullscreen ? 'Minimalizuj' : 'Pełny ekran'}
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                {project.liveUrl}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Otwórz w nowej karcie
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Informacje o projekcie */}
      {!isFullscreen && (
        <div className="bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Technologie</h3>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Okres realizacji</h3>
                <p className="text-sm text-muted-foreground">{project.period}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Status</h3>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`}></div>
                  <span className="text-sm">{getStatusText(project.status)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Live Preview */}
      <div className={`${isFullscreen ? 'h-full' : 'h-[calc(100vh-200px)]'} relative`}>
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
              <p className="text-muted-foreground">Ładowanie projektu...</p>
            </div>
          </div>
        ) : (
          <iframe
            key={iframeKey}
            src={project.liveUrl}
            className="w-full h-full border-0"
            title={project.name}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            loading="lazy"
          />
        )}
      </div>

      {/* Funkcjonalności */}
      {!isFullscreen && (
        <div className="bg-secondary/30">
          <div className="container mx-auto px-4 py-6">
            <h3 className="font-semibold mb-4">Funkcjonalności projektu</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LiveProjectViewer;
