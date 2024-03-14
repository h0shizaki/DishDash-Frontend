<script lang="ts">
    import {Carousel} from "$lib/components/ui/carousel";
    import type {RecipePage} from "./+page";
    import {onMount} from "svelte";
    import Spinner from "$lib/components/ui/Spinner.svelte";
    import Error from "$lib/components/ui/Error.svelte";
    import type {Recipe} from "$lib/models/Recipe";
    import {KeywordsChip} from "$lib/components/ui/keyword-chip";
    import {Tab} from '$lib/components/ui/tab'
    import RecipeCards from "$lib/components/recipe-cards/RecipeCard.svelte";
    import {ReactionBar} from "$lib/components/ui/reaction-bar"

    export let data: RecipePage
    let recipe: Recipe
    let suggestions: Array<Recipe>
    let isLoading = true
    let isError = false
    let title = ''
    onMount(async () => {
        try {
            recipe = data.recipe
            suggestions = data.suggestions
            isLoading = data.isLoading
            title = recipe.Name
        } catch (e) {
            isError = true
            isLoading = false
        }
    })

    // let thumbnails = recipe.Images

</script>

<svelte:head>
    <title>DishDash: {title}</title>
</svelte:head>
{#if isLoading}
    <Spinner/>
{:else if isError}
    <Error placeholder="Sorry, we are facing network error." message="Please try again later."/>
{:else}
        <div class="flex flex-col md:w-9/12 mx-auto p-5 mt-2.5 ">
            <span class="font-semibold text-xs text-gray-700">{recipe._id}</span>
            <span class="h2 font-semibold text-indigo-500" id="title">{recipe.Name}</span>
            <span class="font-semibold text-xs text-gray-700">{recipe.AuthorName}
                , {new Date(recipe.DatePublished).toLocaleDateString()}</span>
        </div>
        <div class="flex flex-col md:flex-row w-full items-start mx-auto justify-center flex-wrap gap-8 md:gap-6 mt-4">
            <div class="flex flex-col w-full md:w-1/3">
                <Carousel imageUrls="{recipe.Images}"/>
                <div class="mt-2.5">
                    <ReactionBar/>
                </div>
            </div>

            <div class="flex flex-col w-full md:w-1/3 p-2">
                <span class="h3 font-semibold text-2xl">Description</span>

                <article class="prose py-2 text-gray-800 text-sm text-pretty ">
                    {recipe.Description}
                </article>
                <article class="prose py-2 text-gray-800 text-sm text-wrap">
                    <p>Cook time: {recipe.CookTime}</p>
                    <p>Prepare time: {recipe.PrepTime}</p>
                    <p>Total Time: {recipe.TotalTime}</p>
                </article>

                <div class="mt-2.5 border-t-2 py-1.5">

                    <Tab labelList="{['Ingredient', 'Instruction', 'Nutrients']}">
                        <div slot="tab1">
                            <p class="mt-2.5">
                                Ingredients:
                            </p>

                            <ul class="mx-8 list-disc">
                                {#each recipe.RecipeIngredientParts as ingredient , index}
                                    <li class="lowercase">{ ingredient}
                                        {#if recipe.RecipeIngredientQuantities[index]}
                                            : {recipe.RecipeIngredientQuantities[index]} ea.
                                        {/if}
                                    </li>
                                {/each}
                            </ul>
                        </div>

                        <div slot="tab2">
                            <ul class="mx-8 list-decimal">
                                {#each recipe.RecipeInstructions as instruction }
                                    <li class="capitalized p-2">{ instruction}
                                    </li>
                                {/each}
                            </ul>
                        </div>
                        <div slot="tab3">
                            <span class="text-indigo-500  block">Calories: {recipe.Calories}</span>
                            <span class="text-gray-700  block">RecipeServings: {recipe.RecipeServings}</span>
                            <span class="text-gray-700  block">RecipeYield: {recipe.RecipeYield}</span>
                            <span class="text-gray-700  block">CarbohydrateContent: {recipe.CarbohydrateContent}</span>
                            <span class="text-gray-700  block">ProteinContent: {recipe.ProteinContent}</span>
                            <span class="text-gray-700  block">CholesterolContent: {recipe.CholesterolContent}</span>
                            <span class="text-gray-700  block">FatContent: {recipe.FatContent}</span>
                            <span class="text-gray-700  block">SugarContent: {recipe.SugarContent}</span>
                            <span class="text-gray-700  block">SodiumContent: {recipe.SodiumContent}</span>
                        </div>
                    </Tab>

                    <div class="mt-4 border-t-2  ">
                        <KeywordsChip keywords="{recipe.Keywords}"/>
                    </div>

                </div>
            </div>
        </div>

        <div class="flex flex-col md:w-9/12 mx-auto p-5 mt-2.5 ">
            <span class="h4 font-semibold text-indigo-500">Recommendations:</span>
            <RecipeCards recipes={suggestions}/>
        </div>
{/if}
