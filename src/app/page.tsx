"use client";

import { useState } from "react";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WaitlistModal from "@/components/WaitlistModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <Navbar onJoinClick={() => setIsModalOpen(true)} />
      <Hero onJoinClick={() => setIsModalOpen(true)} />
      <Features />
      {isModalOpen && (
        <WaitlistModal onClose={() => setIsModalOpen(false)} />
      )}
    </main>
  );
}
