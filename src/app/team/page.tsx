"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Team = () => {
  const teamMembers = [
    {
      name: "Kimie Masaka",
      role: "Chief Executive Officer/Founder",
      profession: "Financial Expert",
      image: "/images/team/Kimie.jpg",
      socialLinks: {
        twitter: "https://x.com",
        linkedin: "https://www.linkedin.com/in/kimie-maskala-18892317b",
        instagram: "https://instagram.com",
        facebook: "https://www.facebook.com/kimie.alexandermaskala",
      },
    },
    {
      name: "Abdulrahman Sadiq",
      role: "Chief Technology Officer",
      profession: "Software Developer",
      image: "/images/team/Sadiq.jpg",
      socialLinks: {
        twitter: "https://x.com/ABDULRAHMA27681",
        linkedin: "https://www.linkedin.com/in/abdulrahman-sadiq-4054262b7",
        instagram: "https://www.instagram.com/sir_successful",
        facebook: "https://www.facebook.com/share/1Ag31dPqjh",
      },
    },
    {
      name: "Tsoji Victor Rikwen",
      role: "Chief Operations Officer",
      profession: "Software Developer",
      image: "/images/team/Tsoji.jpg",
      socialLinks: {
        twitter: "https://x.com",
        linkedin: "https://www.linkedin.com/in/victor-tsoji-8ba3421a4",
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background pt-16 pb-16 md:pt-20 lg:pt-28">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-extrabold text-foreground md:text-5xl">
            Meet Our Team
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            The talented individuals behind Rabovel, dedicated to revolutionizing
            trading in Nigeria.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group h-full border-2 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/10">
                <CardContent className="p-6 text-center">
                  {/* Avatar */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="mb-6 flex justify-center"
                  >
                    <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 transition-all duration-300 group-hover:border-primary/40">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </motion.div>

                  {/* Info */}
                  <h2 className="mb-1 text-xl font-bold text-foreground">
                    {member.name}
                  </h2>
                  <p className="mb-2 text-sm font-semibold text-primary">
                    {member.role}
                  </p>
                  <p className="mb-6 text-sm text-muted-foreground">
                    {member.profession}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    <motion.a
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href={member.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href={member.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
