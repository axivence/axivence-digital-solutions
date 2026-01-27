import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Monitor, Smartphone, Code, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import servicesMarketing from "@/assets/services-marketing.jpg";
import servicesWeb from "@/assets/services-web.jpg";
import servicesApp from "@/assets/services-app.jpg";
import servicesSoftware from "@/assets/services-software.jpg";

const services = [
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Strategic campaigns that drive traffic, boost conversions, and maximize your ROI across all digital channels.",
    image: servicesMarketing,
    features: ["SEO & SEM Optimization", "Social Media Marketing", "Content Strategy & Creation", "Analytics & Performance Tracking", "Email Marketing Campaigns", "PPC Advertising"],
  },
  {
    icon: Monitor,
    title: "Website Development",
    description: "Beautiful, responsive websites built with cutting-edge technology that captivate visitors and convert leads.",
    image: servicesWeb,
    features: ["Custom Web Design", "E-commerce Solutions", "CMS Development", "Performance Optimization", "Responsive Design", "Web Maintenance"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.",
    image: servicesApp,
    features: ["iOS App Development", "Android App Development", "Cross-Platform Apps", "UI/UX Design", "App Store Optimization", "App Maintenance & Support"],
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions engineered to streamline operations and solve complex business challenges.",
    image: servicesSoftware,
    features: ["Enterprise Solutions", "Cloud Development", "API Integration", "DevOps Services", "Database Management", "Quality Assurance"],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">What We Offer</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Comprehensive digital solutions designed to elevate your brand and drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center mb-24 last:mb-0 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {service.description}
                </p>
                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
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
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your unique requirements and create a tailored solution for your business.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect">
                Contact Us
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

export default ServicesPage;
