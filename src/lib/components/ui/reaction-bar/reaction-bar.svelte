<script lang="ts">
    import {Icons} from '$lib/components/ui/icon'
    import {Chip} from '$lib/components/ui/keyword-chip'
    import type {ModalSettings} from "@skeletonlabs/skeleton";
    import { getModalStore } from '@skeletonlabs/skeleton';
    import recipeService from "$lib/api/RecipeService";
    const modalStore = getModalStore();
    export let justify = 'justify-start'
    export let recipeId = ''
    export let likeAction = () => {
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
    <Chip variant="variant-soft" title="" isActivable="{true}" isActive="{false}" action="{likeAction}"
          icon={Icons.Heart}/>
    <Chip variant="variant-soft" title="" isActivable="{true}" isActive="{false}" action="{bookmarkAction}"
          icon={Icons.Bookmark}/>
</div>
