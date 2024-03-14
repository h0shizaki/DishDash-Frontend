<script lang="ts">
    import {onMount} from "svelte";
    import {isLoggedIn} from "$lib/stores/auth";
    import {goto} from "$app/navigation";

    onMount(async () => {
        if ($isLoggedIn) {
            return await goto('/home')
        }
    })
</script>

<svelte:head>
    <title>DishDash: Home</title>
</svelte:head>

<section class="h-full">
    <!--    <CardSkeleton text="test" className="w-64" />-->
    <!--    <CardSkeleton text="test" className="w-64" />-->
    <!--    <CardSkeleton text="test" className="w-64" />-->
    <!--    <RecipeCard isDisabled="{true}" recipe={recipe} />-->


</section>

