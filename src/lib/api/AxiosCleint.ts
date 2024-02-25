import type { AxiosError, AxiosInstance } from 'axios'
import axios from 'axios'

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem('access_token')
    if (token) {
      req.headers['Authorization'] = `Bearer ${token}`
    }
    return req
  },
  (err) => {
    return Promise.reject(err)
  }
)

apiClient.interceptors.response.use(
  (res) => {
    return res
  },
  (err: AxiosError) => {
    console.error(err)
  }
)

export default apiClient