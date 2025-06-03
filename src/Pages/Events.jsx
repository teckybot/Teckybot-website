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
      const highlights=[Rectangle_18,Rectangle_19,Rectangle_20]
    const highlights2=[Rectangle_21,Rectangle_22,Rectangle_23]
  return (
    <div className='flex flex-col w-full items-center justify-center'>


      {/* <div className='w-[80%] my-16 rounded-[20px]'
        style={{ background: "linear-gradient(180deg, rgba(207, 227, 255, 1) 2%, rgba(255, 255, 255, 1) 88%)", boxShadow: '0px 20px 30px rgba(0,0,0, 0.25)' }}>
        <div className="flex justify-center items-center h-[500px]">
          <div className='h-full lg:w-[70%] z-20 bg-contain bg-center pb-10'
            style={{
              background: `url(${ellipse})`,
              backgroundSize: 'contain',  // Ensures the entire image is contained within the div
              backgroundPosition: 'right', // Keeps the image centered
              backgroundRepeat: 'no-repeat'
            }}>
            <div className='flex flex-col gap-4 sm:gap-8 items-start justify-center mt-[-20px] sm:mt-[-30px] xl:mt-[-40px]'>
              <p className='font-semibold text-[28px] sm:text-[36px] lg:text-[48px] xl:text-[60px]'>Bharat teck</p>
              <p className='font-semibold text-[28px] sm:text-[36px] lg:text-[48px] xl:text-[60px] text-[#FF721F]'>League</p>
              <p className='px-4 sm:px-16 xl:px-32 text-center'>
                Join our summer camp for an unforgettable adventure filled with fun activities, new friends, and lifelong memories. Don't miss out on the opportunity to make this summer one to remember.
              </p>
            </div>
          </div>
        </div>
      </div> */}

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
          <p className="mt-3 sm:mt-4 text-gray-700 text-sm sm:text-base md:text-lg text-center md:text-left">
            Join our summer camp for an unforgettable adventure filled with fun activities,
            new friends, and lifelong memories. Don't miss out on the opportunity to make
            this summer one to remember.
          </p>
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
      <div className='text-sm sm:text-base md:text-lg leading-relaxed sm:leading-7 text-center mx-auto max-w-6xl my-9'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien.</p>
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
          <p className="mt-3 sm:mt-4 text-gray-700 text-sm sm:text-base md:text-lg text-center md:text-right">
            Join our summer camp for an unforgettable adventure filled with fun activities,
            new friends, and lifelong memories. Don't miss out on the opportunity to make
            this summer one to remember.
          </p>
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien.</p>
      </div>

      <h1 className='text-center text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-semibold leading-tight'>Events Gallery</h1>

            <div className="flex justify-start items-center h-[306px] w-full overflow-hidden gap-16 mb-5 mt-10">
                    {/* Scrolling container */}
                    <div className="flex animate-scroll-awards hover:[animation-play-state:paused]">
                      {[...highlights, ...highlights].map((image, index) => (
                        <img
                          key={`primary-${index}`}
                          src={image}
                          alt={`college-img-${index}`}
                          className="w-auto h-[300px] object-cover mx-6 rounded-2xl"
                          style={{boxShadow: "0px 0px 20px rgba(0,0,0,0.2)"}}
                        />
                      ))}
                    </div>
                    
                  </div>

            <div className="flex justify-start items-center h-[306px] w-full mt-4 overflow-hidden gap-16 mb-5">
                    {/* Scrolling container */}
                    <div className="flex animate-scroll-Intern hover:[animation-play-state:paused]">
                      {[...highlights, ...highlights].map((image, index) => (
                        <img
                          key={`primary-${index}`}
                          src={image}
                          alt={`college-img-${index}`}
                          className="h-[300px] w-auto object-cover mx-6 rounded-xl"
                          style={{boxShadow: "0px 0px 20px rgba(0,0,0,0.2)"}}
                        />
                      ))}
                    </div>
                  </div>


      <Footer />

    </div>
  )
}

export default Events