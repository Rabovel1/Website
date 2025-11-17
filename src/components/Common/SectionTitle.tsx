"use client";
import { motion } from "framer-motion";

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`w-full ${center ? "mx-auto text-center" : ""}`}
      style={{ maxWidth: width, marginBottom: mb }}
    >
      <h2 className="mb-4 text-3xl font-bold !leading-tight text-foreground sm:text-4xl md:text-[45px]">
        {title}
      </h2>
      <p className="text-base !leading-relaxed text-muted-foreground md:text-lg">
        {paragraph}
      </p>
    </motion.div>
  );
};

export default SectionTitle;
