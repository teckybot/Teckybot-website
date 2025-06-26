import React from 'react'
import Footer from '../Components/Footer'
import i2 from '../data/services/projects/Fram_110.png'
import i3 from '../data/services/projects/Frame_111.png'
import maini1 from '../data/services/projects/Frame_109.png'
import i4 from '../data/services/projects/Frame _112.png'
import { motion } from "framer-motion";

import hero from '../data/services/Robotics_1_teckybot.jpg'
import minor1 from '../data/services/projects/Project1_Teckybot.jpg'
import minor2 from '../data/services/projects/Project_Teckybot.jpg'
import minor3 from '../data/services/projects/Project3_Teckybot.jpg'
import major1 from '../data/services/projects/MProject_Teckybot.jpg'
import major2 from '../data/services/projects/MProject1_Teckybot.jpg'
import major3 from '../data/services/projects/Project2_Teckybot.jpg'
import major4 from '../data/services/projects/Project5_Teckybot.jpg'

const Projects = () => {
    const text = "TECK PROJECTS"
    const imageVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.6 },
        }),
    };

    const images = [
        { src: minor1, alt: "Main vertical image", className: "row-span-2" },  // Left large
        { src: minor2, alt: "Top right wide image", className: "col-span-2" }, // Top right
        { src: minor3, alt: "Bottom right left", className: "" },             // Bottom right 1
        { src: i4, alt: "Bottom right right", className: "" },            // Bottom right 2
    ];
    const images2 = [
        major1, // Top-left
        major2, // Bottom-left
        major3, // Top-right
        major4, // Bottom-right
        major1,
    ];
    return (
        <div className='flex flex-col items-center  justify-center w-full'>
            <div className="w-[90%]  sm:w-[80%]  rounded-3xl my-8 sm:my-16 flex flex-col p-6 sm:p-12 md:p-16 lg:p-24 overflow-hidden bg-white relative"
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
                <div className="relative z-10 flex flex-col items-center ">
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
                    <p className="text-white text-center  rounded-3xl mt-4 sm:mt-6 md:mt-8 p-4 sm:p-6 lg:p-12 text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-8">
                        At Teckybot, we offer complete, customised solutions for projects in Industry 4.0 technologies.
                        From academic needs to product prototypes, we turn your ideas into smart realities.
                        Our expertise spans IoT, AI, Automation, Embedded Systems, and more.
                        Innovation, quality, and practical impact — that’s our promise.
                    </p>
                </div>
            </div>

            <h1 className="text-center text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-semibold leading-tight">
                PROJECTS WE DEVELOP AT TECKYBOT
            </h1>

            <div className="text-start mx-auto max-w-7xl my-6 sm:my-8 md:my-12 lg:my-16 px-4 sm:px-6 md:px-8">
                <h3 className="font-semibold text-lg sm:text-xl md:text-2xl my-2">
                    Minor Projects
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-7 text-justify">
                    Our minor projects are tailored for short-term objectives that require quick execution
                    without compromising on innovation. These projects are ideal for showcasing
                    technical knowledge in a concise format and are best suited for early-stage academic
                    needs, internships, or initial concept testing. Each solution is thoughtfully crafted using
                    up-to-date tools and technologies, providing a solid foundation for future
                    advancements.
                </p>
            </div>


            <div className="max-w-6xl mx-auto p-4">
                <div className="grid grid-cols-3 grid-rows-2 gap-4 md:h-auto lg:h-[600px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            className={`overflow-hidden rounded-xl ${img.className}`}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={imageVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="text-start mx-auto max-w-7xl my-6 sm:my-8 md:my-12 lg:my-16 px-4 sm:px-6 md:px-8">
                <h3 className="font-semibold text-lg sm:text-xl md:text-2xl my-2">
                    Major Projects
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-7 text-justify">
                    Major projects at Teckybot are designed for high-impact outcomes. These are in
                    depth, technically rich solutions created to meet final-year academic standards,
                    industrial use cases, or product development goals. From research-based systems to
                    working prototypes, our team ensures every detail is aligned with real-world
                    applications. We focus on functionality, scalability, and innovation—delivering
                    solutions that stand out both technically and practically.
                </p>
            </div>


            <div className="max-w-6xl mx-auto p-4 mb-14">
                <div className="grid grid-cols-3 grid-rows-2 gap-4 sm:h-[600px]">
                    {[
                        {
                            src: images2[0], // Top-left small image
                            alt: "Image 1",
                            className: "col-span-1 row-span-1",
                        },
                        {
                            src: images2[2], // Bottom-left small image
                            alt: "Image 2",
                            className: "col-span-1 row-span-2",
                        },
                        {
                            src: images2[1], // Middle tall image
                            alt: "Image 3",
                            className: "col-span-1 row-span-1",
                        },
                        {
                            src: images2[1], // Middle tall image
                            alt: "Image 3",
                            className: "col-span-1 row-span-1",
                        },
                        {
                            src: images2[3], // Right tall image
                            alt: "Image 4",
                            className: "col-span-1 row-span-2",
                        },
                    ].map((img, index) => (
                        <motion.div
                            key={index}
                            className={`overflow-hidden rounded-xl ${img.className}`}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={imageVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>



            <Footer />
        </div>
    )
}

export default Projects