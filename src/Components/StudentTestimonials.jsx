import React from 'react';
import Intern_png from '../data/Internship/StudentTestimonials/Intern_png.png'
import student1 from '../data/Internship/StudentTestimonials/Student1_testimonial_teckybot.png'
import student2 from '../data/Internship/StudentTestimonials/Student2_testimonial_teckybot.png'
import student3 from '../data/Internship/StudentTestimonials/Student3_testimonial_teckybot.jpg'

const sdtestimonials = [
  {
    name: "S. KAVAYA",
    position: "IOT",
    text: "I completed an Internship on IoT with Teckybot, and the learning experience was outstanding. It was an incredibly inspiring journey, and I'm looking forward to attending more courses and expanding my knowledge with Teckybot.",
    image: student1,
  },
  {
    name: "B. YUGANDHAR",
    position: "Embedded Systems",
    text: "My internship at Teckybot on Embedded Systems was an outstanding experience. The program offered a perfect balance of theory and practical application, allowing me to develop a deep understanding and valuable skills.",
    image: student2,
  },
  {
    name: "G. GAYATHRI",
    position: "Web Development",
    text: "The Teckybot internship was a transformative experience that deepened my skills in real-world tech projects. I had the opportunity to collaborate with an innovative team and gain hands-on exposure in web development and design.",
    image: student3,
  }
];

const StudentTestimonials = () => {
  return (
    <div className="relative w-full flex overflow-hidden py-10 my-12">
      <div className="flex  animate-scroll-testimonial rounded-2xl">
        {[...sdtestimonials,...sdtestimonials].map((testimonial, index) => (
          <div key={index} className="w-[300px] sm:w-[400px] md:w-[500px] flex-shrink-0 flex flex-col bg-white rounded-lg shadow-lg p-6 mx-8">
            <div className="flex items-center mb-4">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4"/>
              <div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </div>
            <p className="text-gray-600 text-justify py-2 px-4">{testimonial.text}</p>
          </div>
        ))}
      </div>
      <div className="flex  animate-scroll-testimonial rounded-2xl" aria-hidden="true">
        {[...sdtestimonials,...sdtestimonials].map((testimonial, index) => (
          <div key={index} className="w-[300px] sm:w-[400px] md:w-[500px] flex-shrink-0 flex flex-col bg-white rounded-lg shadow-lg p-6 mx-8">
            <div className="flex items-center mb-4">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4"/>
              <div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </div>
            <p className="text-gray-600 text-justify py-2 px-4">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentTestimonials;
