<script lang="ts">
    import Chip from './chip.svelte'

    export let keywords: Array<string> = []


</script>
<div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 my-2">

    {#if keywords.length > 0}
        {#each keywords as keyword}
            <a data-sveltekit-reload href="/home?query={keyword}">
                <Chip title="{keyword}" variant="variant-ghost-tertiary"/>
            </a>
        {/each}
    {/if}

    <!--{#if keywords.length > 3}-->
    <!--    {#each keywords.slice(0, 3) as keyword}-->
    <!--        <Chip title="{keyword}" variant="variant-ghost-tertiary"/>-->
    <!--    {/each}-->
    <!--    <b>...</b>-->
    <!--{/if}-->
</div>
