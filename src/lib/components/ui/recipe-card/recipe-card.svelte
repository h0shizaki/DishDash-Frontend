<script lang="ts">
    import {DropDownMenu, DropDownMenuButton} from "$lib/components/ui/dropdown-menu";
    import {Card, CardContent, CardHeader, CardFooter} from "$lib/components/ui/card";
    import {KeywordsChip} from '$lib/components/ui/keyword-chip'
    import type {Recipe} from "$lib/models/Recipe";
    import {Icons} from '$lib/components/ui/icon'
    import {authstore} from "$lib/stores/auth";

    export let isDisabled = false
    export let recipe: Recipe;

    const currentUser = authstore.getUser()

    let isFavorited = currentUser?.interestedRecipe.includes(recipe._id!)

    const fav = async () => {
        console.log(recipe._id)
        try {
            if (recipe._id != null) {
                const currentUser = authstore.getUser()
                if (!currentUser) return

                currentUser.interestedRecipe.push(recipe._id)
                await authstore.update(currentUser)
                isFavorited = true
                // console.log(currentUser, updateResult)

            }
        } catch (e) {
            console.error(e)
        }
    }
    const action = async() => {
        console.log(recipe._id)
        try {
            if (recipe._id != null) {
                const currentUser = authstore.getUser()
                if (!currentUser) return

                currentUser.uninterestedCategory.push(...recipe.Keywords)
                let index = currentUser.interestedRecipe.indexOf(recipe._id)
                if(index != null){
                    currentUser.interestedRecipe.splice(index,1)
                    isFavorited = false
                }
                currentUser.uninterestedCategory = [...(new Set(currentUser.uninterestedCategory))]
                const updateResult = await authstore.update(currentUser)

                console.log(currentUser, updateResult)

            }
        } catch (e) {
            console.error(e)
        }
        isDisabled = true;
    }

    const popupClick = {
        event: 'click',
        target: 'popupClick' + recipe._id,
        placement: 'bottom',
        closeQuery: '#will-close'
    }

</script>

<Card className="w-64 mx-auto my-2 h-full relative " >
    {#if isDisabled}
        <div class="absolute h-full w-full bg-black/90 z-10 ">
            <span class="bg-black w-full text-white block text-center font-semibold py-3">You've removed this recipe.</span>
            <span class="absolute w-full bottom-1/2 mx-auto text-center text-blue-500 decoration underline cursor-pointer"
                  on:click={() => {isDisabled = !isDisabled}}>
                undo
            </span>
        </div>
    {/if}
    {#if isFavorited}
        <div class="absolute z-10 ">
            <span class="absolute w-full top-1 left-1 cursor-pointer ">
                <button class="variant-soft-surface p-0.5 rounded-lg">
                <Icons.Star  fill="#FFFF00" size="{32}" strokeWidth="{1}" />
                </button>
            </span>
        </div>
    {/if}

    <DropDownMenu btnClass="float-right p-2 relative z-30" popupClick={popupClick}>
        {#if !isFavorited}
        <DropDownMenuButton title="Favorite" on:action={fav}
                            variant="variant-ghost-success"></DropDownMenuButton>
        {/if}
        <DropDownMenuButton title="Do not interested" on:action={action}
                            variant="variant-ghost-error"></DropDownMenuButton>
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

