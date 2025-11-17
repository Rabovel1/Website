"use client";
import { motion } from "framer-motion";
import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import { Card } from "@/components/ui/card";

const Brands = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Trusted by Leading Platforms
          </h2>
          <p className="text-muted-foreground">
            We&apos;re proud to be recognized by industry leaders
          </p>
        </motion.div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <Card className="border-2 bg-card/50 backdrop-blur-sm p-8 shadow-lg md:p-12 lg:p-16">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
              >
                {brandsData.map((brand) => (
                  <SingleBrand key={brand.id} brand={brand} variants={itemVariants} />
                ))}
              </motion.div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand, variants }: { brand: Brand; variants: any }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.1, y: -5 }}
      className="flex items-center justify-center"
    >
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-12 w-32 opacity-60 transition-all duration-300 hover:opacity-100 dark:opacity-50 dark:hover:opacity-100"
      >
        <Image
          src={imageLight}
          alt={name}
          fill
          className="hidden object-contain dark:block"
        />
        <Image
          src={image}
          alt={name}
          fill
          className="block object-contain dark:hidden"
        />
      </a>
    </motion.div>
  );
};
