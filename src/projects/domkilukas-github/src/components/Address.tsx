// src/components/Address.jsx
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Address = () => {
  return (
    <section id="kontakt" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8 max-w-3xl mx-auto"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">
              Kontakt <span className="text-orange-600">z nami</span>
            </h2>
            <p className="text-lg text-gray-600">
              Masz pytania dotyczące naszych domów modułowych? Skontaktuj się z nami, 
              a nasi eksperci z przyjemnością udzielą odpowiedzi na wszystkie Twoje pytania.
            </p>
          </div>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Adres</h3>
                  <p className="text-gray-600">Słupca Kotunia</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Telefon</h3>
                  <p className="text-gray-600">691-749-704</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">lukaszwrotecki@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Godziny dostępności</h3>
                  <p className="text-gray-600">Pon - Pt: 9:00 - 17:00</p>
                  <p className="text-gray-600">Sob: 10:00 - 14:00</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Address;
