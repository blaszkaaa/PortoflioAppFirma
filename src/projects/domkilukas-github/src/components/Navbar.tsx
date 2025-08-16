import { useState, useEffect } from 'react';
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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl font-bold bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent"
              >
                DomkiLukas
              </motion.div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[
              { label: 'Home', href: '#home' },
              { label: 'Nasze zalety', href: '#technologia' },
              { label: 'Realizacje', href: '#realizacje' },
              { label: 'Galeria', href: '#galeria' },
              { label: 'Kontakt', href: '#kontakt' },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-eco-anthracite hover:text-orange-600 font-medium transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
              </motion.a>
            ))}
            <Link to="/galeria">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-md transition-colors"
              >
                Pełna galeria
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {[
              { label: 'Home', href: '#home' },
              { label: 'Etapy', href: '#etapy' },
              { label: 'Technologia', href: '#technologia' },
              { label: 'Realizacje', href: '#realizacje' },
              { label: 'Galeria', href: '#galeria' },
              { label: 'Kontakt', href: '#kontakt' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-eco-anthracite hover:text-orange-600 py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Link to="/galeria" onClick={() => setIsMenuOpen(false)}>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-md transition-colors w-full">
                Pełna galeria
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
