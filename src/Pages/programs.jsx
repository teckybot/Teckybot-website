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
import img from '../data/services/Group30.png'
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
      <div className='w-[80%] my-16 rounded-[20px]'
        style={{ background: "linear-gradient(180deg, rgba(207, 227, 255, 1) 2%, rgba(255, 255, 255, 1) 88%)", boxShadow: '0px 20px 30px rgba(0,0,0, 0.25)' }}>
        <div className="flex justify-center items-center h-full">
          <div className='h-full lg:w-[70%] z-20 bg-contain bg-center pb-10'
            style={{
              background: `url(${img})`,
              backgroundSize: 'contain',  // Ensures the entire image is contained within the div
              backgroundPosition: 'center', // Keeps the image centered
              backgroundRepeat: 'no-repeat'
            }}>
            <div className='flex flex-col gap-4 sm:gap-8 items-center justify-center mt-[-20px] sm:mt-[-30px] xl:mt-[-40px]'>
              <p className='font-semibold text-[28px] sm:text-[36px] lg:text-[48px] xl:text-[60px]'>Get Ready to Explore</p>
              <p className='font-semibold text-[28px] sm:text-[36px] lg:text-[48px] xl:text-[60px] text-[#FF721F]'>Our Programs</p>
              <p className='px-4 sm:px-16 xl:px-32 text-center'>
                At Teckybot, we offer a range of dynamic programmes designed to provide hands-on
                experience, practical skills, and real-world exposure. From internships and bootcamps to
                workshops and seminars, our programmes are crafted to keep learners and tech
                enthusiasts in sync with the latest industry trends. 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-wrap justify-center gap-8 p-4 py-12 sm:py-24 lg:w-[90%]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative group w-full sm:w-[40%] lg:w-[23%] max-w-sm overflow-hidden rounded-lg shadow-md cursor-pointer"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[500px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0  rounded-lg flex items-end p-4"
              style={{ "background": "linear-gradient(180deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 61%, rgba(0, 0, 0, 1) 94%, rgba(0, 0, 0, 1) 99%)" }}>
              <div className="text-white">
                <h3 className="text-xl font-bold">{card.title}</h3>
              </div>
              <a
                href={card.link}
                className="ml-auto text-white text-2xl group-hover:translate-x-1 transition-transform duration-300"
              >
                →
              </a>
            </div>
          </div>
        ))}
      </div> */}

      <div className="flex flex-wrap justify-center gap-8 p-4 py-12 sm:py-24 lg:w-[90%]">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.link}
            className="relative group w-full sm:w-[40%] lg:w-[23%] max-w-sm overflow-hidden rounded-lg shadow-md cursor-pointer"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[500px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 rounded-lg flex items-end p-4"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 61%, rgba(0, 0, 0, 1) 94%, rgba(0, 0, 0, 1) 99%)",
              }}
            >
              <div className="text-white">
                <h3 className="text-xl font-bold">{card.title}</h3>
              </div>
              <span className="ml-auto text-white text-2xl group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </div>
          </a>
        ))}
      </div>
      <Footer />

    </div>
  )
}

export default Programs