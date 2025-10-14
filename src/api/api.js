import axios from "axios";
import { io } from "socket.io-client";

// Base API configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // example: http://localhost:5000/api
  headers: {
    "Content-Type": "application/json",
  },
});


// Fetch all jobs (for careers page)
export const getAllJobs = async () => {
  const res = await api.get("/jobs");
  return res.data;
};

export const sendContactForm = (data) => api.post("/contact", data);