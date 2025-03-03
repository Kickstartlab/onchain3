import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import tab_1 from '../assets/tab_1.png'
import tab_2 from '../assets/tab_2.png'
import tab_3 from '../assets/tab_3.png'
import tab_4 from '../assets/tab_4.png'
import tab_5 from '../assets/tab_5.png'
import tab_6 from '../assets/tab_6.png'
import tab_7 from '../assets/tab_7.png'

const tabs = [
    { id: "smm", title: "SMM", content: "Lorem Ipsum text here.", image: tab_1 },
    { id: "community", title: "Community Management", content: "Lorem Ipsum text here.", image: tab_2 },
    { id: "ppc", title: "PPC", content: "Lorem Ipsum text here.", image: tab_3 },
    { id: "seo", title: "SEO", content: "Lorem Ipsum text here.", image: tab_4 },
    { id: "influencer", title: "Influencer Marketing", content: "Lorem Ipsum text here.", image: tab_5 },
    { id: "pr", title: "PR", content: "Lorem Ipsum text here.", image: tab_6 },
    { id: "web3", title: "Web3 & Blockchain Development", content: "Lorem Ipsum text here.", image: tab_7 },
];

const VerticalTabs = () => {
    const [activeTab, setActiveTab] = useState("smm");
    const activeTabData = tabs.find(tab => tab.id === activeTab);

    const carouselRef = useRef(null);

    // Scroll to the active tab on mobile
    useEffect(() => {
        if (carouselRef.current) {
            const index = tabs.findIndex(tab => tab.id === activeTab);
            const scrollAmount = index * carouselRef.current.clientWidth;
            carouselRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }
    }, [activeTab]);


    const [isDragging, setIsDragging] = useState(false);
    const touchStartY = useRef(0);
    const touchStartX = useRef(0);

    const handleTouchStart = (e) => {
        touchStartY.current = e.touches[0].clientY;
        touchStartX.current = e.touches[0].clientX;
        setIsDragging(false); // Reset dragging state
    };

    const handleTouchMove = (e) => {
        const deltaY = Math.abs(e.touches[0].clientY - touchStartY.current);
        const deltaX = Math.abs(e.touches[0].clientX - touchStartX.current);

        if (deltaY > deltaX) {
            setIsDragging(false);
        } else {
            setIsDragging(true);
        }
    };

    return (
        <div className="flex flex-wrap justify-center md:gap-20 gap-8">
            {/* Tabs List */}
            <div className="lg:w-4/12 w-full lg:space-y-4 lg:block flex gap-x-3 overflow-auto">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full text-left md:px-6 px-4 md:py-3 py-2 rounded-2xl whitespace-nowrap border transition-all duration-300 lg:text-base text-sm
              ${activeTab === tab.id ? "border-blue-50 text-blue-50 font-semibold" : "border-white-50 hover:border-blue-50"}`}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            {/* Active Tab Content */}

            <motion.div
                ref={carouselRef}
                className="flex lg:hidden overflow-x-auto snap-x snap-mandatory w-full"
                drag={isDragging ? "x" : false}  // Enable drag only if horizontal movement is detected
                dragConstraints={{ left: 0, right: 0 }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                {tabs.map((tab) => (
                    <motion.div
                        key={tab.id}
                        className="w-full flex-shrink-0 min-w-full p-5 border border-[#2AF4FF] rounded-xl bg-[#0B0B0B] snap-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.img
                            src={tab.image}
                            alt={tab.title}
                            className="mb-5 flex mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        />
                        <h2 className="md:text-2xl text-xl font-bold mb-5">{tab.title}</h2>
                        <p className="text-gray-300 mb-5">{tab.content}</p>
                        <button className="px-4 py-2 border border-[#313131] text-white rounded-lg hover:bg-[#2AF4FF] hover:text-black transition-all">
                            Schedule a Call
                        </button>
                    </motion.div>
                ))}
            </motion.div>



            <div className="lg:w-6/12 lg:block hidden">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                    className="p-5 border border-[#2AF4FF] rounded-xl w-full bg-[#0B0B0B]">
                    <motion.img
                        src={activeTabData.image}
                        alt={activeTabData.title}
                        className="mb-5 flex mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    />

                    <h2 className="md:text-2xl text-xl font-bold mb-5">{activeTabData.title}</h2>

                    <p className="text-gray-300 mb-5">{activeTabData.content}</p>

                    <button className="px-4 py-2 border border-[#313131] text-white rounded-lg hover:bg-[#2AF4FF] hover:text-black transition-all">
                        Schedule a Call
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default VerticalTabs;
