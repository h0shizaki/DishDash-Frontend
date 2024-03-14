
import type { AxiosResponse } from 'axios'
import type {User} from "$lib/models/User";
import apiClient from "$lib/api/AxiosCleint";

const login = (username: string , password : string): Promise<AxiosResponse> => {
    return  apiClient.post<User>('/api/auth/', {username, password})
}

const register = (user : User): Promise<AxiosResponse> => {
    return  apiClient.post<User>('/api/auth/user/', user)

}

const update = (_id : string, user: User):  Promise<AxiosResponse> => {
    return apiClient.put<User>('/api/auth/user/', {...user, _id})
}

export default { login, register, update }