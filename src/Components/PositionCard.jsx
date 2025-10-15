import React, { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUserTie, FaBriefcase } from "react-icons/fa";
import ApplyModal from "./careers/ApplyModal";
import DetailsModal from "./careers/DetailsModal";

const PositionCard = ({ title, date, format, experience, positions, pdfUrl, jobId }) => {
  const [showApply, setShowApply] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

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
            onClick={() => setShowApply(true)}
          >
            Apply Now
          </button>
          <button
            className="flex-1 py-2 border border-orange-500 text-orange-500 font-medium rounded-md hover:bg-orange-500 hover:text-white transition-colors"
            onClick={() => {
              setSelectedJob({ title, pdfUrl }); 
              setShowDetails(true);
            }}
          >
            Details
          </button>
        </div>
      </div>

      <ApplyModal open={showApply} onClose={() => setShowApply(false)} jobId={jobId} title={title} />
      <DetailsModal show={showDetails} onClose={() => setShowDetails(false)} title={title} pdfUrl={pdfUrl} job={selectedJob} />
    </>
  );
};

export default PositionCard;
