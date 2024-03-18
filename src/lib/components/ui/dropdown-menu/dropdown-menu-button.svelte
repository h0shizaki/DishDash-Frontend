<script lang="ts">
    export let title = ''
    export let variant = 'variant-filled-surface'
    export let willClose = true

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function action() {
        dispatch('action', {
            // text: 'Hello!'
        });
    }
</script>



<button id={willClose? 'will-close': 'wont-close'} class="btn {variant} w-full" on:click={action}>{title}</button>

