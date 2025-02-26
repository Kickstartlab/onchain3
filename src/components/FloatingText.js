import React from "react";
import { motion } from "framer-motion";

const words = [
    "Crypto", "Blockchain", "NFTs", "DeFi", "Web3", "Security", "Tokens", "Finance"
];

// Generate random positions for each text element
const randomPosition = () => ({
    x: Math.random() * 100 - 50, // Random X movement
    y: Math.random() * 100 - 50, // Random Y movement
    rotate: Math.random() * 15 - 7.5, // Random slight rotation
});

const FloatingText = () => {
    return (
        <div className="hero-container">
            {/* SVG Border Animation */}
            <svg className="animated-border" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.rect
                    x="1" y="1" width="98" height="98"
                    stroke="url(#gradient)" fill="transparent"
                    strokeWidth="2"
                    strokeDasharray="400"
                    strokeDashoffset="400"
                    animate={{ strokeDashoffset: [400, 0] }}
                    transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                />
                <defs>
                    <linearGradient id="gradient">
                        <stop offset="0%" stopColor="red" />
                        <stop offset="50%" stopColor="blue" />
                        <stop offset="100%" stopColor="purple" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Hero Content */}
            <h1 className="hero-title">Welcome to Coinband</h1>
            <p className="hero-subtitle">Promoting crypto, blockchain, and Web3 projects</p>
        </div>
    );
};

export default FloatingText;
