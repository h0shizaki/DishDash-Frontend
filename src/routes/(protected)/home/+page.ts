import type {PageLoad} from './$types';
import type {Recipe} from "$lib/models/Recipe";
import RecipeService from "$lib/api/RecipeService";
import {authstore} from "$lib/stores/auth";


export const load: PageLoad = async () => {
    // if (authstore.getUser() === null) redirect(307, '/login?message="Please login to continue"')

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
        recipes = response['data']['results']
    } catch (e) {
        isLoading = false
        isError = true
        // return redirect(307, '/network-error');
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
