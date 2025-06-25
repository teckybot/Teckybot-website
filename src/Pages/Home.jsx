import React from 'react'
import Footer from '../Components/Footer'
import industrylogo from '../data/home/industrylogo.jpg'
import card1 from '../data/home/card1.png'
import card2 from '../data/home/card2.png'
import card3 from '../data/home/card3.png'
import ImageCarousel from '../Components/ImageCarousel'
import stem from '../data/home/stem.jpg'
import InfoNumbers from '../Components/InfoNumbers'
import Partners from '../Components/Partners'
import Testimonials from '../Components/Testimonials'
import robo from '../data/home/robo.png'
import boy from '../data/home/boy.png'
import semicircle from '../data/home/semicircle.png'
import topbox from '../data/home/topbox.png'
import HomeHero from '../Components/HomeHero'

const Home = () => {
  return (
    <div className='flex flex-col items-center'>

      <HomeHero/>

      <ImageCarousel />

      <div className='bg-black w-full flex flex-wrap gap-4 justify-around items-center py-16 sm:py-36 text-white'>
        <div style={{ "background": "linear-gradient(135deg, rgba(38, 38, 38, 1) 0%, rgba(3, 3, 3, 1) 100%)" }}
          className='flex flex-col rounded-[20px] p-12 gap-12 w-[350px] h-[270px]'>
          <div className='flex gap-8 items-center pt-2'>
            <img src={card1} alt='card1' className='w-[35px] h-auto' />
            <p className='font-semibold text-[16px]'>VISION</p>
          </div>
          <p>
            Empowering Teckys with Industry 4.0 technologies, where future meets innovation.
          </p>
        </div>
        <div style={{ "background": "linear-gradient(135deg, rgba(38, 38, 38, 1) 0%, rgba(3, 3, 3, 1) 100%)" }}
          className='flex flex-col rounded-[20px] p-12 gap-12 w-[350px] h-[270px]'>
          <div className='flex gap-8 items-center'>
            <img src={card2} alt='card2' className='w-[35px] h-auto' />
            <p className='font-semibold text-[16px]'>MISSION</p>
          </div>
          <p>
            To integrate our platform in educational institutes to make industry innovators for Bharat.
          </p>
        </div>
        <div style={{ "background": "linear-gradient(135deg, rgba(38, 38, 38, 1) 0%, rgba(3, 3, 3, 1) 100%)" }}
          className='flex flex-col rounded-[20px] p-12 gap-12 w-[350px] h-[270px]'>
          <div className='flex gap-8 items-center'>
            <img src={card3} alt='card3' className='w-[35px] h-auto' />
            <p className='font-semibold text-[16px]'>GOAL</p>
          </div>
          <p>
            Tocreate one million skilled Teckys in industry 4.0 by 2030.
          </p>
        </div>
      </div>

      <div className='w-full flex justify-center items-center mt-[-10px] sm:mt-0 py-12 sm:py-24'
        style={{ "background": "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100%)" }}>
        <img src={industrylogo} alt='logo' className='w-[80%] sm:w-[50%] xl:w-[40%] h-auto rounded-[50%]'
          style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }} />
      </div>

      <div className='flex flex-col xl:flex-row w-full items-center sm:px-6 xl:pl-8 xl:pr-12'>
        <div className='xl:w-[60%] p-2 sm:p-12'>
          <img src={stem} alt='stem_certificate' />
        </div>
        <div className='xl:w-[40%] p-2 flex flex-col items-center justify-center text-justify gap-6'>
          <h1 className='text-[30px] sm:text-[48px] font-semibold'>
            STEM.org Accredited
          </h1>
          <p className='text-[17px]'>
            Teckybot has been officially accredited by STEM.org, a prestigious organization dedicated to validating STEM (Science, Technology, Engineering, and Mathematics) education programs worldwide. This accreditation is a testament to our commitment to delivering high-quality STEM learning experiences to students nationally. At Teckybot, we strive to inspire the next generation of innovators by providing comprehensive STEM education solutions that are engaging, interactive, and aligned with industry standards.
          </p>
          <p className='text-[17px]'>
            Our accreditation by STEM.org validates the quality and effectiveness of our programs, ensuring that students receive a top-notch education in industry 4.0 technologies. With this accreditation, Teckybot joins a select group of STEM education providers recognized for their excellence in curriculum design, instructional delivery, and overall impact on student learning outcomes. We're honored to be part of this esteemed community and look forward to continuing our mission of empowering students with the skills they need to thrive in the digital age.
          </p>
        </div>
      </div>

      <InfoNumbers />

      <div className="relative w-[80vw] h-[35vh] sm:h-[60vh] lg:h-[85vh] xl:rounded-[500px] rounded-[10px] overflow-hidden my-8 mx-auto transition-all duration-300 xl:hover:rounded-[10px]">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/1XY_tgcRH28"
          frameBorder="0"
          allowFullScreen
          title="YouTube video"
        ></iframe>
      </div>
      <Testimonials />

      <Partners />

      <Footer />
    </div>
  )
}

export default Home