import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    return {
        recipeId: params.recipeId
    }
    //TODO: fetch recipe detail
}

export interface RecipePage{
    recipeId: string
}