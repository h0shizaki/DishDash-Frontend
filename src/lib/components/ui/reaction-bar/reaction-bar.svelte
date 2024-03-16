<script lang="ts">
    import {Icons} from '$lib/components/ui/icon'
    import {Chip} from '$lib/components/ui/keyword-chip'
    import type {ModalSettings} from "@skeletonlabs/skeleton";
    import { getModalStore } from '@skeletonlabs/skeleton';
    import recipeService from "$lib/api/RecipeService";
    import {authstore} from "$lib/stores/auth";
    const modalStore = getModalStore();
    export let justify = 'justify-start'
    export let recipeId = ''
    const currentUser = authstore.getUser()
    const likedList = currentUser?.interestedRecipe
    console.log(likedList, recipeId)
    const isLiked = likedList?.includes(recipeId)

    export let likeAction = async() => {
        if (!currentUser) return
        currentUser?.interestedRecipe.push(recipeId)
        const updateResult = await authstore.update(currentUser)
        console.log(updateResult)
        // authstore.update(currentUser)

    }

    export let bookmarkAction = () => {
        
        const modal: ModalSettings = {
            title: 'Mark this recipe',
            body: '',
            type: 'component',
            component: 'modalBookmarkForm',
            response: async r => {
                console.log(r)
                const res = await recipeService.recipe('65d5e4918598535be43ec3dd')
                console.log(res)
            }
        };
        modalStore.trigger(modal);
    }

</script>

<div class="flex flex-row gap-2 {justify}">
    <Chip variant="variant-soft" title="" isActivable="{true}" isActive="{isLiked}" action="{likeAction}"
          icon={Icons.Heart}/>
    <Chip variant="variant-soft" title="" isActivable="{true}" isActive="{false}" action="{bookmarkAction}"
          icon={Icons.Bookmark}/>
</div>
