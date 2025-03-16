import React from 'react'
import telegram from '../assets/telegram.png';
import X from '../assets/X.png';
import footer from '../assets/footer.png';




export default function Footer() {
  return (
    <div className="bg-black-50 container mx-auto">
      <span className='md:w-[456px] w-48 md:h-[446px] h-48 bg-blue-50 absolute left-0 blur-[120px] opacity-20 rounded-tr-full'>
      </span>
      <footer className='lg:pl-20 relative z-20'>

        <div className="lg:flex block justify-between items-center gap-x-4 lg:pt-12">

          <div className='lg:w-3/12 w-full flex items-start gap-x-6 py-6 lg:px-0 px-5'>
            <div className='space-y-8'>
              <a href="/" className="">
                <div className='flex items-center gap-x-2 text-2xl'>
                  <p className='bg-blue-50 rounded-md px-1 font-extrabold text-black-100'>O3</p>
                  <p className='font-extrabold'>Onchain 3</p>
                </div>
              </a>

              <p>
                Centric aplications productize before front
                end vortals visualize front end is results and
                value added
              </p>

              <nav>
                <ul className="space-y-5">
                  <li><a href="/" className="hover:text-blue-50">Home</a></li>
                  <li><a href="#about" className="hover:text-blue-50">About us</a></li>
                  <li><a href="#services" className="hover:text-blue-50">Services</a></li>
                  <li><a href="/" className="hover:text-blue-50">Company</a></li>
                  <li><a href="/" className="hover:text-blue-50">Contacts</a></li>
                  <li><a href="/" className="hover:text-blue-50">Privacy Policy</a></li>
                  <li><a href="/" className="hover:text-blue-50">Terms of Service</a></li>
                </ul>
              </nav>
            </div>

            <div className='w-5/12 space-y-12'>
              <a href='/' className='rounded-full border border-blue-50 flex items-center justify-center p-2 w-10 h-10'>
                <img src={telegram} alt='telegram'></img>
              </a>

              <a href='/' className='rounded-full border border-blue-50 flex items-center justify-center p-2 w-10 h-10'>
                <img src={X} alt='X'></img>
              </a>
            </div>
          </div>

          <div className='lg:w-8/12 lg:absolute relative right-0 bottom-0'>
            <img data-aos='fade-up' src={footer} alt='' className=''></img>
          </div>

        </div>

      </footer>
    </div>

  )
}
