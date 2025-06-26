// import React from 'react'
// import Footer from '../Components/Footer'
// import img1 from '../data/teckyboti/1.png'
// import img2 from '../data/teckyboti/2.png'
// import img3 from '../data/teckyboti/3.png'
// import img4 from '../data/teckyboti/4.png'
// import fb from '../data/Facebook.png'

// const Teckyboti = () => {
//     return (
//         <div className='flex flex-col items-center w-full text-justify'>
//             <div className='w-[80%] flex flex-col-reverse lg:flex-row m-8 lg:m-16 rounded-[20px] sm:p-4 items-center'
//                 style={{ "background": "linear-gradient(180deg, rgba(214, 227, 251, 1) 0%, rgba(214, 227, 251, 0) 100%)", boxShadow: '0px 20px 30px rgba(0,0,0, 0.25)' }}>
//                 <div className='w-full lg:w-[60%] flex flex-col justify-center items-start px-12 py-4 gap-4 xl:gap-8'>
//                     <h1 className='text-[36px] sm:text-[48px] font-semibold'>TECK LEARN</h1>
//                     <p>
//                         Teck Learn - Learning Experience Platform (LXP) is our flagship suite, meticulously crafted to elevate the learning experience for educators and students alike.
//                         With a user-friendly interface and an extensive library of interactive modules, Teck Learn enables educators to deliver engaging lessons on a wide array of Industry 4.0 topics.
//                         Teck Learn empowers educators to foster a culture of curiosity and lifelong learning among students.
//                     </p>
//                     <a
//                         href="https://lms.teckybot.com/" target='_blank'
//                         className="px-6 py-2 bg-orange-500 text-white hover:bg-orange-600 transition rounded-[10px] my-4"
//                     >
//                         Explore 
//                         <span className="pl-4" style={{ fontSize: '1.25em' }}>&#8594;</span>

//                     </a>

//                 </div>
//                 <div className='w-[90%] sm:w-[50%] lg:w-[40%] flex justify-center items-center'>
//                     <img src={img1} alt="img1" />
//                 </div>
//             </div>
//             {/* <div className="relative w-[80vw] h-[35vh] sm:h-[60vh] lg:h-[85vh] xl:rounded-[500px] rounded-[10px] overflow-hidden my-8 mx-auto transition-all duration-300 xl:hover:rounded-[10px]">
//                 <iframe
//                     className="absolute top-0 left-0 w-full h-full"
//                     src="https://www.youtube.com/embed/1XY_tgcRH28"
//                     allowFullScreen
//                     title="YouTube video"
//                 ></iframe>
//             </div> */}
//             <div className='w-[80%] flex flex-col-reverse lg:flex-row-reverse m-8 lg:m-16 rounded-[20px] sm:p-4 items-center'
//                 style={{ "background": "linear-gradient(180deg, rgba(214, 227, 251, 1) 0%, rgba(214, 227, 251, 0) 100%)", boxShadow: '0px 20px 30px rgba(0,0,0, 0.25)' }}>
//                 <div className='w-full lg:w-[60%] flex flex-col justify-center items-start px-12 py-4 gap-4 xl:gap-8'>
//                     <h1 className='text-[36px] sm:text-[48px] font-semibold'>TECK BUILD</h1>
//                     <p>
//                         Teck Build is where theory meets practice, bridging the gap between classroom learning and real-world application. Our practical learning kits are organized to provide hands-on experience in technologies such as Robotics, 3D printing, IoT, and more Industry 4.0 technologies.
//                         With Teck Build, Teckys can create immersive learning environments that cultivate creativity, problem-solving skills, and a deep understanding of Industry 4.0 concepts among students.
//                     </p>
//                     <a
//                         href="#"
//                         className="px-6 py-2 bg-orange-500 text-white hover:bg-orange-600 transition rounded-[10px] my-4"
//                     >
//                         Coming Soon
//                         {/* <span className="pl-4" style={{ fontSize: '1.25em' }}>&#8594;</span> */}

