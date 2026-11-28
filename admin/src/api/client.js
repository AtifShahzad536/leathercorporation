import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

// Auto attach JWT token to all requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('hamlo_admin_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auto handle 401 Unauthorized
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      const url = error.config?.url || '';
      // Do not kill session on background polling of live logs or connectors
      if (!url.includes('/live-logs') && !url.includes('/connectors')) {
        localStorage.removeItem('hamlo_admin_token');
        localStorage.removeItem('hamlo_admin_user');
        window.dispatchEvent(new Event('auth_logout'));
      }
    }
    return Promise.reject(error);
  }
);

export default api;
