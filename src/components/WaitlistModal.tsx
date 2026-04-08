"use client";

import { useState, useEffect } from "react";

export default function WaitlistModal({ onClose }: { onClose: () => void }) {
  const [formState, setFormState] = useState<"idle" | "success">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("success");
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {formState === "idle" ? (
          <>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">
              Join the Waitlist
            </h2>
            <p className="text-slate-500 mb-6">
              Be the first to know when StoryAmp launches.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                required
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900"
              />
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900"
              />
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Sign Up
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="text-4xl mb-3">&#10003;</div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              You&apos;re on the list!
            </h2>
            <p className="text-slate-500 mb-6">
              We&apos;ll let you know when StoryAmp is ready.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
