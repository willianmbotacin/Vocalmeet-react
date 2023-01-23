import axios from "axios";

// Create axios provider
const axiosProvider = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
});

export default axiosProvider