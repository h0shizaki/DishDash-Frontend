import { Gender } from './Gender'

export interface User {
    id?: string
    username: string
    email: string
    firstname: string
    lastname: string
    password: string
    gender: Gender
    interestedCategory: Array<string>
}
