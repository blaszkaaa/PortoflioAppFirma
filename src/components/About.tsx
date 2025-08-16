import { Users, Target, Award, Heart } from 'lucide-react';

function About() {
  // Statystyki firmy
  const stats = [
    { icon: Users, value: '50+', label: 'Zadowolonych klientów' },
    { icon: Target, value: '100+', label: 'Zrealizowanych projektów' },
    { icon: Award, value: '5+', label: 'lat doświadczenia' },
    { icon: Heart, value: '100%', label: 'Zaangażowania' }
  ];

  // Nasze wartości
  const values = [
    {
      title: 'Jakość',
      description: 'Każdy projekt realizujemy z najwyższą starannością, dbając o każdy szczegół.'
    },
    {
      title: 'Innowacyjność', 
      description: 'Śledzimy najnowsze trendy i technologie, aby oferować najlepsze rozwiązania.'
    },
    {
      title: 'Partnerstwo',
      description: 'Budujemy długotrwałe relacje z klientami, wspierając ich na każdym etapie współpracy.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Nagłówek sekcji */}
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              O nas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Jesteśmy zespołem pasjonatów technologii, którzy tworzą nowoczesne 
              rozwiązania internetowe dla firm z różnych branż.
            </p>
          </div>

          {/* Główna zawartość */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Lewa kolumna - tekst */}
            <div className="reveal">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Indywidualne podejście do każdego projektu
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Specjalizujemy się w tworzeniu nowoczesnych stron internetowych 
                  i aplikacji webowych, które nie tylko wyglądają świetnie, ale przede 
                  wszystkim skutecznie wspierają rozwój biznesu naszych klientów.
                </p>
                <p>
                  Każdy projekt traktujemy indywidualnie, analizując specyfikę branży 
                  i potrzeby użytkowników końcowych. Dzięki temu tworzymy rozwiązania, 
                  które są nie tylko piękne, ale przede wszystkim funkcjonalne i efektywne.
                </p>
                <p>
                  Współpracujemy z firmami z różnych branż - od małych lokalnych biznesów 
                  po duże korporacje, zawsze dostarczając rozwiązania najwyższej jakości.
                </p>
              </div>
            </div>

            {/* Prawa kolumna - statystyki */}
            <div className="grid grid-cols-2 gap-6 reveal">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center p-6 bg-background rounded-lg shadow-md">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sekcja wartości */}
          <div className="text-center reveal">
            <h3 className="text-2xl font-bold text-foreground mb-8">Nasze wartości</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;