import React from 'react'
import icon_1 from '../assets/icon_1.png';
import icon_2 from '../assets/icon_2.png';
import icon_3 from '../assets/icon_3.png';
import icon_4 from '../assets/icon_4.png';
import icon_5 from '../assets/icon_5.png';
import icon_6 from '../assets/icon_6.png';
import logo_1 from '../assets/logo_1.png';



export default function Footer() {
  return (
    <div className="font-inter bg-img">

      <footer className='relative text-white-100 mx-auto lg:px-20 font-inter px-5'>

        <div data-aos="zoom-in" data-aos-delay="350" className='absolute right-0 left-1/2 -ml-56 -mt-12 lg:block hidden'>
          <img src={logo_1} alt="Logo" className='' />
        </div>

        <div className="lg:flex block justify-between items-center gap-x-44 lg:py-20">

          <div data-aos="fade-right" className="lg:w-1/3 w-full text-white-50">

            <h2 className='md:text-2xl text-xl'>
              Don't miss out, Stay updated
            </h2>

            <p className='py-5'>
              Don’t hesitate to subscribe to latest news about $ARBC
            </p>

            <a href="/">
              <button className="text-white-100 btn-custom py-4 flex items-center gap-x-2 md:text-lg text-sm md:px-8 px-3 font-semibold mt-6">
                Sign up For the Newsletter
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
            </a>
          </div>

          <div data-aos="fade-left" className="lg:w-1/3 w-full">

            <p className='py-5 text-white-50'>
              Arbitrum Classic is a decentralized finance project that operates on the Arbitrum chain. This innovative project introduces a unique reward system that offers investors the opportunity to receive Arbitrum tokens simply by holding Arbitrum Classic tokens.
            </p>

          </div>

        </div>

        <div className='flex flex-wrap justify-between items-center'>
          <p className='pt-12 pb-6 text-white-50'>Copyright © {new Date().getFullYear()} Airbtrum Classic. All rights reserved.</p>

          <div className='flex items-center'>
            <a href='/'>
              <img src={icon_1} alt=''></img>
            </a>
            <a href='/'>
              <img src={icon_2} alt=''></img>
            </a>
            <a href='/'>
              <img src={icon_3} alt=''></img>
            </a>
            <a href='/'>
              <img src={icon_4} alt=''></img>
            </a>
            <a href='/'>
              <img src={icon_5} alt=''></img>
            </a>
            <a href='/'>
              <img src={icon_6} alt=''></img>
            </a>
          </div>
        </div>
      </footer>
    </div>

  )
}
