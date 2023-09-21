import axios from 'axios';

const API_URL = 'https://api.tradingview.com/';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  const accessToken = await getAccessToken();
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

async function getAccessToken() {
  const response = await api.get('/api/v2/access_token');
  return response.data.access_token;
}

export default api;