export interface Bookmark {
    _id: string,
    recipes: RecipeRecord[],
    title: string,
    thumbnail?: string,

}


export interface RecipeRecord {
    recipeId: string,
    rating: number
}