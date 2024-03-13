<script lang="ts">

    import RecipeCards from "$lib/components/recipe-cards/RecipeCard.svelte";
    import {UnlimitedScrolling} from '$lib/components/unlimited-scrolling'
    import type {HomePage} from "./+page";
    import Spinner from "$lib/components/ui/Spinner.svelte";
    import Error from "$lib/components/ui/Error.svelte";
    import {onMount} from "svelte";

    let isLoading = true
    let isError = false
    let isStreaming = false

    let recipes = []
    let next: () => Promise<void>;
    export let data: HomePage;

    onMount(async () => {
        recipes = [...data.recipes]
        isError = data.isError
        isLoading = data.isLoading

        next = async () => {
            isStreaming = true
            const resp = await data.next()
            recipes = [...recipes, ...resp]
            console.log(recipes)
            isStreaming = false
        }
    })
</script>


<svelte:head>
    <title>DishDash: Main</title>
</svelte:head>

{#if isLoading}
    <Spinner/>
{:else if isError}
    <Error placeholder="Sorry, we are facing network error." message="Please try again later."/>
{:else}
    <!--<h3>Let's explore your next dishes</h3>-->
    <!--<button on:click={next}>TEST</button>-->
    <RecipeCards recipes={recipes}/>

    {#if !isStreaming}
        <UnlimitedScrolling
                on:action={next}
        />
    {:else}
        <div class="mt-3">
        <Spinner />
        </div>
    {/if}
{/if}