"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Zap, Shield, TrendingUp, Users, Award, Globe } from "lucide-react";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  const stats = [
    { icon: Users, value: "10K+", label: "Active Users", color: "text-blue-500" },
    { icon: TrendingUp, value: "₦50M+", label: "Traded Volume", color: "text-green-500" },
    { icon: Award, value: "98%", label: "Satisfaction", color: "text-purple-500" },
    { icon: Globe, value: "24/7", label: "Support", color: "text-orange-500" },
  ];

  const values = [
    { icon: Target, title: "Vision", description: "Leading innovation in Nigerian trading" },
    { icon: Zap, title: "Innovation", description: "Cutting-edge fintech solutions" },
    { icon: Shield, title: "Security", description: "Bank-level encryption & safety" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background py-20 md:py-28 lg:py-32">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header Section with Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-16 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 backdrop-blur-sm"
            >
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                About Rabovel
              </span>
            </motion.div>
            <h2 className="mb-6 text-4xl font-extrabold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              Shaping the Future of
              <br />
              <span className="bg-gradient-to-r from-primary via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Digital Trading in Nigeria
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Founded with the goal of revolutionizing the trading landscape in Nigeria,
              Rabovel is committed to providing innovative solutions like options and
              futures trading. Our vision is to empower investors with cutting-edge tools
              and resources.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="mb-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image Section */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative order-2 lg:order-1"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotate: 0.5 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Main Image Card */}
                <Card className="relative overflow-hidden border-2 bg-card/80 backdrop-blur-sm shadow-2xl">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/images/about/about-2.png"
                      alt="Rabovel Trading Platform"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                      priority
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  </div>
                  
                  {/* Floating badge */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -right-4 -top-4 rounded-2xl border-2 border-primary/20 bg-card/90 backdrop-blur-md p-4 shadow-xl"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <TrendingUp className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground">Growth</p>
                        <p className="text-lg font-bold text-foreground">+250%</p>
                      </div>
                    </div>
                  </motion.div>
                </Card>

                {/* Decorative elements */}
                <div className="absolute -left-6 -bottom-6 -z-10 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
                <div className="absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-full bg-indigo-600/20 blur-3xl" />
              </motion.div>
            </motion.div>

            {/* Text Content Section */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="order-1 flex flex-col justify-center lg:order-2"
            >
              {/* Subheading */}
              <motion.div
                variants={itemVariants}
                className="mb-8"
              >
                <h3 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                  Empowering Your
                  <br />
                  <span className="text-primary">Investment Journey</span>
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Rabovel is revolutionizing the Nigerian stock market with innovative
                  trading options and futures for everyone. Experience seamless trading
                  with our state-of-the-art platform.
                </p>
              </motion.div>

              {/* Core Values */}
              <motion.div
                variants={itemVariants}
                className="mb-10 grid gap-4 sm:grid-cols-3"
              >
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.05 }}
                      className="group"
                    >
                      <Card className="h-full border-2 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                        <CardContent className="flex flex-col items-center p-6 text-center">
                          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                            <Icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                          </div>
                          <h4 className="mb-2 font-semibold text-foreground">{value.title}</h4>
                          <p className="text-xs text-muted-foreground">{value.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="gradient"
                  className="group w-full text-lg shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 sm:w-auto"
                  asChild
                >
                  <Link href="/signup">
                    Join Us Today
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full border-2 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ${stat.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <motion.p
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        className="mb-2 text-3xl font-bold text-foreground"
                      >
                        {stat.value}
                      </motion.p>
                      <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
