import React from 'react'
import Footer from '../Components/Footer'
import ContactForm from '../Components/ContactForm'

const ContactUs = () => {
    return (
        <div className='flex flex-col items-center w-full'>
            <div className='my-20 w-[90%] p-4 pb-12 sm:p-12 rounded-[20px] flex flex-col lg:flex-row'
                style={{ background: "linear-gradient(180deg, rgba(207, 227, 255, 1) 2%, rgba(255, 255, 255, 1) 88%)", boxShadow: '0px 20px 30px rgba(0,0,0, 0.25)' }}>
                <div className='lg:w-[60%] flex flex-col p-6 items-start pl-12 lg:pl-24'>
                    <h1 className='text-[48px] sm:text-[64px] font-semibold'>
                        Contact <span className='text-[#FF721F]'>Us</span>
                    </h1>
                    <p className='py-6'>
                        Email, Call, or complete the form to learn how TeckyBot can solve your messaging problem
                    </p>

                    <div className='my-6'>
                        <p className='text-[#FF721F]'>info@teckybot.com<br />
                            8886122885</p>
                    </div>
                    <p className='font-semibold underline text-lg'>
                        Customer Support
                    </p>
                    <p class="pt-6">
                    <span class="font-semibold text-base text-gray-800 pr-2">Working hours:</span>
                    <span class="text-gray-700">Monday to Saturday, 10:00 AM – 6:00 PM (IST)</span>
                    </p>
                    <div className='flex sm:flex-row flex-col justify-between items-start my-12'>
                        <div className='flex flex-col text-gray-500 sm:w-[45%]'>
                            <p className='font-semibold mb-4'>Customer Support</p>
                            <p>Our support team is available around the clock to address any concerns or queries you may have.</p>
                        </div>
                        <div className='flex flex-col text-gray-500 sm:w-[45%] mt-8 sm:mt-0'>
                            <p className='font-semibold mb-4'>Feedback & Suggestions</p>
                            <p>We value your feedback and are continuously working to improve TeckyBot. Your input is crucial in shaping the future of TeckyBot.</p>
                        </div>
                    </div>

                </div>
                <div className='lg:w-[40%]'>
                    <ContactForm />
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default ContactUs