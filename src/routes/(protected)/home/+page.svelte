<script lang="ts">

    import RecipeCards from "$lib/components/recipe-cards/RecipeCard.svelte";
    import {UnlimitedScrolling} from '$lib/components/unlimited-scrolling'
    import type {HomePage} from "./+page";
    import Spinner from "$lib/components/ui/Spinner.svelte";
    import Error from "$lib/components/ui/Error.svelte";
    import {onMount} from "svelte";
    import SearchBar from '$lib/components/ui/Searchbar.svelte'
    import {page} from "$app/stores";
    import RecipeService from "$lib/api/RecipeService";
    import {goto} from "$app/navigation";

    let isLoading = true
    let isError = false
    let isStreaming = false
    let isSearch = false
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
        if (query != null) {
            isLoading = true
            const resp = await RecipeService.search(query, 110)
            recipes = resp['data']['results']
            isSearch = true
            isLoading = false
        }
    })

    const onSearch = async (e) => {
        // await goto(`/home?query=${query}`)
        isLoading = true
        recipes = []
        console.log(e)
        const resp = await RecipeService.search(query, 110)
        recipes = resp['data']['results']
        console.log(recipes)
        isSearch = true
        isLoading = false

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
    <SearchBar on:search={onSearch} bind:query={query}/>
    <!--<button on:click={next}>TEST</button>-->
    <RecipeCards recipes={recipes}/>
    {#if recipes.length === 0}
        <div class="w-full mx-auto h3 text-indigo-600 flex justify-center items-center">
            No result found ;-;
        </div>
    {/if}

    {#if !isSearch}
        {#if !isStreaming }
            <UnlimitedScrolling
                    on:action={next}
            />
        {:else}
            <div class="mt-3">
                <Spinner/>
            </div>
        {/if}
    {/if}
{/if}