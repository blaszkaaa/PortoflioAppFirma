import { useState, useEffect } from 'react';
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
    image: 'https://i.ibb.co/ynmbfw9y/DJI-0150.jpg'
  }
];

const ROTATING_TEXTS = [
  "Ekologia w każdym detalu",
  "Nowoczesne rozwiązania",
  "Szybsza budowa o 60%"
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  // Auto-rotate slides
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, []);

  // Auto-rotate text
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % ROTATING_TEXTS.length);
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(textInterval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section id="home" className="relative min-h-screen flex flex-col md:flex-row items-center overflow-hidden pt-20">
      {/* Parallax Background */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-100 to-white" />
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row">
        {/* Left Column: Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center mb-10 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-orange-600 text-xl md:text-2xl font-light mb-2">
              {/* Rotating text with animation */}
              <div className="h-8 overflow-hidden">
                {ROTATING_TEXTS.map((text, index) => (
                  <div 
                    key={text} 
                    className={`transition-all duration-500 ${index === currentText ? 'opacity-100' : 'opacity-0 absolute'}`}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-eco-anthracite mb-4">
              Twój wymarzony dom gotowy w krótkim czasie
              <span className="text-orange-600 relative inline-block">
                <span className="animate-pulse">
                </span>
                
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Modułowe, ekologiczne domy przyszłości. Zaprojektowane z myślą o Tobie i środowisku.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/galeria">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md transition-colors text-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Zobacz modele</span>
                <span className="absolute inset-0 h-full w-0 bg-orange-700 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-md transition-colors text-lg"
              onClick={() => setIsContactFormOpen(true)}
            >
              Umów konsultację
            </motion.button>
          </motion.div>
        </div>

        {/* Right Column: Image Carousel */}
        <div className="w-full md:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl"
          >
            {/* Slides */}
            <div className="h-full relative">
              {SLIDES.map((slide, index) => (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: index === currentSlide ? 1 : 0,
                    scale: index === currentSlide ? 1 : 1.1
                  }}
                  transition={{ duration: 0.6 }}
                  className={`absolute inset-0 ${index === currentSlide ? 'z-10' : 'z-0'}`}
                >
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-lg">{slide.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 backdrop-blur-sm hover:bg-white/50 rounded-full p-2 transition-colors"
            >
              <ChevronLeft className="text-white" size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 backdrop-blur-sm hover:bg-white/50 rounded-full p-2 transition-colors"
            >
              <ChevronRight className="text-white" size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
              {SLIDES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Dialog */}
      <ContactForm 
        open={isContactFormOpen} 
        onOpenChange={setIsContactFormOpen} 
      />
    </section>
  );
};

export default Hero;
