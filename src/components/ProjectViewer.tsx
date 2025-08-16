import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  ExternalLink, 
  FileText, 
  Code, 
  Folder, 
  Github,
  Calendar,
  Clock,
  Users,
  Play
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

// Typy dla projektu
interface ProjectFile {
  name: string;
  path: string;
  type: 'file' | 'directory';
  content?: string;
  language?: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
  technologies: string[];
  period: string;
  features: string[];
  structure: ProjectFile[];
  readme: string;
}

// Dane projektów z rzeczywistych repozytoriów GitHub
const projects: Project[] = [
  {
    id: 'domkilukas-github',
    name: 'DomkiLukas.pl - Domy modułowe',
    description: 'Nowoczesna platforma prezentująca ekologiczne domy modułowe z innowacyjną technologią budowy o 60% szybszą od tradycyjnej.',
    githubUrl: 'https://github.com/blaszkaaa/DomekLukas',
    liveUrl: 'https://domkilukas.pl/',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    period: '09.2024 - obecnie (10 mies.)',
    features: [
      'Interaktywne galerie projektów',
      '3D wizualizacje domów',
      'System smart home',
      'Kalkulator kosztów',
      'Mapa realizacji w Wielkopolsce'
    ],
    structure: [
      { name: 'src', type: 'directory', path: 'src' },
      { name: 'components', type: 'directory', path: 'src/components' },
      { name: 'pages', type: 'directory', path: 'src/pages' },
      { name: 'hooks', type: 'directory', path: 'src/hooks' },
      { name: 'lib', type: 'directory', path: 'src/lib' },
      { name: 'App.tsx', type: 'file', path: 'src/App.tsx', language: 'typescript' },
      { name: 'main.tsx', type: 'file', path: 'src/main.tsx', language: 'typescript' },
      { name: 'index.css', type: 'file', path: 'src/index.css', language: 'css' },
      { name: 'package.json', type: 'file', path: 'package.json', language: 'json' },
      { name: 'tailwind.config.ts', type: 'file', path: 'tailwind.config.ts', language: 'typescript' },
      { name: 'vite.config.ts', type: 'file', path: 'vite.config.ts', language: 'typescript' }
    ],
    readme: `# DomkiLukas.pl - Platforma domów modułowych

## Opis projektu

Nowoczesna platforma prezentująca ekologiczne domy modułowe z innowacyjną technologią budowy o 60% szybszą od tradycyjnej.

## Funkcjonalności

- **3D wizualizacje** - interaktywne modele domów
- **Kalkulator kosztów** - szybka wycena projektu
- **System smart home** - prezentacja automatyki
- **Galerie realizacji** - zdjęcia gotowych domów
- **Mapa lokalizacji** - realizacje w Wielkopolsce

## Technologie

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

## Struktura projektu

\`\`\`
src/
├── components/     # Komponenty React
├── pages/         # Strony aplikacji
├── hooks/         # Custom hooks
├── lib/           # Biblioteki
└── styles/        # Style CSS
\`\`\`

## Instalacja

\`\`\`bash
npm install
npm run dev
\`\`\`

## Autor

TechFlow Solutions
`
  },
  {
    id: 'expensify-app',
    name: 'Expensify Smart - Aplikacja finansowa',
    description: 'Inteligentna aplikacja do zarządzania wydatkami z zaawansowanymi funkcjami analizy i raportowania.',
    githubUrl: 'https://github.com/blaszkaaa/expensify-smart-main',
    liveUrl: 'https://expensify-smart-main.vercel.app/',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    period: '03.2024 - 03.2024 (1 mies.)',
    features: [
      'Zarządzanie wydatkami',
      'Analiza finansowa',
      'Raporty i wykresy',
      'Kategorie wydatków',
      'Eksport danych'
    ],
    structure: [
      { name: 'src', type: 'directory', path: 'src' },
      { name: 'components', type: 'directory', path: 'src/components' },
      { name: 'pages', type: 'directory', path: 'src/pages' },
      { name: 'utils', type: 'directory', path: 'src/utils' },
      { name: 'App.tsx', type: 'file', path: 'src/App.tsx', language: 'typescript' },
      { name: 'package.json', type: 'file', path: 'package.json', language: 'json' },
      { name: 'README.md', type: 'file', path: 'README.md', language: 'markdown' }
    ],
    readme: `# Expensify Smart - Aplikacja finansowa

## Opis projektu

Inteligentna aplikacja do zarządzania wydatkami z zaawansowanymi funkcjami analizy i raportowania.

## Funkcjonalności

- **Zarządzanie wydatkami** - dodawanie i kategoryzowanie wydatków
- **Analiza finansowa** - wykresy i statystyki
- **Raporty** - miesięczne i roczne podsumowania
- **Kategorie** - automatyczne kategoryzowanie
- **Eksport** - eksport danych do CSV/PDF

## Technologie

- React 18
- TypeScript
- Node.js
- Express
- MongoDB

## Instalacja

\`\`\`bash
npm install
npm run dev
\`\`\`

## Autor

TechFlow Solutions
`
  },
  {
    id: 'ecommerce-dashboard',
    name: 'E-commerce Dashboard - Panel administracyjny',
    description: 'Zaawansowany panel administracyjny dla sklepów internetowych z analityką i zarządzaniem produktami.',
    githubUrl: 'https://github.com/blaszkaaa/E-commerce-Dashboard',
    liveUrl: 'https://ecommerce-dashboard-blaszkaaa.vercel.app/',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Material-UI', 'Node.js'],
    period: '03.2024 - 03.2024 (1 mies.)',
    features: [
      'Dashboard analityczny',
      'Zarządzanie produktami',
      'Zarządzanie zamówieniami',
      'Raporty sprzedaży',
      'System użytkowników'
    ],
    structure: [
      { name: 'src', type: 'directory', path: 'src' },
      { name: 'components', type: 'directory', path: 'src/components' },
      { name: 'pages', type: 'directory', path: 'src/pages' },
      { name: 'utils', type: 'directory', path: 'src/utils' },
      { name: 'App.tsx', type: 'file', path: 'src/App.tsx', language: 'typescript' },
      { name: 'package.json', type: 'file', path: 'package.json', language: 'json' },
      { name: 'README.md', type: 'file', path: 'README.md', language: 'markdown' }
    ],
    readme: `# E-commerce Dashboard

## Opis projektu

Zaawansowany panel administracyjny dla sklepów internetowych z analityką i zarządzaniem produktami.

## Funkcjonalności

- **Dashboard** - przegląd sprzedaży i statystyk
- **Produkty** - zarządzanie katalogiem produktów
- **Zamówienia** - obsługa zamówień klientów
- **Raporty** - analiza sprzedaży
- **Użytkownicy** - zarządzanie kontami

## Technologie

- React 18
- TypeScript
- Chart.js
- Material-UI
- Node.js

## Instalacja

\`\`\`bash
npm install
npm run dev
\`\`\`

## Autor

TechFlow Solutions
`
  },
  {
    id: 'binance-bot',
    name: 'Binance Spot Bot - Bot tradingowy',
    description: 'Automatyczny bot tradingowy dla giełdy Binance z zaawansowanymi strategiami inwestycyjnymi.',
    githubUrl: 'https://github.com/blaszkaaa/Binance-Spot-Bot',
    liveUrl: '#',
    technologies: ['Python', 'Binance API', 'Pandas', 'NumPy', 'Matplotlib'],
    period: '10.2024 - 10.2024 (1 mies.)',
    features: [
      'Automatyczne trading',
      'Analiza techniczna',
      'Zarządzanie ryzykiem',
      'Backtesting strategii',
      'Raporty wydajności'
    ],
    structure: [
      { name: 'src', type: 'directory', path: 'src' },
      { name: 'strategies', type: 'directory', path: 'strategies' },
      { name: 'utils', type: 'directory', path: 'utils' },
      { name: 'main.py', type: 'file', path: 'main.py', language: 'python' },
      { name: 'config.py', type: 'file', path: 'config.py', language: 'python' },
      { name: 'requirements.txt', type: 'file', path: 'requirements.txt', language: 'text' },
      { name: 'README.md', type: 'file', path: 'README.md', language: 'markdown' }
    ],
    readme: `# Binance Spot Bot

## Opis projektu

Automatyczny bot tradingowy dla giełdy Binance z zaawansowanymi strategiami inwestycyjnymi.

## Funkcjonalności

- **Automatyczne trading** - wykonywanie zleceń
- **Analiza techniczna** - wskaźniki i sygnały
- **Zarządzanie ryzykiem** - stop-loss i take-profit
- **Backtesting** - testowanie strategii
- **Raporty** - analiza wydajności

## Technologie

- Python 3.9+
- Binance API
- Pandas
- NumPy
- Matplotlib

## Instalacja

\`\`\`bash
pip install -r requirements.txt
python main.py
\`\`\`

## Autor

TechFlow Solutions
`
  }
];

