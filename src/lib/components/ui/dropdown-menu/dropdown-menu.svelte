<script lang="ts">
    import { popup } from '@skeletonlabs/skeleton';
    import type { PopupSettings } from '@skeletonlabs/skeleton';


    const popupFeatured: PopupSettings = {
        // Represents the type of event that opens/closed the popup
        event: 'click',
        // Matches the data-popup value on your popup element
        target: 'popupFeatured',
        // Defines which side of your trigger the popup will appear
        placement: 'bottom',
    };

</script>

<div class="card p-4 max-w-sm" data-popup="popupCloseQuery">

    <button class="btn variant-filled" use:popup={popupFeatured}>Show Popup</button>

    <div class="card p-4 w-72 shadow-xl" data-popup="popupFeatured">
        <div><p>Demo Content</p></div>
        <div class="arrow bg-surface-100-800-token" />
    </div>

</div>