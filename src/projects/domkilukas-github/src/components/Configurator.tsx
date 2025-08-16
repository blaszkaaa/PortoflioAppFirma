import { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';

const buildStages = [
  {
    id: 0,
    name: 'Fundament',
    image: 'https://i.postimg.cc/pdq7YVVm/temp-Image-Vgh-Ygm.avif'
  },
  {
    id: 1,
    name: 'Konstrukcja modułu',
    image: 'https://i.postimg.cc/pdLxt6pn/temp-Imaged91-Ne5.avif'
  },
  {
    id: 2,
    name: 'Instalacje',
    image: 'https://i.postimg.cc/KjXd4qvf/temp-Image-Hsa-PAG.avif'
  },
  {
    id: 3,
    name: 'Wykończenie',
    image: 'https://i.postimg.cc/pdq7YVVm/temp-Image-Vgh-Ygm.avif'
  },
  {
    id: 4,
    name: 'Montaż',
    image: 'https://i.postimg.cc/pdLxt6pn/temp-Imaged91-Ne5.avif'
  },
  {
    id: 5,
    name: 'Gotowy dom',
    image: 'https://i.postimg.cc/KjXd4qvf/temp-Image-Hsa-PAG.avif'
  }
];

const Configurator = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [showARMessage, setShowARMessage] = useState(false);

  return (
    <section id="konfiguracja" className="py-20 bg-eco-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-eco-anthracite mb-4">Wizualizator konfiguracji</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Zobacz, jak przebiega proces budowy Twojego domu modułowego.
            Przesuwaj suwak, aby zobaczyć poszczególne etapy.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative aspect-video bg-white rounded-xl overflow-hidden shadow-xl mb-8"
          >
            {buildStages.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: index === currentStage ? 1 : 0,
                  scale: index === currentStage ? 1 : 1.1
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 ${index === currentStage ? 'z-10' : 'z-0'}`}
              >
                <img 
                  src={stage.image} 
                  alt={stage.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-2xl font-semibold">{stage.name}</h3>
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                      Etap {stage.id + 1}/6
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* AR Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowARMessage(true)}
              className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-sm hover:bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-colors"
            >
              <Smartphone size={18} className="text-orange-600" />
              <span className="text-eco-anthracite font-medium">Zobacz w AR</span>
            </motion.button>
          </motion.div>

          {/* AR Message */}
          <AnimatedMessage 
            show={showARMessage} 
            onClose={() => setShowARMessage(false)} 
          />

          {/* Slider */}
          <div className="mt-8">
            <input
              type="range"
              min="0"
              max="5"
              step="1"
              value={currentStage}
              onChange={(e) => setCurrentStage(parseInt(e.target.value))}
              className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
              style={{
                backgroundImage: `linear-gradient(to right, #FF9800 0%, #FF9800 ${currentStage * 20}%, #FFF3E0 ${currentStage * 20}%, #FFF3E0 100%)`,
              }}
            />
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              {buildStages.map((stage) => (
                <span 
                  key={stage.id}
                  className={`cursor-pointer ${currentStage === stage.id ? 'text-orange-600 font-medium' : ''}`}
                  onClick={() => setCurrentStage(stage.id)}
                >
                  {stage.id + 1}
                </span>
              ))}
            </div>
          </div>

          {/* Stages Navigation */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-6">
            {buildStages.map((stage) => (
              <motion.button
                key={stage.id}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className={`p-2 rounded-md transition-colors ${
                  currentStage === stage.id 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-white hover:bg-orange-50 text-eco-anthracite'
                }`}
                onClick={() => setCurrentStage(stage.id)}
              >
                <span className="text-xs md:text-sm">{stage.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AnimatedMessage = ({ show, onClose }) => {
  return (
    <>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-2xl max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-eco-anthracite mb-4">Funkcja AR</h3>
            <p className="text-gray-600 mb-6">
              Aby zobaczyć model domu w rzeczywistości rozszerzonej,
              zeskanuj ten kod QR swoim telefonem lub skorzystaj z naszej aplikacji mobilnej.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center mb-6">
              <div className="w-32 h-32 bg-white flex items-center justify-center border">
                <div className="w-24 h-24 bg-gray-800 relative">
                  <div className="absolute inset-2 border-4 border-white"></div>
                  <div className="absolute inset-6 bg-white"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Zamknij
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Configurator;
