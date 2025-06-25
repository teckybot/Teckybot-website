import React from 'react';
import Footer from '../Components/Footer';
import semicircle from '../data/home/semicircle.png';
import i3 from '../data/services/MainProject2_Teckybot.png';
import i4 from '../data/services/StemLabs2_Teckybot.png';
import i7 from '../data/services/i7.png';
import i8 from '../data/services/IIC1_Teckybot.png';
import img from '../data/services/Group30.png';

const cards = [
  {
    title: "Projects",
    image: i3,
    link: "/Services/projects",
  },
  {
    title: "STEM Labs",
    image: i4,
    link: "/Services/stemlabs",
  },
  {
    title: "Teck FDP",
    image: i7,
    link: "/Services/TechFdp",
  },
  {
    title: "Teck IIC",
    image: i8,
    link: "/Services/TechIic",
  },
];

const Services = () => {
  return (
  <div className='flex flex-col w-full items-center'>
  {/* Hero Section */}
  <div className='w-full max-w-6xl my-12 sm:my-16 rounded-3xl relative overflow-hidden'
    style={{ 
      background: "linear-gradient(180deg, rgba(207, 227, 255, 1) 2%, rgba(255, 255, 255, 1) 88%)",
      boxShadow: '0px 20px 30px rgba(0,0,0, 0.25)' 
    }}>
    
    {/* Semicircle Background - Behind Content */}
    <div className='absolute bottom-0 left-0 w-full flex justify-center z-0'>
      <img
        src={semicircle}
        alt='decorative semicircle'
        className='w-full max-w-2xl object-contain opacity-80'
        style={{ transform: 'translateY(20%)' }}
      />
    </div>

    {/* Content Container - Above Semicircle */}
    <div className='relative z-10 flex flex-col items-center justify-center py-12 sm:py-16 px-4 sm:px-8'>
      <div className='flex flex-col gap-4 sm:gap-6 items-center text-center'>
        <h1 className='text-3xl sm:text-[25px] lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 lg:mb-8 xl:mb-8 leading-tight'>
          Get Ready to Explore<br /> <span className='text-[#FF721F]'> Our Services</span>
        </h1>
        <p className='text-base sm:text-lg max-w-3xl'>
          At Teckybot, we offer a wide range of tech-driven services including project solutions, STEM
          lab setups, Industry-Institution collaborations, internships, workshops, and more. Our goal is
          to deliver innovative, hands-on solutions that bridge the gap between technology and
          learning.
        </p>
      </div>
    </div>
  </div>



      {/* Services Cards Grid */}
<div className="w-full max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
    {cards.map((card, index) => (
      <a
        key={index}
        href={card.link}
        className="group relative block overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-[300px] sm:h-[500px]"
      >
        {/* Image Container */}
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          {/* Gradient Overlay */}
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

        {/* Hover Border Effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#FF721F]/20 transition-all duration-300 pointer-events-none"></div>
      </a>
    ))}
  </div>
</div>

      <Footer />
    </div>
  );
};

export default Services;