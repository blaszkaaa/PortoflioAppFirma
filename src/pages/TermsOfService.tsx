import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function TermsOfService() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Nagłówek */}
      <div className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-6 text-background hover:bg-background/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Powrót do strony głównej
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Regulamin świadczenia usług
            </h1>
            <p className="text-xl text-background/80">
              Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
            </p>
          </div>
        </div>
      </div>

      {/* Treść */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">§1. Postanowienia ogólne</h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Definicje</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li><strong>Usługodawca</strong> - TechFlow Solutions z siedzibą w Warszawie, ul. Przykładowa 123, 00-000 Warszawa, NIP: 1234567890, REGON: 123456789</li>
                    <li><strong>Klient</strong> - osoba fizyczna, prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, która korzysta z usług Usługodawcy</li>
                    <li><strong>Usługi</strong> - usługi web development, tworzenia stron internetowych, aplikacji webowych i sklepów internetowych</li>
                    <li><strong>Umowa</strong> - umowa o świadczenie usług zawarta między Usługodawcą a Klientem</li>
                    <li><strong>Projekt</strong> - konkretne zadanie lub zlecenie realizowane przez Usługodawcę</li>
                  </ul>
                </li>
                <li>
                  Niniejszy regulamin określa zasady świadczenia usług przez TechFlow Solutions 
                  oraz prawa i obowiązki stron umowy.
                </li>
                <li>
                  Regulamin wchodzi w życie z dniem publikacji na stronie internetowej 
                  i obowiązuje do momentu jego zmiany.
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">§2. Zakres usług</h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  Usługodawca świadczy następujące usługi:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Projektowanie i tworzenie stron internetowych</li>
                    <li>Tworzenie sklepów internetowych</li>
                    <li>Rozwój aplikacji webowych</li>
                    <li>Optymalizacja SEO</li>
                    <li>Hosting i utrzymanie stron internetowych</li>
                    <li>Konsultacje techniczne</li>
                    <li>Wsparcie techniczne</li>
                  </ul>
                </li>
                <li>
                  Szczegółowy zakres usług określany jest w umowie indywidualnej 
                  lub ofercie handlowej.
                </li>
                <li>
                  Usługodawca zastrzega sobie prawo do odmowy świadczenia usług 
                  w przypadku konfliktu z obowiązującym prawem lub zasadami etycznymi.
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">§3. Zawieranie umowy</h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  Umowa może być zawarta:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>W formie pisemnej</li>
                    <li>W formie elektronicznej (e-mail)</li>
                    <li>Ustnie z potwierdzeniem pisemnym</li>
                  </ul>
                </li>
                <li>
                  Przed zawarciem umowy Usługodawca przedstawia Klientowi:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Szczegółową ofertę handlową</li>
                    <li>Harmonogram realizacji</li>
                    <li>Wycenę usług</li>
                    <li>Warunki płatności</li>
                  </ul>
                </li>
                <li>
                  Umowa jest zawierana po akceptacji oferty przez Klienta 
                  i potwierdzeniu przez Usługodawcę.
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">§4. Prawa i obowiązki Usługodawcy</h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Obowiązki Usługodawcy:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Świadczenie usług zgodnie z umową i najlepszą wiedzą</li>
                    <li>Przestrzeganie terminów realizacji</li>
                    <li>Zachowanie poufności informacji przekazanych przez Klienta</li>
                    <li>Przekazanie Klientowi wszystkich praw do wytworzonych dzieł</li>
                    <li>Zapewnienie wsparcia technicznego w ramach umowy</li>
                  </ul>
                </li>
                <li>
                  <strong>Prawa Usługodawcy:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Prawo do odmowy realizacji projektów niezgodnych z prawem</li>
                    <li>Prawo do wykorzystania realizacji w portfolio</li>
                    <li>Prawo do żądania dodatkowych informacji od Klienta</li>
                    <li>Prawo do wstrzymania prac w przypadku braku płatności</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">§5. Prawa i obowiązki Klienta</h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Obowiązki Klienta:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Dostarczenie wszystkich niezbędnych materiałów i informacji</li>
                    <li>Terminowe płatności zgodnie z umową</li>
                    <li>Współpraca w procesie realizacji projektu</li>
                    <li>Przekazanie praw do materiałów wykorzystanych w projekcie</li>
                    <li>Zachowanie poufności informacji technicznych</li>
                  </ul>
                </li>
                <li>
                  <strong>Prawa Klienta:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Prawo do kontroli postępów prac</li>
                    <li>Prawo do zgłaszania uwag i poprawek</li>
                    <li>Prawo do odstąpienia od umowy na warunkach określonych w umowie</li>
                    <li>Prawo do reklamacji</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">§6. Warunki płatności</h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  Ceny usług określane są w ofercie handlowej i są cenami netto 
                  (bez podatku VAT).
                </li>
                <li>
                  Podatek VAT doliczany jest zgodnie z obowiązującymi przepisami.
                </li>
                <li>
                  Płatności realizowane są:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Przelewem bankowym na rachunek Usługodawcy</li>
                    <li>W terminie określonym w umowie</li>
                    <li>Zgodnie z harmonogramem płatności</li>
                  </ul>
                </li>
                <li>
                  W przypadku opóźnienia w płatności Usługodawca może:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Wstrzymać realizację projektu</li>
                    <li>Naliczyć odsetki za zwłokę</li>
                    <li>Rozwiązać umowę</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">§7. Terminy realizacji</h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  Terminy realizacji określane są w umowie lub ofercie handlowej.
                </li>
                <li>
                  Terminy mogą być przedłużone w przypadku:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Siły wyższej</li>
                    <li>Opóźnień po stronie Klienta</li>
                    <li>Zmian w zakresie projektu</li>
                    <li>Awarii technicznych</li>
                  </ul>
                </li>
                <li>
                  Usługodawca informuje Klienta o ewentualnych opóźnieniach 
                  w możliwie najkrótszym terminie.
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">§8. Odpowiedzialność</h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  Usługodawca ponosi odpowiedzialność za szkody wyrządzone 
                  umyślnie lub z winy nieumyślnej.
                </li>
                <li>
                  Odpowiedzialność Usługodawcy jest ograniczona do wysokości 
                  wynagrodzenia za usługę.
                </li>
                <li>
                  Usługodawca nie ponosi odpowiedzialności za:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Szkody pośrednie</li>
                    <li>Utratę zysków</li>
                    <li>Szkody wynikające z działania siły wyższej</li>
                    <li>Szkody spowodowane przez Klienta</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">§9. Poufność</h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  Strony zobowiązują się do zachowania poufności informacji 
                  przekazanych w związku z realizacją umowy.
                </li>
                <li>
                  Obowiązek poufności trwa przez okres 5 lat od zakończenia umowy.
                </li>
                <li>
                  Wyjątki od obowiązku poufności:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Informacje publicznie dostępne</li>
                    <li>Informacje przekazane za zgodą drugiej strony</li>
                    <li>Informacje wymagane przez przepisy prawa</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">§10. Własność intelektualna</h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  Wszystkie prawa do wytworzonych dzieł przechodzą na Klienta 
                  po pełnej zapłacie wynagrodzenia.
                </li>
                <li>
                  Usługodawca zachowuje prawo do wykorzystania realizacji 
                  w celach promocyjnych i portfolio.
                </li>
                <li>
                  Klient zapewnia, że posiada prawa do materiałów 
                  przekazanych Usługodawcy.
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">§11. Rozwiązanie umowy</h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  Umowa może być rozwiązana:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Za porozumieniem stron</li>
                    <li>W przypadku istotnego naruszenia umowy</li>
                    <li>W przypadku upadłości jednej ze stron</li>
                    <li>Z przyczyn technicznych uniemożliwiających realizację</li>
                  </ul>
                </li>
                <li>
                  W przypadku rozwiązania umowy:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Usługodawca przekazuje Klientowi wykonane prace</li>
                    <li>Klient płaci za wykonane prace</li>
                    <li>Strony zwracają sobie przekazane materiały</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">§12. Postanowienia końcowe</h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  W sprawach nieuregulowanych niniejszym regulaminem 
                  zastosowanie mają przepisy prawa polskiego.
                </li>
                <li>
                  Wszelkie spory będą rozstrzygane przez sąd właściwy 
                  dla siedziby Usługodawcy.
                </li>
                <li>
                  Regulamin może być zmieniony przez Usługodawcę 
                  z zachowaniem 30-dniowego terminu wypowiedzenia.
                </li>
                <li>
                  W przypadku niezgodności postanowień umowy z regulaminem, 
                  pierwszeństwo mają postanowienia umowy.
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">§13. Dane kontaktowe</h2>
              <div className="bg-secondary/30 p-6 rounded-lg">
                <p className="mb-2"><strong>TechFlow Solutions</strong></p>
                <p className="mb-2"><strong>Adres:</strong> ul. Przykładowa 123, 00-000 Warszawa</p>
                <p className="mb-2"><strong>NIP:</strong> 1234567890</p>
                <p className="mb-2"><strong>REGON:</strong> 123456789</p>
                <p className="mb-2"><strong>E-mail:</strong> kontakt@techflowsolutions.pl</p>
                <p className="mb-2"><strong>Telefon:</strong> +48 123 456 789</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;
