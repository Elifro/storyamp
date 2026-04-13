"use client";

import { useState } from "react";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import ShowcaseGrid from "@/components/ShowcaseGrid";
import WaitlistModal from "@/components/WaitlistModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <Navbar onJoinClick={() => setIsModalOpen(true)} />
      <Hero onJoinClick={() => setIsModalOpen(true)} />
      <Features />
      <HowItWorks />
      <ShowcaseGrid />
      <Footer onJoinClick={() => setIsModalOpen(true)} />
      {isModalOpen && (
        <WaitlistModal onClose={() => setIsModalOpen(false)} />
      )}
    </main>
  );
}
