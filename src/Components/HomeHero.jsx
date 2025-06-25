import React from 'react';
import boy from '../data/home/boy.png';
import robo from '../data/home/robo.png';
import semicircle from '../data/home/semicircle.png';
import box from '../data/home/topbox.png';

const HomeHero = () => {
    return (
        <div className='flex justify-center items-center w-full px-4 py-8 sm:py-12 lg:py-16 relative bg-white'>
            {/* Main Content Container */}
            <div className='w-full max-w-6xl flex flex-col lg:flex-row items-center rounded-3xl relative z-10 min-h-[300px] lg:min-h-[450px] overflow-hidden'
                style={{
                    background: "linear-gradient(180deg, rgba(207, 227, 255, 1) 2%, rgba(255, 255, 255, 1) 88%)",
                    boxShadow: '0px 20px 30px rgba(0,0,0, 0.25)'
                }}>

                {/* Left Image - Desktop Only */}
                <div className='hidden lg:flex w-1/5 h-full justify-center items-end pb-4 z-20'>
                    <img src={robo} alt='robot' className='h-[250px] object-contain' />
                </div>

                {/* Center Content */}
                <div className='w-full lg:w-3/5 flex flex-col items-center justify-center p-6 sm:p-8 z-20'>
                    <div className='w-full max-w-md lg:max-w-xl text-center z-20 '>
                        <h1 className='text-3xl sm:text-[25px] lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 lg:mb-8 xl:mb-8 leading-tight'>
                            Where <span className='text-[#FF721F]'>Future</span> Meets<br />
                            <span className='text-[#FF721F]'>Innovation</span>
                        </h1>
                        <p className='text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed'>
                            Where teachers, students, and tech enthusiasts dive into hands-on Industry 4.0 training with our Adaptive Learning Mechanism.
                            <br />
                            We serve as a catalyst for turning concepts into reality! Got a project? From mini to major, we've got you covered with end-to-end support. Let's turn your ideas into <br /> innovation.
                        </p>
                    </div>

                    {/* Mobile Images */}
                    <div className='lg:hidden flex w-full  justify-between items-center mb-6 z-20 mt-4'>
                        <img src={robo} alt='robot' className='h-[200px] sm:h-[200px]   object-contain' />
                        <img src={boy} alt='student' className='h-[200px] sm:h-[200px]  object-contain' />
                    </div>
                </div>

                {/* Right Image - Desktop Only */}
                <div className='hidden lg:flex w-1/5 h-full justify-center items-end pb-4 z-20'>
                    <img src={boy} alt='student' className='h-[250px] object-contain' />
                </div>

                {/* Semicircle Background */}
                <div className='absolute bottom-0 left-0 w-full flex justify-center z-10'>
                    <img
                        src={semicircle}
                        alt=''
                        className='w-full max-w-2xl object-contain opacity-80'
                        style={{ transform: 'translateY(20%)' }}
                    />
                </div>
            </div>

            {/* Decorative Boxes */}
             <img src={box} alt='box' className='absolute w-[100px] h-[70px] right-[10px] top-[-20px] lg:right-[50px] lg:top-[20px] sm:h-[100px] sm:w-[150px] ' />
            <img src={box} alt='box' className='absolute w-[100px] h-[70px] left-[10px] bottom-[-20px] lg:left-[50px] lg:bottom-[20px] sm:h-[100px] sm:w-[150px] ' />

        </div>
    );
};

export default HomeHero;