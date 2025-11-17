"use client";
import { motion } from "framer-motion";
import { Feature } from "@/types/feature";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="group h-full border-2 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
        <CardHeader className="flex flex-col items-center text-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
          >
            <div className="text-4xl">{icon}</div>
          </motion.div>
          <h3 className="mb-2 text-xl font-semibold text-foreground sm:text-2xl">
            {title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-center text-base leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SingleFeature;
