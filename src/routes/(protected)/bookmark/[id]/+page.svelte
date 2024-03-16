<script lang="ts">
    import type {Bookmark, RecipeRecord} from "$lib/models/Bookmark";
    import Error from "$lib/components/ui/Error.svelte";
    import Spinner from "$lib/components/ui/Spinner.svelte";
    import {onMount} from "svelte";
    import type {BookmarkPage} from "./+page";
    import bookmarkService from "$lib/api/BookmarkService";
    import {RecordCard} from "$lib/components/ui/record-card";
    import {RecipeRecords} from "$lib/components/recipe-records";

    export let data: BookmarkPage

    let bookmark: Bookmark;
    let isLoading = true
    let isError = false


    onMount(async () => {
        try {
            const bookmarkId = data.bookmarkId
            console.log(bookmarkId)
            const resp = await bookmarkService.getBookmark(bookmarkId)
            console.log(resp.data.body.bookmark)
            bookmark = resp.data.body.bookmark as Bookmark
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
    <div class="container px-5 py-2">
        <span class="h1 text-blue-500 font-bold">{bookmark.title}</span>
        <RecipeRecords bind:bookmark={bookmark} rating="{5}"></RecipeRecords>
        <RecipeRecords bind:bookmark={bookmark} rating="{4}"></RecipeRecords>
        <RecipeRecords bind:bookmark={bookmark} rating="{3}"></RecipeRecords>
        <RecipeRecords bind:bookmark={bookmark} rating="{2}"></RecipeRecords>
        <RecipeRecords bind:bookmark={bookmark} rating="{1}"></RecipeRecords>
        <span class="h1 text-blue-500 font-bold">Interesting Recipe for you</span>

    </div>
    <!--    <RecipeRecords bind:bookmark={bookmark} rating="{1}"></RecipeRecords>-->
{/if}