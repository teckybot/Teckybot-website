import React, { useState } from 'react';
import img from '../data/services/Group30.png'
import img1 from '../data/career/11.png'
import Footer from '../Components/Footer'
import PositionCard from '../Components/PositionCard'
import FaqQuestion from '../Components/FaqQuestion'

const Career = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      number: "01",
      question: "What positions are currently open at Teckybot?",
      answer: "Currently we are hiring for some openings as required, Please check the 'current openings' in careers page."
    },
    {
      number: "02",
      question: "How do I apply for a job at Teckybot?",
      answer: "Visit our Careers page and browse through 'current job openings'. Click on the position you're interested in and follow the application instructions provided."
    },
    {
      number: "03",
      question: "What should I include in my application?",
      answer: "Submit a resume and covering letter highlighting your relevant experience, skills, and qualifications. Ensure your application aligns with the specific job requirements."
    },
    {
      number: "04",
      question: "Can I submit a general application if there are no current openings in my field?",
      answer: "While we appreciate your interest, we encourage applicants to apply for specific openings. This allows us to match your skills with our current needs. You can go to contact us page and fill your details to get in touch with our recruitment team / drop a mail to careers@teckybot.com."
    },
    {
      number: "05",
      question: "What is the hiring process at Teckybot?",
      answer: "Our hiring process typically involves application review, initial screening, interviews, and possibly assessments. The exact process may vary by position."
    },
    {
      number: "06",
      question: "How can I check the status of my application?",
      answer: "You will receive confirmation of your application via email. For updates on the status, regularly follow our Careers page."
    },
    {
      number: "07",
      question: "Does Teckybot offer internships or entry-level positions?",
      answer: "Yes, we have internship programs and entry-level positions. Check our Careers page for specific opportunities."
    },
    {
      number: "08",
      question: "What benefits does Teckybot offer to employees?",
      answer: "Our comprehensive benefits package includes All Statutory benefits including PF, ESI / Medical, professional development opportunities, and more. Complete details are provided during the interview process."
    },
    {
      number: "09",
      question: "Can you tell me more about the company culture?",
      answer: "At Teckybot, we foster a positive and Radiant atmosphere where innovation not only survives but flourishes, refining your skills for triumphant success."
    },
    {
      number: "10",
      question: "What is the timeline for making a hiring decision?",
      answer: "Probably, we will close any position between 1 month to 45 days."
    },
    {
      number: "11",
      question: "Are there any specific skills or experiences you are particularly looking for in candidates?",
      answer: "Yes, Any candidate should be fluent with minimum of 2 languages (English & Telugu), with basic knowledge about respective position including with analytical skills."
    },
    {
      number: "12",
      question: "Is there room for negotiation in terms of salary or other benefits?",
      answer: "Yes, we are open and transparent for salary negotiations and other benefits subject to the company policies."
    },
    {
      number: "13",
      question: "Is there any flexibility in terms of remote work or flexible hours?",
      answer: "Certain roles offer remote work & flexible hours options as per the requirement, with clear indications in the job listings regarding the preferred work arrangement."
    },
    {
      number: "14",
      question: "How does the company support professional development and learning opportunities?",
      answer: "At Teckybot, we promote equal professional development opportunities through collaborative systems, fostering a culture of continuous growth and innovation."
    },
    {
      number: "15",
      question: "How can I contact the HR department?",
      answer: "For HR-related inquiries, please write a mail to Careers@teckybot.com. or visit our Contact Us page for general inquiries."
    }
  ];

  return (
    <div className='relative flex w-full flex-col items-center'>
      <div className='w-[90%] lg:w-[85%] sm:w-[80%] my-16 rounded-[20px] pb-4 text-center'
        style={{ background: "linear-gradient(180deg, rgba(207, 227, 255, 1) 2%, rgba(255, 255, 255, 1) 88%)", boxShadow: '0px 20px 30px rgba(0,0,0, 0.25)' }}>
        <div className="flex justify-center items-center">
          <div className='h-[500px] w-[90%] z-20 bg-contain flex flex-col items-center'
            style={{
              background: `url(${img})`,
              backgroundSize: 'cover',  // Ensures the entire image is contained within the div
              backgroundPosition: 'center', // Keeps the image centered
              backgroundRepeat: 'no-repeat'
            }}>
            <h1 className='text-3xl sm:text-[25px] lg:text-4xl xl:text-7xl font-bold mb-6 sm:mb-8 lg:mb-8 xl:mb-8 leading-tight'>
              Let's Grow <br />
              <span className='text-[#FF721F]'>Together</span>
            </h1>
            <p className='px-4 sm:px-8 py-4 text-center text-sm sm:text-base'>
              Ready to shape the future of tech and education?
              Join Teckybot — where passion meets innovation in Industry 4.0 projects and transformative learning.
              Grow your skills, collaborate with experts, and make a real impact.
            
            </p>
            <img src={img1} alt='img1' className='w-[300px] sm:w-[400px] lg:w-[450px] lg:h-[400px]' />
          </div>
        </div>
      </div>

      <h1 className='text-center text-[48px] font-semibold'>Positions</h1>
      <div className='flex flex-col items-center space-y-4 sm:flex-row sm:flex-wrap sm:gap-4 lg:gap-8 sm:space-y-0 justify-around w-[90%] mb-12'>
        <PositionCard
          date="Jan 12, 2025"
          title="Technical Trainer"
          format="Office (Vizag)"
          experience="0 - 4 years"
          positions="2"
        />
        <PositionCard
          date="Jan 12, 2025"
          title="Technical Developer"
          format="Office (Vizag)"
          experience="0 - 4 years"
          positions="2"
        />
        <PositionCard
          date="Jan 12, 2025"
          title="Business Development Associate"
          format="Office (Vizag)"
          experience="0 - 4 years"
          positions="2"
        />
        <PositionCard
          date="Jan 12, 2025"
          title="Graphic Designer"
          format="Office (Vizag)"
          experience="1 - 4 years"
          positions="2"
        />
        <PositionCard
          date="Jan 12, 2025"
          title="Video / VFX Designer"
          format="Office (Vizag)"
          experience="1 - 4 years"
          positions="2"
        />
        <PositionCard
          date="Jan 12, 2025"
          title="UI/UX Designer"
          format="Office (Vizag)"
          experience="1 - 4 years"
          positions="2"
        />
        <PositionCard
          date="Jan 12, 2025"
          title="Public Relations Manager"
          format="Office (Vizag)"
          experience="2 - 6 years"
          positions="2"
        />
        <PositionCard
          date="Jan 12, 2025"
          title="Research & Development (R&D) Lead"
          format="Office (Vizag)"
          experience="3 - 6 years"
          positions="2"
        />
      </div>

      {/* FAQ Section */}
      <div className="w-full px-4 sm:px-6 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* FAQ Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Recruitment <span className="text-[#FF721F]">FAQ's</span>
            </h1>
            <div className="w-20 h-1 bg-[#FF721F] mx-auto"></div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-2 w-full">
            {faqData.map((item, index) => (
              <div key={index} className="group">
                <div 
                  className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="text-2xl font-bold text-[#FF721F]">{item.number}</div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                      {item.question}
                    </h3>
                    {activeIndex === index && (
                      <p className="text-gray-600 text-sm sm:text-base mt-2">
                        {item.answer}
                      </p>
                    )}
                  </div>
                  <div className={`text-gray-400 transition-transform duration-200 ${activeIndex === index ? 'rotate-180 text-[#FF721F]' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {index < faqData.length - 1 && (
                  <div className="h-px bg-gray-200 w-full mx-6"></div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <a href="/ContactUs"><button className="bg-[#FF721F] hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-colors duration-200">
              Contact Our Team
            </button></a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Career