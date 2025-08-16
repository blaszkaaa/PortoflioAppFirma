import React from 'react';
import { motion, Variants } from 'framer-motion';
import type { LucideProps } from 'lucide-react';
import { Clock, Settings, Layers, Thermometer, Package, ClipboardCheck, Home } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface TechCardProps {
  icon: React.ComponentType<LucideProps>;
  title: string;
  description: string;
  background: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hover: {
    y: -10,
    scale: 1.03,
    boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
    transition: { duration: 0.3 },
  },
};

const iconVariants: Variants = {
  hover: { rotate: 360, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const TechCard: React.FC<TechCardProps> = ({ icon: Icon, title, description, background }) => (
  <motion.div
    className={`${background} rounded-xl overflow-hidden`}
    variants={cardVariants}
    whileHover="hover"
  >
    <div className="p-8">
      <motion.div
        variants={iconVariants}
        whileHover="hover"
        className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md mb-6"
      >
        <Icon size={32} className="text-orange-600" />
      </motion.div>
      <h3 className="text-xl font-bold text-eco-anthracite mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const Technology: React.FC = () => {
  const features = [
    { icon: Package, title: 'Szybka produkcja i montaż', description: 'Prefabrykacja w fabryce trwa 2–3 miesiące, montaż zajmuje 1 dzień, a wykończenie od 2 do 4 tygodni.', background: 'bg-gradient-to-br from-orange-50 to-orange-100' },
    { icon: ClipboardCheck, title: 'Kompleksowa obsługa', description: 'Realizujemy cały proces od projektu po wykończenie, eliminując konieczność koordynacji wykonawców.', background: 'bg-gradient-to-br from-orange-50 to-orange-100' },
    { icon: Clock, title: 'Błyskawiczny czas realizacji', description: 'Wybierz jeden z 3–4 gotowych projektów i zamieszkaj szybko dzięki sprawnej organizacji prac.', background: 'bg-gradient-to-br from-orange-50 to-orange-100' },
    { icon: Settings, title: 'Stalowy szkielet i płyta PIR', description: 'Szkielet z profilu RKA oraz płyty PIR od czołowych producentów zapewniają minimalne straty ciepła.', background: 'bg-gradient-to-br from-orange-50 to-orange-100' },
    { icon: Layers, title: 'Elewacje wysokiej klasy', description: 'Okładziny HPL, włókno-cement i inne materiały premium gwarantują trwałość i nowoczesny wygląd.', background: 'bg-gradient-to-br from-orange-50 to-orange-100' },
    { icon: Home, title: 'Okna 3-szybowe ze sterowaniem', description: 'Trzyszybowe okna z roletami, sterowane za pomocą pilota lub aplikacji smart home.', background: 'bg-gradient-to-br from-orange-50 to-orange-100' },
    { icon: Thermometer, title: 'Komfort cieplny i wodny', description: 'Zdalne zarządzanie klimatyzacją, ogrzewaniem i ciepłą wodą pozwala na idealne warunki przez cały rok.', background: 'bg-gradient-to-br from-orange-50 to-orange-100' },
  ];

  return (
    <section id="technologia" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nasze <span className="text-orange-600">Zalety</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Zapewniamy ekspresowy montaż w 2–3 miesiące, pełną obsługę pod jednym dachem i bezkompromisową jakość materiałów.
          </p>
          <Separator className="w-24 h-1 bg-orange-500 mx-auto mt-8" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((f) => (
            <TechCard
              key={f.title}
              icon={f.icon}
              title={f.title}
              description={f.description}
              background={f.background}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
