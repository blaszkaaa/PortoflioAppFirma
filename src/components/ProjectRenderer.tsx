import { useState, useEffect } from 'react';
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
  AlertCircle
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
  files: {
    [key: string]: string;
  };
}

// Dane projektów z rzeczywistymi plikami
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
    files: {
      'src/App.tsx': `import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GalleryPage from "./pages/GalleryPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/DomekLukas">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/projekt/:id" element={<ProjectDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;`,
      'src/pages/Index.tsx': `import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Index;`,
      'src/components/Hero.tsx': `import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';

const SLIDES = [
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

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="relative h-full">
        {SLIDES.map((slide, index) => (
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white z-10">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Domki Modułowe
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Nowoczesne, ekologiczne domy modułowe o 60% szybsze w budowie
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/gallery"
              className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Zobacz realizacje
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-colors font-semibold">
              Darmowa wycena
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={index === currentSlide ? 'w-3 h-3 rounded-full transition-colors bg-white' : 'w-3 h-3 rounded-full transition-colors bg-white/50'}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;`,
      'src/components/Navbar.tsx': `import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={isScrolled ? 'fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-lg' : 'fixed w-full z-50 transition-all duration-300 bg-transparent'}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            DomkiLukas
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              Strona główna
            </Link>
            <Link to="/gallery" className="text-gray-700 hover:text-gray-900 transition-colors">
              Galeria
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
              O nas
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Kontakt
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;`,
      'package.json': `{
  "name": "domkilukas",
  "version": "1.0.0",
  "description": "Nowoczesna platforma prezentująca ekologiczne domy modułowe",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "framer-motion": "^10.16.0",
    "lucide-react": "^0.292.0",
    "@tanstack/react-query": "^5.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.0.0",
    "typescript": "^5.0.0",
    "vite": "^4.0.0",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}`
    }
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
    files: {
      'src/App.tsx': `import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Transactions from "./pages/Transactions";
import BarCharts from "./pages/BarCharts";
import PieCharts from "./pages/PieCharts";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/expensify-smart-main">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/bar-charts" element={<BarCharts />} />
          <Route path="/pie-charts" element={<PieCharts />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;`,
      'src/pages/Index.tsx': `import { Sidebar } from "@/components/Sidebar";
import { Dashboard } from "@/components/Dashboard";

const Index = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden theme-transition bg-slate-50 dark:bg-slate-950">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <Dashboard />
      </main>
    </div>
  );
};

export default Index;`,
      'src/components/Sidebar.tsx': `import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Home, 
  CreditCard, 
  BarChart3, 
  PieChart, 
  Settings, 
  Menu,
  X
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: CreditCard, label: "Transakcje", path: "/transactions" },
  { icon: BarChart3, label: "Wykresy słupkowe", path: "/bar-charts" },
  { icon: PieChart, label: "Wykresy kołowe", path: "/pie-charts" },
  { icon: Settings, label: "Ustawienia", path: "/settings" },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        className="fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800"
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              Expensify Smart
            </h1>
          </div>

          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={location.pathname === item.path
                      ? "flex items-center px-4 py-3 rounded-lg transition-colors bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                      : "flex items-center px-4 py-3 rounded-lg transition-colors text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};`,
      'src/components/Dashboard.tsx': `import { motion } from "framer-motion";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  CreditCard,
  Calendar,
  Users
} from "lucide-react";

const stats = [
  {
    label: "Całkowite wydatki",
    value: "12,450 zł",
    change: "+12.5%",
    changeType: "increase",
    icon: DollarSign,
  },
  {
    label: "Średnio miesięcznie",
    value: "2,075 zł",
    change: "+8.2%",
    changeType: "increase",
    icon: TrendingUp,
  },
  {
    label: "Największa kategoria",
    value: "Jedzenie",
    change: "1,850 zł",
    changeType: "neutral",
    icon: CreditCard,
  },
  {
    label: "Oszczędności",
    value: "3,200 zł",
    change: "+15.3%",
    changeType: "increase",
    icon: TrendingDown,
  },
];

const recentTransactions = [
  { id: 1, description: "Zakupy spożywcze", amount: 245.50, category: "Jedzenie", date: "2024-01-15" },
  { id: 2, description: "Paliwo", amount: 180.00, category: "Transport", date: "2024-01-14" },
  { id: 3, description: "Kino", amount: 45.00, category: "Rozrywka", date: "2024-01-13" },
  { id: 4, description: "Rachunki", amount: 320.00, category: "Mieszkanie", date: "2024-01-12" },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Dashboard
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Przegląd Twoich finansów
          </p>
        </div>
        <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
          <Calendar className="w-5 h-5" />
          <span>Styczeń 2024</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </p>
                <p className={stat.changeType === "increase"
                  ? "text-sm text-green-600"
                  : stat.changeType === "decrease"
                  ? "text-sm text-red-600"
                  : "text-sm text-slate-600 dark:text-slate-400"
                }>
                  {stat.change}
                </p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"
      >
        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Ostatnie transakcje
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">
                      {transaction.description}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {transaction.category} • {transaction.date}
                    </p>
                  </div>
                </div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  -{transaction.amount} zł
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};`,
      'package.json': `{
  "name": "expensify-smart",
  "version": "1.0.0",
  "description": "Inteligentna aplikacja do zarządzania wydatkami",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "framer-motion": "^10.16.0",
    "lucide-react": "^0.292.0",
    "@tanstack/react-query": "^5.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.0.0",
    "typescript": "^5.0.0",
    "vite": "^4.0.0",
    "tailwindcss": "^3.3.0"
  }
}`
    }
  }
];

