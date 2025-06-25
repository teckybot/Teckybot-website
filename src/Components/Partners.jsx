import React from 'react';
import c1 from '../data/home/college/1.jpg';
import c2 from '../data/home/college/2.jpg';
import c3 from '../data/home/college/3.jpg';
import c4 from '../data/home/college/4.jpg';
import c5 from '../data/home/college/5.jpg';
import c6 from '../data/home/college/6.jpg';
import c7 from '../data/home/college/7.jpg';
import c8 from '../data/home/college/8.jpg';
import c9 from '../data/home/college/9.jpg';
import c10 from '../data/home/college/10.jpg';
import c11 from '../data/home/college/11.jpg';
import c12 from '../data/home/college/12.jpg';
import c13 from '../data/home/college/13.jpg';
import c14 from '../data/home/college/14.jpg';
import c15 from '../data/home/college/15.jpg';
import s1 from '../data/home/school/1.jpg';
import s2 from '../data/home/school/2.jpg';
import s3 from '../data/home/school/3.jpg';
import s4 from '../data/home/school/4.jpg';
import s5 from '../data/home/school/5.jpg';
import s6 from '../data/home/school/6.jpg';
import s7 from '../data/home/school/7.jpg';
import s8 from '../data/home/school/8.jpg';
import s9 from '../data/home/school/9.jpg';
import s10 from '../data/home/school/10.jpg';
import s11 from '../data/home/school/11.jpg';
import s12 from '../data/home/school/12.jpg';
import s13 from '../data/home/school/13.jpg';
import s14 from '../data/home/school/14.jpg';
import s15 from '../data/home/school/15.jpg';
import s16 from '../data/home/school/16.jpg';
import s17 from '../data/home/school/17.jpg';
import s18 from '../data/home/school/18.jpg';
import s19 from '../data/home/school/19.jpg';
import s20 from '../data/home/school/20.jpg';
import s21 from '../data/home/school/21.jpg';
import s22 from '../data/home/school/22.jpg';

const Partners = () => {
    const college = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15];
    const school = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22];
    const text = "Institutions That Trust Us"

    return (
        <div className="relative flex flex-col items-center justify-center w-full overflow-hidden py-16">
            {/* College Logos Row */}
            <h1 className='text-[32px] text-center sm:text-[48px] lg:text-[48px] sm:tracking-widest text-black font-semibold'>
                    {text.split('').map((letter, index) => (
                        <span key={index}>{letter}</span>
                    ))}
            </h1>
            <div className="flex items-center justify-start h-[200px] sm:h-[250px] mt-4 overflow-hidden">
                <div className="flex animate-scroll-college">
                    {[...college, ...college].map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`college-img-${index}`}
                            className="w-[150px] sm:w-[180px] h-[150px] sm:h-[180px] max-w-none mx-8 sm:mx-16 xl:mx-20"
                        />
                    ))}
                </div>
                <div className="flex animate-scroll-college" aria-hidden="true">
                    {[...college, ...college].map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`college-img-${index}`}
                            className="w-[150px] sm:w-[180px] h-[150px] sm:h-[180px] max-w-none mx-8 sm:mx-16 xl:mx-20"
                        />
                    ))}
                </div>
            </div>

            {/* School Logos Row */}
            <div className="flex items-center justify-start h-[200px] sm:h-[250px] mt-4 overflow-hidden">
                <div className="flex animate-scroll-school">
                    {[...school, ...school].map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`school-img-${index}`}
                            className="w-[150px] sm:w-[180px] h-[150px] sm:h-[180px] max-w-none mx-8 sm:mx-16 xl:mx-20"
                        />
                    ))}
                </div>
                <div className="flex animate-scroll-school" aria-hidden="true">
                    {[...school, ...school].map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`school-img-${index}`}
                            className="w-[150px] sm:w-[180px] h-[150px] sm:h-[180px] max-w-none mx-8 sm:mx-16 xl:mx-20"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;
