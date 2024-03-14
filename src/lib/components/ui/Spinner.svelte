<script lang="ts">
    import { ProgressRadial } from '@skeletonlabs/skeleton';

    enum Variant {
        normal= "normal",
        error="error",
        success="success"
    }
    export let percentage:number|undefined = undefined ;
    export let placeholder: string = "Loading..."
    export let variant : Variant = Variant.normal
</script>

<div class="flex flex-col items-center space-y-6">
    {#if variant === Variant.normal }
        <ProgressRadial value={percentage} stroke={100} meter="stroke-primary-500" track="stroke-primary-500/30" strokeLinecap="butt" />
        <span class="text-blue-500 font-semibold text-2xl">{placeholder}</span>
    {:else if variant === Variant.error}
        <ProgressRadial value={percentage} stroke={100} meter="stroke-error-500" track="stroke-primary-500/30" strokeLinecap="butt" />
        <span class="text-red-500 font-semibold text-2xl">{placeholder}</span>
    {:else if variant === Variant.success}
        <ProgressRadial value={percentage} stroke={100} meter="stroke-success-500" track="stroke-primary-500/30" strokeLinecap="butt" />
        <span class="text-green-500 font-semibold text-2xl">{placeholder}</span>

    {/if}
</div>
