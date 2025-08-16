import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Znajdujemy element root w DOM
const rootElement = document.getElementById("root");

// Sprawdzamy czy element istnieje
if (!rootElement) {
  throw new Error("Element 'root' nie został znaleziony w DOM");
}

// Tworzymy root i renderujemy aplikację
const root = createRoot(rootElement);
root.render(<App />);
