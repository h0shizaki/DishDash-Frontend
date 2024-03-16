<script lang="ts">
    import {DropDownMenu, DropDownMenuButton} from "$lib/components/ui/dropdown-menu";
    import {Card, CardContent, CardHeader, CardFooter} from "$lib/components/ui/card";
    import {KeywordsChip} from '$lib/components/ui/keyword-chip'
    import type {RecipeRecord} from "$lib/models/Bookmark";

    export let isDisabled = false
    export let record: RecipeRecord;
    let recipe = record.recipe
    const remove = async () => {
        isDisabled = true
        // console.log(recipe._id)
        // try {
        //     if (recipe._id != null) {
        //         const currentUser = authstore.getUser()
        //         if (!currentUser) return
        //
        //         currentUser.uninterestedCategory.push(...recipe.Keywords)
        //         const updateResult = await authstore.update(currentUser)
        //         console.log(currentUser, updateResult)
        //
        //     }
        // } catch (e) {
        //     console.error(e)
        // }
        // isDisabled = true;
    }

    const addRating = async () => {
        if (record.rating >= 5) return

        record.rating++
        //TODO: update to db
    }

    const downRating = async () => {
        if (record.rating <= 1) return

        record.rating--

        //TODO: update to db

    }

    const popupClick = {
        event: 'click',
        target: 'popupClick' + record._id,
        placement: 'bottom',
        closeQuery: '#will-close'
    }

</script>

<Card className="w-64 mx-auto my-2 h-full relative">
    {#if isDisabled}
        <div class="absolute h-full w-full bg-black/90 z-20 ">
            <!--{text}-->
            <span class="bg-black w-full text-white block text-center font-semibold py-3">You've removed this recipe.</span>
            <span class="absolute w-full bottom-1/2 mx-auto text-center text-blue-500 decoration underline cursor-pointer"
                  on:click={() => {isDisabled = !isDisabled}}>
                undo
            </span>
        </div>
    {/if}
    <div class="relative">{record.rating}</div>

    <DropDownMenu btnClass="float-right p-2 relative z-10" popupClick={popupClick}>
        {#if record.rating < 5}
            <DropDownMenuButton title="Up Rating" on:action={addRating}
                                variant="variant-ghost-success"></DropDownMenuButton>
        {/if}
        {#if record.rating > 1}
            <DropDownMenuButton title="Down Rating" on:action={downRating}
                                variant="variant-ghost-warning"></DropDownMenuButton>
        {/if}
        <DropDownMenuButton title="Remove" on:action={remove} variant="variant-ghost-error"></DropDownMenuButton>
    </DropDownMenu>
    <a data-sveltekit-reload href="/recipe/{recipe._id}">
        <CardHeader className="w-64 p-0 top-0 relative h-48">
            <div class="w-full h-32 absolute">
                <img class="object-cover h-48 w-96 rounded-sm" src="{recipe.Images[0] }" height="32"
                     alt="dish image"/>
            </div>
        </CardHeader>
        <CardContent className="w-64 block h-64">
            <article class="prose">
                <p class="h3 m-0 p-1 font-semibold">{recipe.Name.split(' ').slice(0, 5).join(' ')}</p>
                <p class="p-1 mt-1">
                    {#if recipe.Description.length >= 100}
                        {recipe.Description.trim().slice(0, 90)}
                        <span class="text-blue-500 text-md cursor-pointer">....read more</span>
                    {:else}
                        {recipe.Description.trim()}
                    {/if}
                </p>
            </article>
        </CardContent>
        <CardFooter className="relative bottom-0">
            <KeywordsChip keywords="{recipe.Keywords}"/>
        </CardFooter>
    </a>
</Card>

