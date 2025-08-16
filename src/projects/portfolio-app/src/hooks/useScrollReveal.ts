import { useEffect } from 'react';

/**
 * Hook do obsługi animacji scroll reveal
 * Dodaje klasę 'active' do elementów z klasą 'reveal' gdy stają się widoczne
 */
export const useScrollReveal = () => {
  useEffect(() => {
    // Konfiguracja Intersection Observer
    const observerOptions = {
      threshold: 0.1, // Element jest widoczny gdy 10% jest w viewport
      rootMargin: '0px 0px -50px 0px' // Dodatkowy margines na dole
    };

    // Tworzenie observera
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Dodajemy klasę 'active' gdy element jest widoczny
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Znajdujemy wszystkie elementy z klasą 'reveal'
    const revealElements = document.querySelectorAll('.reveal');
    
    // Obserwujemy każdy element
    revealElements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup - usuwamy observera przy odmontowaniu komponentu
    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []); // Pusty dependency array - hook uruchamia się tylko raz
};