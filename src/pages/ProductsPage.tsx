import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Monitor, Navigation, UserCheck, Radio, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import productPanel from "@/assets/product-panel.jpg";

const products = [
  {
    icon: Monitor,
    title: "Interactive Panel",
    description: "Smart classroom and meeting room solutions with touch-enabled displays for engaging presentations and collaborative learning.",
    features: ["Multi-touch technology", "4K Display Quality", "Wireless Screen Sharing", "Built-in Android OS"],
  },
  {
    icon: Navigation,
    title: "GPS Tracking System",
    description: "Real-time vehicle and asset tracking with advanced analytics for fleet management and security monitoring.",
    features: ["Live Location Tracking", "Route Optimization", "Fuel Monitoring", "Driver Behavior Analysis"],
  },
  {
    icon: UserCheck,
    title: "Face Attendance",
    description: "Biometric attendance management with facial recognition technology for accurate and contactless attendance tracking.",
    features: ["Contactless Check-in", "Real-time Reports", "Integration Ready", "Anti-spoofing Technology"],
  },
  {
    icon: Radio,
    title: "Real-Time Tracking",
    description: "Live monitoring solutions for assets, personnel, and operations with instant alerts and comprehensive dashboards.",
    features: ["Instant Notifications", "Geofencing", "Historical Data", "Custom Reports"],
  },
  {
    icon: BookOpen,
    title: "Library System",
    description: "Complete digital library management with cataloging, borrowing, and inventory management for modern libraries.",
    features: ["Digital Catalog", "Online Reservations", "Fine Management", "Member Portal"],
  },
  {
    icon: GraduationCap,
    title: "School Management",
    description: "End-to-end school administration from admissions to alumni management with comprehensive academic tracking.",
    features: ["Student Information", "Fee Management", "Exam & Results", "Parent Portal"],
  },
];

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Products</span>
              <h1 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-6">
                Powerful <span className="gradient-text">Software Solutions</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Discover our suite of innovative products designed to streamline operations, enhance productivity, and drive growth for educational institutions and businesses.
              </p>
              <a
                href="https://learn-bridge-solutions.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Explore All Products
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src={productPanel}
                alt="Interactive Panel"
                className="rounded-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold mb-4">
              Complete Product <span className="gradient-text">Suite</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each product is designed with cutting-edge technology to meet the evolving needs of modern organizations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group gradient-border p-6 hover:scale-[1.02] transition-transform"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <product.icon className="w-7 h-7 text-primary" />
                </div>
                
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <a
                    href="https://learn-bridge-solutions.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors p-1 z-10 relative cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open("https://learn-bridge-solutions.vercel.app/", "_blank");
                    }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold mb-6">
              Interested in Our Products?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with us for a demo or to learn more about how our solutions can benefit your organization.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://learn-bridge-solutions.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                  Visit Product Site
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect">
                  Request Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
