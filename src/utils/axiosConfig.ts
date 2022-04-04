import axios from 'axios';

const BASE_URL = 'https://restcountries.eu/';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
