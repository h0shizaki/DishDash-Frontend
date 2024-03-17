import type {AxiosError, AxiosInstance} from 'axios'
import {goto} from '$app/navigation';
import axios from 'axios'

const apiClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_ELASTIC_WRAPPER_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

apiClient.interceptors.request.use(
    (req) => {
        const token = localStorage.getItem('token')
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
        if (err.response?.status === 403) {
            let message = 'Please login to continue.'
            if(err.response?.data.body.message) {
                message = err.response?.data.body.message
            }
            return goto('/login', {state: {message: message}})        }
        if (err.response?.status === 404) {
            return err
        }
        throw err
        // return goto('/network-error')
    }
)


export default apiClient