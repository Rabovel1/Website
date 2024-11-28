"use client";
import Link from "next/link";

const Stock = () => {
  // Dummy stock data
  const stockData = [
    {
      name: "Dangote Cement",
      symbol: "DANGCEM",
      price: 276.50,
      change: 1.25,
    },
    {
      name: "GTBank",
      symbol: "GTCO",
      price: 30.15,
      change: -0.45,
    },
    {
      name: "MTN Nigeria",
      symbol: "MTNN",
      price: 220.00,
      change: 2.10,
    },
    {
      name: "Zenith Bank",
      symbol: "ZENITHBANK",
      price: 28.75,
      change: -0.80,
    },
  ];

  return (
    <section id="analytics" className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white md:text-5xl">
            NGX Stock Market Analytics
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Explore top-performing stocks on the Nigerian Exchange and stay informed.
          </p>
        </div>

        {/* Stock Data Section */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stockData.map((stock, index) => (
            <div
              key={index}
              className="relative rounded-lg border bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {stock.name}
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                <strong>Symbol:</strong> {stock.symbol}
              </p>
              <p className="mt-2 text-lg font-medium text-gray-800 dark:text-white">
                ₦{stock.price.toFixed(2)}
              </p>
              <p
                className={`mt-1 text-sm font-medium ${
                  stock.change > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {stock.change > 0 ? "▲" : "▼"} {stock.change.toFixed(2)}%
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            </div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="mt-12 text-center">
          <Link
            href="/signup"
            className="inline-block rounded-md bg-primary px-8 py-4 text-lg font-semibold text-white shadow-md transition-transform duration-300 hover:scale-105 hover:bg-primary/90"
          >
            Start Trading
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Stock;
