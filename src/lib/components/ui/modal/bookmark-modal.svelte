<script lang="ts">
    import type {SvelteComponent} from 'svelte';
    // Stores
    import {getModalStore} from '@skeletonlabs/skeleton';
    import type {Bookmark} from "$lib/models/Bookmark";
    import {onMount} from "svelte";
    import bookmarkService from "$lib/api/BookmarkService";
    // Props
    /** Exposes parent props to this component. */
    export let parent: SvelteComponent;

    // export let userCreatedFolders: Bookmark[] = []

    const modalStore = getModalStore();

    let bookmarks = []
    onMount(async () => {
        try{
            const resp = await bookmarkService.getAllBookmarks(true)
            console.log(resp)
            bookmarks = resp.data
        }catch(e){
            console.error(e)
        }
    })


    // Form Data
    const formData = {
        rating: 1,
        bookmarkId: ''
    };

    // We've created a custom submit function to pass the response and close the modal.
    function onFormSubmit(): void {
        // if ($modalStore[0].response) $modalStore[0].response({formData, selectedFolders} );
        if ($modalStore[0].response) $modalStore[0].response(formData);
        modalStore.close();
    }

    // Base Classes
    const cBase = 'card p-4 w-modal shadow-xl space-y-4';
    const cHeader = 'text-2xl font-bold';
    const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
</script>

<!-- @component This example creates a simple form modal. -->

{#if $modalStore[0]}
    <div class="modal-example-form {cBase} z-50">
        <header class={cHeader}>{$modalStore[0].title ?? '(title missing)'}</header>
        <article>{$modalStore[0].body ?? '(body missing)'}</article>
        <!-- Enable for debugging: -->
        <form class="modal-form {cForm}">
            <label class="label">
                <span>Folder name</span>
                <select bind:value={formData.bookmarkId} class="select" required>
                    {#if bookmarks.length === 0}
                        <option value="" selected>Read later</option>
                    {:else}
                        <option value="" selected>Select your folder</option>
                    {/if}
                    {#each bookmarks as folder}
                        <option value={folder._id}>
                            {folder.title}
                        </option>
                    {/each}
                </select>
            </label>
            <label class="label">
                <span>Rating</span>
                <select class="select" bind:value={formData.rating}>
                    <option value="{1}">1</option>
                    <option value="{2}">2</option>
                    <option value="{3}">3</option>
                    <option value="{4}">4</option>
                    <option value="{5}">5</option>
                </select>
                <!--                <input class="" type="tel" bind:value={formData.rating} placeholder="Enter phone..." />-->
            </label>
        </form>
        <!-- prettier-ignore -->
        <footer class="modal-footer {parent.regionFooter}">
            <button class="btn {parent.buttonNeutral}"
                    on:click={parent.onClose}>{parent.buttonTextCancel}</button>
            <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Submit Form</button>
        </footer>
    </div>
{/if}