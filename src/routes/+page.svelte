<script lang="ts">
    import {onMount} from "svelte";
    import {isLoggedIn} from "$lib/stores/auth";
    import {goto} from "$app/navigation";
    import {Hero, CallToAction, Features, Cards} from "$lib/components/landing";

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
<Hero />
<Features />
<Cards />
<CallToAction />


</section>

