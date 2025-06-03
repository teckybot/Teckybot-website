import React, { useEffect, useRef, useState } from 'react';

const InfoNumbers = () => {
  const infoData = [
    { number: 300, symbol: '+', text: 'ATL Labs' },
    { number: 50, symbol: '+', text: 'College Clients' },
    { number: 400, symbol: '+', text: 'Workshops' },
    { number: 25000, symbol: '+', text: 'Students Trained' },
    { number: 8, symbol: '', text: 'Technologies' },
    { number: 6, symbol: '+', text: 'Locations' },
    { number: 30, symbol: '+', text: 'Team' },
    { number: 10, symbol: '+', text: 'Experience Years' },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);
  const text = "Numbers That Define Us"
  return (
    <div ref={containerRef} className="flex flex-col items-center container mx-auto  p-5">
      <h1 className='text-[32px] text-center sm:text-[54px] sm:tracking-widest text-black font-semibold my-12'>
        {text.split('').map((letter, index) => (
          <span key={index} >{letter}</span>
        ))}
      </h1>
      <div className="flex flex-wrap items-center justify-center mb-12">
        {infoData.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-5 lg:py-12 text-center">
            <AnimatedNumber targetNumber={item.number} symbol={item.symbol} isVisible={isVisible} />
            <div className="mt-2 text-xl sm:text-2xl text-[#FF721F] font-semibold">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AnimatedNumber = ({ targetNumber, symbol, isVisible }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 1000; // 2 seconds
      const increment = targetNumber / (duration / 10); // update every 10ms

      const counter = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCurrentNumber(targetNumber);
          setIsComplete(true);
          clearInterval(counter);
        } else {
          setCurrentNumber(Math.ceil(start));
        }
      }, 10);

      return () => clearInterval(counter);
    }
  }, [isVisible, targetNumber]);

  return (
    <div className="text-5xl sm:text-[48px] font-semibold text-gray-900">
      {currentNumber}
      {isComplete && symbol}
    </div>
  );
};

export default InfoNumbers;
