import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    title: "Transform Your Digital Presence",
    subtitle: "Strategic digital marketing solutions that drive real results",
    cta: "Our Services",
    link: "/services",
  },
  {
    image: hero2,
    title: "Custom Web Development",
    subtitle: "Beautiful, responsive websites built with cutting-edge technology",
    cta: "View Services",
    link: "/services",
  },
  {
    image: hero3,
    title: "Innovative App Solutions",
    subtitle: "Native and cross-platform applications for iOS and Android",
    cta: "Explore Products",
    link: "/products",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Welcome to Core Fusion
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {slides[currentSlide].title.split(" ").map((word, i) => (
                <span key={i} className={i === slides[currentSlide].title.split(" ").length - 1 ? "gradient-text" : ""}>
                  {word}{" "}
                </span>
              ))}
            </h1>
            <p className="text-muted-foreground text-xl mb-8 max-w-lg">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex gap-4">
              <Link to={slides[currentSlide].link}>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect">
                  {slides[currentSlide].cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-muted-foreground/50 hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
