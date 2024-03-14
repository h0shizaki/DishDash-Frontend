<script lang="ts">
    import {Icons} from '$lib/components/ui/icon'

    let elemCarousel: HTMLDivElement;
    // const unsplashIds = ['vjUokUWbFOs', '1aJuPtQJX_I', 'Jp6O3FFRdEI', 'I3C_eojFVQY', 's0fXOuyTH1M', 'z_X0PxmBuIQ'];
    export let imageUrls: string[] = []

    function carouselLeft(): void {
        const x =
            Math.floor(elemCarousel.scrollLeft) === 0
                ? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
                : elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
        elemCarousel.scroll(x, 0);
    }

    function carouselRight(): void {
        const x =
            Math.ceil(elemCarousel.scrollLeft) + 1 >= elemCarousel.scrollWidth - elemCarousel.clientWidth
                ? 0 // loop
                : elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
        elemCarousel.scroll(x, 0);
        // console.log(elemCarousel.scrollLeft, elemCarousel.scrollWidth - elemCarousel.clientWidth)
    }

</script>


<div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center w-auto">
    <!-- Button: Left -->
    {#if imageUrls.length > 1}
        <button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
            <Icons.ChevronLeft/>
        </button>
    {/if}
    <!-- Full Images -->
    <div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto scrollbar-hide">
        {#each imageUrls as imgUrl}
            <img
                    class="snap-center w-[1024px] rounded-container-token"
                    src="{imgUrl}"
                    alt={imgUrl}
                    loading="lazy"
            />
        {/each}
    </div>
    <!-- Button: Right -->
    {#if imageUrls.length > 1}
        <button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
            <Icons.ChevronRight/>
        </button>
    {/if}
</div>

<style>
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }

    /* For IE, Edge and Firefox */
    .scrollbar-hide {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
</style>