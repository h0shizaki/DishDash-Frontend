<script lang="ts">
    import type {RecipePage} from "./+page";
    export let data:RecipePage;

</script>

<svelte:head>
    <title>DishDash: recipe name</title>
</svelte:head>

<section>
    {data.recipeId}
</section>