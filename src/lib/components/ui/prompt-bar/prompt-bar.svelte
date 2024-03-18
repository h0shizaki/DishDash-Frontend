<script lang="ts">
    import {createEventDispatcher} from "svelte";

    export let currentMessage = '';
    export let isLoading ;
    const dispatch = createEventDispatcher()
    function dispatchSubmit() { dispatch('chat', {}) }

</script>


<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token mt-5 fixed bottom-0 gap-2">
    <button class="input-group-shim">+</button>
    <textarea
            bind:value={currentMessage}
            class="bg-transparent border-0 ring-0 resize-none"
            name="prompt"
            id="prompt"
            placeholder="Write a message..."
            rows="1"
            disabled="{isLoading}"

    />
    <button disabled="{isLoading}"  class="variant-filled-primary" on:click={dispatchSubmit}>Send
    </button>
</div>
