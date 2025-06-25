import React from 'react';
import person1 from '../data/home/testimonials/1.jpg';
import person2 from '../data/home/testimonials/2.jpg';
import person3 from '../data/home/testimonials/3.jpg';

const testimonials = [
  {
    name: "Raja Murugadoss Jeyaraju",
    position: "Director - NSRIT (A)",
    text: "Teckybot's platform offers an array of engaging projects and programs that introduce students to industry 4.0 technologies. It's been instrumental in enhancing our curriculum and preparing students for future careers.",
    image: person1,
  },
  {
    name: "Dr. D. Sreedevi",
    position: "H.O.D - GVP College of Degree",
    text: "Teckybot's projects go beyond theoretical learning, providing hands-on experience with industry 4.0 technologies. It's a valuable resource for educators looking to inspire the next generation of innovators.",
    image: person2,
  },
  {
    name: "K. Jagadeshwar Reddy",
    position: "M.D - Elegant Embedded Solutions Pvt Ltd",
    text: "Teckybot's platform has revolutionized how we approach STEM education. With its industry 4.0 programs, many members have gained practical skills and insights that will serve them well in their future endeavors. Highly recommended for budding tech enthusiasts.",
    image: person3,
  }
];

const Testimonials = () => {
  return (
    <div className="relative w-full flex overflow-hidden py-10">
      <div className="flex  animate-scroll-testimonial rounded-2xl">
        {[...testimonials,...testimonials].map((testimonial, index) => (
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
        {[...testimonials,...testimonials].map((testimonial, index) => (
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

export default Testimonials;
