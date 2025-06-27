import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaUserTie, FaBriefcase } from 'react-icons/fa';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';

const PositionCard = ({ title, date, format, experience, positions }) => {
  const [showApplyPopup, setShowApplyPopup] = useState(false);
  const [showDetails, setShowDetails] = useState(false);


  return (
    <>
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 w-[300px] sm:w-[340px] lg:w-[360px] flex flex-col justify-between h-[320px]">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">{title}</h2>

          <div className="text-base text-gray-600 flex items-center gap-2 mb-2">
            <FaMapMarkerAlt className="text-blue-500" />
            <span>{format}</span>
          </div>

          <div className="text-base text-gray-600 flex items-center gap-2 mb-2">
            <FaBriefcase className="text-green-500" />
            <span>Experience: {experience}</span>
          </div>

          <div className="text-base text-gray-600 flex items-center gap-2 mb-2">
            <FaUserTie className="text-purple-500" />
            <span>Open Positions: {positions}</span>
          </div>

          <div className="text-base text-gray-600 flex items-center gap-2 mb-2">
            <FaCalendarAlt className="text-orange-500" />
            <span>Posted on: {date}</span>
          </div>
          
        </div>

        <div className="mt-6 flex gap-3">
          <button
            className="flex-1 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-700 transition-colors"
            onClick={() => setShowApplyPopup(true)}
          >
            Apply Now
          </button>
          <button
            className="flex-1 py-2 border border-orange-500 text-orange-500 font-medium rounded-md hover:bg-orange-500 hover:text-white transition-colors"
            onClick={() => setShowDetails (true)}
          >
            Details
          </button>
        </div>
      </div>

      {/* Apply Now Popup */}
      <AnimatePresence>
        {showApplyPopup && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowApplyPopup(false)}
          >
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-bold mb-2 text-blue-600">No Openings Currently!</h3>
              <p className="text-gray-700">
                Thank you for your interest in the <strong>{title}</strong> role. Currently, there are no active openings for this position. Please check back soon or follow us for future updates!
              </p>
              <button
                onClick={() => setShowApplyPopup(false)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Details Modal */}
      <Dialog open={showDetails} onClose={() => setShowDetails(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center" onClick={() => setShowDetails(false)}>
          <Dialog.Panel
            as={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Dialog.Title className="text-2xl font-bold mb-4 text-[#FF721F]">{title} - Details</Dialog.Title>
            <p className="text-gray-700 mb-4">
              At Teckybot, we’re always on the lookout for talented professionals. This <strong>{title}</strong> role may not be hiring now, but we value your interest. Feel free to connect or revisit for future updates!
            </p>
            <button
              onClick={() => setShowDetails(false)}
              className="mt-4 border border-[#FF721F] text-[#FF721F] px-4 py-2 rounded-lg hover:bg-[#fff5f0]"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default PositionCard;
  