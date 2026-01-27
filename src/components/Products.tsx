import { motion } from "framer-motion";
import { Monitor, Navigation, UserCheck, Radio, BookOpen, GraduationCap, ExternalLink } from "lucide-react";

const products = [
  {
    icon: Monitor,
    title: "Interactive Panel",
    description: "Smart classroom and meeting room solutions with touch-enabled displays.",
  },
  {
    icon: Navigation,
    title: "GPS Tracking System",
    description: "Real-time vehicle and asset tracking with advanced analytics.",
  },
  {
    icon: UserCheck,
    title: "Face Attendance",
    description: "Biometric attendance management with facial recognition technology.",
  },
  {
    icon: Radio,
    title: "Real-Time Tracking",
    description: "Live monitoring solutions for assets, personnel, and operations.",
  },
  {
    icon: BookOpen,
    title: "Library System",
    description: "Complete digital library management with cataloging and borrowing.",
  },
  {
    icon: GraduationCap,
    title: "School Management",
    description: "End-to-end school administration from admissions to alumni.",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Powerful <span className="gradient-text">Software Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Designed to streamline operations and drive growth for your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group gradient-border p-6 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <product.icon className="w-7 h-7 text-primary" />
              </div>
              
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <a
                  href="https://learn-bridge-solutions.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-1"
                  title="Learn more"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              
              <p className="text-muted-foreground">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
