"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Video() {
  const [videoSrc, setVideoSrc] = useState("/0310.MP4");

  return (
    <div className="relative w-full flex justify-center items-center bg-gray-900">
      {/* Responsive Video */}
      <motion.video
        className="w-full h-auto max-h-screen aspect-video object-contain"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
    </div>
  );
}
