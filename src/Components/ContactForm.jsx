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
      const res = await fetch('http://localhost:5000/api/contact', {
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
        return 'Submit';
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full sm:max-w-md bg-white shadow-lg rounded-[20px] p-8 border border-orange-500">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-3">Get in Touch</h2>
        <p className="text-center text-gray-500 mb-4">You can reach us any time.</p>

        <form onSubmit={handleSubmit}>
          {/* form fields (same as before) */}
          <div className="mb-3">
            <label className="block text-gray-700 text-base" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2.5 border border-gray-300 rounded-lg mt-1 text-base"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
              disabled={buttonState === 'submitted'}
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-base" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2.5 border border-gray-300 rounded-lg mt-1 text-base"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              disabled={buttonState === 'submitted'}
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-base" htmlFor="phone">Phone no</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full p-2.5 border border-gray-300 rounded-lg mt-1 text-base"
              placeholder="Your number"
              value={formData.phone}
              onChange={handleChange}
              disabled={buttonState === 'submitted'}
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-base" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full p-2.5 border border-gray-300 rounded-lg mt-1 text-base"
              placeholder="Type here."
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
