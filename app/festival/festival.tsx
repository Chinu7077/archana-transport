"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function FestivalPopup() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(false), 10000); // Auto-close after 10 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: -50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.5, opacity: 0, y: 50 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="relative bg-white p-8 rounded-3xl shadow-2xl text-center max-w-md overflow-hidden"
        style={{
          backgroundImage: "url('/holi.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.h2
  className="text-3xl font-bold text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]"
  animate={{ color: ["#ffeb3b", "#ff9800", "#e91e63", "#03a9f4"] }}
  transition={{ repeat: Infinity, duration: 2 }}
>
  "Colors bring joy, and joy brings success! 🚛🎨✨"
</motion.h2>

<motion.p 
  className="text-lg font-semibold text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)] mt-3"
>
  Wishing you a vibrant and prosperous Holi from Archana Transport!
</motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-white mt-3 text-lg font-bold drop-shadow-lg"
        >
          🌸 May your Holi be filled with colors of happiness and success! 🚛✨
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Button className="mt-5 bg-gradient-to-r from-pink-400 to-yellow-400 text-white px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
