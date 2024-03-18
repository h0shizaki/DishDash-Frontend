<script lang="ts">
    import {Icons} from '$lib/components/ui/icon'
    import {Chip} from '$lib/components/ui/keyword-chip'
    import type {ModalSettings, ToastSettings} from "@skeletonlabs/skeleton";
    import {getModalStore, getToastStore } from '@skeletonlabs/skeleton';
    import {authstore} from "$lib/stores/auth";
    import bookmarkService from "$lib/api/BookmarkService";
    import {onMount} from "svelte";

    const modalStore = getModalStore();
    const toastStore = getToastStore();
    export let justify = 'justify-start'
    export let recipeId = ''
    const currentUser = authstore.getUser()
    const likedList = currentUser?.interestedRecipe
    const isLiked = likedList?.includes(recipeId)



    export let likeAction = async () => {
        if (!currentUser) return
        if (isLiked == false) {
            currentUser?.interestedRecipe.push(recipeId)
            await authstore.update(currentUser)
        } else {
            const index = currentUser?.interestedRecipe.indexOf(recipeId)
            if (index != null) {
                console.log(currentUser?.interestedRecipe)
                currentUser?.interestedRecipe.splice(index, 1)
                console.log(currentUser?.interestedRecipe)
                await authstore.update(currentUser)
            }
        }
    }

    const t: ToastSettings = {
        message: 'Yippies! Recipe have been added!',
        timeout: 5000,
        background: 'variant-filled-success',

    };

    export let bookmarkAction = () => {

        const modal: ModalSettings = {
            title: 'Mark this recipe',
            body: '',
            type: 'component',
            component: 'bookmarkForm',
            response: async (r) => {
                console.log(r)
                if (r) {

                    let payload = {
                        "rating": r.rating,
                        "recipeId": recipeId,
                    }

                    if (r.bookmarkId === '') {
                        payload = {
                            ...payload,
                            "bookmarkTitle": 'Read later'
                        }
                    } else {
                        payload = {
                            ...payload,
                            "bookmarkId": r.bookmarkId,
                        }
                    }

                    const res = await bookmarkService.addToBookmark(payload)
                    console.log(res)
                    if(res.status === 200){
                        toastStore.trigger(t);
                    }
                }
            }
        };
        modalStore.trigger(modal);
    }

</script>

<div class="flex flex-row gap-2 {justify}">
    <Chip variant="variant-soft" title="" isActivable="{true}" isActive="{isLiked}" action="{likeAction}"
          icon={Icons.Heart}/>
    <Chip variant="variant-soft" title="" isActivable="{false}" isActive="{false}" action="{bookmarkAction}"
          icon={Icons.Bookmark}/>
</div>
