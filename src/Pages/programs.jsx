import React from 'react'
import Footer from '../Components/Footer'
import i1 from '../data/services/i1.png'
import i2 from '../data/services/i2.png'
import i3 from '../data/services/i3.png'
import i4 from '../data/services/i4.png'
import i5 from '../data/services/i5.png'
import i6 from '../data/services/i6.png'
import i7 from '../data/services/i7.png'
import i8 from '../data/services/i8.png'
import semicircle from '../data/home/semicircle.png';

const cards = [
  {
    title: "Internships",
    image: i6,
    link: "/Programs/internships",
  },
  {
    title: "BootCamps",
    image: i1, // Replace with your image paths
    link: "/Programs/BootCamp",
  },
  {
    title: "Workshops",
    image: i2,
    link: "/Programs/workshops",
  },
  {
    title: "Seminars",
    image: i5,
    link: "/Programs/seminars",
  },

];


const Programs = () => {
  return (
    <div className='flex flex-col w-full items-center'>

      {/* Hero Section */}
      <div className='w-full max-w-6xl my-12 sm:my-16 rounded-3xl relative overflow-hidden'
        style={{
          background: "linear-gradient(180deg, rgba(207, 227, 255, 1) 2%, rgba(255, 255, 255, 1) 88%)",
          boxShadow: '0px 20px 30px rgba(0,0,0, 0.25)'
        }}>
        
        {/* Optional Background Illustration */}
        <div className='absolute bottom-0 left-0 w-full flex justify-center z-0'>
          <img
            src={semicircle}
            alt='decorative semicircle'
            className='w-full max-w-2xl object-contain opacity-80'
            style={{ transform: 'translateY(20%)' }}
          />
        </div>

        {/* Content */}
        <div className='relative z-10 flex flex-col items-center justify-center py-12 sm:py-16 px-4 sm:px-8'>
          <div className='flex flex-col gap-4 sm:gap-6 items-center text-center'>
            <h1 className='text-3xl sm:text-[25px] lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 lg:mb-8 xl:mb-8 leading-tight'>
              Get Ready to Explore <br />
              <span className='text-[#FF721F]'>Our Programs</span>
            </h1>
            <p className='text-base sm:text-lg max-w-3xl'>
              At Teckybot, we offer a range of dynamic programmes designed to provide hands-on
              experience, practical skills, and real-world exposure. From internships and bootcamps to
              workshops and seminars, our programmes are crafted to keep learners and tech
              enthusiasts in sync with the latest industry trends.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              className="group relative block overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-[300px] sm:h-[500px]"
            >
              {/* Image */}
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              {/* Card Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <div className="transform transition-all duration-300 group-hover:-translate-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <div className="w-10 h-0.5 bg-[#FF721F] mb-3"></div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/90 text-sm font-medium">
                      Learn more
                    </span>
                    <span className="text-white text-xl transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>

              {/* Border on Hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#FF721F]/20 transition-all duration-300 pointer-events-none"></div>
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};


export default Programs