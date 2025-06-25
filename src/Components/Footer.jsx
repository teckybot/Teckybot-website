import React from 'react'
import Facebook from '../data/Facebook.png'
import Instagram from '../data/Instagram.png'
import Linked from '../data/Linked.png'
import mail from '../data/mail.png'
import Youtube from '../data/Youtube.png'



const Footer = () => {
  return (
    <div className='bg-black flex flex-col justify-center items-center w-full text-white'>
      <div className="flex flex-col sm:flex-row sm:items-start w-full">
        <div className="sm:w-[40%] text-center">
          <h1 className="font-bold text-[60px] xl:text-[100px]">
            TECKYBOT</h1>
        </div>
        <div className="w-full sm:w-[60%] flex flex-col items-center sm:items-start justify-between pt-4 p-4 sm:pt-12 xl:pt-20">
          <div className="w-[90%] h-[2px] bg-white">
          </div>
          <div className="flex justify-around sm:justify-start items-start gap-6 sm:gap-16 xl:gap-36 text-[14px] leading-6 py-16 w-full">
            <div>
              <ul className="list-none">
                <li className="font-semibold py-4">All</li>
                <li className="py-2">
                  <a href='/' className='hover:text-blue-600'>
                    Home
                  </a>
                </li>
                <li className="py-2">
                  <a href='/AboutUs' className='hover:text-blue-600'>
                    About Us
                  </a>
                </li>
                <li className="py-2">
                  <a href='/Teckyverse' className='hover:text-blue-600'>
                    TeckyVerse
                  </a>
                </li>
                <li className="py-2">
                  <a href='/Services' className='hover:text-blue-600'>
                    Services
                  </a>
                </li>
                <li className="py-2">
                  <a href='/Career' className='hover:text-blue-600'>
                    Career
                  </a>
                </li>
                <li className="py-2">
                  <a href='/Events' className='hover:text-blue-600'>
                    Events
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-none">
                <li className="font-semibold py-4">Main Office</li>
                <li className="py-2"> Dr No: 1, 20/1, Juttada Rd,</li>
                {/* <li className="py-2">Juttada Rd,</li> */}
                <li className="py-2"> Pulaganipalem,</li>
               <li className="py-2"> Visakhapatnam,</li>
               <li className="py-2"> Andhra Pradesh, 531143.</li>  
                <li className="py-2">
                  Ph: <a href="tel:8886122886" className="hover:text-blue-600 ">88861 22887</a>
                </li>
              </ul>
            </div>
            {/* <div>
              <ul className="list-none">
                <li className="font-semibold py-4">Corporate Office-2</li>
                <li className="py-2">T-Hub (C.O),</li>
                <li className="py-2">Hyderabad,</li>
                <li className="py-2">Telangana,</li>
                <li className="py-2">
                  Ph: <a href="tel:8886122886" className="hover:text-blue-600">88861 22886</a>
                </li>

              </ul>
            </div> */}
          </div>

          <div className="flex justify-start gap-6">
            <ul className="list-none font-semibold">
              <li>Follow </li>
            </ul>
            <a href="https://www.facebook.com/teckybot?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} alt="facebook" className='w-[25px] h-[25px] mx-4' />
            </a>

            <a href="https://www.instagram.com/teckybot/" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="instagram" className='w-[25px] h-[25px] mx-4' />
            </a>

            <a href="https://www.linkedin.com/company/teckybot/" target="_blank" rel="noopener noreferrer">
              <img src={Linked} alt="linked in" className='w-[25px] h-[25px] mx-4' />
            </a>

            <a href="mailTo:info@teckybot.com">
              <img src={mail} alt="mail" className='w-[25px] h-[25px] mx-4' />
            </a>

            <a href="https://www.youtube.com/@teckybot23">
              <img src={Youtube} alt="youtube" className='w-[27px] h-[28px] mx-4' />
            </a>
          </div>
        </div>

      </div>

      <div className='pt-8 flex justify-between items-center w-full pb-6 px-6'>
        <div>
          Copyrights@2024Teckybot
        </div>
        <div>
          teckybot V2
        </div>
      </div>
    </div>
  )
}

export default Footer