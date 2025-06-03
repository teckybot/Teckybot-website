import React from 'react'
import boy from '../data/home/boy.png'
import robo from '../data/home/robo.png'
import semicircle from '../data/home/semicircle.png'
import box from '../data/home/topbox.png'

const HomeHero = () => {
    return (
        <div className='my-12 lg:my-16 flex justify-center items-center w-[90%] h-[550px] lg:h-[540px] relative'>
            <div className='flex flex-col lg:flex-row w-[80%] justify-center lg:h-[400px] rounded-[30px] z-10' style={{ background: "linear-gradient(180deg, rgba(207, 227, 255, 1) 2%, rgba(255, 255, 255, 1) 88%)", boxShadow: '0px 20px 30px rgba(0,0,0, 0.25)' }}>
                <img src={robo} alt='robo' className='h-full w-[20%] hidden lg:block' />
                <div className='w-full lg:w-[60%] h-[400px] sm:h-full flex flex-col bg-contain bg-no-repeat bg-center' style={{ backgroundImage: `url(${semicircle})` }}>
                    <h1 className='text-center text-[24px] sm:text-[36px] xl:text-[48px] font-semibold relative top-[-5%] xl:top-[-10%]'>
                        Where <span className='text-[#FF721F]'>Future</span> Meets <br />
                        <span className='text-[#FF721F]'>Innovation</span>
                    </h1>
                    <p className='font-normal p-4 mt-[-5%] sm:mt-0 text-center'>
                    Teckybot is dedicated to empowering teachers, students, and tech enthusiasts with Industry 4.0 technologies. 
                    Through our Adaptive Learning Mechanism, we offer hands-on tech training to gain practical skills, real-world experience, and in-depth knowledge, bridging the gap between traditional education and the evolving demands of the future.
                    </p>
                </div>
                <img src={boy} alt='boy' className='h-full w-[20%] hidden lg:block' />

                <div className='flex h-[200px] sm:h-[300px] w-full mt-[-16%] sm:mt-[-10%] lg:mt-[-40%] lg:hidden'>
                    <img src={robo} alt='robo' className='h-full w-[50%]'/>
                    <img src={boy} alt='boy' className='h-full w-[50%]'/>

                </div>
            </div>

            <img src={box} alt='box' className='absolute w-[100px] h-[70px] right-[10px] top-[-20px] lg:right-[50px] lg:top-[20px] sm:h-[100px] sm:w-[150px] '/>
            <img src={box} alt='box' className='absolute w-[100px] h-[70px] left-[10px] bottom-[-20px] lg:left-[50px] lg:bottom-[20px] sm:h-[100px] sm:w-[150px] '/>

        </div>
    )
}

export default HomeHero