//                     </a>

//                 </div>
//                 <div className='w-[90%] sm:w-[50%] lg:w-[40%] flex justify-center items-center'>
//                     <img src={img2} alt="img2" />
//                 </div>
//             </div>
//             {/* <div className="relative w-[80vw] h-[35vh] sm:h-[60vh] lg:h-[85vh] xl:rounded-[500px] rounded-[10px] overflow-hidden my-8 mx-auto transition-all duration-300 xl:hover:rounded-[10px]">
//                 <iframe
//                     className="absolute top-0 left-0 w-full h-full"
//                     src="https://www.youtube.com/embed/1XY_tgcRH28"
//                     frameBorder="0"
//                     allowFullScreen
//                     title="YouTube video"
//                 ></iframe>
//             </div> */}

//             <div className='w-[80%] flex flex-col-reverse lg:flex-row m-8 lg:m-16 rounded-[20px] sm:p-4 items-center'
//                 style={{ "background": "linear-gradient(180deg, rgba(214, 227, 251, 1) 0%, rgba(214, 227, 251, 0) 100%)", boxShadow: '0px 20px 30px rgba(0,0,0, 0.25)' }}>
//                 <div className='w-full lg:w-[60%] flex flex-col justify-center items-start px-12 py-4 gap-4 xl:gap-8'>
//                     <h1 className='text-[36px] sm:text-[48px] font-semibold'>TECK INNOVATE</h1>
//                     <p>
//                         Teck Innovate is where innovation takes center stage, empowering educators, and students to tackle real-world challenges through domain-based problem statements.
//                         This suite provides a platform for collaborative projects, enabling students to apply their knowledge and skills to solve complex problems in areas such as AI, IoT, renewable energy, and more.
//                         Teck Innovate fosters a culture of innovation, creativity, and entrepreneurship, preparing students to become future-ready leaders in the rapidly evolving technology landscape.
//                     </p>
//                     <a
//                         href="#"
//                         className="px-6 py-2 bg-orange-500 text-white hover:bg-orange-600 transition rounded-[10px] my-4"
//                     >
//                         Coming Soon
//                         {/* <span className="pl-4" style={{ fontSize: '1.25em' }}>&#8594;</span> */}

//                     </a>

//                 </div>
//                 <div className='w-[90%] sm:w-[50%] lg:w-[40%] flex justify-center items-center'>
//                     <img src={img3} alt="img3" />
//                 </div>
//             </div>

//             {/* <div className="relative w-[80vw] h-[35vh] sm:h-[60vh] lg:h-[85vh] xl:rounded-[500px] rounded-[10px] overflow-hidden my-8 mx-auto transition-all duration-300 xl:hover:rounded-[10px]">
//                 <iframe
//                     className="absolute top-0 left-0 w-full h-full"
//                     src="https://www.youtube.com/embed/1XY_tgcRH28"
//                     frameBorder="0"
//                     allowFullScreen
//                     title="YouTube video"
//                 ></iframe>
//             </div> */}

//             <div className='w-[80%] flex flex-col-reverse lg:flex-row-reverse m-8 lg:m-16 mb-24 rounded-[20px] sm:p-4 items-center'
//                 style={{ "background": "linear-gradient(180deg, rgba(214, 227, 251, 1) 0%, rgba(214, 227, 251, 0) 100%)", boxShadow: '0px 20px 30px rgba(0,0,0, 0.25)' }}>
//                 <div className='w-full lg:w-[60%] flex flex-col justify-center items-start px-12 py-4 gap-4 xl:gap-8'>
//                     <h1 className='text-[36px] sm:text-[48px] font-semibold'>TECK CONNECT</h1>
//                     <p>
//                         Teck Connect serves as a dynamic platform for collaboration between educational institutions and industry partners.
//                         Through Teck Connect, educators and students gain access to a wealth of industry insights, guest lectures, mentorship programs, and internship opportunities for students.
//                         By facilitating meaningful interactions between academia and industry, Teck Connect empowers students to gain valuable industry-relevant skills and insights, setting them on the path to successful careers in the technology sector.
//                     </p>
//                     <a
//                         href="#"
//                         className="px-6 py-2 bg-orange-500 text-white hover:bg-orange-600 transition rounded-[10px] my-4"
//                     >
//                         Coming Soon
//                         {/* <span className="pl-4" style={{ fontSize: '1.25em' }}>&#8594;</span> */}

