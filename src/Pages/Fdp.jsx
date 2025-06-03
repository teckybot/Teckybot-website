import React from 'react'
import hero from '../data/services/Fdp_hero.png'
import Footer from '../Components/Footer'
import logo from '../data/home/industrylogo.jpg'

const Fdp = () => {
    const text = "Faculty Development Program"
    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <div className="w-[90%] sm:w-[80%] rounded-3xl my-8 sm:my-16 flex flex-col p-6 sm:p-12 md:p-16 overflow-hidden bg-white relative"
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
                    <p className="text-white text-center mt-4 sm:mt-6 md:mt-8 p-4 sm:p-6 lg:p-12 text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Habitant.
                    </p>
                </div>
            </div>

                        <div className='w-[80%] flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-36 my-8'>
                <h1 className='font-bold text-[48px] hidden lg:block'>
                    Key<br />Benefits
                </h1>
                <h1 className='lg:hidden font-bold text-[36px]'>
                    Key Benefits
                </h1>
                <p className='px-4 text-justify lg:px-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                                Lorem ipsum
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien.
                            </p>
                        </div>
                    </div>
                    <div className="h-[1px] w-full bg-[#151515] my-6 opacity-[40%]"></div>

                    <div className='flex items-start gap-4 sm:gap-20'>
                        <h1 className='text-[#FF721F] text-[32px] lg:text-[48px] font-semibold'>02</h1>
                        <div className='flex flex-col gap-4'>
                            <h1 className='font-semibold text-[24px]'>
                                Lorem ipsum
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien.
                            </p>
                        </div>
                    </div>

                    <div className="h-[1px] w-full bg-[#151515] my-6 opacity-[40%]"></div>

                    <div className='flex items-start gap-4 sm:gap-20'>
                        <h1 className='text-[#FF721F] text-[32px] lg:text-[48px] font-semibold'>03</h1>
                        <div className='flex flex-col gap-4'>
                            <h1 className='font-semibold text-[24px]'>
                                Lorem ipsum
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien.
                            </p>
                        </div>
                    </div>

                    <div className="h-[1px] w-full bg-[#151515] my-6 opacity-[40%]"></div>

                    <div className='flex items-start gap-4 sm:gap-20'>
                        <h1 className='text-[#FF721F] text-[32px] lg:text-[48px] font-semibold'>04</h1>
                        <div className='flex flex-col gap-4'>
                            <h1 className='font-semibold text-[24px]'>
                                Lorem ipsum
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien.
                            </p>
                        </div>
                    </div>

                    <div className="h-[1px] w-full bg-[#151515] my-6 opacity-[40%]"></div>

                    <div className='flex items-start gap-4 sm:gap-20'>
                        <h1 className='text-[#FF721F] text-[32px] lg:text-[48px] font-semibold'>05</h1>
                        <div className='flex flex-col gap-4'>
                            <h1 className='font-semibold text-[24px]'>
                                Lorem ipsum
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien.
                            </p>
                        </div>
                    </div>

                    <div className="h-[1px] w-full bg-[#151515] my-6 opacity-[40%]"></div>
                </div>
            </div>


                        <div id="opportunities" className='flex flex-wrap items-center justify-center gap-20 mt-20 scroll-mt-24 mb-20'>
                <div
                    className='flex flex-col w-[350px] p-[1.5px] rounded-[20px]'
                    style={{ background: 'linear-gradient(to bottom right, rgba(255, 114, 31, 1), rgba(255, 114, 31, 0))' }}
                >
                    <div className='flex flex-col w-full p-8 gap-4 text-center rounded-[18px] bg-white'
                        style={{ boxShadow: '0px 5px 10px rgba(0,0,0, 0.25)' }}>
                        <div className='h-[190px] w-full bg-gray-300 rounded-[18px]'></div>
                        <h1 className='font-semibold text-[24px]'>Program 1</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu.</p>
                        <a
                            href="#"
                            className="inline-block px-4 py-2 mt-4 text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition"
                        >
                            Explore the Program
                        </a>
                    </div>
                </div>
                <div
                    className='flex flex-col w-[350px] p-[1.5px] rounded-[20px]'
                    style={{ background: 'linear-gradient(to bottom right, rgba(255, 114, 31, 1), rgba(255, 114, 31, 0))' }}
                >
                    <div className='flex flex-col w-full p-8 gap-4 text-center rounded-[18px] bg-white'
                        style={{ boxShadow: '0px 5px 10px rgba(0,0,0, 0.25)' }}>
                        <div className='h-[190px] w-full bg-gray-300 rounded-[18px]'></div>
                        <h1 className='font-semibold text-[24px]'>Program 2</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu.</p>
                        <a
                            href="#"
                            className="inline-block px-4 py-2 mt-4 text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition"
                        >
                            Explore the Program
                        </a>
                    </div>
                </div>

                <div
                    className='flex flex-col w-[350px] p-[1.5px] rounded-[20px]'
                    style={{ background: 'linear-gradient(to bottom right, rgba(255, 114, 31, 1), rgba(255, 114, 31, 0))' }}
                >
                    <div className='flex flex-col w-full p-8 gap-4 text-center rounded-[18px] bg-white'
                        style={{ boxShadow: '0px 5px 10px rgba(0,0,0, 0.25)' }}>
                        <div className='h-[190px] w-full bg-gray-300 rounded-[18px]'></div>
                        <h1 className='font-semibold text-[24px]'>Program 3</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu.</p>
                        <a
                            href="#"
                            className="inline-block px-4 py-2 mt-4 text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition"
                        >
                            Explore the Program
                        </a>
                    </div>
                </div>

            
            </div>
            <Footer />
        </div>
    )
}

export default Fdp