function ProjectRenderer() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('preview');

  const project = projectsData.find(p => p.id === projectId);

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

  const fileList = Object.keys(project.files);

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
              <Button
                onClick={() => navigate(`/projekty/${project.id}`)}
                className="bg-primary hover:bg-primary-hover"
              >
                <Code className="w-4 h-4 mr-2" />
                Zobacz kod
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Główna zawartość */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar z plikami */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="w-4 h-4 mr-2" />
                  Pliki projektu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  {fileList.map((filePath) => (
                    <button
                      key={filePath}
                      onClick={() => setSelectedFile(filePath)}
                      className={selectedFile === filePath 
                        ? 'flex items-center w-full text-left p-2 rounded hover:bg-secondary/50 transition-colors bg-primary/10 text-primary'
                        : 'flex items-center w-full text-left p-2 rounded hover:bg-secondary/50 transition-colors'
                      }
                    >
                      <Code className="w-4 h-4 mr-2 text-green-500" />
                      <span className="text-sm">{filePath.split('/').pop()}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Główna zawartość */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Informacje o projekcie */}
              <Card>
                <CardHeader>
                  <CardTitle>Informacje o projekcie</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <div>
                      <h4 className="font-semibold mb-2">Okres realizacji</h4>
                      <p className="text-muted-foreground">{project.period}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Funkcjonalności</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Podgląd kodu */}
              {selectedFile && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{selectedFile}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigator.clipboard.writeText(project.files[selectedFile])}
                      >
                        Kopiuj kod
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{project.files[selectedFile]}</code>
                    </pre>
                  </CardContent>
                </Card>
              )}

              {/* Instrukcja uruchomienia */}
              <Card>
                <CardHeader>
                  <CardTitle>Jak uruchomić projekt lokalnie</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">1. Sklonuj repozytorium</h4>
                      <pre className="bg-secondary p-3 rounded text-sm">
                        git clone {project.githubUrl}
                      </pre>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">2. Zainstaluj zależności</h4>
                      <pre className="bg-secondary p-3 rounded text-sm">
                        npm install
                      </pre>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">3. Uruchom serwer deweloperski</h4>
                      <pre className="bg-secondary p-3 rounded text-sm">
                        npm run dev
                      </pre>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">💡 Wskazówka</h4>
                      <p className="text-blue-800 text-sm">
                        Projekt zostanie uruchomiony na <code className="bg-blue-100 px-1 rounded">http://localhost:5173</code>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectRenderer;
