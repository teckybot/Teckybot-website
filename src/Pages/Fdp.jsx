import React from 'react'
import hero from '../data/services/Fdp_hero.png'
// import industrylogo from '../data/home/industrylogo.jpg'
import Footer from '../Components/Footer'
import logo from '../data/home/industry4.0_teckybot.jpg'

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
                        Teckybot's Faculty Development Program empowers educators with Industry 4.0 skills through hands-on training and expert sessions. Upgrade your teaching, boost your impact, and become a future ready educator.
                    </div>

                    {/* Desktop version - visible on medium screens and up */}
                    <p className="hidden sm:block text-white text-center mt-4 sm:mt-6 md:mt-8 p-4 sm:p-6 lg:p-12 text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-8">
                        Teckybot's Faculty Development Programme equips educators with the latest in Industry 4.0.
                        Through hands-on training and expert led sessions, we help you stay ahead and teach with impact.
                        Boost your skills, upgrade your methods, and bring innovation into your classroom.
                        <br />
                        Ready to become a future-ready educator?
                        Let's grow together.
                    </p>
                </div>
            </div>


            <div className="w-full bg-white py-16 flex flex-col items-center">
                {/* Headline and Illustration */}
                <div className="flex flex-col-reverse lg:flex-row items-center w-[90%] max-w-6xl gap-12 mb-12">
                    {/* Illustration */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        {/* Replace with your own SVG or image */}
                        <img
                            src={logo}
                            alt="Educator illustration"
                            className="w-80 h-80 object-contain"
                        />
                    </div>
                    {/* Headline */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#232946] mb-4 leading-tight">
                            Why Choose <span className="text-[#FF721F]">Our Programme?</span>
                        </h2>
                        <p className="text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
                            Unlock your potential as an educator with future ready skills, innovative teaching strategies, and hands-on experience in Industry 4.0 technologies.
                        </p>
                    </div>
                </div>

                {/* Numbered Benefit List */}
                <div className="w-[90%] max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            title: "Industry Relevant Skill Enhancement",
                            desc: "Gain expertise in AI, IoT, Robotics, and Automation to stay ahead in the education landscape.",
                        },
                        {
                            title: "Innovative Teaching Methodologies",
                            desc: "Adopt interactive, project based, and student focused approaches for impactful learning.",
                        },
                        {
                            title: "Continuous Learning Culture",
                            desc: "Embrace lifelong learning and foster a spirit of innovation among faculty.",
                        },
                        {
                            title: "Hands-On Practical Exposure",
                            desc: "Experience real world tools, kits, and applications to enhance your teaching effectiveness.",
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4 bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-200">
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#FF721F] text-white text-2xl font-bold shadow">
                                {String(idx + 1).padStart(2, "0")}
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-[#232946] mb-1">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Fdp
