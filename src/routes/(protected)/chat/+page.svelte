<script lang="ts">
    import {PromptBar, Bubbles} from '$lib/components/ui/prompt-bar'
    import type {Chat} from "$lib/models/Chat";
    import {authstore} from "$lib/stores/auth";
    import recipeService from "$lib/api/RecipeService";

    const user = authstore.getUser()
    let isLoading = false;
    let chats: Chat[] = [];
    let currentMessage: string = '';
    const submitHandler = async () => {
        isLoading = true
        if (user == null) return
        console.log(chats)
        if (currentMessage.length <= 0) return
        chats = [...chats, {message: currentMessage, isFromUser: true, username: user.username}]
        const resp = await recipeService.ragLLM(currentMessage)

        console.log(resp.data.result)
        chats = [...chats, {message: resp.data.result, isFromUser: false, username: "AI"}]

        currentMessage = '';
        isLoading = false
    }

</script>


<svelte:head>
    <title>DishDash: Chat with Chef AI</title>
</svelte:head>

<div class="flex flex-col overflow-y-auto mx-auto">

    <Bubbles bind:chats={chats} isLoading="{isLoading}"/>
    <PromptBar on:chat={submitHandler} bind:currentMessage isLoading="{isLoading}"/>
</div>
