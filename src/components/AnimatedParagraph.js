import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const AnimatedParagraph = () => {
    const controls = useAnimation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("animated-text");
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.75) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isVisible) {
            controls.start("visible");
        }
    }, [isVisible, controls]);

    const text =
        "Onchain3 was founded by Web3 marketing experts with years of hands-on experience. From the start, we’ve focused on delivering results, not just buzz. With a track record of successfully promoting over 50 Web3 projects, we’ve learned exactly what works—and what doesn’t. We’re here to help Web3 projects grow, thrive, and reach the right audience, with proven strategies that deliver real impact.";
    const words = text.split(" ");

    return (
        <div className="">
            <p id="animated-text" className="md:text-4xl text-xl font-bold">
                {words.map((word, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0.5, color: "#FFFFFF61" }} 
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, color: "#FFFFFF" }, 
                        }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                        className="inline-block mx-1"
                    >
                        {word}
                    </motion.span>
                ))}
            </p>
        </div>
    );
};


export default AnimatedParagraph;
