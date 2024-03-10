<script lang="ts">
    export let title = ''
    export let variant = 'variant-filled-surface'

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function action() {
        dispatch('action', {
            // text: 'Hello!'
        });
    }
</script>



<button id="wont-close" class="btn {variant}" on:click={action}>{title}</button>

