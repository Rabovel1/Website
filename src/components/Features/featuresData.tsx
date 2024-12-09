import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" rx="4" fill="none" />
          <rect x="8" y="10" width="4" height="15" fill="#34D399" />
          <rect x="18" y="7" width="4" height="21" fill="#F87171" />
          <rect x="28" y="14" width="4" height="12" fill="#34D399" />
        </svg>
      </div>
    ),
    title: "Futures and Options Trading",
    paragraph:
      "Experience a new level of investment flexibility and higher returns with Nigeria's first F&O trading platform.",
  },
  {
    id: 2,
    icon: (
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="10" y="20" width="4" height="12" fill="#34D399" />
          <rect x="18" y="14" width="4" height="18" fill="#34D399" />
          <rect x="26" y="8" width="4" height="24" fill="#34D399" />
        </svg>
      </div>
    ),
    title: "Stock Trading",
    paragraph: "Trade stocks confidently with our intuitive platform.",
  },
  {
    id: 3,
    icon: (
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-100">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="18" stroke="#000" strokeWidth="2" fill="none" />
          <path d="M20 2 A18 18 0 0 1 38 20 L20 20 Z" fill="lightblue" />
          <path d="M20 20 L38 20 A18 18 0 0 1 20 38 Z" fill="orange" />
        </svg>
      </div>
    ),
    title: "Mutual Funds",
    paragraph: "Invest in a diverse range of mutual funds tailored to your needs.",
  },
  {
    id: 4,
    icon: (
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="19" stroke="#000" strokeWidth="2" fill="none" />
          <path d="M10 25 L15 18 L18 22 L25 12" stroke="#00C853" strokeWidth="2" fill="none" />
        </svg>
      </div>
    ),
    title: "Real-Time Market Insights",
    paragraph: "Stay ahead with expert analysis and market trends.",
  },
];

export default featuresData;
