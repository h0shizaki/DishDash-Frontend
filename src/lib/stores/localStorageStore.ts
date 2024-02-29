import {writable} from "svelte/store";

export function localStorageStore(key,init) {
    if(!localStorage.getItem(key)) {
        localStorage.setItem(key, init)
    }

    const saved = localStorage.getItem(key)
    const {subscribe , set ,update} = writable(saved)

    return {
        subscribe,
        set: (value) => {
            localStorage.setItem(key, value)
            return set(value)
        },
        update
    }
}

