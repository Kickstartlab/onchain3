import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = () => {
    const textRefs = useRef([]);

    useEffect(() => {
        if (!textRefs.current.length) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: textRefs.current[0],
                start: "top 50%",
                end: "bottom 30%",
                scrub: true,
            }
        });

        textRefs.current.forEach(textElement => {
            let combinedText = textElement.textContent.trim();
            let words = combinedText.split(" ").map((word, index) => (
                `<span key=${index} style="display: inline-block;">${word}</span>`
            )).join(" ");

            textElement.innerHTML = words;
            const wordSpans = textElement.querySelectorAll("span");

            tl.from(wordSpans, {
                opacity: 0.3,
                color: "#fff",
                stagger: 15,  
                duration: 30 
            }, "+=0.5");
        });
    }, []);

    return (
        <div className="md:h-[85vh] flex flex-col justify-center items-center">
            <p ref={el => textRefs.current[0] = el} className="md:text-[2.5rem] text-xl lg:leading-snug font-bold">
                Onchain3 was founded by Web3 marketing experts with years of hands-on experience. From the start, we’ve focused on delivering results, not just buzz. With a track record of successfully promoting over 50 Web3 projects, we’ve learned exactly what works—and what doesn’t. We’re here to help Web3 projects grow, thrive, and reach the right audience, with proven strategies that deliver real impact.
            </p>
        </div>
    );
};

export default AnimatedText;