//                     </a>

//                 </div>
//                 <div className='w-[90%] sm:w-[50%] lg:w-[40%] flex justify-center items-center'>
//                     <img src={img4} alt="img4" />
//                 </div>
//             </div>

//             {/* <div className="relative w-[80vw] h-[35vh] sm:h-[60vh] lg:h-[85vh] xl:rounded-[500px] rounded-[10px] overflow-hidden my-8 mx-auto transition-all duration-300 xl:hover:rounded-[10px]">
//                 <iframe
//                     className="absolute top-0 left-0 w-full h-full"
//                     src="https://www.youtube.com/embed/1XY_tgcRH28"
//                     frameBorder="0"
//                     allowFullScreen
//                     title="YouTube video"
//                 ></iframe>
//             </div> */}

//             <Footer />
//         </div>
//     )
// }

// export default Teckyboti


import React from 'react'
import Footer from '../Components/Footer'
import img1 from '../data/teckyboti/1.png'
import img2 from '../data/teckyboti/2.png'
import img3 from '../data/teckyboti/3.png'
import img4 from '../data/teckyboti/4.png'

const suites = [
  {
    title: "TECK LEARN",
    desc: "Interactive modules and a fun learning journey for Industry 4.0 topics.",
    img: img1,
    badge: "🎓"
  },
  {
    title: "TECK BUILD",
    desc: "Hands-on kits for robotics, 3D printing, and creative tech projects.",
    img: img2,
    badge: "🛠️"
  },
  {
    title: "TECK INNOVATE",
    desc: "Collaborative challenges in AI, IoT, and renewable energy.",
    img: img3,
    badge: "💡"
  },
  {
    title: "TECK CONNECT",
    desc: "Meet mentors, join events, and unlock real-world opportunities.",
    img: img4,
    badge: "🤝"
  }
];

const Teckyboti = () => (
  <div className="relative min-h-screen bg-white pt-[70px] flex flex-col items-center overflow-hidden">
    {/* Decorative background shapes */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200 rounded-full opacity-30 -z-10 blur-2xl" style={{top: '-4rem', left: '-4rem'}} />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-30 -z-10 blur-2xl" style={{bottom: '-4rem', right: '-4rem'}} />

    <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-black drop-shadow-lg">
       Explore
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-[95%] max-w-7xl">
      {suites.map((suite) => (
        <div
          key={suite.title}
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl flex flex-col items-center p-8 relative hover:scale-105 hover:shadow-3xl transition-transform duration-300"
        >
          <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-5xl">{suite.badge}</span>
          <img src={suite.img} alt={suite.title} className="w-32 h-32 object-contain rounded-full border-4 border-white mb-4 shadow-md bg-white" />
          <h2 className="text-2xl font-bold mb-2 text-black">{suite.title}</h2>
          <p className="text-lg text-black mb-6 text-center">{suite.desc}</p>
          <button
            className="px-6 py-2 rounded-full bg-orange-400 text-white font-semibold shadow-md hover:bg-orange-500 transition"
            disabled={suite.title !== "TECK LEARN"}
            onClick={() => suite.title === "TECK LEARN" && window.open("https://lms.teckybot.com/", "_blank")}
          >
            {suite.title === "TECK LEARN" ? "Explore Now 🚀" : "Coming Soon"}
          </button>
        </div>
      ))}
    </div>
   <br />
    <br />
    <Footer />
     </div>
  
);

export default Teckyboti;
