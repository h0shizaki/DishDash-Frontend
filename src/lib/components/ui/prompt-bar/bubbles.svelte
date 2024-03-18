<script lang="ts">
    import Bubble from './bubble.svelte'
    import {authstore} from "$lib/stores/auth";
    import type {Chat} from "$lib/models/Chat";
    import Spinner from "$lib/components/ui/Spinner.svelte";

    const currentUser = authstore.getUser()
    export let chats: Chat[] = []
    export let isLoading;
</script>

<div class="h-full mb-16">
    {#each chats as chat }

        <Bubble name="{chat.isFromUser? currentUser.username : 'AI'}" isFromUser="{chat.isFromUser}"
                message={chat.message}/>
    {/each}

    {#if isLoading}
        <Spinner/>
    {/if}
</div>
