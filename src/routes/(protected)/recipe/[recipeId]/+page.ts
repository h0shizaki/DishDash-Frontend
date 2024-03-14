import type { PageLoad } from './$types';
import RecipeService from "$lib/api/RecipeService";
import type {Recipe} from "$lib/models/Recipe";

export const load: PageLoad = async ({ params }) => {
    const recipeId = params.recipeId
    let isError = false
    let isLoading = true
    let recipe : Recipe|undefined ;
    let suggestions : Array<Recipe> = []

    console.log(recipeId)

    try {
        const response = await RecipeService.recipe(recipeId)
        isLoading = false
        // console.log()
        recipe = response['data']['result']
        suggestions = response['data']['suggestions']
    } catch (e) {
        console.log(e)
        isLoading = false
        isError = true
        // return await goto('/network-error')
    }

    return {
        recipe,
        suggestions,
        isLoading,
        isError
    }
}

export interface RecipePage{
    recipe: Recipe,
    suggestions: Array<Recipe>,
    isLoading: boolean,
    isError: boolean,
}