function ProjectViewer() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [fileContent, setFileContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const project = projects.find(p => p.id === projectId);

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

  const renderFileTree = (files: ProjectFile[], level = 0) => {
    return files.map((file) => (
      <div key={file.path} style={{ paddingLeft: `${level * 20}px` }}>
        <button
          onClick={async () => {
            if (file.type === 'file') {
              setSelectedFile(file.path);
              setIsLoading(true);
              try {
                const content = await getFileContent(file.path);
                setFileContent(content);
              } catch (error) {
                console.error('Błąd podczas ładowania pliku:', error);
                setFileContent('// Błąd podczas ładowania pliku');
              } finally {
                setIsLoading(false);
              }
            }
          }}
          className={`flex items-center w-full text-left p-2 rounded hover:bg-secondary/50 transition-colors ${
            selectedFile === file.path ? 'bg-primary/10 text-primary' : ''
          }`}
        >
          {file.type === 'directory' ? (
            <Folder className="w-4 h-4 mr-2 text-blue-500" />
          ) : (
            <FileText className="w-4 h-4 mr-2 text-green-500" />
          )}
          <span className="text-sm">{file.name}</span>
        </button>
      </div>
    ));
  };

  const getFileContent = async (filePath: string) => {
    try {
      // Próbujemy pobrać rzeczywisty plik z folderu projektu
      const response = await fetch(`/src/projects/${projectId}/${filePath}`);
      if (response.ok) {
        return await response.text();
      }
    } catch (error) {
      console.log('Nie można pobrać pliku przez fetch, próbuję alternatywnej metody');
    }

    // Alternatywna metoda - próba odczytu z rzeczywistych plików
    try {
      // W przeglądarce nie możemy używać require, więc pomijamy tę część
      console.log('Odczyt z systemu plików nie jest dostępny w przeglądarce');
    } catch (error) {
      console.log('Nie można odczytać pliku z systemu plików');
    }

    // Fallback - przykładowy kod
    const fileName = filePath.split('/').pop() || '';
    const fileExtension = fileName.split('.').pop() || '';
    
    switch (fileExtension) {
      case 'tsx':
      case 'ts':
        return `// ${fileName} - ${project.name}
import React from 'react';

export default function ${fileName.replace('.tsx', '').replace('.ts', '')}() {
  return (
    <div className="component">
      <h1>${fileName.replace('.tsx', '').replace('.ts', '')}</h1>
      <p>Komponent z projektu ${project.name}</p>
    </div>
  );
}`;
      
      case 'css':
        return `/* ${fileName} - Style dla ${project.name} */

.component {
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #f8f9fa;
}

.component h1 {
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.component p {
  color: #666;
  line-height: 1.6;
}`;
      
      case 'json':
        return `{
  "name": "${project.name.toLowerCase().replace(/\s+/g, '-')}",
  "version": "1.0.0",
  "description": "${project.description}",
  "dependencies": {
    "react": "^18.2.0",
    "typescript": "^5.2.0"
  }
}`;
      
      case 'md':
        return `# ${fileName}

## Opis

To jest plik ${fileName} z projektu ${project.name}.

## Funkcjonalności

- Przykładowa funkcjonalność 1
- Przykładowa funkcjonalność 2
- Przykładowa funkcjonalność 3

## Autor

TechFlow Solutions`;
      
      default:
        return `// ${fileName} - ${project.name}
// To jest przykładowy kod dla pliku ${fileName}

console.log('Witaj w projekcie ${project.name}!');

// Tutaj znajduje się kod dla ${fileName}
function example() {
  return 'Przykładowa funkcja';
}

export default example;`;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Nagłówek */}
      <div className="bg-foreground text-background py-8">
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
                <h1 className="text-2xl font-bold">{project.name}</h1>
                <p className="text-background/80">{project.description}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                onClick={() => window.open(project.githubUrl, '_blank')}
                className="border-background text-background hover:bg-background/10"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              {project.liveUrl && project.liveUrl !== '#' && (
                <Button
                  onClick={() => navigate(`/live/${project.id}`)}
                  className="bg-primary hover:bg-primary-hover"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Wyświetl projekt
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Główna zawartość */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar z drzewem plików */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="w-4 h-4 mr-2" />
                  Struktura projektu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  {renderFileTree(project.structure)}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Główna zawartość */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Przegląd</TabsTrigger>
                <TabsTrigger value="code">Kod</TabsTrigger>
                <TabsTrigger value="readme">README</TabsTrigger>
                <TabsTrigger value="features">Funkcjonalności</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Informacje o projekcie</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        <span className="text-sm text-muted-foreground">Okres realizacji:</span>
                        <span className="ml-2 font-medium">{project.period}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        <span className="text-sm text-muted-foreground">Status:</span>
                        <Badge className="ml-2" variant="default">Aktywny</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Technologie</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="code" className="space-y-6">
                {selectedFile ? (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{selectedFile}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => navigator.clipboard.writeText(fileContent)}
                        >
                          Kopiuj kod
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {isLoading ? (
                        <div className="flex items-center justify-center py-8">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                          <span className="ml-2 text-muted-foreground">Ładowanie kodu...</span>
                        </div>
                      ) : (
                        <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
                          <code>{fileContent}</code>
                        </pre>
                      )}
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardContent className="py-12 text-center">
                      <Code className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground">
                        Wybierz plik z lewej strony, aby zobaczyć jego kod
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="readme" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>README.md</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="whitespace-pre-wrap text-sm bg-secondary p-4 rounded-lg">
                      {project.readme}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="features" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Funkcjonalności</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectViewer;
