<script lang="ts">
    import Card from './card.svelte';
</script>

<section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">More</h1>
        <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>

        <Card title="Typo-Friendly Recipes" description="Don't worry about perfect spelling! DishDash understands your cravings even with typos, making it easy to find your favorite recipes."/>

        <Card title="Effortless Bookmarking" description="Save your must-try recipes with just a tap! With DishDash's built-in bookmark feature, your favorite dishes are always at your fingertips." />

        <Card title="Personalized Suggestions" description="Get tailored recipe recommendations based on your taste preferences and dietary choices. Let DishDash inspire your next culinary masterpiece! " />

    </div>
</section>