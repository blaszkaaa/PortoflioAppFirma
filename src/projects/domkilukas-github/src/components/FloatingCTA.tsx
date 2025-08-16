import { motion } from 'framer-motion';

type FloatingCTAProps = {
  onClick: () => void;
};

const FloatingCTA = ({ onClick }: FloatingCTAProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        id="consultationFormButton"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-colors"
        onClick={onClick}
      >
        <span className="font-medium">Zamów konsultację</span>
      </motion.button>
    </div>
  );
};

export default FloatingCTA;
