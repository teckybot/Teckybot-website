import React, { useState, useEffect } from 'react';
import img1 from '../data/home/seminar_teckybot.jpg';
import img2 from '../data/home/school_projects_teckybot.jpg';
import img3 from '../data/home/NSRIT_Lab_teckybot.jpg';
import img4 from '../data/home/Government_schools_ATL_teckybot.jpg';

const ImageCarousel = ({ interval = 5000 }) => {
  const images = [
    { src: img1, heading: 'NO.1 TECHNICAL TRAINING PROVIDER IN TELUGU STATES', line: "Leading the Tech Revolution: Teckybot - Pioneering Technical Training Across Telugu States.", link: '/Services' },
    { src: img2, heading: 'LEADING STEM EDUCATION PROVIDER IN ANDHRA PRADESH', line: "Discover the Future with Teckybot: Leading the Way in STEM Education Innovation.", link: '/Services/stemlabs' },
    { src: img3, heading: 'INDUSTRY INSTITUTION COLLOBRATION', line: "Catalyzing Change: Teckybot Lab - Your Gateway to Industry-Driven Innovation.", link: '/Services/TechIic' },
    { src: img4, heading: 'INDIA’S BIGGEST TECHNICAL LEAGUE BHARATH TECK LEAGUE', line: "Innovate, Compete, Conquer: Bharath Teck League - India's Leading Technical Arena.", link: '/events' },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(slideInterval);
  }, [currentIndex, interval]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative overflow-hidden rounded-t-[30px] shadow-lg w-full h-[350px] sm:h-[500px] xl:h-[600px]">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${image.src})` }}
            className="w-full h-[350px] sm:h-[500px] xl:h-[600px] bg-cover bg-center flex-shrink-0 relative"
          >
            <div className="absolute inset-0"
                style={{"background": "linear-gradient(180deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.6) 74%, rgba(0, 0, 0, 1) 92%)"}}>

                </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:gap-6 xl:gap-12">
              <h2 className="text-2xl sm:text-3xl xl:text-5xl font-semibold mb-2 w-[80%] lg:w-[60%]">{image.heading}</h2>
              <p className="mb-4 text-base sm:text-lg">{image.line}</p>
              <a
                href={image.link}
                className="px-4 py-2 bg-orange-500 text-white hover:bg-orange-600 transition rounded-[10px]"
              >
                Explore More
              </a>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-gray-400 rounded-full shadow-md sm:hover:bg-gray-300 sm:w-12 sm:h-12 text-gray-100
            opacity-30 sm:opacity-70"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-gray-400 rounded-full shadow-md sm:hover:bg-gray-300 sm:w-12 sm:h-12 text-gray-100
            opacity-30 sm:opacity-70"
      >
        &#10095;
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
