import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Search, Target, LineChart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/division-growth-engine.jpg";

const services = [
  "Search Engine Optimization (SEO)",
  "Pay-Per-Click Advertising (PPC)",
  "Conversion Rate Optimization",
  "Marketing Automation",
  "Performance Analytics",
  "A/B Testing & Experimentation",
];

const capabilities = [
  {
    icon: Search,
    title: "SEO Mastery",
    description: "Organic visibility that drives sustainable, long-term growth.",
  },
  {
    icon: Target,
    title: "Paid Media",
    description: "Precision-targeted campaigns that maximize every ad dollar.",
  },
  {
    icon: LineChart,
    title: "Analytics",
    description: "Deep insights that inform strategy and prove ROI.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Scalable strategies designed for exponential business growth.",
  },
];

const GrowthEnginePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Growth Engine" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Performance Marketing & SEO</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold mt-4 mb-6">
              Growth <span className="gradient-text">Engine</span>
            </h1>
            <p className="text-muted-foreground text-xl mb-8 max-w-2xl">
              Driven by scale, performance, and measurable business impact.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect">
                Accelerate Growth
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img src={heroImage} alt="Performance Marketing" className="w-full h-96 object-cover rounded-2xl" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="font-display text-4xl font-bold mb-6">
                Performance <span className="gradient-text">Services</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We're obsessed with results. Every campaign, every optimization, every strategy 
                is designed to move the needle on what matters most: your growth.
              </p>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold mb-4">
              Our <span className="gradient-text">Approach</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Data-driven strategies that deliver measurable, scalable results.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="gradient-border p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <capability.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{capability.title}</h3>
                <p className="text-muted-foreground text-sm">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Scale?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's fuel your growth with performance marketing that delivers.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect">
                Start Growing
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GrowthEnginePage;
