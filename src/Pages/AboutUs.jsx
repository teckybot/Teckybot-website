import React from 'react'
import Footer from '../Components/Footer'
import founder from '../data/aboutus/Founder_Ceo_teckybot.jpg'
import TeamSection from '../Components/TeamSection'
import img1 from '../data/aboutus/teckybot_family_animate.png'
import img from '../data/services/Group30.png'
import img2_1 from '../data/aboutus/Awards1_teckybot.png'
import img2_2 from '../data/aboutus/Awards2_teckybot.jpg'
import img2_3 from '../data/aboutus/Awards3_teckybot.jpg'

const AboutUs = () => {
  const awards = [img2_1, img2_2, img2_3];
  return (
    <div className='relative flex w-full flex-col items-center'>
      <div className=' w-[90%] lg:w-[85%] sm:w-[80%] mt-14 mb-5 md:my-16 rounded-[20px]'
        style={{
          background: "linear-gradient(180deg, rgba(207, 227, 255, 1) 2%, rgba(255, 255, 255, 1) 88%)",
          boxShadow: '0px 20px 30px rgba(0,0,0, 0.25)'
        }}>

        <div className="flex justify-center items-center h-full">
          <div
            className='w-full sm:w-[90%] lg:w-[70%] z-20 bg-contain bg-center flex flex-col items-center pb-1 '
            style={{
              background: `url(${img})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}>

            <h1 className='text-[32px] sm:text-[48px] lg:text-[64px] font-semibold mt-[-20px] sm:mt-[-40px] lg:mt-[-50px] text-center'>
              About <span className='text-[#FF721F]'>Us</span>
            </h1>

            <p className='px-4 sm:px-8 py-4 text-center text-sm sm:text-base'>
              We’re the team behind <strong>Teckybot</strong>  a passionate group of tech enthusiasts, mentors, and innovators dedicated to making learning engaging and practical. we empower learners to move beyond textbooks and step confidently into the real world tech landscape.
            </p>

            <img src={img1} alt='img1' className='w-[90%] max-w-[450px] h-auto sm:h-[300px] object-contain' />
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col-reverse items-center lg:flex-row lg:h-[600px] my-12'>
        <div className='w-[95%] sm:w-[80%] lg:w-[62%] lg:h-full rounded-r-[30px] lg:rounded-r-[0px] rounded-l-[30px] p-6 sm:p-20 flex flex-col bg-black text-white sm:gap-4'>
          <h1 className='font-semibold text-[32px] sm:text-[48px]'>Founder Message</h1>
          <p className='py-6 text-justify'>
            Starting on an entrepreneurial journey driven by engineering passion, we initially offered comprehensive training for engineering students.
            Expanding our team to seven technical experts, we established Atal Tinkering Labs (ATL) and organized workshops to bridge theory and practice.
            Evolving into an innovative product development firm, we obtained ISO 9001:2015 certification in robotics, aligning with the "MAKE IN BHARAT" initiative.
            <br /><br />At Teckybot, we provide immersive experiences in Industry 4.0 technology and STEM education through workshops, projects, internships, and expert seminars.
            Join our vibrant community to explore, learn, and innovate for the future.
          </p>
        </div>
        {/* <div className='w-[70%] sm:w-[60%] lg:w-[38%] lg:h-full'>
          <img src={founder} alt='founder' className='w-full h-full rounded-t-[20px] lg:rounded-t-[0px] lg:rounded-r-[30px]' />

        </div> */}
        <div className='relative w-[70%] sm:w-[60%] lg:w-[38%] lg:h-full'>
          {/* Image */}
          <img
            src={founder}
            alt='founder'
            className='w-full h-full rounded-t-[20px] lg:rounded-t-[0px] lg:rounded-r-[30px] object-cover'
          />

          {/* Name overlay */}
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg text-lg font-semibold shadow-lg">
            <p className="text-lg font-bold">N.Venkata Reddy</p>
            <p className="text-sm font-medium opacity-80 text-center">Founder & CEO</p>
          </div>
        </div>

      </div>
      <div className="text-center py-10 ">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Meet Our <span className="text-[#FF721F]">Team</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          The passionate minds behind Teckybot's success
        </p>
      </div>
      <TeamSection />

      <h1 className='text-center text-[48px] font-semibold'>Awards and Achievements</h1>

      <div className="flex justify-start items-center h-[500px] w-full mt-4 overflow-hidden gap-16">
        {/* Scrolling container */}
        <div className="flex animate-scroll-awards hover:[animation-play-state:paused]">
          {[...awards, ...awards].map((image, index) => (
            <img
              key={`primary-${index}`}
              src={image}
              alt={`college-img-${index}`}
              className="w-auto h-[400px] object-cover mx-16 max-w-none"
              style={{ boxShadow: "0px 0px 20px rgba(0,0,0,0.2)" }}
            />
          ))}
        </div>
      </div>




      <Footer />
    </div>
  )
}

export default AboutUs