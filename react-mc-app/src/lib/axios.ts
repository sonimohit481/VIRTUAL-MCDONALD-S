import axios from "axios";
import { config } from "../config";

const axiosInstance = axios.create({
  baseURL: config.api.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data.success) {
      return response.data;
    } else {
      return Promise.reject(response.data);
    }
  },
  (error) => {
    console.error("Axios Error:", error);
    return Promise.reject(error.response?.data || error);
  }
);

export default axiosInstance;
