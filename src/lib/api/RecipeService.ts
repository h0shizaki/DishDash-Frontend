import apiClient from "$lib/api/ElasticClient";


const allRecipes = async (userId: string, pageSize = 10, start = 0) => {
    return  apiClient.get(`/recipe?_id=${userId}&search_size=300&start=${start}&limit=${pageSize}`)
}

const recipe = async (recipeId: string) => {
    return  apiClient.get(`/recipe/${recipeId}`)
}

const search = async (query: string, pageSize = 10, start = 0) => {
    return apiClient.get(`/search_recipe?query=${query}&search_size=300&start=${start}&limit=${pageSize}`)
}

const explore = async (pageSize = 10) => {
    return apiClient.get(`/explore?search_size=${pageSize}`)
}

const favorite = async (userId : string) =>{
    return apiClient.get(`/favorite?_id=${userId}`)
}

const bookmarkSuggestion = async (bookmarkId: string , size: number) => {
    return apiClient.get(`/bookmark/${bookmarkId}?search_size=${size}`)
}
export default {allRecipes, recipe, explore, search , favorite , bookmarkSuggestion}
