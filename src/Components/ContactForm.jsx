import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [buttonState, setButtonState] = useState('idle'); // 'idle' | 'submitting' | 'submitted'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // When submit clicked
    setButtonState('submitting');
    toast.info("Hang tight! Your message is on its way...", { autoClose: 3000 });

    try {
      const res = await fetch('https://teckybot-website-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Thank you! We'll get back to you within 24–48 hours.");
        setFormData({ name: '', email: '', phone: '', message: '' });
        setButtonState('submitted');
      } else {
        toast.error("Oops! Something went wrong. Please try again.");
        setButtonState('idle');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Network error. Please try again later.");
      setButtonState('idle');
    }
  };

  // Button styles based on state
  const getButtonStyles = () => {
    switch (buttonState) {
      case 'submitting':
        return 'bg-blue-500 cursor-wait hover:bg-blue-600';
      case 'submitted':
        return 'bg-green-500 cursor-not-allowed';
      default:
        return 'bg-orange-500 hover:bg-orange-600';
    }
  };

  // Button text based on state
  const getButtonText = () => {
    switch (buttonState) {
      case 'submitting':
        return 'Submitting...';
      case 'submitted':
        return 'Submitted';
      default:
        return 'Send message';
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full sm:max-w-md bg-white shadow-lg rounded-[20px] p-8 border border-orange-500">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent text-center">Get in Touch</h2>
        <p className="text-center text-gray-500 mb-4">We'd love to hear from you</p>

        <form onSubmit={handleSubmit}>
          {/* form fields (same as before) */}
          <div className="mb-3 relative">
            <label className="block text-gray-700 text-base" htmlFor="name">Name</label>
            <input
              type="text" id="name" name="name" required
              className="w-full p-2.5 border border-gray-300 rounded-lg mt-1 text-base"
              placeholder="Enter full name"
              value={formData.name} onChange={handleChange}
              disabled={buttonState === 'submitted'}
            />
            <div className="absolute top-1/2 right-3 transform -translate-y pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>

          <div className="mb-3 relative">
            <label className="block text-gray-700 text-base" htmlFor="email">Email</label>
            <input
              type="email" id="email" name="email" required
              className="w-full p-2.5 border border-gray-300 rounded-lg mt-1 text-base"
              placeholder="Your email"
              value={formData.email} onChange={handleChange}
              disabled={buttonState === 'submitted'}
            />
            <div className="absolute top-1/2 right-3 transform -translate-y pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          <div className="mb-3 relative">
            <label className="block text-gray-700 text-base" htmlFor="phone">Phone no</label>
            <input
              type="tel" id="phone" name="phone" required
              className="w-full p-2.5 border border-gray-300 rounded-lg mt-1 text-base"
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone} onChange={handleChange}
              disabled={buttonState === 'submitted'}
            />
            <div className="absolute top-1/2 right-3 transform -translate-y pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 text-base" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full p-2.5 border border-gray-300 rounded-lg mt-1 text-base"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
              disabled={buttonState === 'submitted'}
            />
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              disabled={buttonState !== 'idle'}
              className={`w-full py-2.5 rounded-[25px] text-base text-white transition duration-300 ${getButtonStyles()}`}
              style={{ boxShadow: '0px 10px 20px rgba(0,0,0, 0.25)' }}
            >
              {getButtonText()}
            </button>
          </div>
        </form>

        <ToastContainer position="top-center" autoClose={4000} />
      </div>
    </div>
  );
};

export default ContactForm;
