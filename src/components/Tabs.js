import React, { useState } from "react";
import { motion } from "framer-motion";
import tab_1 from '../assets/tab_1.png'
import tab_2 from '../assets/tab_2.png'
import tab_3 from '../assets/tab_3.png'
import tab_4 from '../assets/tab_4.png'
import tab_5 from '../assets/tab_5.png'
import tab_6 from '../assets/tab_6.png'
import tab_7 from '../assets/tab_7.png'



const tabs = [
    {
        id: "smm",
        title: "SMM",
        content: "Lorem Ipsum dollar here bank gone through Lorem Ipsum dollar here bank gone throughLorem Ipsum dollar here bank gone throughLorem Ipsum dollar here bank gone throughLorem Ipsum dollar here bank gone through",
        image: tab_1,
    },
    {
        id: "community",
        title: "Community Management",
        content: "Lorem Ipsum dollar here bank gone through Lorem Ipsum dollar here bank gone throughLorem Ipsum dollar here bank gone throughLorem Ipsum dollar here bank gone throughLorem Ipsum dollar here bank gone through",
        image: tab_2,
    },
    {
        id: "ppc",
        title: "PPC",
        content: "Lorem Ipsum dollar here bank gone through Lorem Ipsum dollar here bank gone throughLorem Ipsum dollar here bank gone throughLorem Ipsum dollar here bank gone throughLorem Ipsum dollar here bank gone through",
        image: tab_3,
    },
    {
        id: "seo",
        title: "SEO",
        content: "Lorem Ipsum dollar here bank gone through Lorem Ipsum dollar here bank gone throughLorem Ipsum dollar here bank gone throughLorem Ipsum dollar here bank gone throughLorem Ipsum dollar here bank gone through",
        image: tab_4,
    },
    {
        id: "influencer",
        title: "Influencer Marketing",
        content: "Lorem Ipsum dollar here bank gone through Lorem Ipsum dollar here bank gone throughLorem Ipsum dollar here bank gone throughLorem Ipsum dollar here bank gone throughLorem Ipsum dollar here bank gone through",
        image: tab_5,
    },
    {
        id: "pr",
        title: "PR",
        content: "Lorem Ipsum dollar here bank gone through Lorem Ipsum dollar here bank gone throughLorem Ipsum dollar here bank gone throughLorem Ipsum dollar here bank gone throughLorem Ipsum dollar here bank gone through",
        image: tab_6,
    },
    {
        id: "web3",
        title: "Web3 & Blockchain Development",
        content: "Lorem Ipsum dollar here bank gone through Lorem Ipsum dollar here bank gone throughLorem Ipsum dollar here bank gone throughLorem Ipsum dollar here bank gone throughLorem Ipsum dollar here bank gone through",
        image: tab_7,
    }
];

const VerticalTabs = () => {
    const [activeTab, setActiveTab] = useState("smm");

    return (
        <div className="flex flex-wrap justify-center md:gap-20 gap-8">
            <div className="lg:w-4/12 w-full lg:space-y-4 lg:block flex gap-x-3 lg:overflow-hidden overflow-x-scroll">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full text-left px-6 lg:py-3 py-1 rounded-2xl border lg:text-base text-xs
              ${activeTab === tab.id ? "border-blue-50 text-blue-50" : "border-white-50"}`}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            <div className="lg:w-6/12">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                    className="p-5 border border-[#2AF4FF] rounded-xl w-full bg-[#0B0B0B]">

                    <img
                        src={tabs.find((tab) => tab.id === activeTab)?.image}
                        alt="Tab Image"
                        className="mb-5 flex mx-auto"
                    />
                    <h2 className="text-2xl font-bold mb-5">
                        {tabs.find((tab) => tab.id === activeTab)?.title}
                    </h2>

                    <p className="text-gray-300 mb-5">
                        {tabs.find((tab) => tab.id === activeTab)?.content}
                    </p>

                    <button className="px-4 py-2 border border-[#313131] text-black rounded-lg">
                        Schedule a Call
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default VerticalTabs;
