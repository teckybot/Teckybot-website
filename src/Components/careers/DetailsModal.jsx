import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const DetailsModal = ({ show, onClose, job }) => {
  if (!job) return null;

  const pdfUrl = `${import.meta.env.VITE_BACKEND_URL}${job.pdfUrl}`;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[80vh] p-6 flex flex-col"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Inner Box */}
            <div className="flex-1 bg-white rounded-xl shadow-inner overflow-hidden flex flex-col">
              {/* Header */}
              <motion.div
                className="flex justify-between items-center p-6 border-b border-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.05, duration: 0.2 }}
              >
                <h2 className="text-2xl font-semibold text-[#FF721F]">
                  {job.title || "Job Details"} Job Decription
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-800 text-2xl font-bold"
                >
                  ×
                </button>
              </motion.div>

              {/* PDF Viewer */}
              {job.pdfUrl ? (
                <motion.div
                  className="flex-1 overflow-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <iframe
                    src={pdfUrl}
                    title="Job Description PDF"
                    className="w-full h-full border-none rounded-lg"
                  />
                </motion.div>
              ) : (
                <motion.div
                  className="flex-1 flex items-center justify-center text-gray-500 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  No job description available for this role.
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DetailsModal;
