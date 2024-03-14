<script lang="ts">

    import RecipeCards from "$lib/components/recipe-cards/RecipeCard.svelte";
    import {UnlimitedScrolling} from '$lib/components/unlimited-scrolling'
    import type {HomePage} from "./+page";
    import Spinner from "$lib/components/ui/Spinner.svelte";
    import Error from "$lib/components/ui/Error.svelte";
    import {onMount} from "svelte";
    import SearchBar from '$lib/components/ui/Searchbar.svelte'
    import {page} from "$app/stores";
    let isLoading = true
    let isError = false
    let isStreaming = false

    let recipes = []
    let next: () => Promise<void>;
    export let data: HomePage;

    let query = '';


    onMount(async () => {
        recipes = [...data.recipes]
        isError = data.isError
        isLoading = data.isLoading
        query = $page.url.searchParams.get('query')

        next = async () => {
            isStreaming = true
            const resp = await data.next()
            recipes = [...recipes, ...resp]
            console.log(recipes)
            isStreaming = false
        }
    })

    const onSearch = async (e) => {
        console.log(e)
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
    <span class="h3 p-4 my-5 text-indigo-600 font-semibold">Let's explore your next dishes</span>
    <SearchBar on:search={onSearch} {query} />
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