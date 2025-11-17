import AboutSectionOne from "@/components/About/AboutSection";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Cta from "@/components/Cta/Cta";
import Stocks from "@/components/Stocks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rabovel - Modern Trading Platform",
  description: "Experience a new era of trading in Nigeria with Rabovel. Join us today to explore innovative features like options and futures trading that elevate your investment strategy.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Stocks />
      <Cta />
      <AboutSectionOne />
      <Contact />
    </>
  );
}
