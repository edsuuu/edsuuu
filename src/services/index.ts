import axios, { AxiosInstance } from 'axios';

const API_URL: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_URL_MAIL,
});

export default API_URL;
