import React from 'react'
import Facebook from '../data/Facebook.png'
import Instagram from '../data/Instagram.png'
import Linked from '../data/Linked.png'
import mail from '../data/mail.png'
import Youtube from '../data/Youtube.png'
import YourImage from '../data/Teckybot_logo.jpg'

const Footer = () => {
  return (
    <div className="bg-black flex flex-col items-center w-full text-white">
      <div className="w-full max-w-7xl px-4 py-8">
        {/* Columns */}
        <div className="grid grid-cols-1  md:grid-cols-3 gap-8 md:gap-12 lg:gap-20 lg:pl-[140px] text-[14px] leading-6 mb-10">
          {/* All Links */}
          <div className="flex flex-col items-center md:items-start">
            <ul className="list-none w-full">
              <li className="font-bold text-[20px] py-0 text-center md:text-left"><span className='text-[#FF721F]'>All</span></li>
              <li className="py-2 text-center md:text-left">
                <a href='/' className='hover:text-blue-600'>Home</a>
              </li>
              <li className="py-2 text-center md:text-left">
                <a href='/AboutUs' className='hover:text-blue-600'>About Us</a>
              </li>
              <li className="py-2 text-center md:text-left">
                <a href='/Teckyverse' className='hover:text-blue-600'>TeckyVerse</a>
              </li>
              <li className="py-2 text-center md:text-left">
                <a href='/Services' className='hover:text-blue-600'>Services</a>
              </li>
              <li className="py-2 text-center md:text-left">
                <a href='/Career' className='hover:text-blue-600'>Career</a>
              </li>
              <li className="py-2 text-center md:text-left">
                <a href='/Events' className='hover:text-blue-600'>Events</a>
              </li>
            </ul>
          </div>
          {/* Main Office */}
          <div className="flex flex-col items-center md:items-start">
            <ul className="list-none w-full">
              <li className="font-bold text-[20px] py-0 text-center md:text-left"><span className='text-[#FF721F]'>Head Office</span></li>
              <li className="py-2 text-center md:text-left">Dr No: 1, 20/1, Juttada Rd,</li>
              <li className="py-2 text-center md:text-left">Pulaganipalem,</li>
              <li className="py-2 text-center md:text-left">Visakhapatnam,</li>
              <li className="py-2 text-center md:text-left">Andhra Pradesh, 531143.</li>
              {/* <li className="py-2 text-center md:text-left">
                Ph: <a href="tel:8886122886" className="hover:text-blue-600">88861 22887</a>
              </li> */}
            </ul>
          </div>
          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <ul className="list-none w-full">
              <li className="font-bold text-[20px] py-0 text-center md:text-left"><span className='text-[#FF721F]'>Contact</span></li>
              <li className="py-2 text-center md:text-left">
                Phone: <a href="tel:8886122886" className="hover:text-blue-600">88861 22885</a>
              </li>
              <li className="py-2 text-center md:text-left">
                Email: <a href="mailto:info@teckybot.com" className="hover:text-blue-600">info@teckybot.com</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Social Icons & Logo */}
        <div className="flex flex-col items-center w-full mb-8">
          <div className="flex justify-center items-center gap-4 mb-4">
            <span className="font-bold text-[20px] text-[#FF721F] ">Follow</span>
            <a href="https://www.facebook.com/teckybot?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} alt="facebook" className="w-[25px] h-[25px]" />
            </a>
            <a href="https://www.instagram.com/teckybot/" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="instagram" className="w-[25px] h-[25px]" />
            </a>
            <a href="https://www.linkedin.com/company/teckybot/" target="_blank" rel="noopener noreferrer">
              <img src={Linked} alt="linked in" className="w-[25px] h-[25px]" />
            </a>
            <a href="mailto:info@teckybot.com">
              <img src={mail} alt="mail" className="w-[25px] h-[25px]" />
            </a>
            <a href="https://www.youtube.com/@teckybot23">
              <img src={Youtube} alt="youtube" className="w-[27px] h-[28px]" />
            </a>
          </div>
          <div className="flex justify-center w-full">
            <img src={YourImage} alt="Footer Center Logo" className="h-50 w-auto mt-2" />
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center w-full pb-6 text-center gap-2 text-[13px] ">
          <div>
            Copyrights@2024 Teckybot
          </div>
          <div>
            teckybot V2
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
