// src/components/Footer.jsx
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="kontakt" className="bg-eco-anthracite text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent mb-4">
              DomkiLukas
            </h3>
            <p className="text-gray-300 mb-6">
              Budujemy przyszłość, w której ekologia i nowoczesny styl życia tworzą idealną harmonię.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                whileHover={{ y: -3, color: '#FF9800' }} 
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3, color: '#FF9800' }} 
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3, color: '#FF9800' }} 
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Szybkie linki</h3>
            <ul className="space-y-2">
              {['Strona główna', 'O nas', 'Modele domów', 'Technologia', 'Blog', 'Kontakt'].map((item) => (
                <li key={item}>
                  <motion.a 
                    href="#" 
                    whileHover={{ x: 5 }} 
                    className="text-gray-300 hover:text-orange-300 transition-colors flex items-center"
                  >
                    <span className="mr-2">›</span> {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-orange-400 mt-1" />
                <span className="text-gray-300">
                  Słupca Kotunia
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-orange-400" />
                <span className="text-gray-300">691-749-704</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-orange-400" />
                <span className="text-gray-300">lukaszwrotecki@gmail.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Zapisz się, aby otrzymywać najnowsze informacje o naszych projektach i promocjach.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Twój adres email"
                className="bg-eco-dark border border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                required
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Subskrybuj
              </motion.button>
            </form>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} DomkiLukas. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">Polityka prywatności</a>
              <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">Warunki korzystania</a>
              <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">Mapa strony</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
