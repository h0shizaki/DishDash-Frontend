<script lang="ts">
    import type {Bookmark, RecipeRecord} from "$lib/models/Bookmark";
    import Error from "$lib/components/ui/Error.svelte";
    import Spinner from "$lib/components/ui/Spinner.svelte";
    import {onMount} from "svelte";
    import type {BookmarkPage} from "./+page";
    import bookmarkService from "$lib/api/BookmarkService";
    import {RecipeRecords} from "$lib/components/recipe-records";
    import type {Recipe} from "$lib/models/Recipe";
    import recipeService from "$lib/api/RecipeService";
    import RecipeCards from "$lib/components/recipe-cards/RecipeCard.svelte";

    export let data: BookmarkPage

    let bookmark: Bookmark;
    let suggestions: Recipe[];
    let isLoading = true
    let isError = false
    $: size = bookmark? bookmark.records.length: 0

    onMount(async () => {
        try {
            const bookmarkId = data.bookmarkId
            // console.log(bookmarkId)
            const resp = await bookmarkService.getBookmark(bookmarkId)
            // console.log(resp.data.body.bookmark)
            bookmark = resp.data.body.bookmark as Bookmark
            const suggestResp = await recipeService.bookmarkSuggestion(bookmarkId, 24)
            console.log(suggestResp)
            suggestions = suggestResp.data.suggestions
            isLoading = false
        } catch (e) {
            isLoading = false
            isError = true
        }

    })

</script>

{#if isLoading}
    <Spinner/>
{:else if isError}
    <Error/>
{:else }
    {#if bookmark.thumbnail}
        <div class="w-full">
            <img src="{bookmark.thumbnail}"/>
        </div>
    {/if}
    <div class="w-full mx-auto px-3 py-2">
        <span class="h3 text-blue-500 font-bold">{bookmark.title}({size}):</span>
        <RecipeRecords bind:bookmark={bookmark}></RecipeRecords>
        <span class="h3 text-blue-500 font-bold">Interesting Recipe for you</span>
        <RecipeCards recipes={suggestions}/>
    </div>
{/if}