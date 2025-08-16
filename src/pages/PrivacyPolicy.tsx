import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function PrivacyPolicy() {
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
              Polityka Prywatności
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
              <h2 className="text-2xl font-bold mb-6">1. Informacje ogólne</h2>
              <p className="mb-4">
                TechFlow Solutions z siedzibą w Warszawie, ul. Przykładowa 123, 00-000 Warszawa, 
                NIP: 1234567890, REGON: 123456789, zwana dalej "Administratorem" lub "Firmą", 
                jest administratorem danych osobowych w rozumieniu Rozporządzenia Parlamentu 
                Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony 
                osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego 
                przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).
              </p>
              <p>
                Niniejsza Polityka Prywatności określa zasady przetwarzania danych osobowych 
                przez Firmę oraz informuje o prawach przysługujących osobom, których dane dotyczą.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">2. Cele przetwarzania danych osobowych</h2>
              <p className="mb-4">Dane osobowe przetwarzamy w następujących celach:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Świadczenie usług web development i konsultacji</li>
                <li>Komunikacja z klientami i potencjalnymi klientami</li>
                <li>Realizacja umów i świadczenie usług</li>
                <li>Marketing bezpośredni własnych usług</li>
                <li>Analiza statystyczna i poprawa jakości usług</li>
                <li>Wypełnianie obowiązków prawnych</li>
                <li>Dochodzenie roszczeń i obrona przed roszczeniami</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">3. Rodzaje przetwarzanych danych</h2>
              <p className="mb-4">Przetwarzamy następujące kategorie danych osobowych:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dane identyfikacyjne (imię, nazwisko)</li>
                <li>Dane kontaktowe (adres e-mail, numer telefonu)</li>
                <li>Dane adresowe (adres zamieszkania/siedziby)</li>
                <li>Dane zawodowe (nazwa firmy, stanowisko)</li>
                <li>Dane techniczne (adres IP, informacje o urządzeniu)</li>
                <li>Dane o aktywności na stronie internetowej</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">4. Podstawa prawna przetwarzania</h2>
              <p className="mb-4">Dane osobowe przetwarzamy na podstawie:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Art. 6 ust. 1 lit. b) RODO - przetwarzanie jest niezbędne do wykonania umowy</li>
                <li>Art. 6 ust. 1 lit. f) RODO - prawnie uzasadniony interes administratora</li>
                <li>Art. 6 ust. 1 lit. a) RODO - zgoda osoby, której dane dotyczą</li>
                <li>Art. 6 ust. 1 lit. c) RODO - wypełnienie obowiązku prawnego</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">5. Okres przechowywania danych</h2>
              <p className="mb-4">Dane osobowe przechowujemy przez okres:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dane klientów - przez okres świadczenia usług + 10 lat</li>
                <li>Dane potencjalnych klientów - do momentu wycofania zgody lub 3 lata</li>
                <li>Dane marketingowe - do momentu wycofania zgody</li>
                <li>Dane techniczne - maksymalnie 2 lata</li>
                <li>Dane księgowe - 5 lat od końca roku kalendarzowego</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">6. Odbiorcy danych</h2>
              <p className="mb-4">Dane osobowe mogą być udostępniane:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Podmiotom świadczącym usługi hostingowe</li>
                <li>Podmiotom świadczącym usługi analityczne</li>
                <li>Organom administracji publicznej (na żądanie)</li>
                <li>Podmiotom świadczącym usługi prawne i księgowe</li>
                <li>Innym podmiotom wyłącznie za zgodą osoby, której dane dotyczą</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">7. Prawa osób, których dane dotyczą</h2>
              <p className="mb-4">Przysługują Ci następujące prawa:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prawo dostępu do danych osobowych</li>
                <li>Prawo do sprostowania danych</li>
                <li>Prawo do usunięcia danych (prawo do bycia zapomnianym)</li>
                <li>Prawo do ograniczenia przetwarzania</li>
                <li>Prawo do przenoszenia danych</li>
                <li>Prawo do sprzeciwu</li>
                <li>Prawo do wycofania zgody</li>
                <li>Prawo do wniesienia skargi do organu nadzorczego</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">8. Bezpieczeństwo danych</h2>
              <p className="mb-4">
                Stosujemy odpowiednie środki techniczne i organizacyjne, aby chronić dane osobowe 
                przed nieuprawnionym dostępem, utratą, zniszczeniem lub zmianą. Obejmują one:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Szyfrowanie danych w spoczynku i w transporcie</li>
                <li>Regularne kopie zapasowe</li>
                <li>Kontrola dostępu do danych</li>
                <li>Monitoring systemów bezpieczeństwa</li>
                <li>Szkolenia pracowników w zakresie ochrony danych</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">9. Pliki cookies</h2>
              <p className="mb-4">
                Nasza strona internetowa używa plików cookies w celu poprawy funkcjonalności 
                i analizy ruchu. Szczegółowe informacje znajdują się w naszej Polityce Cookies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">10. Kontakt</h2>
              <p className="mb-4">
                W sprawach związanych z ochroną danych osobowych możesz kontaktować się z nami:
              </p>
              <div className="bg-secondary/30 p-6 rounded-lg">
                <p className="mb-2"><strong>Adres:</strong> ul. Przykładowa 123, 00-000 Warszawa</p>
                <p className="mb-2"><strong>E-mail:</strong> rodo@techflowsolutions.pl</p>
                <p className="mb-2"><strong>Telefon:</strong> +48 123 456 789</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">11. Zmiany w Polityce Prywatności</h2>
              <p>
                Zastrzegamy sobie prawo do zmiany niniejszej Polityki Prywatności. 
                O wszelkich zmianach będziemy informować poprzez aktualizację daty 
                "Ostatnia aktualizacja" na początku dokumentu.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
