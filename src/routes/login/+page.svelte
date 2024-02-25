<script lang="ts">
    import LoginComponent from '$lib/components/login/LoginComponent.svelte'
</script>

<svelte:head>
    <title>DishDash: Sign In</title>
</svelte:head>

<section class="bg-white w-2/3 mx-auto">
    <div class="py-8 px-4 flex flex-row space-x-32 items-start shadow-md rounded-lg border-2 justify-start">
        <div class="w-1/2 border-r-gray-200 border-r-2 pr-5">
            <img src="/images/hero.png" class="w-auto" alt="Hero Image"/>
        </div>
        <div class="w-1/2 px-3">
            <LoginComponent />
        </div>
    </div>
</section>