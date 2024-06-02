import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HTTP_SERVER,
  timeout: 5000, // Timeout if necessary
  headers: {
    ContentType: "application/json",
    // Add all custom headers here
  },
});
