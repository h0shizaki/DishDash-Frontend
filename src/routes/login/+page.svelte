<script lang="ts">
    import LoginComponent from '$lib/components/login/LoginComponent.svelte'
</script>

<svelte:head>
    <title>DishDash: Sign In</title>
</svelte:head>

<section class="bg-white w-full lg:w-2/3 mx-auto">
    <div class="py-8 px-4 lg:flex lg:flex-row lg:space-x-12 items-center shadow-md rounded-lg border-2 justify-start">
        <div class="w-1/2 hidden lg:block border-r-gray-200 border-r-2 pr-5">
            <img src="/images/hero.png" class="w-auto" alt="Hero Image"/>
        </div>
        <div class="w-full md:w-1/2">
            <LoginComponent />
        </div>
    </div>
</section>