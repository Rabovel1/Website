"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Shield, Zap, Sparkles, CheckCircle2, Users, BarChart3 } from "lucide-react";

const Cta = () => {
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
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const features = [
    { icon: Shield, label: "Bank-level Security", color: "text-green-500" },
    { icon: Zap, label: "Lightning Fast", color: "text-yellow-500" },
    { icon: TrendingUp, label: "Proven Results", color: "text-blue-500" },
    { icon: Users, label: "Expert Support", color: "text-purple-500" },
  ];

  const stats = [
    { value: "10K+", label: "Active Traders" },
    { value: "₦50B+", label: "Trade Volume" },
    { value: "99.9%", label: "Uptime" },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background py-20 md:py-28 lg:py-32"
    >
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
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
          className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-indigo-600/20 via-indigo-600/10 to-transparent blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16"
        >
          {/* Left Section - Enhanced Image with Stats */}
          <motion.div variants={imageVariants} className="relative">
            {/* Main Image Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/30 via-primary/20 to-indigo-600/30 p-1 shadow-2xl"
            >
              <div className="relative overflow-hidden rounded-3xl bg-card/80 backdrop-blur-xl">
                <Image
                  src="/images/about/about-1.png"
                  alt="Trading Journey with Rabovel"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Floating Badge - Enhanced */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-6 top-6 z-10"
              >
                <Card className="border-2 border-primary/30 bg-card/95 backdrop-blur-md shadow-xl">
                  <CardContent className="flex items-center gap-2 px-4 py-3">
                    <div className="relative">
                      <Sparkles className="h-5 w-5 text-primary" />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 rounded-full bg-primary/20 blur-md"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-foreground">New</span>
                      <span className="text-xs text-muted-foreground">Features</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Stats Cards - Bottom Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex-1"
                  >
                    <Card className="border-2 border-primary/20 bg-card/95 backdrop-blur-md shadow-lg">
                      <CardContent className="p-3 text-center">
                        <div className="text-lg font-bold text-foreground lg:text-xl">
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - Enhanced Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-primary/10 px-5 py-2.5 backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <TrendingUp className="h-4 w-4 text-primary" />
              </motion.div>
              <span className="text-sm font-semibold text-primary">
                Start Your Journey
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
            >
              <span className="block bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Start Your Trading
              </span>
              <span className="block bg-gradient-to-r from-primary via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Journey Today
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              Open an account now to explore innovative trading options and
              maximize your investment potential with Rabovel's cutting-edge
              platform designed for modern traders.
            </motion.p>

            {/* Feature Grid - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.label}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <Card className="group h-full border-2 border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                      <CardContent className="flex flex-col items-center gap-2 p-4 text-center">
                        <div className="rounded-full bg-primary/10 p-3 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className={`h-5 w-5 transition-colors duration-300 ${feature.color} group-hover:text-primary-foreground`} />
                        </div>
                        <span className="text-sm font-semibold text-foreground">
                          {feature.label}
                        </span>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-3"
            >
              {[
                "Instant account setup in minutes",
                "Access to real-time market data",
                "24/7 customer support",
                "Advanced trading tools included",
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 rounded-full bg-green-500/10 p-1.5">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </div>
                  <span className="text-sm text-muted-foreground sm:text-base">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="gradient"
                  className="group w-full text-lg shadow-xl shadow-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 sm:w-auto sm:px-8"
                  asChild
                >
                  <Link href="/signup">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="group w-full text-lg sm:w-auto sm:px-8"
                  asChild
                >
                  <Link href="/about">
                    Learn More
                    <BarChart3 className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-500" />
                <span>Secured by SSL</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-purple-500" />
                <span>Free to start</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
