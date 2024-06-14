import axios, { AxiosInstance } from 'axios';

const axiosGithub: AxiosInstance = axios.create({
    baseURL: 'https://api.github.com/users/edsuuu/repos',
})

export default axiosGithub;
