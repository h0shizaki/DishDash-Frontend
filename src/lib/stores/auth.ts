import {get, derived} from 'svelte/store';
import {writable} from "@macfja/svelte-persistent-store";
import type {User} from "$lib/models/User";
import AuthService from "$lib/api/AuthService";

export const user = writable<User|null>("user",null)
export const token = writable<string|null>("token", null)
async function login(username: string , password: string) {
    const res = await AuthService.login(username, password)

    const responsedUser: User = res.data.body.user as User
    const responsedToken : string = res.data.body.token

    user.set(responsedUser)
    user.subscribe( v => {
        console.log(v)
    })
    token.set(responsedToken)

    localStorage.setItem('access_token', responsedToken)
    localStorage.setItem('user', JSON.stringify(responsedUser))

    return res.data.body.user
}

async function register(registerUser: User) {
    const res = await register(registerUser)
    const responsedUser: User = res.data.body.user as User
    const responsedToken : string = res.data.body.token

    user.set(responsedUser)
    token.set(responsedToken)
    localStorage.setItem('access_token', responsedToken)
    localStorage.setItem('user', JSON.stringify(responsedUser))
    return res.data.body.user
}

function logout() {
    console.log('Logged out')
    token.set(null)
    user.set(null)
    localStorage.removeItem('access_token')
    localStorage.removeItem('user')
}

function refresh(user1: User|null , token1 : string|null) {
    token.set(token1)
    user.set(user1)
}

export const isLoggedIn = derived(user, ($user) => $user !== null, false);

const getUser = (): User|null => {
    const localUser = get(user);
    // if (!localUser || !localUser.id) return null
    return localUser;
}
const setUser = (updateUser: User) :User|null => {
    user.set(updateUser)
    return getUser()
}

export const authstore = {login, register, logout, refresh, isLoggedIn, getUser, setUser }