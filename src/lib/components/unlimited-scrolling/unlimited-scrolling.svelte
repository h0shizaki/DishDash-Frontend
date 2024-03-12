<script lang="ts">

    import {createEventDispatcher} from "svelte";
    import Spinner from "$lib/components/ui/Spinner.svelte";

    const dispatch = createEventDispatcher();
    let isLoading = false;
    let isComplete = true;

    function action() {
        dispatch('action', {});
    }

    const trigger = async () => {
        isLoading = true
        isComplete = false
        await action()
        isLoading = false
        isComplete = true
    }

</script>

{#if isLoading}
    <Spinner/>
{/if}
{#if isComplete}
    <div class="w-full h-64 flex flex-row items-center">
        <button class="btn variant-filled-secondary" on:click={trigger}>Load more recipes</button>
    </div>
{/if}
