import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

// Strony
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ProjectViewer from "./components/ProjectViewer";
import LiveProjectViewer from "./components/LiveProjectViewer";
import ProjectRenderer from "./components/ProjectRenderer";
import DynamicProjectRenderer from "./components/DynamicProjectRenderer";

// Konfiguracja React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minut
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
            <Route path="/regulamin" element={<TermsOfService />} />
            <Route path="/projekty/:projectId" element={<ProjectViewer />} />
            <Route path="/live/:projectId" element={<LiveProjectViewer />} />
            <Route path="/render/:projectId" element={<ProjectRenderer />} />
            <Route path="/demo/:projectId" element={<DynamicProjectRenderer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
