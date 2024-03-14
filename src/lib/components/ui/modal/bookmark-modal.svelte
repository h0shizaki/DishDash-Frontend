<script lang="ts">
    import type {SvelteComponent} from 'svelte';
    import InputChip from './input-chips.svelte'
    // Stores
    import { getModalStore} from '@skeletonlabs/skeleton';
    // Props
    /** Exposes parent props to this component. */
    export let parent: SvelteComponent;
    let selectedFolders = []
    let userCreatedFolder = []
    const modalStore = getModalStore();

    // Form Data
    const formData = {
        // name: '',
        rating: 1,
    };

    // We've created a custom submit function to pass the response and close the modal.
    function onFormSubmit(): void {
        if ($modalStore[0].response) $modalStore[0].response({formData, selectedFolders} );
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
<!--                <input class="input" type="text" bind:value={formData.name} placeholder="Enter name..."/>-->
                <InputChip bind:inputChipList={selectedFolders} userFolders={userCreatedFolder} />
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
            <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
            <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Submit Form</button>
        </footer>
    </div>
{/if}