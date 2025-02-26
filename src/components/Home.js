import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import brand_1 from '../assets/brand_1.png';
import brand_2 from '../assets/brand_2.png';
import brand_3 from '../assets/brand_3.png';
import brand_4 from '../assets/brand_4.png';

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
        <div className="bg-black-50 font-montserat overflow-hidden text-white-100">

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
                                <p className='font-bold lg:text-7xl md:text-5xl text-4xl'>+7</p>
                            </div>

                            <p className='lg:text-xl text-center font-medium'>Marketing Budget Invested</p>
                        </div>

                        <div className='lg:w-1/6 md:w-1/2 w-full space-y-12'>
                            <div className='md:w-44 w-28 md:h-44 h-28 flex items-center justify-center rounded-full border border-blue-50 mx-auto'>
                                <p className='font-bold lg:text-7xl md:text-5xl text-4xl'>+7</p>
                            </div>

                            <p className='lg:text-xl text-center font-medium'>Happy Clients</p>
                        </div>

                        <div className='lg:w-1/6 md:w-1/2 w-full space-y-12'>
                            <div className='md:w-44 w-28 md:h-44 h-28 flex items-center justify-center rounded-full border border-blue-50 mx-auto'>
                                <p className='font-bold lg:text-7xl md:text-5xl text-4xl'>+7</p>
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

            <div id='features' className="lg:px-20 px-5">
                <div className='container mx-auto'>
                    <Accordion />

                </div>
            </div>




            {/* <Footer /> */}

        </div >
    )
}
