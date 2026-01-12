import { motion } from "framer-motion";
import { Code, Smartphone, Monitor, TrendingUp, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Strategic campaigns that drive traffic, boost conversions, and maximize your ROI across all digital channels.",
    features: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Analytics & Insights"],
  },
  {
    icon: Monitor,
    title: "Website Development",
    description: "Beautiful, responsive websites built with cutting-edge technology that captivate visitors and convert leads.",
    features: ["Custom Web Design", "E-commerce Solutions", "CMS Development", "Performance Optimization"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.",
    features: ["iOS & Android Apps", "Cross-Platform Development", "UI/UX Design", "App Maintenance"],
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions engineered to streamline operations and solve complex business challenges.",
    features: ["Enterprise Solutions", "Cloud Development", "API Integration", "DevOps Services"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We offer comprehensive digital solutions tailored to your unique business needs, 
            helping you stay ahead in the digital landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group gradient-border p-8 hover:glow-effect transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>

              <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-3 py-1 text-sm bg-secondary rounded-full text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
