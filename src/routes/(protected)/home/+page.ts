import type {PageLoad} from './$types';
import type {Recipe} from "$lib/models/Recipe";
import RecipeService from "$lib/api/RecipeService";
import {authstore, user} from "$lib/stores/auth";
import {array} from "yup";

export const load: PageLoad = async () => {
    let recipes: Array<Recipe> = [];
    let start = 0
    const pageSize = 24

    try {
        const currentUser = authstore.getUser()
        const userId = currentUser?._id
        const response = await RecipeService.allRecipes(userId, pageSize, start)
        // console.log()
        recipes = response['data']['results']
    } catch (e) {
        console.log(e)
    }

    const next = async (): Promise<Array<Recipe>> => {
        start += pageSize
        try {
            const currentUser = authstore.getUser()
            const userId = currentUser?._id
            const response = await RecipeService.allRecipes(userId, pageSize, start)
            // console.log(response['data'])
            if (response['data']['results'].length > 0) {
                // console.log(response['data']['results'])
                return response['data']['results']
            }
            return []
            // return recipes
        } catch (e) {
            console.log(e)
            return []
        }
    }


    return {
        recipes,
        next
    }
}

export interface HomePage {
    recipes: Array<Recipe>,
    next: () => Promise<Array<Recipe>>,
}
