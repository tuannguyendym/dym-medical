"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";

import Navbar from "./Navbar";
import FAQ from "./components/Home/FAQ";
import Footer from "./components/Home/Footer";
import FreeTrial from "./components/Home/FreeTrial";
import Hero from "./components/Home/Hero";
import OurCustomer from "./components/Home/OurCustomer";
import ContentA from "./components/Home/ContentA";
import ContentB from "./components/Home/ContentB";
import Quote from "./components/Home/Quote";
import Price from "./components/Home/Price";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurCustomer />
      <ContentA />
      <ContentB />
      <Quote />
      <Price />
      <FAQ />
      <FreeTrial />
      <Footer />
    </div>
  );
}
