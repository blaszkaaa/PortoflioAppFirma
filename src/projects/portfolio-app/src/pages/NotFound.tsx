import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

function NotFound() {
  const location = useLocation();

  // Logowanie błędu 404 dla celów debugowania
  useEffect(() => {
    console.error(
      "404 Error: Użytkownik próbował uzyskać dostęp do nieistniejącej ścieżki:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Strona nie została znaleziona
        </h2>
        <p className="text-muted-foreground mb-8">
          Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.
        </p>
        <Button 
          onClick={() => window.location.href = '/'}
          className="bg-primary hover:bg-primary-hover"
        >
          <Home className="w-4 h-4 mr-2" />
          Wróć do strony głównej
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
