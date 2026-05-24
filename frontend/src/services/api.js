import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || 
  (process.env.NODE_ENV === "production" 
    ? "https://YOUR_RAILWAY_URL/api"  // Replace with your Railway URL
    : "http://localhost:5000/api");

const api = axios.create({
  baseURL: API_URL
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
