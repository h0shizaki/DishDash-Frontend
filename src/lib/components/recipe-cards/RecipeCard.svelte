<script lang="ts">
    import {RecipeCard} from "$lib/components/ui/recipe-card";
    import type {Recipe} from "$lib/models/Recipe";

    export let recipes: Array<Recipe> = [];
</script>

<div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-5 mx-auto">
    {#each recipes as recipe}
        <RecipeCard recipe={recipe}/>
    {/each}

</div>