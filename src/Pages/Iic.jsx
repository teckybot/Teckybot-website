import React from 'react'
import hero from '../data/services/IIC1_Teckybot.png'
import Footer from '../Components/Footer'
import ImageCarousel from '../Components/ImageCarousel2'
import circle from '../data/events/circle.png'
import IIC1 from '../data/iic/IIC1_Teckybot.jpg'
import IIC2 from '../data/iic/IIC2_Teckybot.jpg'
import IIC3 from '../data/iic/IIC3_Teckybot.jpg'
import IIC4 from '../data/iic/IIC4_Teckybot.jpg'
import MOU1 from '../data/MOU/Nsrit.jpeg'
import MOU2 from '../data/MOU/behara.jpeg' // Reusing existing images as placeholders
import MOU3 from '../data/MOU/kallam.jpg'
import MOU4 from '../data/MOU/vignan.jpg'
import MOU5 from '../data/MOU/narayanapng.png'
import MOU6 from '../data/MOU/KKR & KSR.png'
import MOU7 from '../data/MOU/Dadi.jpg'
import MOU8 from '../data/MOU/dnr.jpeg'

const Iic = () => {
    const text = "Industry Institute Collaboration"
    const imageList = [
        { src: IIC1, alt: 'First Slide' },
        { src: IIC2, alt: 'Second Slide' },
        { src: IIC3, alt: 'Third Slide' },
        { src: IIC4, alt: 'Fourth Slide' },
    ];

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
                    <p className="text-white text-center  mt-4 sm:mt-6 md:mt-8 p-4 sm:p-6 lg:p-12 text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-8">
                        Industry-Institute Collaboration (IIC) is a powerful partnership between academia and industry.
                        It connects students with real-world challenges.
                        Want to bridge the gap between classroom learning and cutting-edge industry needs? IIC makes it happen!
                    </p>
                </div>
            </div>

            <ImageCarousel images={imageList} />

            {/* <div className="relative w-[80vw] h-[35vh] sm:h-[60vh] lg:h-[85vh] xl:rounded-[500px] rounded-[10px] overflow-hidden my-8 mx-auto transition-all duration-300 xl:hover:rounded-[10px]">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/1XY_tgcRH28"
                    frameBorder="0"
                    allowFullScreen
                    title="YouTube video"
                ></iframe>
            </div> */}

            <div className="text-start mx-auto max-w-7xl my-6 sm:my-8 md:my-12 lg:my-16 px-4 sm:px-6 md:px-8">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-7">
                    At Teckybot, our IIC programs are designed to support learners throughout their
                    academic journey. We collaborate with institutions to provide continuous industry
                    exposure, hands-on training, and project-based learning—helping participants build
                    real-world skills across all semesters of their course.
                    This continuous exposure significantly boosts student employability and confidence.
                </p>
                <br />
                <p className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-7">
                    Institutions gain
                    stronger industry connections, access to live projects, internships, and research
                    opportunities—fostering a culture of innovation and real-world problem-solving.
                    Ultimately, this collaboration elevates the institution’s academic profile and positions
                    it as a forward-thinking, industry-aligned learning hub.
                </p>
            </div>

            <h1 className="text-center text-[28px] sm:text-[36px] md:text-[40px] lg:text-[50px] xl:text-[50px] font-semibold leading-tight">
                MOU&apos;S with Colleges
            </h1>

            <section className="w-full min-h-screen py-4 relative">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Responsive grid for circles */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-20">
                        {[MOU1, MOU2, MOU3, MOU4, MOU5, MOU6, MOU7, MOU8].map((imgSrc, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="relative w-[140px] h-[140px] sm:w-[200px] sm:h-[200px]">
                                    {/* Optional: background decorative circle */}
                                    {/* <img
                                        src={circle}
                                        alt="Circle"
                                        className="absolute w-full h-full object-contain drop-shadow-md"
                                    /> */}
                                    {/* Circular image */}
                                    <a href="#exp" className="z-20 flex items-center justify-center w-full h-full">
                                        <img
                                            src={imgSrc}
                                            alt={`MOU ${idx + 1}`}
                                            className="rounded-full w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] object-cover border-4 border-white shadow-lg"
                                        />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
    <Footer />
        </div >
    )
}

export default Iic