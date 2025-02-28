import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import brand_1 from '../assets/brand_1.png';
import brand_2 from '../assets/brand_2.png';
import brand_3 from '../assets/brand_3.png';
import brand_4 from '../assets/brand_4.png';
import faq from '../assets/faq.png';
import Accordion from './Accordion';
import Tabs from './Tabs';
import AnimatedParagraph from './AnimatedParagraph';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 500,
            delay: 100
        });
    }, [])

    return (
        <div className="bg-black-50 font-montserat overflow-hidden text-white-100 m-0">

            <span className='md:w-[800px] w-52 md:h-[500px] h-52 bg-blue-50 absolute left-0 top-0 blur-3xl opacity-10 rounded-b-full'>
            </span>
            <div className="lg:px-20 px-5 relative z-20 lg:h-screen">
                <div className='container mx-auto'>

                    <Menu />

                    <div className="lg:flex justify-between items-start lg:py-20 py-12 lg:space-y-0 space-y-12">
                        <div data-aos='fade-right' className='lg:w-7/12'>
                            <div className='md:space-y-8 space-y-3 '>
                                <p className='md:text-2xl text-lg font-semibold'>Onchain 3 Transforming</p>
                                <h1 className='lg:text-8xl text-[42px] font-extrabold'>
                                    <span className='text-blue-50'>Visions</span> into
                                </h1>
                                <p className='md:text-3xl text-xl font-bold'>Digital Reality</p>
                            </div>

                            <button className="bg-blue-50 rounded-lg py-2 lg:px-8 px-4 font-semibold text-black-100 mt-6">
                                Get A Free Proposal
                            </button>
                        </div>

                        <div data-aos='fade-in' className='5/12'>
                            <div className='grid grid-cols-4 items-center justify-center md:gap-5 gap-2 grid-rows-4'>
                                <div className='animate-border md:w-28 w-16 md:h-28 h-16 p-3 flex items-center text-center justify-center'>
                                    <p className='opacity-30  md:text-base text-xs'>Crypto</p>
                                </div>
                                <div className='md:w-28 w-16 md:h-28 h-16 p-3'></div>
                                <div className='animate-border1 md:w-28 w-16 md:h-28 h-16 p-3 flex items-center text-center justify-center'>
                                    <p className='opacity-30  md:text-base text-xs'>Defi</p>
                                </div>
                                <div className=''></div>

                                <div className='animate-border2 md:w-28 w-16 md:h-28 h-16 p-3'></div>
                                <div className='animate-border3 md:w-28 w-16 md:h-28 h-16 p-3 flex items-center text-center justify-center'>
                                    <p className='opacity-30 md:text-base text-xs'>Web 3</p>
                                </div>
                                <div className=''></div>
                                <div className='animate-border md:w-28 w-16 md:h-28 h-16 p-3'></div>

                                <div className='md:w-28 w-16 md:h-28 h-16 p-3'></div>
                                <div className='animate-border3 md:w-28 w-16 md:h-28 h-16 p-3 flex items-center text-center justify-center'>
                                    <p className='opacity-30  md:text-base text-xs'>Gamefi</p>
                                </div>
                                <div className='animate-border2 md:w-28 w-16 md:h-28 h-16 p-3 flex items-center text-center justify-center'>
                                    <p className='opacity-30  md:text-base text-xs'>Metaverse</p>
                                </div>
                                <div className='animate-border1 md:w-28 w-16 md:h-28 h-16 p-3'></div>

                                <div className='md:w-28 w-16 md:h-28 h-16 p-3'></div>
                                <div className='md:w-28 w-16 md:h-28 h-16 p-3'></div>
                                <div className='md:w-28 w-16 md:h-28 h-16 p-3'></div>
                                <div className='animate-border  md:w-28 w-16 md:h-28 h-16 p-3'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* about us section */}

            <div id='about' className="lg:px-20 px-5 py-6 relative z-20">
                <div className='container mx-auto'>

                    <div className='flex md:justify-center justify-around items-center lg:gap-24 gap-6'>
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

                    <div className='text-center justify-center md:text-3xl font-bold lg:leading-relaxed lg:mt-12 mt-8'>
                        <p>  Years of Web3 Expertise, Refining Strategies, <span className='text-blue-50'>Learning from</span></p>
                        <p><span className='text-blue-50'>Mistakes</span>, and Delivering Proven Marketing Results.</p>
                    </div>

                    <div className='grid lg:grid-cols-4 grid-cols-2 items-start justify-center gap-5 lg:mt-24 mt-12 lg:mx-24'>

                        <div data-aos='fade-up' className='md:space-y-12 space-y-6'>
                            <div className='md:w-44 w-24 md:h-44 h-24 flex items-center justify-center rounded-full border border-blue-50 mx-auto'>
                                <p className='font-bold lg:text-7xl md:text-5xl text-4xl'>+7</p>
                            </div>

                            <p className='lg:text-xl text-center font-medium'>years in the market</p>
                        </div>

                        <div data-aos='fade-up' data-aos-delay='50' className='md:space-y-12 space-y-6'>
                            <div className='md:w-44 w-24 md:h-44 h-24 flex items-center justify-center rounded-full border border-blue-50 mx-auto'>
                                <p className='font-bold md:text-4xl text-2xl'>$10M</p>
                            </div>

                            <p className='lg:text-xl text-center font-medium'>Marketing Budget Invested</p>
                        </div>

                        <div data-aos='fade-up' data-aos-delay='100' className='md:space-y-12 space-y-6'>
                            <div className='md:w-44 w-24 md:h-44 h-24 flex items-center justify-center rounded-full border border-blue-50 mx-auto'>
                                <p className='font-bold md:text-4xl text-2xl'>100+</p>
                            </div>

                            <p className='lg:text-xl text-center font-medium'>Happy Clients</p>
                        </div>

                        <div data-aos='fade-up' data-aos-delay='150' className='md:space-y-12 space-y-6'>
                            <div className='md:w-44 w-24 md:h-44 h-24 flex items-center justify-center rounded-full border border-blue-50 mx-auto'>
                                <p className='font-bold md:text-4xl text-2xl'>30</p>
                            </div>

                            <p className='lg:text-xl text-center font-medium'>People in Team</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* animate text section */}

            <div className="lg:px-20 px-5 relative z-20 py-12">
                <div className='container mx-auto'>

                    <div className=''>
                        <AnimatedParagraph />
                    </div>

                </div>
            </div>

            {/* blocks section */}

            <div className="lg:px-20 px-5 lg:py-20 py-6 relative z-20">
                <div className='container mx-auto'>

                    <div className='grid md:grid-cols-3 grid-cols-1 items-center justify-center md:gap-x-3 gap-y-3 lg:w-11/12 mx-auto'>
                        <div className='col-span-1 rounded-2xl bg-[#131313] border border-blue-50 md:p-12 p-6 text-center flex flex-col justify-end lg:h-72'>
                            <h3 className='text-xl font-semibold'>Fast turnarounds</h3>
                            <p>Receive lightning-fast delivery of your
                                design request within 24 to 48 hours.</p>
                        </div>
                        <div className='col-span-2 rounded-2xl bg-[#131313] border border-blue-50 md:p-12 p-6 lg:h-72 text-center flex flex-col justify-end'>
                            <h3 className='text-xl font-semibold'>Efficient communication</h3>
                            <p>Receive lightning-fast delivery of your
                                design request within 24 to 48 hours.</p>
                        </div>
                        <div className='col-span-2 rounded-2xl bg-[#131313] border border-blue-50 md:p-12 p-6 lg:h-72 text-center flex flex-col justify-end'>
                            <h3 className='text-xl font-semibold'>Top-tier creative team</h3>
                            <p>We work with a network of creatives from different
                                disciplines to deliver outstanding design solutions to you.</p>
                        </div>
                        <div className='col-span-1 rounded-2xl bg-[#131313] border border-blue-50 md:p-12 p-6 lg:h-72 text-center flex flex-col justify-end'>
                            <h3 className='text-xl font-semibold'>Flexibility</h3>
                            <p>
                                Scale up or down, pause, or cancel anytime.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* tabs section */}

            <span className='md:w-[500px] w-44 md:h-[450px] h-48 bg-blue-50 absolute right-0 lg:mr-20 blur-[70px] opacity-20 mt-40 rounded-full'>
            </span>

            <div className="lg:px-20 px-5 lg:py-0 py-10 relative z-20 lg:min-h-screen flex flex-col items-center justify-center">
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

            <div className="lg:px-20 px-5 lg:py-0 py-6 relative z-20">
                <div className='container mx-auto'>
                    <div className='flex flex-wrap md:gap-28 gap-y-8 items-center justify-center mx-auto lg:min-h-[78vh]'>
                        <div data-aos='fade-right' className='flex items-center'>
                            <div className='w-0.5 bg-blue-50 md:h-96 h-72'>
                            </div>

                            <div className='relative z-20 -left-2.5 md:space-y-24 space-y-12'>
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

                        <div data-aos='fade-left' className='flex items-center'>
                            <div className='w-0.5 bg-blue-50 md:h-96 h-72'>
                            </div>

                            <div className='relative z-20 -left-2.5 md:space-y-24 space-y-12'>
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

            <div className="lg:px-20 px-5 relative z-20 md:min-h-[90vh] min-h-screen flex flex-col justify-center">
                <div className='container mx-auto text-center space-y-12'>

                    <div data-aos='fade-in' className='text-center md:text-4xl text-2xl font-bold'>
                        <span className='text-blue-50'>Share your marketing challenge</span>, and we'll craft
                        <p> a tailored solution for your Web3 brand.</p>
                    </div>

                    <div data-aos='fade-in' className='md:text-2xl lg:leading-relaxed '>
                        <p>Choose Onchain3 as your Web3 marketing partner to drive</p>
                        <p>growth in the blockchain and crypto space.</p>
                        <p>Click "Get a proposal" to start today.</p>
                    </div>

                    <button className="bg-blue-50 rounded-lg py-2 lg:px-8 px-4 font-semibold text-black-100 hover:animate-bounce duration-300">
                        Get A Free Proposal
                    </button>
                </div>
            </div>

            {/* Frequently Asked Questions section */}

            <span className='md:w-[354px] w-48 md:h-[354px] h-48 bg-blue-50 absolute right-0 left-1/3 blur-3xl opacity-20 lg:mt-48 mt-12 rounded-full'>
            </span>
            <div id='faq' className="lg:px-20 px-5 py-6 relative z-20">
                <div className='container mx-auto'>

                    <div className='space-y-4 text-center lg:mb-12 mb-8'>
                        <h3 className='lg:text-4xl text-2xl font-bold'>
                            Frequently Asked Questions
                        </h3>

                        <p>
                            Discover Solutions in Our FAQ Section. Explore commonly asked questions for answers. If you still have inquiries, schedule a call with us.
                        </p>
                    </div>

                    <div className='lg:flex items-center justify-between gap-8 lg:mt-28 mt-12 lg:space-y-0 space-y-8 faq glow glowDimmed'>

                        <div data-aos='zoom-in' className='lg:w-4/12 w-full'>
                            <img src={faq} alt=''></img>
                        </div>

                        <div data-aos='fade-left' className='lg:w-7/12 w-full'>
                            <Accordion />
                        </div>
                    </div>
                </div>
            </div>

            {/* Get In Touch With Us section */}

            <div id='getintouch' className="lg:px-20 px-5 relative z-20">
                <div className='container mx-auto'>
                    <div className='flex flex-col items-center justify-center gap-12 lg:w-6/12 mx-auto lg:min-h-[85h] min-h-screen'>

                        <div className='md:flex items-center justify-center gap-6 text-center md:space-y-0 space-y-4'>
                            <p data-aos='fade-in' className='font-extrabold lg:text-8xl text-4xl px-2 bg-blue-50 text-black-100 rounded-2xl'>03</p>

                            <svg data-aos='slide-right' data-aos-delay='50' className='md:block hidden' width="239" height="16" viewBox="0 0 249 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M248.707 8.70711C249.098 8.31658 249.098 7.68342 248.707 7.29289L242.343 0.928932C241.953 0.538408 241.319 0.538408 240.929 0.928932C240.538 1.31946 240.538 1.95262 240.929 2.34315L246.586 8L240.929 13.6569C240.538 14.0474 240.538 14.6805 240.929 15.0711C241.319 15.4616 241.953 15.4616 242.343 15.0711L248.707 8.70711ZM0 9H248V7H0V9Z" fill="white" />
                            </svg>


                            <svg data-aos='fade-down' data-aos-delay='50' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 flex mx-auto md:hidden">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
                            </svg>

                            <div data-aos='fade-in' data-aos-delay='300' className='bg-white-100 border border-blue-50 rounded-3xl text-black-100 md:text-4xl text-xl md:w-44 text-center p-5'>
                                Your Project
                            </div>
                        </div>

                        <h2 className='md:text-5xl text-2xl font-extrabold text-center'>
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
