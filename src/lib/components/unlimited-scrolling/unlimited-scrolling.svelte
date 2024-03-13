<script lang="ts">

    import {createEventDispatcher} from "svelte";
    import Spinner from "$lib/components/ui/Spinner.svelte";

    const dispatch = createEventDispatcher();

    async function action() {
        dispatch('action', {});
    }

    const trigger = async () => {
        await action()
    }

</script>


<div class="flex flex-row justify-center m-5 mb-16">
    <button class="btn variant-filled-secondary" on:click={trigger}>Load more recipes</button>
</div>

