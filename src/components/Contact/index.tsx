"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import NewsLatterBox from "./NewsLatterBox";
import { Send, Mail, Phone, MapPin, MessageSquare, Clock, Shield } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    // TODO: Implement form submission logic
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email anytime",
      value: "support@rabovel.com",
      href: "mailto:support@rabovel.com",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      hoverBg: "hover:bg-blue-500/20",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon to Fri, 9am to 6pm",
      value: "+234 (0) 123 456 789",
      href: "tel:+234123456789",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      hoverBg: "hover:bg-green-500/20",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our office location",
      value: "Lagos, Nigeria",
      href: "#",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      hoverBg: "hover:bg-purple-500/20",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background py-16 md:py-24 lg:py-32"
    >
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-indigo-600/5 blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 backdrop-blur-sm"
          >
            <MessageSquare className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get in Touch</span>
          </motion.div>
          <h2 className="mb-4 text-4xl font-extrabold text-foreground sm:text-5xl md:text-6xl">
            Contact Us
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Have a question or need assistance? Our support team is here to help you
            24/7. Reach out through any of the channels below.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Contact Methods - Quick Access */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group block"
                  >
                    <Card className="h-full border-2 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/10">
                      <CardContent className="p-6">
                        <div
                          className={`mb-4 inline-flex rounded-2xl ${method.bgColor} ${method.hoverBg} p-4 transition-all duration-300 group-hover:scale-110`}
                        >
                          <Icon className={`h-6 w-6 ${method.color}`} />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-foreground">
                          {method.title}
                        </h3>
                        <p className="mb-3 text-sm text-muted-foreground">
                          {method.description}
                        </p>
                        <p className="font-medium text-foreground transition-colors duration-200 group-hover:text-primary">
                          {method.value}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Contact Form - Takes 2 columns */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2"
            >
              <Card className="border-2 bg-card/80 backdrop-blur-sm shadow-2xl transition-all duration-300 hover:shadow-primary/5">
                <CardHeader className="space-y-3 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-primary/10 p-3">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-foreground sm:text-3xl">
                        Send us a Message
                      </CardTitle>
                      <CardDescription className="mt-1 text-base">
                        Fill out the form below and we&apos;ll get back to you within 24 hours
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="name" className="text-sm font-semibold text-foreground">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="h-12 border-2 transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="h-12 border-2 transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="message" className="text-sm font-semibold text-foreground">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="min-h-[150px] resize-none border-2 transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                      <p className="text-xs text-muted-foreground">
                        Minimum 10 characters required
                      </p>
                    </motion.div>

                    {/* Form Features */}
                    <div className="flex flex-wrap items-center gap-4 rounded-lg border border-border bg-muted/30 p-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">Response within 24h</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">Secure & Private</span>
                      </div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <Button
                        type="submit"
                        variant="gradient"
                        size="lg"
                        className="group h-14 w-full text-base font-semibold shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40"
                      >
                        Send Message
                        <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Newsletter Box - Takes 1 column */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <NewsLatterBox />
            </motion.div>
          </div>

          {/* Additional Information */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            <Card className="border-2 bg-gradient-to-br from-card to-primary/5 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-primary">24/7</div>
                <p className="text-sm font-medium text-foreground">Support Available</p>
              </CardContent>
            </Card>
            <Card className="border-2 bg-gradient-to-br from-card to-green-500/5 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-green-500">&lt;24h</div>
                <p className="text-sm font-medium text-foreground">Average Response</p>
              </CardContent>
            </Card>
            <Card className="border-2 bg-gradient-to-br from-card to-blue-500/5 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-blue-500">100%</div>
                <p className="text-sm font-medium text-foreground">Satisfaction Rate</p>
              </CardContent>
            </Card>
            <Card className="border-2 bg-gradient-to-br from-card to-purple-500/5 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-purple-500">5★</div>
                <p className="text-sm font-medium text-foreground">Customer Rating</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
