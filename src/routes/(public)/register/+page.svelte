<script lang="ts">
    import RegisterComponent from '$lib/components/register/RegisterComponent.svelte'
</script>

<svelte:head>
    <title>DishDash: Sign Up</title>
</svelte:head>

<section class="bg-white w-full lg:w-2/3 mx-auto">
    <div class="py-8 px-4 flex flex-col space-x-32 items-start shadow-md rounded-lg border-2 justify-start">
        <div class="w-full px-3">
            <RegisterComponent />
        </div>
    </div>
</section>