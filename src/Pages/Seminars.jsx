import React from 'react'
import hero from '../data/seminars/Seminar6_Teckybot.jpg'
import Footer from '../Components/Footer'
import logo from '../data/home/industrylogo.jpg'
import Rectangle_18 from '../data/Internship/Gallery/Rectangle_18.png'
import Rectangle_19 from '../data/Internship/Gallery/Rectangle_19.png'
import Rectangle_20 from '../data/Internship/Gallery/Rectangle_20.png'
import Rectangle_21 from '../data/Internship/Gallery/Rectangle_21.png'
import Rectangle_22 from '../data/Internship/Gallery/Rectangle_22.png'
import Rectangle_23 from '../data/Internship/Gallery/Rectangle_23.png'


const Seminars = () => {
    const text = "SEMINARS";
    const highlights = [Rectangle_18, Rectangle_19, Rectangle_20];
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
                    <p className="text-white text-center bg-black bg-opacity-50 rounded-3xl mt-4 sm:mt-6 md:mt-8 p-4 sm:p-6 lg:p-12 text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-8">
                        Our seminars bring experts and innovators together to share the latest in emerging technologies and industry trends.
                        They’re the perfect platform for knowledge exchange, inspiring discussions, and staying ahead in the fast-evolving tech world.
                        Experience the future of technology through insightful connections and learning!

                    </p>
                    <a
                        href="#"
                        className="px-4 py-2 w-[200px] text-center bg-orange-500 text-white hover:bg-orange-600 transition rounded-[10px] my-4"
                    >
                        Contact Us
                    </a>
                </div>
            </div>

            <div className='w-[80%] flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-36 my-8'>
                <h1 className='font-bold text-[48px] hidden lg:block'>
                    Key<br />Benefits
                </h1>
                <h1 className='lg:hidden font-bold text-[36px]'>
                    Key Benefits
                </h1>
                <p className='px-4 text-justify lg:px-8'>
                    Seminars at Teckybot offer the latest insights on industry trends, delivered by expert professionals.
                    They provide valuable knowledge, networking with peers and mentors, and inspire innovation and growth.
                    Stay motivated and competitive with our engaging sessions!
                </p>
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
                                Stay Updated
                            </h1>
                            <p>
                                Gain insights into the latest industry trends, technologies, and innovations.
                            </p>
                        </div>
                    </div>
                    <div className="h-[1px] w-full bg-[#151515] my-6 opacity-[40%]"></div>

                    <div className='flex items-start gap-4 sm:gap-20'>
                        <h1 className='text-[#FF721F] text-[32px] lg:text-[48px] font-semibold'>02</h1>
                        <div className='flex flex-col gap-4'>
                            <h1 className='font-semibold text-[24px]'>
                                Expert Knowledge
                            </h1>
                            <p>
                                Learn directly from industry leaders, researchers, and experienced
                                professionals.
                            </p>
                        </div>
                    </div>
                    <div className="h-[1px] w-full bg-[#151515] my-6 opacity-[40%]"></div>

                    <div className='flex items-start gap-4 sm:gap-20'>
                        <h1 className='text-[#FF721F] text-[32px] lg:text-[48px] font-semibold'>03</h1>
                        <div className='flex flex-col gap-4'>
                            <h1 className='font-semibold text-[24px]'>
                                Networking Opportunities
                            </h1>
                            <p>
                                Connect with like-minded peers, mentors, and potential collaborators.
                            </p>
                        </div>
                    </div>
                    <div className="h-[1px] w-full bg-[#151515] my-6 opacity-[40%]"></div>

                    <div className='flex items-start gap-4 sm:gap-20'>
                        <h1 className='text-[#FF721F] text-[32px] lg:text-[48px] font-semibold'>04</h1>
                        <div className='flex flex-col gap-4'>
                            <h1 className='font-semibold text-[24px]'>
                                Inspiration & Motivation
                            </h1>
                            <p>
                                Spark new ideas and boost your passion for learning and innovation.
                            </p>
                        </div>
                    </div>
                    <div className="h-[1px] w-full bg-[#151515] my-6 opacity-[40%]"></div>

                    <div className='flex items-start gap-4 sm:gap-20'>
                        <h1 className='text-[#FF721F] text-[32px] lg:text-[48px] font-semibold'>05</h1>
                        <div className='flex flex-col gap-4'>
                            <h1 className='font-semibold text-[24px]'>
                                Professional Development
                            </h1>
                            <p>
                                Enhance your skills and knowledge to stay competitive in your field.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="text-center text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-semibold leading-tight mt-24 mb-8">
                Seminars
            </h1>

            <div className="flex justify-start items-center h-[306px] w-full overflow-hidden gap-16 mb-5 mt-10">
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

            <div className="flex justify-start items-center h-[306px] w-full mt-4 overflow-hidden gap-16 mb-20">
                {/* Scrolling container */}
                <div className="flex animate-scroll-Intern hover:[animation-play-state:paused]">
                    {[...highlights, ...highlights].map((image, index) => (
                        <img
                            key={`primary-${index}`}
                            src={image}
                            alt={`college-img-${index}`}
                            className="h-[300px] w-auto object-cover mx-6 rounded-xl"
                            style={{ boxShadow: "0px 0px 20px rgba(0,0,0,0.2)" }}
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Seminars