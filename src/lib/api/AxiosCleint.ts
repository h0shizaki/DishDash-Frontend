import type {AxiosError, AxiosInstance} from 'axios'
import {goto} from '$app/navigation';
import axios from 'axios'
import {authstore} from "$lib/stores/auth";

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
        const token = localStorage.getItem('token')
        if (token) {
            // console.log(token)
            req.headers['Authorization'] = `Bearer ${token.slice(1,-1)}`
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
            console.log('1234')
            if(err.response?.data.body.message) message = err.response?.data.body.message
            authstore.logout()

            return goto('/login', {state: {'message': message} })
        }
        if (err.response?.status === 404) {
            return err
        }
        throw err
        // return goto('/network-error')
    }
)


export default apiClient