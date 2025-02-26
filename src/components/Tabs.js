import React, { useState } from "react";
import { motion } from "framer-motion";
import tab_1 from '../assets/tab_1.png'

const tabs = [
    {
        id: "smm",
        title: "SMM",
        content: "Social Media Marketing details here.",
        image: <img src={tab_1} alt=""></img>,
    },
    {
        id: "community",
        title: "Community Management",
        content: "Community Management details here.",
        image: "../assets/tab_1.png",
    },
    {
        id: "ppc",
        title: "PPC",
        content: "Pay Per Click advertising details here.",
        image: "/images/ppc.png",
    },
    {
        id: "seo",
        title: "SEO",
        content: "Search Engine Optimization details here.",
        image: "/images/seo.png",
    },
    {
        id: "influencer",
        title: "Influencer Marketing",
        content: "Influencer Marketing details here.",
        image: "/images/influencer.png",
    },
    {
        id: "pr",
        title: "PR",
        content: "Public Relations details here.",
        image: "/images/pr.png",
    },
    {
        id: "web3",
        title: "Web3 & Blockchain Development",
        content: "Web3 & Blockchain Development details here.",
        image: "/images/web3.png",
    }
];

const VerticalTabs = () => {
    const [activeTab, setActiveTab] = useState("smm");

    return (
        <div className="flex flex-wrap justify-center md:gap-20 gap-8 p-10">
            {/* Left Sidebar (Tabs) */}
            <div className="w-4/12 space-y-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full text-left px-6 py-3 rounded-2xl border
              ${activeTab === tab.id ? "border-blue-50 text-blue-50" : "border-white-50"}`}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            {/* Right Content Panel (Image First) */}
            <div className="w-6/12 flex justify-center">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                    className="p-6 border border-blue-50 rounded-lg w-full bg-[#0B0B0B]"
                >
                    {/* Image First (Animated) */}
                    <motion.img
                        key={tabs.find((tab) => tab.id === activeTab)?.image}
                        src={tabs.find((tab) => tab.id === activeTab)?.image}
                        alt="Tab Image"
                        className="w-2/3 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    />

                    {/* Title (No Animation) */}
                    <h2 className="text-2xl font-bold mb-2">
                        {tabs.find((tab) => tab.id === activeTab)?.title}
                    </h2>

                    {/* Content (No Animation) */}
                    <p className="text-gray-300 mb-4">
                        {tabs.find((tab) => tab.id === activeTab)?.content}
                    </p>

                    {/* Button */}
                    <button className="px-4 py-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-500">
                        Schedule a Call
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default VerticalTabs;
