"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Twitter, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const socialLinks = [
    { icon: Facebook, href: "/", label: "Facebook" },
    { icon: Twitter, href: "/", label: "Twitter" },
    { icon: Youtube, href: "/", label: "YouTube" },
    { icon: Linkedin, href: "/", label: "LinkedIn" },
  ];

  return (
    <footer className="relative z-10 overflow-hidden border-t border-border bg-gradient-to-b from-background to-muted/30 pt-16 pb-8 md:pt-20 lg:pt-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="-mx-4 flex flex-wrap gap-8 pb-12"
        >
          {/* Brand Section */}
          <motion.div
            variants={itemVariants}
            className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12"
          >
            <div className="mb-8 max-w-[360px] lg:mb-12">
              <Link href="/" className="mb-6 inline-block">
                <Image
                  src="/images/logo/Rabovel.png"
                  alt="Rabovel Logo"
                  className="w-full dark:hidden"
                  width={140}
                  height={30}
                />
                <Image
                  src="/images/logo/Rabovel.png"
                  alt="Rabovel Logo"
                  className="hidden w-full dark:block"
                  width={140}
                  height={30}
                />
              </Link>
              <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                Open an account now to explore innovative trading options and
                maximize your investment potential with Rabovel's cutting-edge
                fintech platform.
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Useful Links */}
          <motion.div
            variants={itemVariants}
            className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12"
          >
            <div className="mb-8 lg:mb-12">
              <h2 className="mb-6 text-xl font-bold text-foreground">
                Useful Links
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="group inline-block text-base text-muted-foreground transition-colors duration-200 hover:text-primary"
                  >
                    <span className="relative">
                      About
                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-200 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="group inline-block text-base text-muted-foreground transition-colors duration-200 hover:text-primary"
                  >
                    <span className="relative">
                      Meet Our Team
                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-200 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Terms */}
          <motion.div
            variants={itemVariants}
            className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12"
          >
            <div className="mb-8 lg:mb-12">
              <h2 className="mb-6 text-xl font-bold text-foreground">Terms</h2>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/terms"
                    className="group inline-block text-base text-muted-foreground transition-colors duration-200 hover:text-primary"
                  >
                    <span className="relative">
                      Terms & Conditions
                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-200 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/policy"
                    className="group inline-block text-base text-muted-foreground transition-colors duration-200 hover:text-primary"
                  >
                    <span className="relative">
                      Policies
                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-200 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Support & Help */}
          <motion.div
            variants={itemVariants}
            className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12"
          >
            <div className="mb-8 lg:mb-12">
              <h2 className="mb-6 text-xl font-bold text-foreground">
                Support & Help
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/contact"
                    className="group inline-block text-base text-muted-foreground transition-colors duration-200 hover:text-primary"
                  >
                    <span className="relative">
                      Customer Care
                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-200 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              </ul>
              <Card className="mt-6 border-2 bg-card/50 backdrop-blur-sm p-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      support@rabovel.com
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      +234 (0) 123 456 789
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      Lagos, Nigeria
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Rabovel. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
