<script lang="ts">
    import {Folder} from '$lib/components/ui/folder-card'
    import type {Bookmark, RecipeRecord} from "$lib/models/Bookmark";
    import {onMount} from "svelte";
    import BookmarkService from "$lib/api/BookmarkService";
    import Spinner from "$lib/components/ui/Spinner.svelte";
    import Error from "$lib/components/ui/Error.svelte";

    const mockBookmark: Bookmark = {
        _id: '123',
        title: 'Favorite',
        recipes: [{'recipeId': '222', rating: 5} as RecipeRecord]
    }
    let bookmarks = []
    let isLoading = true
    let isError = false
    onMount(async () => {
        try {

            const resp = await BookmarkService.getAllBookmarks()
            console.log(resp.data)
            isLoading = false
            bookmarks = resp.data
        } catch (e) {
            console.error(e)
            isLoading = false
            isError = true
        }
    })
</script>
<svelte:head>
    <title>DishDash: My bookmarks</title>
</svelte:head>

{#if isLoading}
    <Spinner/>
{:else if isError}
    <Error placeholder="Sorry, we are facing network error." message="Please try again later."/>
{:else}
    <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-5 mx-auto">
        {#each bookmarks as bookmark}
            <Folder folder="{bookmark}"/>
        {/each}
    </div>
{/if}
