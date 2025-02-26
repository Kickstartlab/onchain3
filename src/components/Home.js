import React, { useEffect, useState, useRef } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import brand_1 from '../assets/brand_1.png';
import brand_2 from '../assets/brand_2.png';
import brand_3 from '../assets/brand_3.png';
import brand_4 from '../assets/brand_4.png';
import faq from '../assets/faq.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import FloatingText from './FloatingText';
import Accordion from './Accordion';
import Tabs from './Tabs';


export default function Home() {

    const paragraph =
        "Onchain3 was founded by Web3 marketing experts with years of hands-on experience. From the start, we’ve focused on delivering results, not just buzz. With a track record of successfully promoting over 50 Web3 projects, we’ve learned exactly what works—and what doesn’t. We’re here to help Web3 projects grow, thrive, and reach the right audience, with proven strategies that deliver real impact.";

    const words = paragraph.split(" ");
    const sectionRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.1 } // Trigger when 10% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top < windowHeight && rect.bottom > 0) {
                const progress = 1 - Math.max(0, rect.top / windowHeight);
                setScrollProgress(progress);
            }
        };

        if (isInView) {
            window.addEventListener("scroll", handleScroll);
            handleScroll(); // Initial check in case already in view
        } else {
            setScrollProgress(0); // Reset if out of view
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isInView]);

    const getColor = (index) => {
        const opacity = Math.min(1, 0.38 + (scrollProgress * index) / words.length);
        return `rgba(255, 255, 255, ${opacity})`;
    };

    return (
        <div className="bg-black-50 font-montserat overflow-hidden text-white-100 m-0">

            <div className="lg:px-20 px-5 lg:h-screen">
                <div className='container mx-auto'>

                    <Menu />

                    <div className="lg:flex justify-center items-center gap-y-12 lg:py-28 py-12">
                        <div className='lg:w-1/2'>
                            <div className='md:space-y-8 space-y-3 '>
                                <p className='md:text-2xl text-lg font-semibold'>Onchain 3 Transforming</p>
                                <h1 className='lg:text-8xl text-5xl font-extrabold'>
                                    <span className='text-blue-50'>Visions</span> into
                                </h1>
                                <p className='md:text-3xl text-xl font-bold'>Digital Reality</p>
                            </div>

                            <button className="bg-blue-50 rounded-lg py-2 lg:px-8 px-4 font-semibold text-black-100 mt-6">
                                Get A Free Proposal
                            </button>
                        </div>

                        <div className='lg:w-1/2'>
                            {/* <FloatingText /> */}
                        </div>
                    </div>

                    <div className='flex flex-wrap md:justify-center justify-around items-center lg:gap-24 gap-12 pb-6'>
                        <div className='lg:w-44 w-full lg:text-left text-center'>
                            WORKED WITH
                            GLOBAL LARGEST
                            BRANDS
                        </div>
                        <div>
                            <img src={brand_1} alt='brand'></img>
                        </div>
                        <div>
                            <img src={brand_2} alt='brand'></img>
                        </div>
                        <div>
                            <img src={brand_3} alt='brand'></img>
                        </div>
                        <div>
                            <img src={brand_4} alt='brand'></img>
                        </div>
                    </div>
                </div>
            </div>

            {/* about us section */}

            <div id='about' className="lg:px-20 px-5 lg:py-20 py-6 lg:h-screen">
                <div className='container mx-auto'>

                    <div className='text-center justify-center md:text-3xl font-bold lg:leading-relaxed'>
                        <p>  Years of Web3 Expertise, Refining Strategies, <span className='text-blue-50'>Learning from</span></p>
                        <p><span className='text-blue-50'>Mistakes</span>, and Delivering Proven Marketing Results.</p>
                    </div>

                    <div className='flex flex-wrap items-start justify-center gap-6 lg:mt-24 mt-12'>

                        <div className='lg:w-1/6 md:w-1/2 w-full space-y-12'>
                            <div className='md:w-44 w-24 md:h-44 h-24 flex items-center justify-center rounded-full border border-blue-50 mx-auto'>
                                <p className='font-bold lg:text-7xl md:text-5xl text-4xl'>+7</p>
                            </div>

                            <p className='lg:text-xl text-center font-medium'>years in the market</p>
                        </div>

                        <div className='lg:w-1/6 md:w-1/2 w-full space-y-12'>
                            <div className='md:w-44 w-24 md:h-44 h-24 flex items-center justify-center rounded-full border border-blue-50 mx-auto'>
                                <p className='font-bold md:text-4xl text-2xl'>$10M</p>
                            </div>

                            <p className='lg:text-xl text-center font-medium'>Marketing Budget Invested</p>
                        </div>

                        <div className='lg:w-1/6 md:w-1/2 w-full space-y-12'>
                            <div className='md:w-44 w-24 md:h-44 h-24 flex items-center justify-center rounded-full border border-blue-50 mx-auto'>
                                <p className='font-bold md:text-4xl text-2xl'>100+</p>
                            </div>

                            <p className='lg:text-xl text-center font-medium'>Happy Clients</p>
                        </div>

                        <div className='lg:w-1/6 md:w-1/2 w-full space-y-12'>
                            <div className='md:w-44 w-24 md:h-44 h-24 flex items-center justify-center rounded-full border border-blue-50 mx-auto'>
                                <p className='font-bold md:text-4xl text-2xl'>30</p>
                            </div>

                            <p className='lg:text-xl text-center font-medium'>People in Team</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="lg:px-20 px-5 lg:py-20 py-6">
                <div className='container mx-auto'>

                    <div className="bg-black flex items-center justify-center">
                        <div ref={sectionRef} className="p-6 max-w-3xl text-3xl font-bold">
                            <p className="text-lg font-medium flex flex-wrap leading-relaxed sticky top-16">
                                {words.map((word, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            color: getColor(index),
                                            transition: "color 0.5s ease-in-out",
                                        }}
                                        className="mr-1"
                                    >
                                        {word}
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* blocks section */}

            <div className="lg:px-20 px-5 lg:py-20 py-6">
                <div className='container mx-auto'>

                    <div className='grid md:grid-cols-3 grid-cols-1 items-center justify-center gap-3 grid-rows-2'>
                        <div className='col-span-2 rounded-2xl bg-[#131313] border border-blue-50 p-20'>

                        </div>
                        <div className='col-span-1 rounded-2xl bg-[#131313] border border-blue-50 p-20'>

                        </div>
                        <div className='col-span-1 rounded-2xl bg-[#131313] border border-blue-50 p-20'>

                        </div>
                        <div className='col-span-2 rounded-2xl bg-[#131313] border border-blue-50 p-20'>

                        </div>
                    </div>

                </div>
            </div>

            {/* tabs section */}

            <div className="lg:px-20 px-5 lg:py-20 py-10">
                <div className='container mx-auto'>

                    <Tabs />

                    <div className='flex flex-wrap gap-6 items-center justify-center mx-auto'>
                        <div className='lg:w-5/12'>

                        </div>

                        <div className='lg:w-6/12'>

                        </div>
                    </div>
                </div>
            </div>

            {/* roadmap section */}

            <div className="lg:px-20 px-5 lg:py-20 py-6">
                <div className='container mx-auto'>
                    <div className='flex flex-wrap md:gap-24 gap-12 items-center justify-center mx-auto'>
                        <div className='flex items-center gap-4 lg:w-4/12'>
                            <div className='w-0.5 bg-blue-50 h-96'>
                            </div>

                            <div className='relative z-20 -left-6 space-y-24'>
                                <div className=''>
                                    <div className='flex items-center gap-4'>
                                        <span className='w-4 h-4 rounded-full bg-white-100'></span>
                                        <p className='lg:text-lg'>Initial Contact<br></br>
                                            – Fill out a short inquiry form</p>
                                    </div>
                                </div>

                                <div className=''>
                                    <div className='flex items-center gap-4'>
                                        <span className='w-4 h-4 rounded-full bg-white-100'></span>
                                        <p className='lg:text-lg'>
                                            Discovery Call<br></br>
                                            – Discuss goals & requirements
                                        </p>
                                    </div>
                                </div>

                                <div className=''>
                                    <div className='flex items-center gap-4'>
                                        <span className='w-4 h-4 rounded-full bg-white-100'></span>
                                        <p className='lg:text-lg'>
                                            Strategy Proposal<br></br>
                                            – Receive a tailored action plan
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center gap-4 lg:w-4/12'>
                            <div className='w-0.5 bg-blue-50 h-96'>
                            </div>

                            <div className='relative z-20 -left-6 space-y-24'>
                                <div className=''>
                                    <div className='flex items-center gap-4'>
                                        <span className='w-4 h-4 rounded-full bg-white-100'></span>
                                        <p className='lg:text-lg'>
                                            Onboarding & Setup <br></br>
                                            – Align tools & expectations
                                        </p>
                                    </div>
                                </div>

                                <div className=''>
                                    <div className='flex items-center gap-4'>
                                        <span className='w-4 h-4 rounded-full bg-white-100'></span>
                                        <p className='lg:text-lg'>
                                            Execution & Growth <br></br>
                                            – Start marketing & development
                                        </p>
                                    </div>
                                </div>

                                <div className=''>
                                    <div className='flex items-center gap-4'>
                                        <span className='w-4 h-4 rounded-full bg-white-100'></span>
                                        <p className='lg:text-lg'>
                                            Optimization & Scale <br></br>
                                            – Refine & expand strategies
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* text section */}

            <div className="lg:px-20 px-5 lg:pb-36 py-6">
                <div className='container mx-auto text-center space-y-8'>

                    <div className='text-center md:text-4xl text-2xl font-bold'>
                        <span className='text-blue-50'>Share your marketing challenge</span>, and we'll craft
                        <p> a tailored solution for your Web3 brand.</p>
                    </div>

                    <div className='md:text-2xl text-lg lg:leading-relaxed '>
                        <p>Choose Onchain3 as your Web3 marketing partner to drive</p>
                        <p>growth in the blockchain and crypto space.</p>
                        <p>Click "Get a proposal" to start today.</p>
                    </div>

                    <button className="bg-blue-50 rounded-lg py-2 lg:px-8 px-4 font-semibold text-black-100">
                        Get A Free Proposal
                    </button>
                </div>
            </div>

            {/* Frequently Asked Questions section */}

            <div id='faq' className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <div className='space-y-4 text-center lg:mb-12 mb-8'>
                        <h3 className='lg:text-4xl text-2xl font-bold'>
                            Frequently Asked Questions
                        </h3>

                        <p>
                            Discover Solutions in Our FAQ Section. Explore commonly asked questions for answers. If you still have inquiries, schedule a call with us.
                        </p>
                    </div>

                    <div className='lg:flex items-start justify-between gap-8 lg:mt-28 mt-12 lg:space-y-0 space-y-8'>

                        <div className='lg:w-4/12 w-full'>
                            <img src={faq} alt=''></img>
                        </div>

                        <div className='lg:w-8/12 w-full'>
                            <Accordion />
                        </div>
                    </div>
                </div>
            </div>

            {/* Get In Touch With Us section */}

            <div id='getintouch' className="lg:px-20 px-5 lg:py-32 py-6">
                <div className='container mx-auto'>
                    <div className='flex flex-col items-center justify-center gap-8 lg:w-6/12 mx-auto'>

                        <div className='flex items-center justify-center gap-5'>
                            <p className='font-extrabold lg:text-8xl text-5xl px-2 bg-blue-50 text-black-100 rounded-2xl'>03</p>

                            <svg width="249" height="16" viewBox="0 0 249 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M248.707 8.70711C249.098 8.31658 249.098 7.68342 248.707 7.29289L242.343 0.928932C241.953 0.538408 241.319 0.538408 240.929 0.928932C240.538 1.31946 240.538 1.95262 240.929 2.34315L246.586 8L240.929 13.6569C240.538 14.0474 240.538 14.6805 240.929 15.0711C241.319 15.4616 241.953 15.4616 242.343 15.0711L248.707 8.70711ZM0 9H248V7H0V9Z" fill="white" />
                            </svg>

                            <div className='bg-white-100 border border-blue-50 rounded-3xl text-black-100 text-4xl w-44 text-center p-5'>
                                Your Project
                            </div>
                        </div>

                        <h2 className='md:text-5xl font-extrabold text-center'>
                            Get In Touch With Us
                        </h2>

                        <p className='md:text-xl text-center lg:leading-relaxed'>
                            You will feel confident in your choice from the first minutes of communication with Onchain 3
                        </p>

                        <button className="bg-blue-50 rounded-lg py-2 lg:px-8 px-4 font-semibold text-black-100">
                            Get A Free Proposal
                        </button>
                    </div>
                </div>
            </div>

            <Footer />

        </div >
    )
}
