"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bell, Shield, Sparkles } from "lucide-react";

const NewsLatterBox = () => {
  return (
    <Card className="relative border-2 bg-gradient-to-br from-card via-card to-primary/5 backdrop-blur-sm shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <motion.div
          className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/10 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-primary/10 blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      <CardHeader className="relative z-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
          <Sparkles className="h-4 w-4 text-primary" />
        </div>
        <CardTitle className="text-2xl font-bold text-foreground">
          Subscribe to receive future updates
        </CardTitle>
        <CardDescription className="border-b border-border/50 pb-6 pt-4 text-base leading-relaxed">
          By subscribing, you accept our Privacy Policy and agree to receive
          updates from Rabovel. Stay informed about new features and trading
          opportunities.
        </CardDescription>
      </CardHeader>
      <CardContent className="relative z-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="transition-all duration-200 focus:ring-2 focus:ring-primary"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="transition-all duration-200 focus:ring-2 focus:ring-primary"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            type="submit"
            variant="gradient"
            className="group w-full shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40"
          >
            Subscribe
            <Bell className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-2 rounded-lg bg-muted/50 p-3"
        >
          <Shield className="h-4 w-4 text-primary" />
          <p className="text-center text-sm text-muted-foreground">
            No spam guaranteed. We respect your privacy.
          </p>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default NewsLatterBox;
