import React from 'react'
import btl from '../data/events/btl.png'
import Footer from '../Components/Footer'
import ellipse from '../data/events/Ellipse.jpg'
import circle from '../data/events/circle.png'
import Rectangle_18 from '../data/Internship/Gallery/Rectangle_18.png'
import Rectangle_19 from '../data/Internship/Gallery/Rectangle_19.png'
import Rectangle_20 from '../data/Internship/Gallery/Rectangle_20.png'
import Rectangle_21 from '../data/Internship/Gallery/Rectangle_21.png'
import Rectangle_22 from '../data/Internship/Gallery/Rectangle_22.png'
import Rectangle_23 from '../data/Internship/Gallery/Rectangle_23.png'


const Events = () => {
  const highlights = [Rectangle_18, Rectangle_19, Rectangle_20]
  const highlights2 = [Rectangle_21, Rectangle_22, Rectangle_23]
  return (
    <div className='flex flex-col w-full items-center justify-center'>


      {/* card  */}
      <div className="my-10 md:my-24 min-h-[280px] md:min-h-[500px] relative bg-gradient-to-b from-white to-blue-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 shadow-lg w-full max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto flex flex-col items-center justify-center md:flex-row md:justify-between overflow-hidden"
        style={{
          background: "linear-gradient(180deg, rgba(207, 227, 255, 1) 2%, rgba(255, 255, 255, 1) 88%)",
          boxShadow: "0px 20px 30px rgba(0,0,0,0.25)"
        }}
      >
        {/* Background Ellipse - Hidden below md, smaller on tablets */}
        <img
          src={ellipse}
          alt="Ellipse"
          className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-[400px] md:w-[680px] h-[400px] md:h-[680px] object-contain pointer-events-none z-0 rounded-full"
        />

        {/* Left Text Section - Shrinks on small screens */}
        <div className="relative z-10 w-full max-w-lg text-center mb-6 md:mb-0 md:text-left">
          <div className="font-bold text-gray-900 text-center text-[36px] sm:text-[48px] lg:text-[64px] leading-tight">
            <div className="flex flex-col items-center justify-center">
              <span>Bharat teck</span>
              <span className="text-[#FF721F]">League</span>
            </div>
          </div>
          {/* <p className="mt-3 sm:mt-4 text-gray-700 text-sm sm:text-base md:text-lg text-center md:text-left">
            Bharat Tech League is Teckybot’s flagship national-level event designed to spark 
innovation and hands-on creativity. It offers a platform for budding tech minds to 
explore, build, and compete using the latest in technology—turning ideas into 
impactful solutions. 
          </p> */}
          <div className="mt-6 flex justify-center md:justify-center">
            <a
              href="https://www.bharatteckleague.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF721F] hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-colors duration-200"
            >
              Explore More
            </a>
          </div>

        </div>

        {/* Circle with Logo - Smaller on mobile/tablet */}
        <div className="relative z-10 w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[350px] md:h-[350px] flex items-center justify-center md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-[-36%] md:-translate-y-[47%]">
          <img
            src={circle}
            alt="Circle"
            className="absolute w-full h-full object-contain drop-shadow-md"
          />
          <a href="https://www.bharatteckleague.com/" target="_blank" rel="noopener noreferrer" className='z-20'>
            <img src={btl} alt="BTL Logo" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4" />
          </a>
        </div>
      </div>

      {/* card 2  */}
      <div className="text-start mx-auto max-w-7xl my-6 sm:my-8 md:my-12 lg:my-16 px-4 sm:px-6 md:px-8">
        <p className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-7">
          Bharat Tech League is Teckybot’s flagship national-level event, crafted to ignite innovation and inspire hands-on creativity among young tech enthusiasts across the country. This dynamic platform invites students and aspiring innovators to showcase their skills, collaborate with peers, and tackle real-world challenges using cutting-edge technologies.
        </p>
        <br />
        <p className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-7">
          Participants engage in a series of exciting tech challenges and  competitions that encourage critical thinking, problem-solving, and teamwork. From ideation to execution, Bharat Tech League empowers individuals to transform bold ideas into impactful, real-world solutions — all while gaining exposure to Industry 4.0 tools and practices.
        </p>
        <br />
        <p className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-7">
          More than just a competition, it’s a celebration of innovation, learning, and the spirit of technology-driven change.
        </p>
      </div>

      <div className="my-10  md:my-20 min-h-[280px] md:min-h-[500px] relative bg-gradient-to-b from-white to-blue-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 shadow-lg w-full max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto flex flex-col items-center justify-center md:flex-row-reverse md:justify-between overflow-hidden"
        style={{
          background: "linear-gradient(180deg, rgba(207, 227, 255, 1) 2%, rgba(255, 255, 255, 1) 88%)",
          boxShadow: "0px 20px 30px rgba(0,0,0,0.25)"
        }}
      >

        {/* Ellipse on left side */}
        <img
          src={ellipse}
          alt="Ellipse"
          className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 w-[400px] md:w-[680px] h-[400px] md:h-[680px] object-contain pointer-events-none z-0 rounded-full"
        />

        {/* Right Text Section */}
        <div className="relative z-10 w-full max-w-lg text-center mb-6 md:mb-0 md:text-right">
          <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 text-center md:text-right">
            <h1 className='text-[36px] sm:text-[48px] lg:text-[64px] text-center'>TECK-<span className='text-[#FF721F]'>A</span>-THON</h1>
          </div>
          {/* <p className="mt-3 sm:mt-4 text-gray-700 text-sm sm:text-base md:text-lg text-center md:text-right">
            Join our summer camp for an unforgettable adventure filled with fun activities,
            new friends, and lifelong memories. Don't miss out on the opportunity to make
            this summer one to remember.
          </p> */}
          <div className="mt-6 flex justify-center md:justify-center">
            <a
              href="#teck-a-thon"
              className="bg-[#FF721F] hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-colors duration-200"
            >
              Explore More
            </a>
          </div>

        </div>

        {/* Circle with Logo on left */}
        <div className="relative z-10 w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[350px] md:h-[350px] flex items-center justify-center md:absolute md:right-1/2 md:top-1/2 md:transform md:translate-x-[-36%] md:-translate-y-[47%]">
          <img
            src={circle}
            alt="Circle"
            className="absolute w-full h-full object-contain drop-shadow-md"
          />
          <a href="#teck-a-thon" className="z-20">
            {/* <img src={btl} alt="BTL Logo" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4" /> */}
            {/* <h1 className=''>LOGO</h1> */}
            <h1 className='text-[16px] sm:text-[28px] lg:text-[44px] text-center'>TECK<span className='text-[#FF721F]'>A</span>THON</h1>
          </a>
        </div>
      </div>

      <div className='text-sm sm:text-base md:text-lg leading-relaxed sm:leading-7 text-center mx-auto max-w-6xl my-9 mb-24'>
        <p className='text-justify'>
          Teck-a-thon is Teckybot’s high-energy hackathon where innovation meets execution.
          Designed to fuel creativity and problem-solving, this event brings together tech
          enthusiasts to brainstorm, build, and present real-world solutions within a limited time
          frame. Whether you're a coder, designer, or idea machine, Teck-a-thon is your space
          to shine, collaborate, and make your mark.
        </p>
      </div>

      <h1 className='text-center text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-semibold leading-tight'>Events <span className='text-[#FF721F]'>Gallery</span></h1>

      <div className="flex justify-start items-center h-[306px] w-full overflow-hidden gap-16 mb-5 mt-10">
        {/* Scrolling container */}
        <div className="flex animate-scroll-awards hover:[animation-play-state:paused]">
          {[...highlights, ...highlights].map((image, index) => (
            <img
              key={`primary-${index}`}
              src={image}
              alt={`college-img-${index}`}
              className="w-auto h-[300px] object-cover mx-6 rounded-2xl"
              style={{ boxShadow: "0px 0px 20px rgba(0,0,0,0.2)" }}
            />
          ))}
        </div>

      </div>

      {/* <div className="flex justify-start items-center h-[306px] w-full mt-4 overflow-hidden gap-16 mb-5"> */}
        {/* Scrolling container */}
        {/* <div className="flex animate-scroll-Intern hover:[animation-play-state:paused]">
          {[...highlights, ...highlights].map((image, index) => (
            <img
              key={`primary-${index}`}
              src={image}
              alt={`college-img-${index}`}
              className="h-[300px] w-auto object-cover mx-6 rounded-xl"
              style={{ boxShadow: "0px 0px 20px rgba(0,0,0,0.2)" }}
            />
          ))}
        </div> */}
      {/* </div>  */}


      <Footer />

    </div>
  )
}

export default Events