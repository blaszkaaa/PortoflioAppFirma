import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

function Contact() {
  // Stan formularza
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Obsługa zmian w polach formularza
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Obsługa wysyłania formularza
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Symulacja wysyłania formularza
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Wiadomość wysłana!",
      description: "Dziękujemy za kontakt. Odpowiemy w ciągu 24 godzin.",
    });

    // Reset formularza
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  // Dane kontaktowe
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'kontakt@webdevpro.pl',
      subtitle: 'Odpowiadamy w ciągu 24 godzin'
    },
    {
      icon: Phone,
      title: 'Telefon',
      value: '+48 123 456 789',
      subtitle: 'Pon-Pt: 9:00 - 17:00'
    },
    {
      icon: MapPin,
      title: 'Biuro',
      value: 'ul. Przykładowa 123\n00-000 Warszawa',
      subtitle: 'Spotkania po umówieniu'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Nagłówek sekcji */}
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Skontaktuj się z nami
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Gotowy na rozmowę o Twoim projekcie? Skontaktuj się z nami już dziś 
              i otrzymaj bezpłatną konsultację.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informacje kontaktowe */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="reveal border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center text-foreground">
                        <IconComponent className="w-5 h-5 mr-3 text-primary" />
                        {info.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground whitespace-pre-line">{info.value}</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {info.subtitle}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}

              <div className="p-6 bg-primary/5 rounded-lg reveal">
                <h3 className="font-semibold text-foreground mb-3">
                  Szybka odpowiedź gwarantowana
                </h3>
                <p className="text-sm text-muted-foreground">
                  Wszystkie zapytania otrzymane przez formularz kontaktowy 
                  są przetwarzane w ciągu 24 godzin w dni robocze.
                </p>
              </div>
            </div>

            {/* Formularz kontaktowy */}
            <div className="lg:col-span-2">
              <Card className="reveal shadow-lg border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">
                    Napisz do nas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-foreground">
                          Imię i nazwisko *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-1 border-border focus:ring-primary focus:border-primary"
                          placeholder="Jan Kowalski"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-foreground">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-1 border-border focus:ring-primary focus:border-primary"
                          placeholder="jan@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-foreground">
                          Telefon
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1 border-border focus:ring-primary focus:border-primary"
                          placeholder="+48 123 456 789"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-foreground">
                          Temat *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="mt-1 border-border focus:ring-primary focus:border-primary"
                          placeholder="Zapytanie o stronę internetową"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-foreground">
                        Wiadomość *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-1 border-border focus:ring-primary focus:border-primary resize-none"
                        placeholder="Opisz swój projekt lub zadaj pytanie..."
                      />
                    </div>

                    <div className="text-sm text-muted-foreground">
                      * Pola wymagane
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full md:w-auto bg-primary hover:bg-primary-hover shadow-hero text-lg px-8 py-4"
                    >
                      {isSubmitting ? (
                        'Wysyłanie...'
                      ) : (
                        <>
                          Wyślij wiadomość
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;