<script lang="ts">
    import {Folder} from '$lib/components/ui/folder-card'
    import {onMount} from "svelte";
    import BookmarkService from "$lib/api/BookmarkService";
    import Spinner from "$lib/components/ui/Spinner.svelte";
    import Error from "$lib/components/ui/Error.svelte";
    import {authstore} from "$lib/stores/auth";
    import {CreateFolder} from "$lib/components/ui/create-folder"
    import type {FolderPage} from "./+page";

    export let data: FolderPage;
    console.log(data.bookmarks)
    // $: bookmarks = data.bookmarks
    let bookmarks = []
    let isLoading = true
    let isError = false
    const currentUser = authstore.getUser()
    onMount(async () => {
        try {
            const resp = await BookmarkService.getAllBookmarks()
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
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-5 mx-auto">

        <a href="/bookmark/favorite">
            <div class="flex flex-col w-auto items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100">
                <div class="flex flex-col justify-between p-4 leading-normal w-full">
                    <span class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 h-16 ">Favorite ({currentUser.interestedRecipe.length}
                        ) </span>
                </div>
            </div>
        </a>
        <!--        <Folder folder="{favBookmark}" />-->
        {#each bookmarks as bookmark}
            <Folder bind:folder={bookmark}/>
        {/each}

        <CreateFolder bind:bookmarks={bookmarks}/>

    </div>
{/if}
