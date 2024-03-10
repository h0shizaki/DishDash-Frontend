<script lang="ts">
    import { popup } from '@skeletonlabs/skeleton';
    import type { PopupSettings } from '@skeletonlabs/skeleton';
    import {Icons} from '$lib/components/ui/icon'

    export let popupClick: PopupSettings = {
        event: 'click',
        target: 'popupClick',
        placement: 'bottom',
        closeQuery: '#will-close'
    };

    export let btnClass = ''
    export let text = ''

</script>


<button class="{btnClass}" use:popup={popupClick}>
    {#if text}
        {text}
    {:else}
        <Icons.EllipsisVertical></Icons.EllipsisVertical>
    {/if}
</button>

<div class="card p-4 max-w-sm z-10" data-popup="popupClick">
    <div class="grid grid-cols-1 gap-2">
        <slot />
        <button id="will-close" class="btn variant-ghost">Close</button>
    </div>
    <div class="arrow bg-surface-100-800-token" />
</div>

