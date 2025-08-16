import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Palette, Factory, Truck, Clock, ChevronDown, ChevronUp } from 'lucide-react';

const TIMELINE_STEPS = [
    {
        id: 1,
        title: 'Projekt 32D',
        icon: Palette,
        description: 'Wizualizacja Twojego wymarzonego domu. Współpracujemy z architektem aby dostosować projekt do Twoich potrzeb.',
        details: 'Wykorzystujemy zaawansowane oprogramowanie do tworzenia realistycznych wizualizacji 3D. Możesz zobaczyć swój przyszły dom z każdej perspektywy, eksperymentować z układem pomieszczeń, materiałami wykończeniowymi i kolorystyką. Nasi architekci są dostępni na każdym etapie procesu projektowego.'
    },
    {
        id: 2,
        title: 'Produkcja modułów',
        icon: Factory,
        description: 'Produkcja w kontrolowanych warunkach fabrycznych zapewnia najwyższą jakość i precyzję wykonania.',
        details: 'W naszej fabryce produkujemy wszystkie elementy Twojego domu, od konstrukcji nośnej po instalacje. Kontrolowane środowisko produkcyjne eliminuje problemy związane z tradycyjnym budownictwem - wilgoć, zmienne temperatury czy opady. Każdy moduł przechodzi rygorystyczną kontrolę jakości przed opuszczeniem linii produkcyjnej.'
    },
    {
        id: 3,
        title: 'Transport',
        icon: Truck,
        description: 'Bezpieczny transport modułów na miejsce docelowe z wykorzystaniem specjalistycznego sprzętu.',
        details: 'Moduły Twojego domu są transportowane ciężarówkami na miejsce budowy. Korzystamy z zaawansowanej logistyki i planowania tras, aby zapewnić bezpieczny i terminowy transport. Specjalne systemy mocowania zabezpieczają moduły przed uszkodzeniami podczas transportu.'
    },
    {
        id: 4,
        title: 'Montaż (<2 dni)',
        icon: Clock,
        description: 'Szybki i efektywny montaż modułów na przygotowanym wcześniej fundamencie.',
        details: 'Proces montażu jest niesamowicie szybki - trwa mniej niż 48 godzin. Po przywiezieniu modułów na miejsce, specjalistyczny dźwig umieszcza je na przygotowanym fundamencie. Następnie zespół montażowy łączy moduły, podłącza instalacje i wykonuje końcowe prace wykończeniowe.'
    },
    {
        id: 5,
        title: 'Gotowe do zamieszkania',
        icon: Home,
        description: 'Twój nowy dom jest gotowy do wprowadzenia się - w pełni wyposażony i funkcjonalny.',
        details: 'Po zakończeniu montażu, Twój dom jest natychmiast gotowy do zamieszkania. Wszystkie instalacje zostały przetestowane, systemy działają, a Ty możesz cieszyć się nowym, ekologicznym domem. W standardzie zapewniamy także pierwszy rok serwisu gwarancyjnego i wsparcie techniczne.'
    }
];

const Timeline = () => {
    const [expandedStep, setExpandedStep] = useState(null);

    const toggleStep = (stepId) => {
        setExpandedStep(expandedStep === stepId ? null : stepId);
    };

    const timelineVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
                staggerChildren: 0.2,
            },
        },
    };

    const stepVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeInOut",
            },
        },
    };

    const detailsVariants = {
        initial: { opacity: 0, height: 0 },
        animate: { 
            height: 'auto',
            opacity: 1,
            transition: { 
                height: { duration: 0.4, ease: "easeInOut" },
                opacity: { duration: 0.3, delay: 0.25 }
            }
        },
        exit: { 
            height: 0,
            opacity: 0,
            transition: { 
                opacity: { duration: 0.2 },
                height: { duration: 0.3, delay: 0.1 }
            }
        }
    };

    return (
        <section id="etapy" className="py-20 bg-eco-light">
            <div className="container mx-auto px-4">
                <motion.div
                    variants={timelineVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-eco-anthracite mb-4">Etapy realizacji</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Proces budowy Twojego domu modułowego jest prosty, przejrzysty i niezwykle szybki.
                        Od projektu do wprowadzenia się mija zaledwie 30 dni.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200 z-0" />

                    {/* Timeline Steps */}
                    <motion.div
                        variants={timelineVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-12 relative z-10"
                    >
                        {TIMELINE_STEPS.map((step, index) => (
                            <motion.div
                                key={step.id}
                                variants={stepVariants}
                                className="relative"
                            >
                                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                                    {/* Timeline Circle */}
                                    <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full shadow-lg mb-4 md:mb-0">
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 1 }}
                                        >
                                            <step.icon size={28} className="text-white" />
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className={`w-full md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                                        <motion.div
                                            layoutId={`step-${step.id}`}
                                            whileHover={{ scale: 1.02 }}
                                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <motion.h3 layoutId={`title-${step.id}`} className="text-xl font-semibold text-eco-anthracite">{step.title}</motion.h3>
                                                <span className="flex items-center justify-center w-8 h-8 bg-orange-100 text-orange-600 rounded-full font-semibold">
                                                    {step.id}
                                                </span>
                                            </div>
                                            <motion.p layoutId={`description-${step.id}`} className="text-gray-600 mb-4">{step.description}</motion.p>

                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => toggleStep(step.id)}
                                                className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
                                            >
                                                {expandedStep === step.id ? (
                                                    <>
                                                        Ukryj szczegóły <ChevronUp size={18} />
                                                    </>
                                                ) : (
                                                    <>
                                                        Pokaż szczegóły <ChevronDown size={18} />
                                                    </>
                                                )}
                                            </motion.button>

                                            <AnimatePresence mode="wait">
                                                {expandedStep === step.id && (
                                                    <motion.div
                                                        layoutId={`details-${step.id}`}
                                                        variants={detailsVariants}
                                                        initial="initial"
                                                        animate="animate"
                                                        exit="exit"
                                                        className="mt-4 pt-4 border-t border-gray-100 overflow-hidden"
                                                    >
                                                        <motion.p 
                                                            initial={{ opacity: 0 }}
                                                            animate={{ 
                                                                opacity: 1,
                                                                transition: { delay: 0.25, duration: 0.3 }
                                                            }}
                                                            exit={{ opacity: 0, transition: { duration: 0.2 } }}
                                                            className="text-gray-600"
                                                        >
                                                            {step.details}
                                                        </motion.p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
