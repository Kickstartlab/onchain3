import React, { useState } from "react";
import { motion } from "framer-motion";

const topics = ["Crypto", "DeFi", "Web 3", "Gamefi", "Metaverse"];

const FloatingText = () => {
  const [isSticky, setIsSticky] = useState(false);

  return (
    <div
      className={`flex justify-center items-center bg-black transition-all duration-500 ${isSticky ? "sticky top-0 z-50" : ""}`}
      onMouseEnter={() => setIsSticky(true)}
      onMouseLeave={() => setIsSticky(false)}
    >
      <div className="relative grid grid-cols-3 gap-8 p-8">
        {Array.from({ length: 9 }).map((_, index) => {
          const topic = topics[index] || ""; // Assign labels to some boxes, keep others empty
          const hasGlow = topic !== ""; // Only labeled boxes have animated glow

          return (
            <motion.div
              key={index}
              className={`box w-28 h-28 flex justify-center items-center text-gray-500 rounded-lg border ${
                hasGlow ? "glow-box text-lime-400" : "border-gray-700"
              }`}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: [10, 5, 0, -5, -10, 0], opacity: 1 }}
              transition={{ duration: 10, ease: "easeInOut" }} // Slower animation
              whileHover={{ scale: 1.1, boxShadow: hasGlow ? "0px 0px 15px lime" : "none" }}
            >
              {topic}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingText;
