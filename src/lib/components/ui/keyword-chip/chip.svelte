<script lang="ts">
    import {Icons} from "$lib/components/ui/icon";

    export let isActivable = false;
    export let variant = 'variant-filled'
    export let title: string = '';
    export let isActive = false
    export let action: () => void = () => {};
    export let icon: Icons|null = null ;

    $: chipStateClass = isActive && isActivable ? 'variant-filled-tertiary' : variant
</script>
<span class="chip {chipStateClass}" on:click={ () => {action(); isActive = !isActive}}>{#if icon} <svelte:component this={icon} /> {/if}{title}</span>
