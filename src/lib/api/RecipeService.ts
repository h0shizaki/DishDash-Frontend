import apiClient from "$lib/api/ElasticClient";


const allRecipes = async (userId: string, pageSize = 10, start = 0) => {
    return  apiClient.get(`/recipe?_id=${userId}&search_size=300&start=${start}&limit=${pageSize}`)
}

const recipe = async (recipeId: string) => {
    return  apiClient.get(`/recipe/${recipeId}`)
}

const search = async (query: string, pageSize = 10, start = 0) => {
    return apiClient.get(`search_recipe?query=${query}&search_size=300&start=${start}&limit=${pageSize}`)
}
export default {allRecipes, recipe, search}
