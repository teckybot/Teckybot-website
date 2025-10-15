import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // example: http://localhost:5000/api
  headers: {
    "Content-Type": "application/json",
  },
});


//JOBS

// Fetch all jobs
export const getAllJobs = async () => {
  const res = await api.get("/jobs");
  return res.data;
};

// Apply for a job (form submission with resume upload)
export const applyJob = async (jobId, formData) => {
  const res = await api.post(`/job-applications/${jobId}/apply`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};


// CONTACT

export const sendContactForm = (data) => api.post("/contact", data);

export default api;
