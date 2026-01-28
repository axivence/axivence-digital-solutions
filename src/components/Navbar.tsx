import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const divisions = [
  { name: "Think Tank", href: "/divisions/think-tank", subtitle: "Strategy & Planning" },
  { name: "Stack", href: "/divisions/stack", subtitle: "Branding & Packaging" },
  { name: "UX Core", href: "/divisions/ux-core", subtitle: "Web, Mobile & Software" },
  { name: "Launchpad", href: "/divisions/launchpad", subtitle: "Products & Platforms" },
  { name: "Pulse", href: "/divisions/pulse", subtitle: "Social Media" },
  { name: "Growth Engine", href: "/divisions/growth-engine", subtitle: "Performance & SEO" },
  { name: "GroundWorks", href: "/divisions/groundworks", subtitle: "Offline Creative" },
  { name: "Motion House", href: "/divisions/motion-house", subtitle: "Films & Photoshoots" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const isDivisionActive = () => location.pathname.startsWith("/divisions");

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-card"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-xl">A</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">Axivence</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`transition-colors duration-300 font-medium ${
                  isActive(link.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Divisions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDivisionsOpen(true)}
              onMouseLeave={() => setIsDivisionsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 transition-colors duration-300 font-medium ${
                  isDivisionActive()
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                Divisions
                <ChevronDown className={`w-4 h-4 transition-transform ${isDivisionsOpen ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {isDivisionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 glass-card rounded-xl p-2 shadow-xl"
                  >
                    {divisions.map((division) => (
                      <Link
                        key={division.name}
                        to={division.href}
                        className={`block px-4 py-3 rounded-lg transition-colors ${
                          location.pathname === division.href
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-primary/5"
                        }`}
                      >
                        <div className="font-medium text-foreground">{division.name}</div>
                        <div className="text-xs text-muted-foreground">{division.subtitle}</div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`px-4 py-2 rounded-lg transition-colors duration-300 font-medium ${
                      isActive(link.href)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Mobile Divisions */}
                <div className="px-4 py-2">
                  <button
                    className={`flex items-center gap-1 w-full font-medium ${
                      isDivisionActive() ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsDivisionsOpen(!isDivisionsOpen)}
                  >
                    Divisions
                    <ChevronDown className={`w-4 h-4 transition-transform ${isDivisionsOpen ? "rotate-180" : ""}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isDivisionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 ml-4 flex flex-col gap-1"
                      >
                        {divisions.map((division) => (
                          <Link
                            key={division.name}
                            to={division.href}
                            className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                              location.pathname === division.href
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:bg-primary/5"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="font-medium">{division.name}</div>
                            <div className="text-xs opacity-70">{division.subtitle}</div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <Link to="/contact" onClick={() => setIsOpen(false)} className="px-4">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-2">
                    Get Started
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
