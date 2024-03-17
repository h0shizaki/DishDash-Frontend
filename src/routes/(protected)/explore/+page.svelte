<script lang="ts">

    import RecipeCards from "$lib/components/recipe-cards/RecipeCard.svelte";
    import Spinner from "$lib/components/ui/Spinner.svelte";
    import Error from "$lib/components/ui/Error.svelte";
    import {onMount} from "svelte";
    import RecipeService from "$lib/api/RecipeService";
    import {UnlimitedScrolling} from "$lib/components/unlimited-scrolling";


    let isLoading = true
    let isError = false
    let recipes = []

    onMount(async () => {
        const resp = await RecipeService.explore(110)
        recipes = resp['data']['results']
        isLoading = false
    })

    let isStreaming = false
    const loadMore = async () => {
        try {
            isStreaming = true

            const resp = await RecipeService.explore(220)
            recipes = [...recipes, ...resp['data']['results']]
            isStreaming = false
        } catch (e) {
            console.log(e)
        }
    }

</script>


<svelte:head>
    <title>DishDash: Main</title>
</svelte:head>

{#if isLoading}
    <Spinner/>
{:else if isError}
    <Error placeholder="Sorry, we are facing network error." message="Please try again later."/>
{:else}
    <span class="h3 p-4 my-5 text-indigo-600 font-semibold mb-2">Explore</span>
    <RecipeCards recipes={recipes}/>
    {#if !isStreaming }
        <UnlimitedScrolling
                on:action={loadMore}
        />
    {:else}
        <div class="mt-3">
            <Spinner/>
        </div>
    {/if}
{/if}