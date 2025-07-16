import React, { useState } from 'react';

const InternshipEnquiryForm = () => {
  const initialFormState = {
    fullName: '',
    contactNumber: '',
    email: '',
    collegeName: '',
    stream: 'CSE - Computer Science and Engineering',
    otherStream: '',
    currentSemester: '',
    collegeAddress: '',
    collegeState: '',
    internshipType: '',
    preferredTechnology: 'Artificial Intelligence',
    participationType: 'Individual',
    internshipMode: '',
    preferredDuration: '',
    startDate: ''
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  const handleClear = () => {
    setFormData(initialFormState);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">Internship Enquiry Form</h2>
          <p className="text-sm text-gray-500 mt-1">
            Fill out the form below to enquire about internship opportunities
          </p>
          <div className="mt-6 border-t border-gray-200" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name (Point of contact person) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm sm:text-sm"
            />
          </div>

          {/* Contact and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email ID <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm sm:text-sm"
              />
            </div>
          </div>

          {/* College Name */}
          <div>
            <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name of the College <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="collegeName"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm sm:text-sm"
            />
          </div>

          {/* Stream and Semester */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="stream" className="block text-sm font-medium text-gray-700 mb-1">
                Stream <span className="text-red-500">*</span>
              </label>
              <select
                id="stream"
                name="stream"
                value={formData.stream}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm"
              >
                <option value="CSE - Computer Science and Engineering">CSE - Computer Science and Engineering</option>
                <option value="ECE - Electronics and Communication Engineering">ECE - Electronics and Communication Engineering</option>
                <option value="EEE - Electrical and Electronics Engineering">EEE - Electrical and Electronics Engineering</option>
                <option value="Mech - Mechanical Engineering">Mech - Mechanical Engineering</option>
                <option value="Other">Other</option>
              </select>
              {formData.stream === 'Other' && (
                <input
                  type="text"
                  name="otherStream"
                  placeholder="Please specify your stream"
                  value={formData.otherStream}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm sm:text-sm"
                />
              )}
            </div>

            <div>
              <label htmlFor="currentSemester" className="block text-sm font-medium text-gray-700 mb-1">
                Current Semester <span className="text-red-500">*</span>
              </label>
              <select
                id="currentSemester"
                name="currentSemester"
                value={formData.currentSemester}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm"
              >
                <option value="">Select semester</option>
                <option value="1-1">1-1</option>
                <option value="1-2">1-2</option>
                <option value="2-1">2-1</option>
                <option value="2-2">2-2</option>
                <option value="3-1">3-1</option>
                <option value="3-2">3-2</option>
                <option value="4-1">4-1</option>
                <option value="4-2">4-2</option>
              </select>
            </div>
          </div>

          {/* College Address */}
          <div>
            <label htmlFor="collegeAddress" className="block text-sm font-medium text-gray-700 mb-1">
              College Address (Area, Landmark, District, Pincode) <span className="text-red-500">*</span>
            </label>
            <textarea
              id="collegeAddress"
              name="collegeAddress"
              value={formData.collegeAddress}
              onChange={handleChange}
              required
              rows={3}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm"
            />
          </div>

          {/* College State */}
          <div>
            <label htmlFor="collegeState" className="block text-sm font-medium text-gray-700 mb-1">
              State of the College <span className="text-red-500">*</span>
            </label>
            <select
              id="collegeState"
              name="collegeState"
              value={formData.collegeState}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm"
            >
              <option value="">Select state</option>
              <option value="Visakhapatnam">Visakhapatnam</option>
              <option value="Telangana">Telangana</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Internship Type */}
          <div>
            <label htmlFor="internshipType" className="block text-sm font-medium text-gray-700 mb-1">
              Type of Internship Seeking <span className="text-red-500">*</span>
            </label>
            <select
              id="internshipType"
              name="internshipType"
              value={formData.internshipType}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm"
            >
              <option value="">Select type</option>
              <option value="Tecky Skill (Student Paid)">Tecky Skill (Student Paid)</option>
              <option value="Tecky Smart (Company Paid)">Tecky Smart (Company Paid)</option>
              <option value="Tecky Assist (Student Paid)">Tecky Assist (Student Paid)</option>
            </select>
          </div>

          {/* Preferred Technology */}
          <div>
            <label htmlFor="preferredTechnology" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Technology/Domain <span className="text-red-500">*</span>
            </label>
            <select
              id="preferredTechnology"
              name="preferredTechnology"
              value={formData.preferredTechnology}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm"
            >
              <option value="Artificial Intelligence">Artificial Intelligence</option>
              <option value="Embedded Systems">Embedded Systems</option>
              <option value="Internet of Things">Internet of Things</option>
              <option value="Robotics">Robotics</option>
              <option value="3D Printing">3D Printing</option>
              <option value="Electric Vehicle Technology">Electric Vehicle Technology</option>
            </select>
          </div>

          {/* Participation Type */}
          <div>
            <label htmlFor="participationType" className="block text-sm font-medium text-gray-700 mb-1">
              Individual or Group? <span className="text-red-500">*</span>
            </label>
            <select
              id="participationType"
              name="participationType"
              value={formData.participationType}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm"
            >
              <option value="Individual">Individual</option>
              <option value="Group of 5-10 Students">Group of 5-10 Students</option>
              <option value="Group of 10-20 Students">Group of 10-20 Students</option>
              <option value="More than 20 Students">More than 20 Students</option>
              <option value="More than 50 Students">More than 50 Students</option>
            </select>
          </div>

          {/* Internship Mode */}
          <div>
            <label htmlFor="internshipMode" className="block text-sm font-medium text-gray-700 mb-1">
              Mode of Internship <span className="text-red-500">*</span>
            </label>
            <select
              id="internshipMode"
              name="internshipMode"
              value={formData.internshipMode}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm"
            >
              <option value="">Select mode</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          {/* Preferred Duration */}
          <div>
            <label htmlFor="preferredDuration" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Duration <span className="text-red-500">*</span>
            </label>
            <select
              id="preferredDuration"
              name="preferredDuration"
              value={formData.preferredDuration}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm"
            >
              <option value="">Select duration</option>
              <option value="1 Month">1 Month</option>
              <option value="2 Months">2 Months</option>
              <option value="3 Months">3 Months</option>
              <option value="6 Months">6 Months</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-4 pt-6">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2 rounded-lg shadow text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
            >
              Submit Enquiry
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="w-full sm:w-auto px-6 py-2 rounded-lg shadow text-blue-700 bg-gray-100 hover:bg-gray-200 border border-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 transition-all"
            >
              Clear Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InternshipEnquiryForm;
