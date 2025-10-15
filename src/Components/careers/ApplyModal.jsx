import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { applyJob } from "../../api/api";
import { socket } from "../../api/socket";

const ApplyModal = ({ jobId, title, open, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("notes", formData.notes);
      data.append("resume", formData.resume);

      const response = await applyJob(jobId, data);

      // Notify user
      setSubmitted(true);

      // Emit via socket (optional, only if you want local update)
      socket.emit("jobApplicationCreated", response.application);

    } catch (error) {
      console.error(error);
      alert("Failed to submit application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", phone: "", notes: "", resume: null });
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            {submitted ? (
              <div className="text-center">
                <h3 className="text-lg font-bold mb-2 text-green-600">
                  Application Submitted!
                </h3>
                <p className="text-gray-700">
                  Your application for <strong>{title}</strong> has been received. If your experience and skills fit the role,
                   we will reach out to you within 24–48 hours.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <h3 className="text-lg font-bold mb-4 text-[#FF721F]">
                  Apply for {title}
                </h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 focus:outline-[#FF721F]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 focus:outline-[#FF721F]"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 focus:outline-[#FF721F]"
                />
                <textarea
                  name="notes"
                  placeholder="Notes / Description"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 focus:outline-[#FF721F]"
                />
                <input
                  type="file"
                  name="resume"
                  accept=".pdf"
                  required
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#FF721F] text-white py-2 rounded-md hover:bg-orange-600 transition"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-2 border border-gray-300 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  Cancel
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ApplyModal;
