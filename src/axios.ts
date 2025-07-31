import axios from 'axios';

const token = localStorage.getItem('accessToken');

const api = axios.create({
  baseURL: 'https://dummyjson.com/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${token}`,
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem('refreshToken');
    if (error.status === 401 && refreshToken) {
      try {
        const response = await api.post(
          '/auth/refresh',
          // @ts-ignore
          { refreshToken, credentials: 'include' }
        );

        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.accessToken);
        originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;

        return api(originalRequest);
      } catch (err) {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
