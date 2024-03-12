<script lang="ts">
    import {DropDownMenu, DropDownMenuButton} from "$lib/components/ui/dropdown-menu";
    import {Card, CardContent, CardHeader} from "$lib/components/ui/card";
    import {KeywordsChip} from '$lib/components/ui/keyword-chip'
    import type {Recipe} from "$lib/models/Recipe";
    import {CardSkeleton} from "$lib/components/ui/skeleton"

    export let isDisabled = false
    export let recipe: Recipe;
    const action = () => {
        console.log(recipe._id)
        // TODO: Update user behaviour on server
        isDisabled = true;
    }

</script>

<Card className="w-64 h-full relative">
    {#if isDisabled}
        <div class="absolute h-full w-full bg-black/90 z-20 ">
            <!--{text}-->
            <span class="bg-black w-full text-white block text-center font-semibold py-3">You've removed this recipe.</span>
            <span class="absolute w-full bottom-1/2 mx-auto text-center text-blue-500 decoration underline cursor-pointer" on:click={() => {isDisabled = !isDisabled}}>
                undo
            </span>

        </div>
    {/if}

    <DropDownMenu btnClass="float-right p-2 relative z-10">
        <DropDownMenuButton title="Do not interested" on:action={action}
                            variant="variant-ghost-error"></DropDownMenuButton>
    </DropDownMenu>
    <a href="#">
        <CardHeader className="w-64 p-0 top-0 relative h-48">
            <div class="w-full h-full absolute">
                <img class="w-full rounded-sm" src="{recipe.Images[1]}" alt="dish image"/>
            </div>
        </CardHeader>
        <CardContent className="w-64 block">
            <article class="prose">
                <p class="h3 m-0 p-1 font-semibold">{recipe.Name}</p>
                <p class="p-1 mt-1">
                    {#if recipe.Description.length >= 100}
                        {recipe.Description.trim().slice(0, 90)}
                        <span class="text-blue-500 text-md cursor-pointer">....read more</span>
                    {:else}
                        {recipe.Description.trim()}
                    {/if}
                </p>
            </article>
            <KeywordsChip keywords="{recipe.Keywords}"/>
        </CardContent>
    </a>
</Card>

