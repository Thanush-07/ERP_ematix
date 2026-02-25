import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  withCredentials: true,
});

// Attach JWT to every request
axiosInstance.interceptors.request.use((config) => {
  const auth = JSON.parse(localStorage.getItem("erp-auth") || "{}");
  const token = auth?.state?.token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Handle 401 — logout
axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("erp-auth");
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;
