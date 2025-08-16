import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  location: string;
  year: string;
  image: string;
  detailedDescription?: string;
  features?: string[];
  gallery?: string[];
  clientFeedback?: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "Dom Modułowy – Rogowo",
    description:
      "Ekspresowa realizacja: od fabrycznych modułów po gotowy dom – prefabrykacja w 2–3 miesiące, montaż w jeden dzień i wykończenie w zaledwie 2–4 tygodni.",
    location: "Rogowo, Polska",
    year: "2024",
    image: "https://i.ibb.co/ynmbfw9y/DJI-0150.jpg",
    detailedDescription:
      "Projekt w Rogowie to synonim błyskawicznej budowy i perfekcyjnej organizacji. Prefabrykacja modułów w fabryce zajmuje zaledwie 2–3 miesiące, montaż na miejscu trwa jeden dzień, a wykończenie kończymy w 2–4 tygodni. Zapewniamy kompleksową obsługę – od koncepcji aż po wykończenie wnętrz – bez potrzeby angażowania wielu wykonawców. Dzięki gotowym projektom (3–4 warianty do wyboru) możesz zamieszkać niemal od ręki. Solidny stalowy szkielet RKA i płyty PIR minimalizują straty ciepła, a elewacje z HPL i włókno-cementu nadają nowoczesny, trwały charakter. Trzyszybowe okna sterowane smart‑home dbają o komfort termiczny i akustyczny.",
    features: [
      "Prefabrykacja modułów: 2–3 miesiące",
      "Montaż na miejscu: 1 dzień",
      "Wykończenie wnętrz: 2–4 tygodni",
      "Obsługa od projektu po klucz",
      "Wybór spośród 3–4 gotowych wariantów",
      "Stalowy szkielet RKA i płyty PIR",
      "Elewacje premium (HPL, włókno-cement)",
      "Okna 3‑szybowe ze sterowaniem smart‑home"
    ],
    gallery: [
      "https://i.ibb.co/ynmbfw9y/DJI-0150.jpg",
      "https://i.ibb.co/F4xBYTZm/DJI-0152.jpg"
    ]
  },
  {
    id: 2,
    title: "Dom Modułowy – Rogowo",
    description:
      "Ekspresowa górska realizacja: prefabrykacja w 2 miesiące, montaż w jeden dzień i wykończenie w 2 tygodnie – w tym modułowy garaż – idealne schronienie na rodzinny wypoczynek.",
    location: "Rogowo, obok Gniezna, Polska",
    year: "2023",
    image: "https://i.postimg.cc/pdLxt6pn/temp-Imaged91-Ne5.avif",
    detailedDescription:
      "Projekt w Karkonoszach to połączenie błyskawicznej realizacji z górskim urokiem. Prefabrykacja trwa 2 miesiące, montaż zaledwie jeden dzień, a wykończenie kończymy w 2 tygodnie. Oferujemy pełną obsługę – od koncepcji po wykończenie – bez konieczności koordynowania wielu ekip. Dodatkowo dobudowaliśmy modułowy garaż z płyt PIR, zapewniając wygodne parkowanie tuż przy domu. Elewacje z naturalnego drewna i włókno-cementu doskonale wpisują się w krajobraz, a panoramiczne okna sterowane smart‑home gwarantują spektakularne widoki i energooszczędność.",
    features: [
      "Prefabrykacja modułów: 2 miesiące",
      "Montaż na miejscu: 1 dzień",
      "Wykończenie: 2 tygodnie",
      "Modułowy garaż z płyt PIR",
      "Przestronny salon z panoramicznym przeszkleniem",
      "2 sypialnie i nowoczesna łazienka",
      "Elewacje z naturalnego drewna i włókno-cementu",
      "Idealny dla rodziny 4‑osobowej"
    ],
     }
];

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const found = projectsData.find((p) => p.id === Number(id));
    if (found) {
      setProject(found);
      setSelectedImage(found.gallery?.[0] ?? found.image);
    }
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Projekt nie został znaleziony.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <Link to="/#realizacje">
            <Button variant="ghost" className="flex items-center gap-2 mb-8">
              <ArrowLeft size={18} />
              Powrót do realizacji
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <MapPin size={18} className="mr-2 text-eco-orange-600" />
                {project.location}
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar size={18} className="mr-2 text-eco-orange-600" />
                {project.year}
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-4xl">{project.description}</p>
            <Separator className="w-24 h-1 bg-eco-orange-500 mt-8" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="rounded-xl overflow-hidden shadow-xl mb-6">
                <AspectRatio ratio={4 / 3}>
                  <img
                    src={selectedImage!}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              {project.gallery && project.gallery.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {project.gallery.map((img, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`cursor-pointer rounded-lg overflow-hidden ${
                        selectedImage === img ? 'ring-2 ring-eco-orange-500' : ''
                      }`}
                      onClick={() => setSelectedImage(img)}
                    >
                      <AspectRatio ratio={1 / 1}>
                        <img
                          src={img}
                          alt={`${project.title} – zdjęcie ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold mb-4">O projekcie</h2>
              <p className="text-gray-600 mb-6">{project.detailedDescription}</p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Kluczowe cechy</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features?.map((feat, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-flex items-center justify-center w-5 h-5 mr-2 bg-eco-orange-100 text-eco-orange-600 rounded-full text-sm">
                        ✓
                      </span>
                      <span className="text-gray-600">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.clientFeedback && (
                <div className="bg-gray-50 border border-gray-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Opinia klienta</h3>
                  <blockquote className="italic text-gray-600">
                    "{project.clientFeedback}"
                  </blockquote>
                </div>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            
            <Button
              className="bg-eco-orange-600 hover:bg-eco-orange-700"
              size="lg"
              onClick={() => document.getElementById('consultationFormButton')?.click()}
            >
              Zamów konsultację
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
