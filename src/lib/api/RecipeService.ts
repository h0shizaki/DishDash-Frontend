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

const spellCorrection = async (word: string) => {
    return apiClient.get(`/recipe/correction?text=${word}`)
}

const ragLLM = async (word: string) => {
    return apiClient.get(`/lang-chain?text=Can you give answer me that, ${word} also give me a recipe id if it possible`)
}
export default {allRecipes, recipe, explore, search , favorite , bookmarkSuggestion, spellCorrection, ragLLM}
