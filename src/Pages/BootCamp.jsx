
import React, { useState, useEffect } from "react";
import { div } from 'framer-motion/client';
import Footer from '../Components/Footer'
import img from '../data/services/Group30.png'
import drone1 from '../data/services/Bootcamp/Left_drone.png'
import face1 from '../data/services/Bootcamp/face1.png'
import face2 from '../data/services/Bootcamp/face2.png'
import rb1 from '../data/services/Bootcamp/robot1.png'
import drone2 from '../data/services/Bootcamp/drone_bm.png'
import rb2 from '../data/services/Bootcamp/robot2.png'
import drone3 from '../data/services/Bootcamp/drone_rt.png'
import face3 from '../data/services/Bootcamp/face_rt.png'
import face4 from '../data/services/Bootcamp/face_rt2.png'
import dot from '../data/services/Bootcamp/dot1.png'
import slide1 from '../data/programs/slide1.png'
import slide2 from '../data/programs/slide2.jpg'
import slide3 from '../data/programs/slide3.jpg'
import slide4 from '../data/programs/slide4.jpg'
import paper from '../data/programs/Paper.png'
import download from '../data/programs/Download.png'
import paper2 from '../data/programs/Paper2.png'


import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { motion, AnimatePresence } from "framer-motion";
const BootCamp = () => {
    const carouselItems = [
        {
            image: slide1,
            animation: {
                initial: { scale: 0.8, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.8, opacity: 0 },
            },
        },
        {
            image: slide2,
            animation: {
                initial: { x: 100, opacity: 0 },
                animate: { x: 0, opacity: 1 },
                exit: { x: -100, opacity: 0 },
            },
        },
        {
            image: slide3,
            animation: {
                initial: { y: -50, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                exit: { y: 50, opacity: 0 },
            },
        },
        {
            image: slide4,
            animation: {
                initial: { y: 20, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                exit: { y: 50, opacity: 0 },
            },
        },
    ];
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
    };

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % carouselItems.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);


    return (

        <div className='relative flex w-full flex-col items-center'>
            <div className="w-full flex flex-col items-center relative px-4 py-7 md:mb-20">
                {/* Heading outside the card */}
                <h1 className="text-[28px] sm:text-[32px] md:text-[48px] lg:text-[64px] font-semibold text-center leading-tight z-30"
                    style={{ marginBottom: '-20px', marginTop: '16px' }}>
                    Unplug, Discover,
                </h1>

                {/* Card */}
                <div
                    className="relative w-full sm:w-[90%] md:w-[80%] min-h-[280px] sm:min-h-[360px] md:min-h-[420px] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] overflow-hidden shadow-lg bg-white"
                    style={{
                        background: "linear-gradient(180deg, rgba(207, 227, 255, 1) 2%, rgba(255, 255, 255, 1) 88%)",
                        boxShadow: "0px 20px 30px rgba(0,0,0, 0.13)"
                    }}
                >
                    {/* Decorative Circle as Image */}
                    <img
                        src={img}
                        alt="circle"
                        className="absolute left-1/2 top-1/2 w-[96%] sm:w-[75%] md:w-[65%] max-w-[780px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
                        draggable={false}
                    />

                    {/* Floating Images */}
                    {/* Only show a few images on mobile for clarity */}
                    <img src={drone1} alt="" className="absolute w-28 sm:w-40 md:w-56 h-28 sm:h-40 md:h-56 md:-left-4 md:-top-10 z-10 " />
                    <img src={face1} alt="" className="absolute w-28 sm:w-36 md:w-40 h-28 sm:h-36 md:h-40 z-10 top-20 sm:top-20 left-6 sm:left-20 md:left-40" />
                    <img src={face3} alt="" className="absolute w-36 sm:w-48 md:w-72 h-36 sm:h-48 md:h-72 z-10 right-0 sm:right-6 md:right-4 md:-top-12" />
                    <img src={face2} alt="" className="absolute w-44 sm:w-52 md:w-72 h-44 sm:h-52 md:h-72 z-10 top-28 sm:top-40 sm:left-0 md:left-3" />
                    <img src={face4} alt="" className="absolute w-28 sm:w-32 md:w-32 h-28 sm:h-32 md:h-32 z-10 bottom-4 right-4 sm:right-8 md:right-12" />
                    <img src={dot} alt="" className="absolute hidden md:block w-1 sm:w-2 h-1 sm:h-2 z-10 top-20 sm:top-24 left-16 sm:left-24 md:top-60 md:left-56" />
                    <img src={dot} alt="" className="absolute hidden md:block w-1 sm:w-2 h-1 sm:h-2 z-10 top-16 sm:top-20 right-12 sm:right-20 md:top-40 md:right-28" />
                    <img src={dot} alt="" className="absolute w-1 sm:w-2 h-1 sm:h-2 z-10 bottom-12 left-8 sm:left-20 md:bottom-8 md:left-32" />
                    <img src={dot} alt="" className="absolute hidden md:block w-1 sm:w-2 h-1 sm:h-2 z-10 bottom-8 right-16 sm:right-24 md:bottom-12 md:right-40" />
                    <img src={drone3} alt="" className="absolute hidden sm:block w-16 sm:w-24 md:w-40 h-16 sm:h-24 md:h-40 z-10 top-24 sm:top-32 right-16 sm:right-28 md:top-44 md:right-34" />
                    <img src={drone2} alt="" className="absolute w-14 sm:w-12 md:w-32 h-14 sm:h-12 md:h-32 z-10 bottom-12 md:bottom-24 left-1/3 sm:left-2/4 md:left-[45%]" />
                    <img src={dot} alt="" className="absolute w-1 sm:w-2 h-1 sm:h-2 z-10 top-12 right-12 sm:right-20 md:top-24 md:right-56" />
                    <img src={rb2} alt="" className="absolute hidden md:block w-8 sm:w-12 md:w-28 h-8 sm:h-12 md:h-28 z-10 bottom-6 right-1/4 md:bottom-3 md:right-60" />
                    <img src={rb1} alt="" className="absolute hidden md:block w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 z-10 bottom-2 left-16 md:bottom-6 md:left-60" />
                    <img src={dot} alt="" className="absolute w-1 sm:w-2 h-1 sm:h-2 z-10 top-1/2 left-1/4 md:top-1/2 md:left-1/3" />

                    {/* Central Content */}
                    <div className="relative z-20 flex flex-col items-center justify-center h-full py-8 sm:py-12">
                        <h1 className="text-[24px] sm:text-[32px] md:text-[48px] font-semibold text-[#FF721F] leading-tight text-center mb-2">
                            Thrive
                        </h1>
                        <p className="max-w-xs sm:max-w-sm md:max-w-xl mx-auto text-center text-sm sm:text-base md:text-lg text-gray-700 font-medium px-4 sm:px-8">
                            Join our summer camp for an unforgettable adventure filled with fun activities, new friends, and lifelong memories. Don’t miss out on the opportunity to make this summer one to remember.
                        </p>
                    </div>
                </div>
            </div>



            <div className="relative w-full min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center">
                {/* Header */}
                <div className="w-full px-5 sm:px-10 md:px-28 pt-8">
                    <div className="text-orange-500 font-semibold text-lg">
                        Tecky Champs Summer Camp
                    </div>
                    <div className="text-gray-700 text-md">Basic Electronics</div>
                </div>

                {/* Carousel */}
                <div className="relative w-full px-4 mt-8 mb-20">
                    <div className="w-[400px] h-[280px] md:w-[700px] md:h-[480px] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center mx-auto relative">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={carouselItems[current].image}
                                src={carouselItems[current].image}
                                alt={`Carousel ${current + 1}`}
                                className="absolute w-full h-full object-cover"
                                initial={carouselItems[current].animation.initial}
                                animate={carouselItems[current].animation.animate}
                                exit={carouselItems[current].animation.exit}
                                transition={{ duration: 0.7 }}
                            />
                        </AnimatePresence>
                    </div>

                    {/* Swiper Controls */}
                    <div className="absolute md:-top-24 right-0 mt-8 mr-8 flex space-x-2 gap-8">
                        <button
                            onClick={prevSlide}
                            className="bg-orange-400 text-white rounded-full p-2 shadow hover:text-orange-500 hover:bg-white"
                            aria-label="Previous"
                        >
                            <FaChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="bg-orange-400 text-white rounded-full p-2 shadow hover:text-orange-500 hover:bg-white"
                            aria-label="Next"
                        >
                            <FaChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Download Brochure */}
                <div className=" w-full flex flex-col items-center mt-16 mb-20">
                    <div className="text-gray-600 mb-4 text-center text-sm sm:text-base md:text-lg leading-relaxed sm:leading-7">
                        For more detailed information, download our brochure
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-8 py-2 font-semibold shadow transition">
                        Download
                    </button>
                </div>
                <div >
                    <img src={paper2} alt="" className="absolute w-8 sm:w-8 md:w-14 h-8 sm:h-8 md:h-14 z-10 top-[75%] sm:top-[75%] md:top-[70%] left-20 sm:left-20 md:left-72" />
                    <img src={paper} alt="" className="absolute w-9 sm:w-8 md:w-12 h-9 sm:h-8 md:h-12 top-[85%] sm:top-[80%] md:top-[80%] left-2 md:left-36 z-10" />
                    <img src={download} alt="" className="absolute w-7 sm:w-8 md:w-16 h-7 sm:h-8 md:h-16 z-10 left-20 sm:left-20 md:left-72 top-[92%] sm:top-[87%] md:top-[90%]" />

                    <img src={download} alt="" className="absolute w-7 sm:w-8 md:w-14 h-7 sm:h-8 md:h-14 z-10 top-[75%] sm:top-[75%] md:top-[70%] right-6 sm:right-20 md:right-72" />
                    <img src={paper} alt="" className="absolute w-9 sm:w-8 md:w-12 h-9 sm:h-8 md:h-12 top-[80%] sm:top-[80%] md:top-[80%] right-14 md:right-36 z-10" />
                    <img src={paper2} alt="" className="absolute w-8 sm:w-8 md:w-16 h-8 sm:h-8 md:h-16 z-10 right-6 sm:right-20 md:right-72 top-[90%] sm:top-[87%] md:top-[90%]" />
                </div>

            </div>

            <div className="min-h-screen min-w-full flex items-center justify-center bg-orange-500 rounded-[18px] relative overflow-hidden">
                {/* Decorative Circles */}
                <div className="absolute left-[-18%] top-[-10%] w-[550px] h-[550px] rounded-full bg-orange-400 opacity-80 z-0"></div>
                <div className="absolute left-[-8%] top-[18%] w-[350px] h-[350px] rounded-full bg-orange-300 opacity-60 z-0"></div>

                <div className="relative z-10 w-full max-w-6xl flex flex-row items-start px-10 py-16">
                    {/* Left Section */}
                    <div className="w-1/2 pr-10 flex flex-col justify-center">
                        <h1 className="text-white text-4xl font-bold mb-6">Get in Touch</h1>
                        <p className="text-white text-base">
                            We&apos;d love to chat about what you are trying to achieve and your current circumstances
                        </p>
                    </div>
                    {/* Right Section */}
                    <form className="w-1/2 flex flex-col gap-5">
                        <div>
                            <label className="block text-white text-sm font-medium mb-2" htmlFor="name">
                                NAME
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter full name"
                                className="w-full px-4 py-3 rounded-md bg-white text-gray-700 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-white text-sm font-medium mb-2" htmlFor="grade">
                                GRADE
                            </label>
                            <input
                                id="grade"
                                type="text"
                                placeholder="Enter your grade"
                                className="w-full px-4 py-3 rounded-md bg-white text-gray-700 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-white text-sm font-medium mb-2" htmlFor="school">
                                SCHOOL NAME
                            </label>
                            <input
                                id="school"
                                type="text"
                                placeholder="Enter your school name"
                                className="w-full px-4 py-3 rounded-md bg-white text-gray-700 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-white text-sm font-medium mb-2" htmlFor="address">
                                SCHOOL ADDRESS
                            </label>
                            <input
                                id="address"
                                type="text"
                                placeholder="Enter your school address"
                                className="w-full px-4 py-3 rounded-md bg-white text-gray-700 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-white text-sm font-medium mb-2" htmlFor="phone">
                                PHONE
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                placeholder="Enter your number"
                                className="w-full px-4 py-3 rounded-md bg-white text-gray-700 focus:outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-2 px-8 py-2 bg-white text-orange-500 font-semibold rounded-full self-start hover:bg-orange-100 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default BootCamp;