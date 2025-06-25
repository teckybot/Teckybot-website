import React from 'react'
import hero from '../data/seminars/Seminar3_Teckybot.jpg'
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

            <div className="w-full flex flex-col items-center py-10 bg-white overflow-hidden">
                <div className="text-center mb-12 px-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        <span className="text-[#FF721F]">Key Benefits</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Our program transforms teaching by equipping educators with Industry 4.0 expertise, fostering innovation, and integrating cutting-edge technology into the curriculum.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
                    {/* Benefit Card 1 */}
                    <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div className="p-4 rounded-full bg-[#FF721F] text-white text-3xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Stay Updated
                        </h3>
                        <p className="text-gray-600">
                            Gain insights into the latest industry trends, technologies, and innovations.

                        </p>
                    </div>

                    {/* Benefit Card 2 */}
                    <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div className="p-4 rounded-full bg-[#FF721F] text-white text-3xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Expert Knowledge</h3>
                        <p className="text-gray-600">
                            Learn directly from industry leaders, researchers, and experiencedprofessionals.
                        </p>
                    </div>

                    {/* Benefit Card 3 */}
                    <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div className="p-4 rounded-full bg-[#FF721F] text-white text-3xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4.636 18.364l-.707.707M3 12H2m8.364-6.364l.707-.707M12 21v-1m-6.364-1.636l.707-.707M18 10a2 2 0 11-4 0 2 2 0 014 0zM12 18a6 6 0 100-12 6 6 0 000 12z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Networking Opportunities</h3>
                        <p className="text-gray-600">
                            Connect with like-minded peers, mentors, and potential collaborators.
                        </p>
                    </div>

                    {/* Benefit Card 4 */}
                    <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div className="p-4 rounded-full bg-[#FF721F] text-white text-3xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 8a8 8 0 01-8-8c0-2.316.59-4.502 1.633-6.442M12 21a8 8 0 008-8c0-2.316-.59-4.502-1.633-6.442M3 12h18" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Inspiration & Motivation</h3>
                        <p className="text-gray-600">
                            Spark new ideas and boost your passion for learning and innovation.
                        </p>
                    </div>

                    {/* Benefit Card 5 */}
                    <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div className="p-4 rounded-full bg-[#FF721F] text-white text-3xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 10-4 0v1a1 1 0 001 1h3a1 1 0 001-1V4zm-1 9l-3 4H4m11-4l-3 4h-3m8-4a2 2 0 11-4 0 2 2 0 014 0zM12 19l-3 2v-3a4 4 0 011-3.756l3-3m5.757-1.11L18 4m-3 10V4m-3 10V4" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Professional Development</h3>
                        <p className="text-gray-600">
                           Enhance your skills and knowledge to stay competitive in your field.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div className="p-4 rounded-full bg-[#FF721F] text-white text-3xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Interactive Learning</h3>
                        <p className="text-gray-600">
                            Unlike passive learning, seminars encourage active participation through Q&A sessions, group discussions, and workshops.
                        </p>
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

            <Footer />
        </div>
    )
}

export default Seminars