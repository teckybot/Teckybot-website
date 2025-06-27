import React from 'react'
import Footer from '../Components/Footer'
import hero from '../data/Internship/Gallery/internship1_teckybot.jpg'
import StudentTestimonials from '../Components/StudentTestimonials'
import Rectangle_18 from '../data/Internship/Gallery/Rectangle_18.png'
import Rectangle_19 from '../data/Internship/Gallery/Rectangle_19.png'
import Rectangle_20 from '../data/Internship/Gallery/Rectangle_20.png'
import Rectangle_21 from '../data/Internship/Gallery/Rectangle_21.png'
import Rectangle_22 from '../data/Internship/Gallery/Rectangle_22.png'
import Rectangle_23 from '../data/Internship/Gallery/Rectangle_23.png'
import internshipBrochure from '../data/Internship/Teckybot Internship Brochure.pdf'

const Internship = () => {
    const highlights = [Rectangle_18, Rectangle_19, Rectangle_20]
    const highlights2 = [Rectangle_21, Rectangle_22, Rectangle_23]
    const text = "What is Internship ?"
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
                    {/* Mobile version - visible only on small screens */}
                    <div className="block sm:hidden text-white text-center mt-4 p-4 text-sm leading-6">
                        An internship offers real-world experience, practical skills, and industry insights—your first step toward a successful career. Join us to kick-start your journey!
                    </div>

                    {/* Desktop version - visible on medium screens and up */}
                    <p className="hidden sm:block text-white text-center mt-4 sm:mt-6 md:mt-8 p-4 sm:p-6 lg:p-12 text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-8">
                        An internship is a short-term, real-world work experience that allows individuals to apply their knowledge, gain practical skills, and understand industry workflows—often serving as a stepping stone to full-time roles or advanced projects.
                        Ready to level up your career? Join us and kick-start your journey with hands-on industry exposure.
                    </p>



                    <div className="flex flex-col sm:flex-row gap-4 my-4">
                        <a
                            href={internshipBrochure} download="Teckybot Internship Brochure.pdf"
                            rel="noopener noreferrer"
                            className="px-4 py-2 w-[200px] text-center bg-orange-500 text-white hover:bg-orange-600 transition rounded-[10px]"
                        >
                            Download Brochure
                        </a>
                        <a
                            href="#opportunities"
                            className="px-4 py-2 w-[202px] text-center bg-blue-600 text-white hover:bg-blue-700 transition rounded-[10px] "
                        >
                            Explore Opportunities
                        </a>
                    </div>

                </div>
            </div>

            {/* <div id="opportunities" className='flex flex-wrap items-center justify-center gap-20 mt-20 scroll-mt-24 mb-20'>
                <div
                    className='flex flex-col w-[360px] p-[1.5px] rounded-[20px]'
                    style={{ background: 'linear-gradient(to bottom right, rgba(255, 114, 31, 1), rgba(255, 114, 31, 0))' }}
                >
                    <div className='flex flex-col w-full p-8 gap-4 text-center rounded-[18px] bg-white'
                        style={{ boxShadow: '0px 5px 10px rgba(0,0,0, 0.25)' }}>
                        <div className='h-[190px] w-full bg-gray-300 rounded-[18px]'></div>
                        <h1 className='font-semibold text-[24px]'>Tecky Smart</h1>
                        <p> Tecky Smart is our exclusive internship hiring platform where we
                            onboard passionate individuals and assign them real-time projects based on
                            their skills and interests. </p>
                        <a
                            href="#"
                            className="inline-block px-4 py-2 mt-4 text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition"
                        >
                            Apply Now
                        </a>
                    </div>
                </div>
                <div
                    className='flex flex-col w-[360px] p-[1.5px] rounded-[20px]'
                    style={{ background: 'linear-gradient(to bottom right, rgba(255, 114, 31, 1), rgba(255, 114, 31, 0))' }}
                >
                    <div className='flex flex-col w-full p-8 gap-4 text-center rounded-[18px] bg-white'
                        style={{ boxShadow: '0px 5px 10px rgba(0,0,0, 0.25)' }}>
                        <div className='h-[190px] w-full bg-gray-300 rounded-[18px]'></div>
                        <h1 className='font-semibold text-[24px]'>Tecky Skill</h1>
                        <p>Teck Skill is our unique program where individuals are trained in
                            relevant technologies and immediately assigned real tasks. This approach
                            ensures active learning, skill application, and direct industry exposure—all in
                            one platform. </p>
                        <a
                            href="#"
                            className="inline-block px-4 py-2 mt-4 text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition"
                        >
                            Apply Now
                        </a>
                    </div>
                </div>

                <div
                    className='flex flex-col w-[360px] p-[1.5px] rounded-[20px]'
                    style={{ background: 'linear-gradient(to bottom right, rgba(255, 114, 31, 1), rgba(255, 114, 31, 0))' }}
                >
                    <div className='flex flex-col w-full p-8 gap-4 text-center rounded-[18px] bg-white'
                        style={{ boxShadow: '0px 5px 10px rgba(0,0,0, 0.25)' }}>
                        <div className='h-[190px] w-full bg-gray-300 rounded-[18px]'></div>
                        <h1 className='font-semibold text-[24px]'>Tecky Assist</h1>
                        <p> Tecky Assist is our skill development platform where individuals
                            are trained in technologies based on their interests and career goals. With
                            hands-on guidance and practical sessions, we help learners grow confidently
                            in the Industry 4.0 landscape.
                        </p>
                        <a
                            href="#"
                            className="inline-block px-4 py-2 mt-4 text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition"
                        >
                            Apply Now
                        </a>
                    </div>
                </div>


            </div> */}

            <div
                id="opportunities"
                className="flex flex-wrap items-stretch justify-center gap-20 mt-20 scroll-mt-24 mb-20"
            >
                <div
                    className="flex flex-col w-[370px] p-[1.5px] rounded-[20px]"
                    style={{
                        background:
                            "linear-gradient(to bottom right, rgba(255, 114, 31, 1), rgba(255, 114, 31, 0))",
                    }}
                >
                    <div
                        className="flex flex-col w-full p-8 gap-4 text-center rounded-[18px] bg-white flex-grow"
                        style={{ boxShadow: "0px 5px 10px rgba(0,0,0, 0.25)" }}
                    >
                        <div className="h-[190px] w-full bg-gray-300 rounded-[18px]"></div>
                        <h1 className="font-semibold text-[24px]">Tecky <span className='text-orange-500'>Smart</span></h1>
                        <p>
                            Tecky Smart is our exclusive internship hiring platform where we
                            onboard passionate individuals and assign them real-time projects
                            based on their skills and interests.
                        </p>
                        <a
                            href="https://forms.gle/vRtMV8aJoAv1K9Uf8" target='_blank' rel="noopener noreferrer"
                            className="inline-block px-4 py-2 mt-auto text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition"
                        >
                            Apply Now
                        </a>
                    </div>
                </div>

                <div
                    className="flex flex-col w-[370px] p-[1.5px] rounded-[20px]"
                    style={{
                        background:
                            "linear-gradient(to bottom right, rgba(255, 114, 31, 1), rgba(255, 114, 31, 0))",
                    }}
                >
                    <div
                        className="flex flex-col w-full p-8 gap-4 text-center rounded-[18px] bg-white flex-grow"
                        style={{ boxShadow: "0px 5px 10px rgba(0,0,0, 0.25)" }}
                    >
                        <div className="h-[190px] w-full bg-gray-300 rounded-[18px]"></div>
                        <h1 className="font-semibold text-[24px]">Tecky <span className='text-orange-500'>Skill</span></h1>
                        <p>
                            Teck Skill is our unique program that trains individuals in relevant technologies and immediately involves them in real tasks—ensuring active learning and direct industry exposure.
                        </p>
                        <a
                            href="https://forms.gle/vRtMV8aJoAv1K9Uf8" target='_blank' rel="noopener noreferrer"
                            className="inline-block px-4 py-2 mt-auto text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition"
                        >
                            Apply Now
                        </a>
                    </div>
                </div>

                <div
                    className="flex flex-col w-[370px] p-[1.5px] rounded-[20px]"
                    style={{
                        background:
                            "linear-gradient(to bottom right, rgba(255, 114, 31, 1), rgba(255, 114, 31, 0))",
                    }}
                >
                    <div
                        className="flex flex-col w-full p-8 gap-4 text-center rounded-[18px] bg-white flex-grow"
                        style={{ boxShadow: "0px 5px 10px rgba(0,0,0, 0.25)" }}
                    >
                        <div className="h-[190px] w-full bg-gray-300 rounded-[18px]"></div>
                        <h1 className="font-semibold text-[24px]">Tecky <span className='text-orange-500'>Assist</span></h1>
                        <p>
                            Tecky Assist is our skill development platform, offering hands-on training tailored to your interests and career goals—helping you thrive in the Industry 4.0 world.
                        </p>
                        <a
                            href="https://forms.gle/vRtMV8aJoAv1K9Uf8" target='_blank' rel="noopener noreferrer"
                            className="inline-block px-4 py-2 mt-auto text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition"
                        >
                            Apply Now
                        </a>
                    </div>
                </div>
            </div>


            <StudentTestimonials />

            <h1 className='text-center text-[48px] font-semibold'>Internships</h1>

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

export default Internship