import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@corefusion.com", "support@corefusion.com"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 9003226263"],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["No 45, 9th Street Ext, Gandhipuram", "Coimbatore - 641012"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Friday", "9:00 AM - 6:00 PM"],
  },
];

const ContactPage = () => {
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
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Get In Touch</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="gradient-border p-8"
            >
              <h2 className="font-display text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">First Name</label>
                    <Input 
                      placeholder="John" 
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Last Name</label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Phone</label>
                    <Input 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Subject</label>
                  <Input 
                    placeholder="How can we help you?" 
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project, goals, and timeline..." 
                    rows={6}
                    className="bg-secondary border-border focus:border-primary resize-none"
                  />
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-effect py-6">
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="font-display text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold mb-1">{item.title}</h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 gradient-border p-1 rounded-xl overflow-hidden"
              >
                <div className="h-64 bg-secondary rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                    <p className="text-muted-foreground">Gandhipuram, Coimbatore</p>
                    <p className="text-sm text-muted-foreground">Tamil Nadu, India</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { q: "What services do you offer?", a: "We offer digital marketing, web development, app development, and custom software solutions." },
              { q: "How long does a typical project take?", a: "Project timelines vary based on scope, but most projects are completed within 4-12 weeks." },
              { q: "Do you provide ongoing support?", a: "Yes, we offer maintenance and support packages for all our projects." },
              { q: "What is your pricing model?", a: "We offer flexible pricing based on project requirements. Contact us for a custom quote." },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="gradient-border p-6"
              >
                <h3 className="font-display font-bold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
