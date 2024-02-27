// config.js

import axios from 'axios';

export const BASE_URL = 'http://localhost:3001';

// Configure Axios with baseURL and cookies support
axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true;

export default axios;
