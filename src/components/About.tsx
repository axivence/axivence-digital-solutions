import { motion } from "framer-motion";
import { CheckCircle, Zap, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We work efficiently to deliver your projects on time without compromising quality.",
  },
  {
    icon: Shield,
    title: "Secure Solutions",
    description: "Security is at the core of everything we build, protecting your data and users.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Our expert team is committed to your success from start to finish.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Your Partner in <span className="gradient-text">Digital Success</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              At Axivence, we combine technical expertise with creative innovation to deliver 
              solutions that make a real impact. We're not just developers – we're your strategic 
              partners in building digital excellence.
            </p>

            <div className="space-y-4">
              {[
                "Tailored solutions for your unique needs",
                "Transparent communication throughout",
                "Cutting-edge technology stack",
                "Post-launch support and maintenance",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl hover:glow-effect transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
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

export default About;
