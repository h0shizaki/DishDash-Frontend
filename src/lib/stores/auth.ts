import {get, derived} from 'svelte/store';
import {writable} from "@macfja/svelte-persistent-store";
import type {User} from "$lib/models/User";
import AuthService from "$lib/api/AuthService";
import {goto} from "$app/navigation";

export const user = writable<User|null>("user",null)
export const token = writable<string|null>("token", null)
async function login(username: string , password: string) {
    const res = await AuthService.login(username, password)

    const responsedUser: User = res.data.body.user as User
    const responsedToken : string = res.data.body.token
    console.log(responsedToken)

    user.set(responsedUser)
    token.set(responsedToken)
    return res.data.body.user
}
async function register(registerUser: User) {
    // console.log(registerUser)
    const res = await AuthService.register(registerUser)
    const responsedUser: User = res.data.body.user as User
    const responsedToken : string = res.data.body.token

    user.set(responsedUser)
    token.set(responsedToken)
    return res.data.body.user
}

function logout() {
    console.log('Logged out')
    token.set(null)
    user.set(null)
}

function refresh(user1: User|null , token1 : string|null) {
    token.set(token1)
    user.set(user1)
}

export const isLoggedIn = derived(user, ($user) => $user !== null, false);

const getUser = (): User|null => {
    const localUser = get(user);
    return localUser;
}

async function update(requestUser : User) {
    if(getUser() === null ) return
    const _id: string = getUser()._id
    if(!_id) return
    const res = await AuthService.update(_id, requestUser)
    const responsedUser: User = res.data.body.user as User
    user.set(responsedUser)

    return res.data.body

}
export const authstore = {login, register, logout, refresh, isLoggedIn, getUser, update }