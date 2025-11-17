"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, ArrowRight, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";

const Stock = () => {
  const stockData = [
    { name: "Dangote Cement", symbol: "DANGCEM", price: 276.5, change: 1.25 },
    { name: "GTBank", symbol: "GTCO", price: 30.15, change: -0.45 },
    { name: "MTN Nigeria", symbol: "MTNN", price: 220.0, change: 2.1 },
    { name: "Zenith Bank", symbol: "ZENITHBANK", price: 28.75, change: -0.8 },
    { name: "Nestle Nigeria", symbol: "NESTLE", price: 1210.0, change: 0.5 },
    { name: "Seplat Energy", symbol: "SEPLAT", price: 1290.0, change: -1.25 },
    { name: "Nigerian Breweries", symbol: "NB", price: 45.5, change: 0.75 },
    { name: "Fidelity Bank", symbol: "FIDELITYBK", price: 6.25, change: -0.2 },
    { name: "Transcorp", symbol: "TRANSCORP", price: 1.3, change: 0.1 },
    { name: "Access Holdings", symbol: "ACCESS", price: 12.85, change: 0.55 },
  ];

  const [displayedStocks, setDisplayedStocks] = useState(stockData);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedStocks((prev) => {
        // Keep the original order, only update prices and changes
        return prev.map((stock) => {
          // Find the original stock data to maintain base price
          const originalStock = stockData.find((s) => s.symbol === stock.symbol);
          const basePrice = originalStock?.price || stock.price;
          
          // Small price fluctuation (±2%)
          const priceChange = (Math.random() - 0.5) * (basePrice * 0.02);
          const newPrice = Math.max(0.1, basePrice + priceChange);
          
          // Calculate change percentage based on new price
          const priceDiff = newPrice - basePrice;
          const newChange = (priceDiff / basePrice) * 100;
          
          return {
            ...stock,
            price: parseFloat(newPrice.toFixed(2)),
            change: parseFloat(newChange.toFixed(2)),
          };
        });
      });
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="analytics"
      className="relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background py-16 md:py-20 lg:py-28"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Live Market Data</span>
          </div>
          <h2 className="mb-4 text-4xl font-extrabold text-foreground md:text-5xl">
            NGX Stock Market Analytics
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Real-time market data and analytics to help you make informed trading
            decisions. Track top-performing stocks on the Nigerian Exchange.
          </p>
        </motion.div>

        {/* Stock Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {displayedStocks.map((stock, index) => (
            <motion.div key={stock.symbol} variants={itemVariants}>
              <Card className="group h-full border-2 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-6">
                  <div className="mb-3 flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground">{stock.symbol}</h3>
                      <p className="text-sm text-muted-foreground">{stock.name}</p>
                    </div>
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    >
                      {stock.change > 0 ? (
                        <TrendingUp className="h-5 w-5 text-green-500" />
                      ) : (
                        <TrendingDown className="h-5 w-5 text-red-500" />
                      )}
                    </motion.div>
                  </div>
                  <div className="mt-4">
                    <p className="text-2xl font-bold text-foreground">
                      ₦{stock.price.toFixed(2)}
                    </p>
                    <p
                      className={`mt-1 flex items-center gap-1 text-sm font-semibold ${
                        stock.change > 0 ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {stock.change > 0 ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      {stock.change > 0 ? "+" : ""}
                      {stock.change.toFixed(2)}%
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button
            size="lg"
            variant="gradient"
            className="group shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40"
            asChild
          >
            <Link href="/signup">
              Start Trading Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Stock;
