import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5001";
const token = localStorage.getItem("token");

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
