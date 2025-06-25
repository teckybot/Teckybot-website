import React from 'react';
import Intern_png from '../data/Internship/StudentTestimonials/Intern_png.png'

const sdtestimonials = [
  {
    name: "Intern Name",
    position: "Intern role",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit.",
    image: Intern_png,
  },
  {
    name: "Intern Name",
    position: "Intern role",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit.",
    image: Intern_png,
  },
  {
    name: "Intern Name",
    position: "Intern role",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit.",
    image: Intern_png,
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
