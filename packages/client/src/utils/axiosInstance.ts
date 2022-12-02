import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  function (response) {
    // Do something before request is sent
    return response;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error.response.data);
  },
);

export default axiosInstance;
