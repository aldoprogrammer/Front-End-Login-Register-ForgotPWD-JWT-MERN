// config.js

import axios from 'axios';

export const BASE_URL = 'https://back-end-login-register-forgotpwd-jwt.onrender.com';

// Configure Axios with baseURL and cookies support
axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true;

export default axios;
