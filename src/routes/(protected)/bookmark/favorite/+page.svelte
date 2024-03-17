<script lang="ts">
    import {onMount} from "svelte";
    import Error from "$lib/components/ui/Error.svelte";
    import Spinner from "$lib/components/ui/Spinner.svelte";
    import recipeService from "$lib/api/RecipeService";
    import {authstore} from "$lib/stores/auth";
    import RecipeCards from "$lib/components/recipe-cards/RecipeCard.svelte";

    let recipes = []
    let suggestions = []
    let isLoading = true
    let isError = false
    onMount(async () => {
        try {
            const currecntUser = authstore.getUser()
            if(currecntUser == null) return
            const resp = await recipeService.favorite(currecntUser._id!)
            recipes = resp.data.results
            suggestions = resp.data.suggestions
            isLoading = false
        } catch (e) {
            isError = true
            isLoading = false
            console.error(e)
        }
    })
</script>

<svelte:head>
    <title>DishDash: My Favorite</title>
</svelte:head>


{#if isLoading}
    <Spinner/>
{:else if isError}
    <Error/>
{:else}
    <h2 class="text-indigo-600 font-bold text-xl h2 m-3 p-1">My favorite ({recipes.length})</h2>
    <RecipeCards recipes={recipes}/>

    <h2 class="text-indigo-600 font-bold text-xl h2 m-3 p-1">Interesting recipes for you</h2>
    <RecipeCards recipes={suggestions}/>

{/if}