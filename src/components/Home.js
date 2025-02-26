import React, { useEffect } from 'react'
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


export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 3000,
        });
        Aos.refresh();
    }, [])

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
                            <div className='md:w-44 w-28 md:h-44 h-28 flex items-center justify-center rounded-full border border-blue-50 mx-auto'>
                                <p className='font-bold lg:text-7xl md:text-5xl text-4xl'>+7</p>
                            </div>

                            <p className='lg:text-xl text-center font-medium'>years in the market</p>
                        </div>

                        <div className='lg:w-1/6 md:w-1/2 w-full space-y-12'>
                            <div className='md:w-44 w-28 md:h-44 h-28 flex items-center justify-center rounded-full border border-blue-50 mx-auto'>
                                <p className='font-bold md:text-4xl text-2xl'>$10M</p>
                            </div>

                            <p className='lg:text-xl text-center font-medium'>Marketing Budget Invested</p>
                        </div>

                        <div className='lg:w-1/6 md:w-1/2 w-full space-y-12'>
                            <div className='md:w-44 w-28 md:h-44 h-28 flex items-center justify-center rounded-full border border-blue-50 mx-auto'>
                                <p className='font-bold md:text-4xl text-2xl'>100+</p>
                            </div>

                            <p className='lg:text-xl text-center font-medium'>Happy Clients</p>
                        </div>

                        <div className='lg:w-1/6 md:w-1/2 w-full space-y-12'>
                            <div className='md:w-44 w-28 md:h-44 h-28 flex items-center justify-center rounded-full border border-blue-50 mx-auto'>
                                <p className='font-bold md:text-4xl text-2xl'>30</p>
                            </div>

                            <p className='lg:text-xl text-center font-medium'>People in Team</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* features section */}

            <div id='features' className="lg:px-20 px-5">
                <div className='container mx-auto'>


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

                    <div className='lg:flex items-start justify-between gap-8 lg:mt-24 mt-12 lg:space-y-0 space-y-8'>

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
