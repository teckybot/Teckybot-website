import axios from "axios";

// Create a reusable Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Uses value from .env
  headers: {
    "Content-Type": "application/json",
  },
});

// Example API: send contact form
export const sendContactForm = (data) => api.post("/contact", data);

export default api;
