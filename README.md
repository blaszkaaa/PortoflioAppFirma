# TechFlow Solutions - Profesjonalna strona internetowa

## O projekcie

Strona internetowa firmy TechFlow Solutions - profesjonalnej agencji web developmentowej specjalizującej się w tworzeniu nowoczesnych stron internetowych, sklepów online i aplikacji webowych.

## Funkcjonalności

- **Responsywny design** - strona działa perfekcyjnie na wszystkich urządzeniach
- **Nowoczesny interfejs** - wykorzystuje najnowsze technologie webowe
- **Sekcje informacyjne** - Hero, O nas, Usługi, Portfolio, Kontakt
- **Formularz kontaktowy** - z walidacją i obsługą błędów
- **Animacje scroll reveal** - płynne animacje przy przewijaniu
- **Optymalizacja SEO** - przyjazna dla wyszukiwarek

## Technologie

Projekt został zbudowany z wykorzystaniem:

- **React 18** - nowoczesny framework JavaScript
- **TypeScript** - typowanie statyczne dla lepszej jakości kodu
- **Vite** - szybki bundler i dev server
- **Tailwind CSS** - utility-first CSS framework
- **shadcn/ui** - komponenty UI
- **React Router** - routing aplikacji
- **Lucide React** - ikony

## Instalacja i uruchomienie

### Wymagania

- Node.js (wersja 18 lub nowsza)
- npm lub yarn

### Kroki instalacji

```bash
# 1. Sklonuj repozytorium
git clone <URL_REPOZYTORIUM>

# 2. Przejdź do katalogu projektu
cd webdev-pro-website

# 3. Zainstaluj zależności
npm install

# 4. Uruchom serwer deweloperski
npm run dev
```

Aplikacja będzie dostępna pod adresem `http://localhost:5173`

### Dostępne skrypty

- `npm run dev` - uruchamia serwer deweloperski
- `npm run build` - buduje aplikację do produkcji
- `npm run preview` - podgląd zbudowanej aplikacji
- `npm run lint` - sprawdza kod pod kątem błędów

## Struktura projektu

```
src/
├── components/          # Komponenty React
│   ├── ui/             # Komponenty UI (shadcn/ui)
│   ├── Hero.tsx        # Sekcja główna
│   ├── About.tsx       # Sekcja "O nas"
│   ├── Services.tsx    # Sekcja usług
│   ├── Portfolio.tsx   # Sekcja portfolio
│   ├── Contact.tsx     # Sekcja kontaktowa
│   ├── Navigation.tsx  # Nawigacja
│   └── Footer.tsx      # Stopka
├── hooks/              # Custom hooki
├── pages/              # Strony aplikacji
├── lib/                # Narzędzia i utility
└── main.tsx           # Punkt wejścia aplikacji
```

## Wdrażanie

Aplikacja może być wdrożona na dowolnej platformie hostingowej obsługującej statyczne pliki:

- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

### Budowanie do produkcji

```bash
npm run build
```

Zbudowane pliki znajdziesz w katalogu `dist/`.

## Kontakt

W przypadku pytań lub problemów z projektem, skontaktuj się z zespołem TechFlow Solutions.

---

© 2024 TechFlow Solutions. Wszystkie prawa zastrzeżone.
