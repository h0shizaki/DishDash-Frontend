<script lang="ts">

    import RecipeCards from "$lib/components/recipe-cards/RecipeCard.svelte";
    import {UnlimitedScrolling} from '$lib/components/unlimited-scrolling'
    import type {HomePage} from "./+page";
    import Spinner from "$lib/components/ui/Spinner.svelte";

    export let data: HomePage;

    let isLoading = true

    let recipes = [...data.recipes]
    console.log(recipes)

    $: isLoading = recipes.length == 0
    const next = async () => {
        const resp = await data.next()
        recipes = [...recipes, ...resp]
        console.log(recipes)

    }

</script>


<svelte:head>
    <title>DishDash: Main</title>
</svelte:head>

{#if isLoading}
    <Spinner />
{:else}
    <!--<h3>Let's explore your next dishes</h3>-->
    <!--<button on:click={next}>TEST</button>-->
    <RecipeCards recipes={recipes}/>

    <UnlimitedScrolling
            on:action={next}
    />
{/if}