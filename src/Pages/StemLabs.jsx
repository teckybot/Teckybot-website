import React from 'react'
import Footer from '../Components/Footer'
import ImageCarousel1 from '../Components/ImageCarousel2'
import logo from '../data/home/industry4.0_teckybot.jpg'
import circle from '../data/events/circle.png'
import hero from '../data/services/StemLabs2_Teckybot.png'
import Stemlab1 from '../data/services/stemlabs/StemLab3_Teckybot.jpg';
import Stemlab2 from '../data/services/stemlabs/StemLabs5_Teckybot.jpg';
import Stemlab3 from '../data/services/stemlabs/StemLabs7_Teckybot.jpg';
import Stemlab4 from '../data/services/stemlabs/StemLabs2_Teckybot.jpg';

import stem1 from '../data/services/stemlabs/stem_lab6_teckybot.jpg'
import stem2 from '../data/services/stemlabs/stem_lab2_teckybot.jpg'
import stem3 from '../data/services/stemlabs/stem_lab1_teckybot.jpg'
import stem4 from '../data/services/stemlabs/stem_lab5_teckybot.jpg'

const StemLabs = () => {

    const text = "Teck STEM Labs"
    const highlights = [Stemlab1, Stemlab2, Stemlab3, Stemlab4]

    const imageList = [
        { src: stem1, alt: 'First Slide' },
        { src: stem2, alt: 'Second Slide' },
        { src: stem3, alt: 'Third Slide' },
        { src: stem4, alt: 'Fourth Slide' },
    ];

    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <div className="w-[90%] sm:w-[80%] rounded-3xl my-8 sm:my-12 flex flex-col p-6 sm:p-12 md:p-16 overflow-hidden bg-white relative"
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
                    <p className="text-white text-center mt-4 sm:mt-6 md:mt-8 p-4 sm:p-6 lg:p-12 text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-8">
                        Step into Teckybot’s STEM Labs — where curiosity meets creation!
                        With hands-on kits and modern tools, students explore robotics, coding, electronics, and more.
                        It’s all about learning by doing, sparking innovation every step of the way.
                        <br />
                        Ready to build, experiment, and bring ideas to life?
                    </p>
                    <a
                        href="#"
                        className="px-4 py-2 w-[200px] text-center bg-orange-500 text-white hover:bg-orange-600 transition rounded-[10px] my-4"
                    >
                        Contact Us
                    </a>
                </div>
            </div>

            <ImageCarousel1 images={imageList} />

            <div className='w-[80%] flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-36 my-8'>
                <h1 className='font-bold text-[48px] hidden lg:block'>
                    Key<br />Benefits
                </h1>
                <h1 className='lg:hidden font-bold text-[36px]'>
                    Key Benefits
                </h1>
                <p className='px-4 text-justify lg:px-8 '>STEM Labs at Teckybot offer an immersive learning environment where students can explore, experiment, and innovate using real-world technologies. Designed to bridge the gap between academics and industry, these labs equip learners with future-ready skills, hands-on experience, and a deep understanding of emerging tech fields.</p>
            </div>


            <div className="h-[1px] w-[80%] bg-[#151515] my-4 opacity-[40%]"></div>

            <div className='my-8 flex flex-col lg:flex-row items-center lg:items-start w-[80%] gap-6 lg:gap-0'>
                <div className='w-[90%] sm:w-[60%] lg:w-[40%] h-auto'>
                    <img src={logo} alt='logo' className='w-[90%] h-auto rounded-[50%]'
                        style={{ boxShadow: '0px 5px 30px rgba(0,0,0, 0.25)' }} />
                </div>
                <div className='lg:w-[60%] flex flex-col items-start justify-center'>
                    <div className='flex items-start gap-4 sm:gap-20'>
                        <h1 className='text-[#FF721F] text-[32px] lg:text-[48px] font-semibold'>01</h1>
                        <div className='flex flex-col gap-4'>
                            <h1 className='font-semibold text-[24px]'>
                                Hands-On Learning
                            </h1>
                            <p>
                                Encourages practical understanding by allowing learners to build, experiment,
                                and explore with real tools and components.
                            </p>
                        </div>
                    </div>
                    <div className="h-[1px] w-full bg-[#151515] my-6 opacity-[40%]"></div>

                    <div className='flex items-start gap-4 sm:gap-20'>
                        <h1 className='text-[#FF721F] text-[32px] lg:text-[48px] font-semibold'>02</h1>
                        <div className='flex flex-col gap-4'>
                            <h1 className='font-semibold text-[24px]'>
                                Enhance Problem-Solving Skills
                            </h1>
                            <p>
                                Promotes logical reasoning and critical thinking by challenging users to find
                                solutions through trial and error.
                            </p>
                        </div>
                    </div>

                    <div className="h-[1px] w-full bg-[#151515] my-6 opacity-[40%]"></div>

                    <div className='flex items-start gap-4 sm:gap-20'>
                        <h1 className='text-[#FF721F] text-[32px] lg:text-[48px] font-semibold'>03</h1>
                        <div className='flex flex-col gap-4'>
                            <h1 className='font-semibold text-[24px]'>
                                Team Work & Collaboration
                            </h1>
                            <p>
                                Encourages communication and collaboration through group-based projects
                                and interactive sessions.
                            </p>
                        </div>
                    </div>

                    <div className="h-[1px] w-full bg-[#151515] my-6 opacity-[40%]"></div>

                    <div className='flex items-start gap-4 sm:gap-20'>
                        <h1 className='text-[#FF721F] text-[32px] lg:text-[48px] font-semibold'>04</h1>
                        <div className='flex flex-col gap-4'>
                            <h1 className='font-semibold text-[24px]'>
                                Boosts Creativity & Innovation
                            </h1>
                            <p>
                                Fosters out-of-the-box thinking through engaging activities in robotics, IoT,
                                coding more.
                            </p>
                        </div>
                    </div>

                    <div className="h-[1px] w-full bg-[#151515] my-6 opacity-[40%]"></div>

                    <div className='flex items-start gap-4 sm:gap-20'>
                        <h1 className='text-[#FF721F] text-[32px] lg:text-[48px] font-semibold'>05</h1>
                        <div className='flex flex-col gap-4'>
                            <h1 className='font-semibold text-[24px]'>
                                Early Exposure to Future Technologies
                            </h1>
                            <p>
                                Introduces learners to emerging fields like AI, IoT, Automation- bridging the gap
                                between theory and industry
                            </p>
                        </div>
                    </div>

                    <div className="h-[1px] w-full bg-[#151515] my-6 opacity-[40%]"></div>
                </div>
            </div>


            <section className="w-full min-h-screen bg-gradient-to-b from-blue-100 to-white py-8 relative">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-start md:space-x-12">
                        {/* Left: Heading */}
                        <div className="md:w-1/3 mb-6 md:mb-0">
                            <h1 className="text-4xl font-bold text-black mt-4">About ATL</h1>
                            <p className='font-semibold py-2 px-2'>Atal Tinkering Labs </p>
                        </div>
                        {/* Right: Text */}
                        <div className="md:w-2/3 space-y-6">
                            <p className="text-gray-700 text-base leading-relaxed">
                                At Teckybot, we actively support and enhance the vision of Atal Tinkering Labs, a
                                f
                                lagship initiative by NITI Aayog under the Atal Innovation Mission (AIM). Our ATL
                                setups are designed to create a nurturing space where young minds can ideate, tinker,
                                and innovate using state-of-the-art tools and technologies.
                            </p>
                            <p className="text-gray-700 text-base leading-relaxed">
                                We provide complete ATL
                                solutions from lab setup and equipment supply to training modules and project
                                support ensuring that schools are fully equipped to inspire innovation and problem
                                solving skills among students. Our goal is to cultivate a culture of curiosity, creativity,
                                and hands-on learning right from the school level.
                            </p>
                        </div>
                    </div>

                    {/* Circles with different text */}
                    <div className="flex justify-center gap-8 mt-20 flex-wrap relative">
                        <div className="relative z-10 w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] flex items-center justify-center">
                            <img
                                src={circle}
                                alt="Circle"
                                className="absolute w-full h-full object-contain drop-shadow-md"
                            />
                            <a href="#exp" className="z-20 text-center">
                                <h1 className="text-[16px] sm:text-[28px] lg:text-[32px]">
                                    EXP<span className="text-[#FF721F]">LORE</span>
                                </h1>
                            </a>
                        </div>

                        <div className="relative z-10 w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] flex items-center justify-center">
                            <img
                                src={circle}
                                alt="Circle"
                                className="absolute w-full h-full object-contain drop-shadow-md"
                            />
                            <a href="#earn" className="z-20 text-center">
                                <h1 className="text-[16px] sm:text-[28px] lg:text-[32px]">
                                    L<span className="text-[#FF721F]">EARN</span>
                                </h1>
                            </a>
                        </div>

                        <div className="relative z-10 w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] flex items-center justify-center">
                            <img
                                src={circle}
                                alt="Circle"
                                className="absolute w-full h-full object-contain drop-shadow-md"
                            />
                            <a href="#dev" className="z-20 text-center">
                                <h1 className="text-[16px] sm:text-[28px] lg:text-[32px]">
                                    DEV<span className="text-[#FF721F]">ELOP</span>
                                </h1>
                            </a>
                        </div>

                        <div className="relative z-10 w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] flex items-center justify-center">
                            <img
                                src={circle}
                                alt="Circle"
                                className="absolute w-full h-full object-contain drop-shadow-md"
                            />
                            <a href="#spire" className="z-20 text-center">
                                <h1 className="text-[16px] sm:text-[28px] lg:text-[32px]">
                                    IN<span className="text-[#FF721F]">SPIRE</span>
                                </h1>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <h1 className='text-center text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-semibold leading-tight'>STEM LAB</h1>

            <div className="flex justify-start items-center h-[306px] w-full overflow-hidden gap-16 mb-28 mt-10">
                {/* Scrolling container */}
                <div className="flex animate-scroll-awards hover:[animation-play-state:paused]">
                    {[...highlights, ...highlights].map((image, index) => (
                        <img
                            key={`primary-${index}`}
                            src={image}
                            alt={`college-img-${index}`}
                            className="w-auto h-[300px] object-cover mx-6 rounded-2xl"
                            style={{ boxShadow: "0px 0px 20px rgba(0,0,0,0.2)" }}
                        />
                    ))}
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default StemLabs