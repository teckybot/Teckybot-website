import React from 'react'
import hero from '../data/workshops/workshop4_teckybot.jpg'
import Footer from '../Components/Footer'
import w1 from '../data/workshops/Ev_Teckybot.jpg'
import w2 from '../data/workshops/Robotics_Teckybot.jpg'
import w3 from '../data/workshops/3D Printing_Teckybot.jpg'
import w4 from '../data/workshops/Drone.jpg'
import w5 from '../data/workshops/AI_Teckybot.jpg'
import w6 from '../data/workshops/Embedded system_Teckybot.jpg'
import w7 from '../data/workshops/IoT_Teckybot.jpg'
import w8 from '../data/workshops/PCB_Teckybot.jpg'

import VE from '../data/workshops/EV - WS.pdf'
import RB from '../data/workshops/Robotics - WS.pdf'
import PR from '../data/workshops/Printing.pdf'
import DR from '../data/workshops/DRONE - WS.pdf'
import AI from '../data/workshops/AI - WS.pdf'
import ES from '../data/workshops/ES - WS.pdf'
import IOT from '../data/workshops/IOT - WS.pdf'
import PCB from '../data/workshops/PCB - WS.pdf'

const Workshop = () => {
    const text = "TECK WORKSHOPS"
    const extractVideoId = (url) => {
        const regex = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : '';
    };
    const videoLinks = [
        "https://www.youtube.com/embed/1XY_tgcRH28",
        "https://www.youtube.com/embed/1XY_tgcRH28",
        "https://www.youtube.com/embed/1XY_tgcRH28",
    ];


    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <div className="w-[90%] sm:w-[80%] rounded-3xl my-8 sm:my-16 flex flex-col p-6 sm:p-12 md:p-16 lg:p-24 overflow-hidden bg-white relative"
                style={{ boxShadow: '0px 20px 30px rgba(0,0,0, 0.25)' }}>
                {/* Background Image */}
                <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                        background: `url(${hero})`,
                        backgroundSize: "cover", // Use cover for better background fitting
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>

                {/* Gradient Overlay */}
                <div
                    className="absolute inset-0 rounded-3xl"
                    style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)" }}
                ></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                    {/* Responsive Heading */}
                    <h1 className="text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] text-center sm:tracking-widest text-white font-semibold">
                        {text.split("").map((letter, index) => (
                            <span
                                key={index}
                                style={{
                                    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                                }}
                            >
                                {letter}
                            </span>
                        ))}
                    </h1>

                    {/* Responsive Paragraph */}
                    {/* Mobile version - visible only on small screens */}
                    <div className="block sm:hidden text-white text-center mt-4 p-4 text-sm leading-6">
                        Whether you're a beginner or pro, join our hands-on Industry 4.0 workshops to build real skills and tackle real world projects.
                    </div>

                    {/* Desktop version - visible on medium screens and up */}
                    <p className="hidden sm:block text-white text-center mt-4 sm:mt-6 md:mt-8 p-4 sm:p-6 lg:p-12 text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-8">
                        Dive into our hands-on workshops on the latest Industry 4.0 tech.
                        Whether you're a beginner or pro, you'll build real skills, explore cool tools, and tackle real world projects.
                        Ready to make learning fun and practical? Join us/
                    </p>
                </div>
            </div>

            {/* Left  */}
            <div className='flex flex-col lg:flex-row p-8 rounded-[20px] my-8 w-[80%] gap-6 items-center'
                style={{ background: "linear-gradient(180deg, rgba(220, 235, 255, 1) 21%, rgba(0, 0, 0, 0) 100%)", boxShadow: '0px 20px 30px rgba(0,0,0, 0.25)' }}>
                <img src={w1} alt='img1' className='sm:h-[350px] sm:w-[450px]' />
                <div className='w-auto flex flex-col sm:px-6'>
                    <h1 className='font-semibold text-[24px]'>
                        Electric Vehicle Technology
                    </h1>
                    <p className='my-4 text-justify'>
                        Explore the basics of electric vehicle design, battery
                        management, and motor control systems to understand how clean, efficient transport
                        is shaping the future.
                    </p>
                    <a
                        href={VE} download="Vehicle Technology.pdf"
                        className="px-4 py-2 w-[200px] text-center bg-orange-500 text-white hover:bg-orange-600 transition rounded-[10px] my-4 self-end"
                    >
                        Download Brochure
                    </a>
                </div>
            </div>

            {/* Right */}
            <div className='flex flex-col lg:flex-row-reverse p-8 rounded-[20px] my-8 w-[80%] gap-6 items-center'
                style={{ background: "linear-gradient(180deg, rgba(220, 235, 255, 1) 21%, rgba(0, 0, 0, 0) 100%)", boxShadow: '0px 20px 30px rgba(0,0,0, 0.25)' }}>
                <img src={w2} alt='img1' className='sm:h-[350px] sm:w-[450px]' />
                <div className='w-auto flex flex-col sm:px-6'>
                    <h1 className='font-semibold text-[24px]'>
                        Robotics
                    </h1>
                    <p className='my-4 text-justify'>
                        Learn fundamental concepts of robot building and programming, including
                        sensors, actuators, and automation to create simple working robots.
                    </p>
                    <a
                        href={RB} download="Robotics.pdf"
                        className="px-4 py-2 w-[200px] text-center bg-orange-500 text-white hover:bg-orange-600 transition rounded-[10px] my-4"
                    >
                        Download Brochure
                    </a>
                </div>
            </div>

            {/* Left  */}
            <div className='flex flex-col lg:flex-row p-8 rounded-[20px] my-8 w-[80%] gap-6 items-center'
                style={{ background: "linear-gradient(180deg, rgba(220, 235, 255, 1) 21%, rgba(0, 0, 0, 0) 100%)", boxShadow: '0px 20px 30px rgba(0,0,0, 0.25)' }}>
                <img src={w3} alt='img1' className='sm:h-[350px] sm:w-[450px]' />
                <div className='w-auto flex flex-col sm:px-6'>
                    <h1 className='font-semibold text-[24px]'>
                        3D Printing
                    </h1>
                    <p className='my-4 text-justify'>
                        Get hands-on experience with 3D modelling and printing, turning digital
                        designs into physical prototypes using beginner friendly tools.
                    </p>
                    <a
                        href={PR} download='3D Printing.pdf'
                        className="px-4 py-2 w-[200px] text-center bg-orange-500 text-white hover:bg-orange-600 transition rounded-[10px] my-4 self-end"
                    >
                        Download Brochure
                    </a>
                </div>
            </div>

            {/* Right */}
            <div className='flex flex-col lg:flex-row-reverse p-8 rounded-[20px] my-8 w-[80%] gap-6 items-center'
                style={{ background: "linear-gradient(180deg, rgba(220, 235, 255, 1) 21%, rgba(0, 0, 0, 0) 100%)", boxShadow: '0px 20px 30px rgba(0,0,0, 0.25)' }}>
                <img src={w4} alt='img1' className='sm:h-[350px] sm:w-[450px]' />
                <div className='w-auto flex flex-col sm:px-6'>
                    <h1 className='font-semibold text-[24px]'>
                        Drone Technology
                    </h1>
                    <p className='my-4 text-justify'>
                        Discover the essentials of drone operation, including flight
                        mechanics, remote control, and basic aerial photography applications.
                    </p>
                    <a
                        href={DR} download='Drone Technology.pdf'
                        className="px-4 py-2 w-[200px] text-center bg-orange-500 text-white hover:bg-orange-600 transition rounded-[10px] my-4"
                    >
                        Download Brochure
                    </a>
                </div>
            </div>

            {/* Left  */}
            <div className='flex flex-col lg:flex-row p-8 rounded-[20px] my-8 w-[80%] gap-6 items-center'
                style={{ background: "linear-gradient(180deg, rgba(220, 235, 255, 1) 21%, rgba(0, 0, 0, 0) 100%)", boxShadow: '0px 20px 30px rgba(0,0,0, 0.25)' }}>
                <img src={w5} alt='img1' className='sm:h-[350px] sm:w-[450px]' />
                <div className='w-auto flex flex-col sm:px-6'>
                    <h1 className='font-semibold text-[24px]'>
                        Artificial Intelligence (AI)
                    </h1>
                    <p className='my-4 text-justify'>
                        Understand AI basics such as machine learning, data
                        patterns, and simple algorithms to create smart applications and problem solvers.
                    </p>
                    <a
                        href={AI} download='Artificial Intelligence'
                        className="px-4 py-2 w-[200px] text-center bg-orange-500 text-white hover:bg-orange-600 transition rounded-[10px] my-4 self-end"
                    >
                        Download Brochure
                    </a>
                </div>
            </div>

            {/* Right */}
            <div className='flex flex-col lg:flex-row-reverse p-8 rounded-[20px] my-8 w-[80%] gap-6 items-center'
                style={{ background: "linear-gradient(180deg, rgba(220, 235, 255, 1) 21%, rgba(0, 0, 0, 0) 100%)", boxShadow: '0px 20px 30px rgba(0,0,0, 0.25)' }}>
                <img src={w6} alt='img1' className='sm:h-[350px] sm:w-[450px]' />
                <div className='w-auto flex flex-col sm:px-6'>
                    <h1 className='font-semibold text-[24px]'>
                        Embedded Systems
                    </h1>
                    <p className='my-4 text-justify'>
                        Dive into microcontroller programming and interfacing to build
                        automated systems for real-world applications like home automation.
                    </p>
                    <a
                        href={ES} download='Embedded Systems.pdf'
                        className="px-4 py-2 w-[200px] text-center bg-orange-500 text-white hover:bg-orange-600 transition rounded-[10px] my-4"
                    >
                        Download Brochure
                    </a>
                </div>
            </div>

            {/* Left  */}
            <div className='flex flex-col lg:flex-row p-8 rounded-[20px] my-8 w-[80%] gap-6 items-center'
                style={{ background: "linear-gradient(180deg, rgba(220, 235, 255, 1) 21%, rgba(0, 0, 0, 0) 100%)", boxShadow: '0px 20px 30px rgba(0,0,0, 0.25)' }}>
                <img src={w7} alt='img1' className='sm:h-[350px] sm:w-[450px]' />
                <div className='w-auto flex flex-col sm:px-6'>
                    <h1 className='font-semibold text-[24px]'>
                        Internet of Things (IoT)
                    </h1>
                    <p className='my-4 text-justify'>
                        Learn how connected devices communicate and share data
                        to create smart environments such as automated homes and monitoring systems.
                    </p>
                    <a
                        href={IOT} download='IOT.pdf'
                        className="px-4 py-2 w-[200px] text-center bg-orange-500 text-white hover:bg-orange-600 transition rounded-[10px] my-4 self-end"
                    >
                        Download Brochure
                    </a>
                </div>
            </div>

            {/* Right */}
            <div className='flex flex-col lg:flex-row-reverse p-8 rounded-[20px] my-8 w-[80%] gap-6 items-center'
                style={{ background: "linear-gradient(180deg, rgba(220, 235, 255, 1) 21%, rgba(0, 0, 0, 0) 100%)", boxShadow: '0px 20px 30px rgba(0,0,0, 0.25)' }}>
                <img src={w8} alt='img1' className='sm:h-[350px] sm:w-[450px]' />
                <div className='w-auto flex flex-col sm:px-6'>
                    <h1 className='font-semibold text-[24px]'>
                        Printed Circuit Board (PCB)
                    </h1>
                    <p className='my-4 text-justify'>
                        Learn the fundamentals of PCB design and fabrication through a hands-on workshop. Understand circuit design, component placement, and board etching from start to finish.
                    </p>
                    <a
                        href={PCB} download='PCB.pdf'
                        className="px-4 py-2 w-[200px] text-center bg-orange-500 text-white hover:bg-orange-600 transition rounded-[10px] my-4"
                    >
                        Download Brochure
                    </a>
                </div>
            </div>

            {/* <h1 className="text-center text-[28px] sm:text-[36px] md:text-[40px] lg:text-[50px] xl:text-[50px] font-semibold leading-tight">
                Workshop Videos
            </h1>

            <div className="flex justify-start items-center h-[306px] w-full overflow-hidden gap-16 mb-5 mt-10">
                <div className="flex animate-scroll-awards hover:[animation-play-state:paused]">
                    {[...videoLinks, ...videoLinks].map((videoUrl, index) => (
                        <div
                            key={`video-${index}`}
                            className="w-[500px] h-[300px] mx-6 rounded-2xl overflow-hidden shadow-lg"
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${extractVideoId(videoUrl)}?autoplay=0&mute=1&rel=0`}
                                title={`YouTube video ${index}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-2xl"
                            ></iframe>
                        </div>
                    ))}
                </div>
            </div> */}


            <Footer />
        </div>
    )
}

export default Workshop