import type {PageLoad} from './$types';
import type {Recipe} from "$lib/models/Recipe";
import RecipeService from "$lib/api/RecipeService";
import {authstore, user} from "$lib/stores/auth";
import {array} from "yup";
import {goto} from "$app/navigation";

export const load: PageLoad = async () => {
    let recipes: Array<Recipe> = [];
    let isError = false
    let isLoading = true
    let start = 0
    const pageSize = 24

    try {
        const currentUser = authstore.getUser()
        const userId = currentUser?._id
        const response = await RecipeService.allRecipes(userId, pageSize, start)
        isLoading = false
        // console.log()
        recipes = response['data']['results']
    } catch (e) {
        // console.log(e)
        isLoading = false
        isError = true
        // return await goto('/network-error')
    }

    const next = async (): Promise<Array<Recipe>> => {
        isLoading = true
        start += pageSize
        try {
            const currentUser = authstore.getUser()
            const userId = currentUser?._id
            const response = await RecipeService.allRecipes(userId, pageSize, start)
            // console.log(response['data'])
            isLoading = false
            if (response['data']['results'].length > 0) {
                // console.log(response['data']['results'])
                return response['data']['results']
            }
            return []
            // return recipes
        } catch (e) {
            console.log(e)
            isLoading = false
            return []
        }
    }


    return {
        recipes,
        next,
        isError,
        isLoading
    }
}

export interface HomePage {
    recipes: Array<Recipe>,
    next: () => Promise<Array<Recipe>>,
    isError: boolean,
    isLoading: boolean
}
