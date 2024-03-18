<script lang="ts">
    import {Icons} from '$lib/components/ui/icon'
    import {popup} from '@skeletonlabs/skeleton';
    import type {PopupSettings} from '@skeletonlabs/skeleton';
    import type {RecipeRecord} from "$lib/models/Bookmark";
    import {v4 as uuidv4} from 'uuid';

    export let record: RecipeRecord
    $: rating = record.rating
    let myuuid = uuidv4();

    const popupHover: PopupSettings = {
        event: 'hover',
        target: 'popupHover' + myuuid,
        placement: 'top'
    };

</script>


<div class="card p-2 variant-glass-secondary" data-popup="popupHover{myuuid}">
    <div class="flex flex-row">

        {#each {length: rating} as _}
            <div class="block">
                <Icons.Star fill="#FFA500" strokeWidth="{0}"></Icons.Star>
            </div>
        {/each}
    </div>
    <div class="arrow variant-filled-secondary"/>
</div>


{#if rating === 5}
    <button class="w-auto variant-glass-surface p-0.5 rounded-full" use:popup={popupHover}>
        <Icons.Crown fill="#FFA500 " size="{32}" strokeWidth="{1}"/>
    </button>
{:else if rating === 4}
    <button class="w-auto variant-glass-surface p-0.5 rounded-full" use:popup={popupHover}>
        <Icons.Crown fill="#808080 " size="{32}" strokeWidth="{1}"/>
    </button>
{:else if rating === 3}
    <button class="w-auto variant-glass-surface p-0.5 rounded-full" use:popup={popupHover}>
        <Icons.Crown fill="#808080 " size="{32}" strokeWidth="{1}"/>
    </button>
{:else if rating === 2}
    <button class="w-auto variant-glass-surface p-0.5 rounded-full" use:popup={popupHover}>
        <Icons.Crown fill="#D2691E " size="{32}" strokeWidth="{1}"/>
    </button>
{:else}
    <button class="w-auto variant-glass-surface p-0.5 rounded-full" use:popup={popupHover}>
        <Icons.Crown fill="#D2691E " size="{32}" strokeWidth="{1}"/>
    </button>
{/if}