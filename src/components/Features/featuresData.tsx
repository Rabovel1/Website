import { Feature } from "@/types/feature";
import {
  TrendingUp,
  BarChart3,
  PieChart,
  Activity,
  GraduationCap,
  Bot,
  CreditCard,
} from "lucide-react";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "Futures Trading",
    paragraph:
      "Unlock greater flexibility and higher returns trading futures.",
  },
  {
    id: 2,
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Stock Trading",
    paragraph: "Trade stocks confidently with our intuitive platform.",
  },
  {
    id: 3,
    icon: <PieChart className="h-10 w-10 text-primary" />,
    title: "Mutual Funds",
    paragraph: "Invest in a diverse range of mutual funds tailored to your needs.",
  },
  {
    id: 4,
    icon: <Activity className="h-10 w-10 text-primary" />,
    title: "Real-Time Market Insights",
    paragraph: "Stay ahead with expert analysis and market trends.",
  },
  {
    id: 5,
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    title: "Education",
    paragraph: "Learn trading essentials with our expert-led tutorials.",
  },
  {
    id: 6,
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: "Our AI-powered Assistant",
    paragraph: "Get personalized trading advice with our AI-powered assistant.",
  },
  {
    id: 7,
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    title: "Credit/Debit Card",
    paragraph: "Easily fund your account using your credit or debit card.",
  },
];

export default featuresData;
