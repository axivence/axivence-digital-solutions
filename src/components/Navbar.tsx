import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

// Import division images
import thinkTankImg from "@/assets/division-think-tank.jpg";
import stackImg from "@/assets/division-stack.jpg";
import uxCoreImg from "@/assets/division-ux-core.jpg";
import launchpadImg from "@/assets/division-launchpad.jpg";
import pulseImg from "@/assets/division-pulse.jpg";
import growthEngineImg from "@/assets/division-growth-engine.jpg";
import groundWorksImg from "@/assets/division-groundworks.jpg";
import motionHouseImg from "@/assets/division-motion-house.jpg";

const divisions = [
  { name: "Think Tank", href: "/divisions/think-tank", subtitle: "Strategy & Planning", image: thinkTankImg, color: "from-violet-500/20 to-purple-600/20" },
  { name: "Stack", href: "/divisions/stack", subtitle: "Branding & Packaging", image: stackImg, color: "from-amber-500/20 to-orange-600/20" },
  { name: "UX Core", href: "/divisions/ux-core", subtitle: "Web, Mobile & Software", image: uxCoreImg, color: "from-cyan-500/20 to-blue-600/20" },
  { name: "Launchpad", href: "/divisions/launchpad", subtitle: "Products & Platforms", image: launchpadImg, color: "from-emerald-500/20 to-green-600/20" },
  { name: "Pulse", href: "/divisions/pulse", subtitle: "Social Media", image: pulseImg, color: "from-pink-500/20 to-rose-600/20" },
  { name: "Growth Engine", href: "/divisions/growth-engine", subtitle: "Performance & SEO", image: growthEngineImg, color: "from-red-500/20 to-orange-600/20" },
  { name: "GroundWorks", href: "/divisions/groundworks", subtitle: "Offline Creative", image: groundWorksImg, color: "from-stone-500/20 to-zinc-600/20" },
  { name: "Motion House", href: "/divisions/motion-house", subtitle: "Films & Photoshoots", image: motionHouseImg, color: "from-indigo-500/20 to-violet-600/20" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);
  const [hoveredDivision, setHoveredDivision] = useState<typeof divisions[0] | null>(null);
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
              <span className="font-display font-bold text-primary-foreground text-xl">CF</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">Core Fusion</span>
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
            
            {/* Mega Menu Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDivisionsOpen(true)}
              onMouseLeave={() => {
                setIsDivisionsOpen(false);
                setHoveredDivision(null);
              }}
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
              
              {/* Mega Menu */}
              <AnimatePresence>
                {isDivisionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-[800px] glass-card rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
                    style={{ transform: "translateX(25%)" }}
                  >
                    <div className="flex">
                      {/* Division Links */}
                      <div className="w-1/2 p-4 grid grid-cols-2 gap-2">
                        {divisions.map((division) => (
                          <Link
                            key={division.name}
                            to={division.href}
                            className={`group relative p-3 rounded-xl transition-all duration-300 ${
                              location.pathname === division.href
                                ? "bg-primary/10"
                                : "hover:bg-white/5"
                            }`}
                            onMouseEnter={() => setHoveredDivision(division)}
                          >
                            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${division.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                            <div className="relative z-10">
                              <div className={`font-semibold text-sm ${location.pathname === division.href ? "text-primary" : "text-foreground group-hover:text-primary"} transition-colors`}>
                                {division.name}
                              </div>
                              <div className="text-xs text-muted-foreground mt-0.5">
                                {division.subtitle}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      {/* Preview Image */}
                      <div className="w-1/2 relative overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={hoveredDivision?.name || "default"}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0"
                          >
                            <img 
                              src={hoveredDivision?.image || divisions[0].image} 
                              alt={hoveredDivision?.name || "Division"} 
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                              <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                              >
                                <h4 className="font-display font-bold text-lg text-foreground">
                                  {hoveredDivision?.name || divisions[0].name}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  {hoveredDivision?.subtitle || divisions[0].subtitle}
                                </p>
                              </motion.div>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                    
                    {/* Bottom CTA */}
                    <div className="border-t border-white/10 p-4 bg-gradient-to-r from-primary/5 to-accent/5">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                          Explore all our specialized divisions
                        </p>
                        <Link to="/services" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                          View All Services →
                        </Link>
                      </div>
                    </div>
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
                        className="mt-2 flex flex-col gap-1"
                      >
                        {divisions.map((division) => (
                          <Link
                            key={division.name}
                            to={division.href}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                              location.pathname === division.href
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:bg-primary/5"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <img 
                              src={division.image} 
                              alt={division.name}
                              className="w-10 h-10 rounded-lg object-cover"
                            />
                            <div>
                              <div className="font-medium">{division.name}</div>
                              <div className="text-xs opacity-70">{division.subtitle}</div>
                            </div>
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
