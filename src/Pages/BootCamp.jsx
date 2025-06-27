
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
const BootCamp = () =>

    <div className='relative flex w-full flex-col items-center'>
        <div className="w-full flex flex-col items-center relative px-4 py-7 md:mb-20">
            {/* Heading outside the card */}
            <h1 className="text-[28px] sm:text-[32px] md:text-[48px] lg:text-[64px] font-semibold text-center leading-tight z-30"
                style={{ marginBottom: '-40px', marginTop: '16px' }}>
                2026
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
                {/* Images to show on all screens */}
                <img src={drone1} alt="" className="absolute w-28 sm:w-40 md:w-56 h-28 sm:h-40 md:h-56 md:-left-4 md:-top-10 z-10" />
                {/* <img src={face1} alt="" className="absolute w-28 sm:w-36 md:w-40 h-28 sm:h-36 md:h-40 z-10 top-20 sm:top-20 left-6 sm:left-20 md:left-40" /> */}
                <img src={face2} alt="" className="absolute w-44 sm:w-52 md:w-72 h-44 sm:h-52 md:h-72 z-10 top-28 sm:top-40 sm:left-0 md:left-3" />
                <img src={face4} alt="" className="absolute w-28 sm:w-32 md:w-32 h-28 sm:h-32 md:h-32 z-10 bottom-4 right-4 sm:right-8 md:right-12" />
                <img src={dot} alt="" className="absolute w-1 sm:w-2 h-1 sm:h-2 z-10 bottom-12 left-8 sm:left-20 md:bottom-8 md:left-32" />
                <img src={dot} alt="" className="absolute w-1 sm:w-2 h-1 sm:h-2 z-10 top-12 right-12 sm:right-20 md:top-24 md:right-56" />
                <img src={dot} alt="" className="absolute w-1 sm:w-2 h-1 sm:h-2 z-10 top-1/2 left-1/4 md:top-1/2 md:left-1/3" />

                {/* Images to hide on mobile (show from sm breakpoint up) */}
                <img src={face3} alt="" className="hidden sm:block absolute w-36 sm:w-48 md:w-72 h-36 sm:h-48 md:h-72 z-10 right-0 sm:right-6 md:right-4 md:-top-12" />
                <img src={drone3} alt="" className="hidden sm:block absolute w-16 sm:w-24 md:w-40 h-16 sm:h-24 md:h-40 z-10 top-24 sm:top-32 right-16 sm:right-28 md:top-44 md:right-34" />
                <img src={rb2} alt="" className="hidden sm:block absolute w-8 sm:w-12 md:w-28 h-8 sm:h-12 md:h-28 z-10 bottom-6 right-1/4 md:bottom-3 md:right-60" />
                <img src={rb1} alt="" className="hidden sm:block absolute w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 z-10 bottom-2 left-16 md:bottom-6 md:left-60" />
                <img src={face1} alt="" className="hidden sm:block absolute w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 z-10 bottom-2 left-16 md:bottom-6 md:left-60" />

                {/* Images to hide on mobile and tablet (show from md breakpoint up) */}
                <img src={dot} alt="" className="hidden md:block absolute w-1 sm:w-2 h-1 sm:h-2 z-10 top-20 sm:top-24 left-16 sm:left-24 md:top-60 md:left-56" />
                <img src={dot} alt="" className="hidden md:block absolute w-1 sm:w-2 h-1 sm:h-2 z-10 top-16 sm:top-20 right-12 sm:right-20 md:top-40 md:right-28" />
                <img src={dot} alt="" className="hidden md:block absolute w-1 sm:w-2 h-1 sm:h-2 z-10 bottom-8 right-16 sm:right-24 md:bottom-12 md:right-40" />

                {/* Central Content */}
                <div className="relative z-20 flex flex-col items-center justify-center h-full py-8 sm:py-12">
                    <h1 className="text-[24px] sm:text-[32px] md:text-[48px] font-semibold text-[#FF721F] leading-tight text-center mb-2">
                        "See You Then!"
                    </h1>
                    <p className="max-w-xs sm:max-w-sm md:max-w-xl mx-auto text-center text-sm sm:text-base md:text-lg text-gray-700 font-medium px-4 sm:px-8 md:py-16">
                        Join our summer camp for an unforgettable adventure filled with fun activities, new friends, and lifelong memories. Don’t miss out on the opportunity to make this summer one to remember.
                    </p>
                </div>
            </div>
        </div>




        <Footer />
    </div>

export default BootCamp;