<script lang="ts">
    import {DropDownMenu, DropDownMenuButton} from "$lib/components/ui/dropdown-menu";
    import {Card, CardContent, CardHeader, CardFooter} from "$lib/components/ui/card";
    import {KeywordsChip} from '$lib/components/ui/keyword-chip'
    import type {RecipeRecord, RecordPayload} from "$lib/models/Bookmark";
    import type {ModalSettings, ToastSettings} from "@skeletonlabs/skeleton";
    import {getModalStore} from '@skeletonlabs/skeleton';
    import bookmarkService from "$lib/api/BookmarkService";
    import {getToastStore} from '@skeletonlabs/skeleton';
    import Spinner from "$lib/components/ui/Spinner.svelte";
    import {Icons} from '$lib/components/ui/icon'
    import {Badge} from "$lib/components/ui/badge";

    const toastStore = getToastStore();
    const modalStore = getModalStore();
    export let isDisabled = false

    let isProcessing = false;
    export let bookmarkId: string;
    export let record: RecipeRecord;
    $: recipe = record.recipe


    const t: ToastSettings = {
        message: 'Yippies! Bookmark updated!',
        timeout: 5000,
        background: 'variant-filled-success',

    };

    const remove = async () => {

        const modal: ModalSettings = {
            type: 'confirm',
            title: 'Please Confirm',
            body: 'Are you sure you wish to proceed?',
            // TRUE if confirm pressed, FALSE if cancel pressed
            response: async (r: boolean) => {
                console.log(r)
                isDisabled = r

                const recipeId = recipe?._id
                if (r && recipe != undefined) {

                    const payload = {
                        "bookmarkId": bookmarkId,
                        "recipeId": recipeId,
                    }

                    console.log(payload)
                    const resp = await bookmarkService.removeBookmarkRecord(bookmarkId, recipeId!)
                    console.log(resp.status === 200)
                    if (resp.status === 200) {
                        toastStore.trigger(t);
                    }
                }
            },
        };

        modalStore.trigger(modal);

    }

    const updateRating = async (increment: boolean) => {
        try {
            isProcessing = true
            const recipeId = recipe?._id;
            if (record.rating > 5 || recipeId == undefined || record._id == undefined) return;
            const newRating = increment ? record.rating + 1 : record.rating - 1;
            console.log(recipeId, newRating)
            record.rating = newRating
            const payload: RecordPayload = {
                "_id": record._id,
                "recipe": recipeId,
                "rating": newRating
            };

            const resp = await bookmarkService.updateBookmarkRecord(bookmarkId, payload);
            if (resp.status === 200) {
                toastStore.trigger(t);
            }
            isProcessing = false
        } catch (e) {
            console.error(e)
            isProcessing = false
        }

    }

    const addRating = async () => {
        console.log('up')
        await updateRating(true)
    }

    const downRating = async () => {
        console.log('down')
        await updateRating(false)
    }

    const popupClick = {
        event: 'click',
        target: 'popupClick' + record._id,
        placement: 'bottom',
        closeQuery: '#will-close'
    }


</script>


<Card className="w-64 mx-auto my-2 h-full relative {isDisabled? 'hidden': '' }">
    <!--    <div class="relative">{record.rating}</div>-->
    {#if isProcessing}
        <div class="absolute h-full w-full bg-black/10 z-10 ">
            <Spinner/>
        </div>
    {/if}

    <div class="absolute z-10 ">
            <span class="absolute w-full top-1 left-1 cursor-pointer ">
                <Badge bind:record={record}></Badge>
            </span>
    </div>

    <DropDownMenu btnClass="float-right p-2 relative z-30" popupClick={popupClick}>
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

