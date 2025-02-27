import React, { useState } from 'react'
export default function Menu() {

  const [isOpen, setIsopen] = useState(false);
  const [show, setShow] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }


  return (

    <header>

      <div className="lg:flex hidden items-center justify-between h-24">

        <a href="/" className="">
          <div className='flex items-center gap-x-2 text-xl'>
            <p className='bg-blue-50 rounded-md px-0.5 font-bold text-black-100'>O3</p>
            <p className='font-bold'>Onchain 3</p>
          </div>
        </a>

        <nav>
          <ul className="flex justify-center gap-5 pt-4 items-center text-white-100">
            <li><a href="/" className="">Home</a></li>
            <li><a href="#about" className="">About us</a></li>
            <li><a href="#services" className="">Services</a></li>
            <li><a href="#cases" className="">Cases</a></li>
          </ul>
        </nav>

        <div>
          <button className="bg-blue-50 rounded-lg py-1 lg:px-8 px-4 font-semibold text-black-100">
            Contact us
          </button>
        </div>
      </div>

      <div className="lg:hidden flex items-center justify-between py-6">
        <a href="/" className="">
          <div className='flex items-center gap-x-2'>
            <p className='bg-blue-50 rounded-md px-0.5 font-bold text-black-100'>O3</p>
            <p className='font-bold'>Onchain 3</p>
          </div>
        </a>

        <button onClick={ToggleSidebar} className="nav cursor-pointer">

          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
            <path d="M0.68811 1C0.68811 0.447715 1.13583 0 1.68811 0H3.68811C4.2404 0 4.68811 0.447715 4.68811 1V3C4.68811 3.55228 4.2404 4 3.68811 4H1.68811C1.13583 4 0.68811 3.55228 0.68811 3V1Z" fill="white"></path>
            <path d="M0.68811 13C0.68811 12.4477 1.13583 12 1.68811 12H3.68811C4.2404 12 4.68811 12.4477 4.68811 13V15C4.68811 15.5523 4.2404 16 3.68811 16H1.68811C1.13583 16 0.68811 15.5523 0.68811 15V13Z" fill="white"></path>
            <path d="M12.6881 1C12.6881 0.447715 13.1358 0 13.6881 0H15.6881C16.2404 0 16.6881 0.447715 16.6881 1V3C16.6881 3.55228 16.2404 4 15.6881 4H13.6881C13.1358 4 12.6881 3.55228 12.6881 3V1Z" fill="white"></path>
            <path d="M12.6881 13C12.6881 12.4477 13.1358 12 13.6881 12H15.6881C16.2404 12 16.6881 12.4477 16.6881 13V15C16.6881 15.5523 16.2404 16 15.6881 16H13.6881C13.1358 16 12.6881 15.5523 12.6881 15V13Z" fill="white"></path>
          </svg>

        </button>
      </div>

      <div className={`sidebar ${isOpen === true ? 'active' : ''} dark:bg-blue-200 bg-black-50 border border-white-50 rounded-md`}>
        <div className='p-6'>
          <ul onClick={ToggleSidebar} className='space-y-6'>
            <li><a href="/" className="">Home</a></li>
            <li><a href="#about" className="">About us</a></li>
            <li><a href="#services" className="">Services</a></li>
            <li><a href="#cases" className="">Cases</a></li>
          </ul>
        </div>
      </div>

    </header >
  )
}
