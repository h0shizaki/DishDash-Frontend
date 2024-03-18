<script lang="ts">
    import {Avatar} from "@skeletonlabs/skeleton";

    export let message: string;
    export let name: string;
    export let isFromUser = true
</script>


{#if isFromUser}
    <div class="grid grid-cols-[1fr_auto] gap-2 my-2">
        <div class="card p-4 rounded-tr-none space-y-2 variant-ghost-tertiary ">
            <header class="flex justify-between items-center">
                <p class="font-bold">{name}</p>
            </header>
            <p>{message}</p>
        </div>
        <Avatar initials="{name.slice(0,2)}" width="w-12"/>
    </div>
{:else}
    <div class="grid grid-cols-[auto_1fr] gap-2 my-2">
        <Avatar initials="{name.slice(0,2)}" width="w-12"/>
        <div class="card p-4 variant-soft rounded-tl-none space-y-2">
            <header class="flex justify-between items-center">
                <p class="font-bold">{name}</p>
            </header>
            <p>{message}</p>
        </div>
    </div>
{/if}
