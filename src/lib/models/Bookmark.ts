import type {Recipe} from "$lib/models/Recipe";

export interface Bookmark {
    _id: string,
    records: RecipeRecord[],
    title: string,
    thumbnail?: string,

}


export interface RecipeRecord {
    _id?: string
    recipeId?: string,
    recipe?: Recipe,
    rating: number
}